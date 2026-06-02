CREATE TABLE t_p7493964_kamer_theatre_komilf.news (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  image TEXT,
  tags TEXT[] DEFAULT '{}',
  is_visible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO t_p7493964_kamer_theatre_komilf.news (title, content, image, tags, is_visible, created_at) VALUES (
  'Театр «Комильфо» стал победителем грантового конкурса!',
  E'Друзья, у нас радостная новость! 🎉\n\nНаш театр стал победителем грантового конкурса Президентского Фонда Культурных Инициатив!\n\nМы выиграли грант на постановку нового спектакля, который уже совсем скоро увидят наши зрители.\n\nОгромная благодарность всем, кто верит в нас и поддерживает наше творчество! Это победа для всей нашей театральной семьи.',
  'https://cdn.poehali.dev/files/20250520_094037.jpg',
  ARRAY['ФондКультурныхИнициатив', 'ЯПобедительПФКИ', 'Комильфо', 'театр'],
  TRUE,
  '2026-01-13'
);