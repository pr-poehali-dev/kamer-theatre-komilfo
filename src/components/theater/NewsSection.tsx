import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { type News } from './data';

const API_URL = 'https://functions.poehali.dev/94d4327a-7657-4e29-9efe-0d31e786f968';
const ADMIN_KEY = 'theatre_admin_auth';

export const NewsSection = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<News>>({
    title: '',
    content: '',
    image: '',
    tags: [],
  });
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  };

  const PREVIEW_LENGTH = 200;

  useEffect(() => {
    const saved = sessionStorage.getItem(ADMIN_KEY);
    if (saved === '1') setIsAdmin(true);
  }, []);

  const visibleNews = news.filter(item => item.isVisible);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    const res = await fetch(API_URL);
    const data = await res.json();
    setNews(data.news || []);
    setLoading(false);
  };

  const adminHeaders = () => {
    const pwd = sessionStorage.getItem(ADMIN_KEY + '_pwd') || '';
    return { 'Content-Type': 'application/json', 'X-Admin-Password': pwd };
  };

  const handleLogin = async () => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Password': passwordInput },
      body: JSON.stringify({ title: '_ping', content: '_ping', tags: [] }),
    });
    if (res.status !== 403) {
      sessionStorage.setItem(ADMIN_KEY, '1');
      sessionStorage.setItem(ADMIN_KEY + '_pwd', passwordInput);
      setIsAdmin(true);
      setShowLogin(false);
      setLoginError(false);
      setPasswordInput('');
      await fetchNews();
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_KEY);
    sessionStorage.removeItem(ADMIN_KEY + '_pwd');
    setIsAdmin(false);
  };

  const handleToggleVisibility = async (id: string) => {
    await fetch(`${API_URL}?action=toggle&id=${id}`, { method: 'PUT', headers: adminHeaders() });
    setNews(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isVisible: !item.isVisible } : item
      )
    );
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Вы уверены, что хотите удалить эту новость?')) return;
    await fetch(`${API_URL}?id=${id}`, { method: 'DELETE', headers: adminHeaders() });
    setNews(prev => prev.filter(item => item.id !== id));
  };

  const handleEdit = (item: News) => {
    setEditingId(item.id);
    setFormData(item);
    setImagePreview(item.image || '');
  };

  const uploadImageIfNeeded = async (): Promise<string> => {
    if (!imagePreview.startsWith('data:')) {
      return imagePreview || formData.image || '';
    }
    const res = await fetch(`${API_URL}?action=upload_image`, {
      method: 'POST',
      headers: adminHeaders(),
      body: JSON.stringify({ image: imagePreview }),
    });
    const data = await res.json();
    return data.url || '';
  };

  const handleSave = async () => {
    setSaving(true);
    const finalImage = await uploadImageIfNeeded();

    if (editingId) {
      await fetch(`${API_URL}?id=${editingId}`, {
        method: 'PUT',
        headers: adminHeaders(),
        body: JSON.stringify({ ...formData, image: finalImage }),
      });
      setNews(prev =>
        prev.map(item =>
          item.id === editingId ? { ...item, ...formData, image: finalImage } as News : item
        )
      );
      setEditingId(null);
    } else if (isAdding) {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: adminHeaders(),
        body: JSON.stringify({ ...formData, image: finalImage }),
      });
      const data = await res.json();
      const newItem: News = {
        id: data.id,
        title: formData.title || '',
        date: data.date,
        content: formData.content || '',
        image: finalImage,
        tags: formData.tags || [],
        isVisible: true,
      };
      setNews(prev => [newItem, ...prev]);
      setIsAdding(false);
    }

    setFormData({ title: '', content: '', image: '', tags: [] });
    setImagePreview('');
    setSaving(false);
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({ title: '', content: '', image: '', tags: [] });
    setImagePreview('');
  };

  const handleAddNew = () => {
    setIsAdding(true);
    setFormData({ title: '', content: '', image: '', tags: [] });
    setImagePreview('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview('');
    setFormData({ ...formData, image: '' });
  };

  const renderForm = (title: string) => (
    <Card className="mb-6 border-primary/30">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Заголовок</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-md bg-background"
              placeholder="Введите заголовок новости"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Содержание</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-md bg-background min-h-[200px]"
              placeholder="Введите текст новости"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Изображение</label>
            {imagePreview ? (
              <div className="relative">
                <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover rounded-md" />
                <Button
                  type="button"
                  size="icon"
                  variant="destructive"
                  className="absolute top-2 right-2"
                  onClick={handleRemoveImage}
                >
                  <Icon name="X" size={16} />
                </Button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-border rounded-md p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Icon name="Upload" size={32} className="mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Нажмите для загрузки изображения</p>
                </label>
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Теги (через запятую)</label>
            <input
              type="text"
              value={formData.tags?.join(', ')}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
              className="w-full px-3 py-2 border border-border rounded-md bg-background"
              placeholder="тег1, тег2, тег3"
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={handleSave} disabled={saving} className="bg-primary hover:bg-primary/90">
              {saving ? 'Сохранение...' : 'Сохранить'}
            </Button>
            <Button onClick={handleCancel} variant="outline" disabled={saving}>
              Отмена
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Новости театра</h2>
          <div className="flex gap-2">
            {isAdmin ? (
              <>
                <Button onClick={handleAddNew} className="bg-primary hover:bg-primary/90">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Добавить новость
                </Button>
                <Button variant="ghost" size="icon" onClick={handleLogout} title="Выйти">
                  <Icon name="LogOut" size={18} />
                </Button>
              </>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setShowLogin(true)} title="Войти как администратор">
                <Icon name="Lock" size={18} className="text-muted-foreground" />
              </Button>
            )}
          </div>
        </div>

        {showLogin && (
          <Card className="mb-6 border-primary/30">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Вход для администратора</h3>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => { setPasswordInput(e.target.value); setLoginError(false); }}
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                  className="flex-1 px-3 py-2 border border-border rounded-md bg-background"
                  placeholder="Введите пароль"
                  autoFocus
                />
                <Button onClick={handleLogin} className="bg-primary hover:bg-primary/90">Войти</Button>
                <Button variant="outline" onClick={() => { setShowLogin(false); setPasswordInput(''); setLoginError(false); }}>Отмена</Button>
              </div>
              {loginError && <p className="text-destructive text-sm mt-2">Неверный пароль</p>}
            </CardContent>
          </Card>
        )}

        {isAdding && renderForm('Новая новость')}

        {loading ? (
          <div className="text-center py-12 text-muted-foreground">
            <Icon name="Loader" size={32} className="mx-auto mb-3 animate-spin" />
            <p>Загрузка новостей...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {visibleNews.map((item) => (
              <Card key={item.id} className="bg-card border-primary/20 shadow-lg animate-fade-in">
                {editingId === item.id ? (
                  <CardContent className="p-6">
                    {renderForm('Редактирование новости')}
                  </CardContent>
                ) : (
                  <CardContent className="p-8 md:p-12">
                    {item.image && (
                      <div className="mb-6 -mx-8 md:-mx-12 -mt-8 md:-mt-12">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto max-h-96 object-contain bg-muted/20"
                        />
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Icon name="Newspaper" size={32} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {new Date(item.date).toLocaleDateString('ru-RU', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>
                      {isAdmin && (
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleEdit(item)}
                          title="Редактировать"
                        >
                          <Icon name="Pencil" size={18} />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleToggleVisibility(item.id)}
                          title={item.isVisible ? 'Скрыть' : 'Показать'}
                        >
                          <Icon name={item.isVisible ? 'EyeOff' : 'Eye'} size={18} />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleDelete(item.id)}
                          title="Удалить"
                          className="text-destructive hover:text-destructive"
                        >
                          <Icon name="Trash2" size={18} />
                        </Button>
                      </div>
                    )}
                    </div>

                    <div className="text-base leading-relaxed whitespace-pre-wrap">
                      {expandedIds.has(item.id) || item.content.length <= PREVIEW_LENGTH
                        ? item.content
                        : item.content.slice(0, PREVIEW_LENGTH).trimEnd() + '...'}
                    </div>
                    {item.content.length > PREVIEW_LENGTH && (
                      <Button
                        variant="ghost"
                        className="mt-2 px-0 text-primary hover:text-primary/80 hover:bg-transparent"
                        onClick={() => toggleExpand(item.id)}
                      >
                        {expandedIds.has(item.id) ? 'Свернуть' : 'Читать далее'}
                        <Icon name={expandedIds.has(item.id) ? 'ChevronUp' : 'ChevronDown'} size={16} className="ml-1" />
                      </Button>
                    )}

                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            ))}

            {visibleNews.length === 0 && !isAdding && (
              <Card className="bg-muted/30">
                <CardContent className="p-12 text-center">
                  <Icon name="Newspaper" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg">Пока нет новостей</p>
                  <Button onClick={handleAddNew} className="mt-4 bg-primary hover:bg-primary/90">
                    Добавить первую новость
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {isAdmin && news.filter(item => !item.isVisible).length > 0 && (
          <div className="mt-8 p-4 bg-muted/30 rounded-lg">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Icon name="EyeOff" size={20} />
              Скрытые новости ({news.filter(item => !item.isVisible).length})
            </h3>
            <div className="space-y-2">
              {news
                .filter(item => !item.isVisible)
                .map(item => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-background rounded-md"
                  >
                    <span className="text-sm">{item.title}</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleToggleVisibility(item.id)}
                      >
                        <Icon name="Eye" size={16} className="mr-1" />
                        Показать
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};