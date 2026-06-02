"""
Управление новостями театра «Комильфо»: создание, чтение, редактирование, удаление, загрузка изображений.
"""
import os
import json
import base64
import uuid
import psycopg2
import boto3
from datetime import datetime

SCHEMA = os.environ['MAIN_DB_SCHEMA']
CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
}


def check_auth(event: dict) -> bool:
    headers = event.get('headers') or {}
    password = headers.get('X-Admin-Password') or headers.get('x-admin-password') or ''
    return password == os.environ.get('ADMIN_PASSWORD', '')


def get_conn():
    return psycopg2.connect(os.environ['DATABASE_URL'])


def handler(event: dict, context) -> dict:
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS, 'body': ''}

    method = event.get('httpMethod', 'GET')
    params = event.get('queryStringParameters') or {}
    action = params.get('action', '')

    if method == 'GET':
        return get_news()

    if method in ('POST', 'PUT', 'DELETE'):
        if not check_auth(event):
            return {'statusCode': 403, 'headers': CORS, 'body': json.dumps({'error': 'Forbidden'})}

    if method == 'POST':
        body = json.loads(event.get('body') or '{}')
        if action == 'upload_image':
            return upload_image(body)
        return create_news(body)

    if method == 'PUT':
        body = json.loads(event.get('body') or '{}')
        news_id = params.get('id')
        if action == 'toggle':
            return toggle_visibility(news_id)
        return update_news(news_id, body)

    if method == 'DELETE':
        news_id = params.get('id')
        return delete_news(news_id)

    return {'statusCode': 405, 'headers': CORS, 'body': json.dumps({'error': 'Method not allowed'})}


def get_news():
    conn = get_conn()
    cur = conn.cursor()
    cur.execute(f"""
        SELECT id, title, content, image, tags, is_visible, created_at
        FROM {SCHEMA}.news
        ORDER BY created_at DESC
    """)
    rows = cur.fetchall()
    conn.close()
    news = [
        {
            'id': str(r[0]),
            'title': r[1],
            'content': r[2],
            'image': r[3] or '',
            'tags': r[4] or [],
            'isVisible': r[5],
            'date': r[6].strftime('%Y-%m-%d') if r[6] else '',
        }
        for r in rows
    ]
    return {'statusCode': 200, 'headers': CORS, 'body': json.dumps({'news': news})}


def create_news(body):
    title = body.get('title', '')
    content = body.get('content', '')
    image = body.get('image', '')
    tags = body.get('tags', [])

    conn = get_conn()
    cur = conn.cursor()
    cur.execute(f"""
        INSERT INTO {SCHEMA}.news (title, content, image, tags, is_visible, created_at)
        VALUES (%s, %s, %s, %s, TRUE, NOW())
        RETURNING id, created_at
    """, (title, content, image, tags))
    row = cur.fetchone()
    conn.commit()
    conn.close()

    return {
        'statusCode': 200,
        'headers': CORS,
        'body': json.dumps({
            'id': str(row[0]),
            'date': row[1].strftime('%Y-%m-%d'),
        })
    }


def update_news(news_id, body):
    title = body.get('title', '')
    content = body.get('content', '')
    image = body.get('image', '')
    tags = body.get('tags', [])

    conn = get_conn()
    cur = conn.cursor()
    cur.execute(f"""
        UPDATE {SCHEMA}.news
        SET title=%s, content=%s, image=%s, tags=%s
        WHERE id=%s
    """, (title, content, image, tags, news_id))
    conn.commit()
    conn.close()
    return {'statusCode': 200, 'headers': CORS, 'body': json.dumps({'ok': True})}


def toggle_visibility(news_id):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute(f"""
        UPDATE {SCHEMA}.news
        SET is_visible = NOT is_visible
        WHERE id=%s
        RETURNING is_visible
    """, (news_id,))
    row = cur.fetchone()
    conn.commit()
    conn.close()
    return {'statusCode': 200, 'headers': CORS, 'body': json.dumps({'isVisible': row[0]})}


def delete_news(news_id):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute(f"DELETE FROM {SCHEMA}.news WHERE id=%s", (news_id,))
    conn.commit()
    conn.close()
    return {'statusCode': 200, 'headers': CORS, 'body': json.dumps({'ok': True})}


def upload_image(body):
    data_url = body.get('image', '')
    if ',' not in data_url:
        return {'statusCode': 400, 'headers': CORS, 'body': json.dumps({'error': 'Invalid image'})}

    header, encoded = data_url.split(',', 1)
    ext = 'jpg'
    if 'png' in header:
        ext = 'png'
    elif 'gif' in header:
        ext = 'gif'
    elif 'webp' in header:
        ext = 'webp'

    file_data = base64.b64decode(encoded)
    key = f"news/{uuid.uuid4()}.{ext}"

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
    )
    content_type = f"image/{ext}"
    s3.put_object(Bucket='files', Key=key, Body=file_data, ContentType=content_type)

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"
    return {'statusCode': 200, 'headers': CORS, 'body': json.dumps({'url': cdn_url})}