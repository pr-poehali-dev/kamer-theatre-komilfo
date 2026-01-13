import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { newsItems, type News } from './data';

export const NewsSection = () => {
  const [news, setNews] = useState<News[]>(newsItems);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<News>>({
    title: '',
    content: '',
    image: '',
    tags: [],
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const visibleNews = news.filter(item => item.isVisible);

  const handleToggleVisibility = (id: string) => {
    setNews(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isVisible: !item.isVisible } : item
      )
    );
  };

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить эту новость?')) {
      setNews(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleEdit = (item: News) => {
    setEditingId(item.id);
    setFormData(item);
    setImagePreview(item.image || '');
    setImageFile(null);
  };

  const handleSave = () => {
    const finalImage = imagePreview || formData.image || '';
    
    if (editingId) {
      setNews(prev =>
        prev.map(item =>
          item.id === editingId ? { ...item, ...formData, image: finalImage } as News : item
        )
      );
      setEditingId(null);
    } else if (isAdding) {
      const newItem: News = {
        id: Date.now().toString(),
        title: formData.title || '',
        date: new Date().toISOString().split('T')[0],
        content: formData.content || '',
        image: finalImage,
        tags: formData.tags || [],
        isVisible: true,
      };
      setNews(prev => [newItem, ...prev]);
      setIsAdding(false);
    }
    setFormData({ title: '', content: '', image: '', tags: [] });
    setImageFile(null);
    setImagePreview('');
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({ title: '', content: '', image: '', tags: [] });
    setImageFile(null);
    setImagePreview('');
  };

  const handleAddNew = () => {
    setIsAdding(true);
    setFormData({ title: '', content: '', image: '', tags: [] });
    setImageFile(null);
    setImagePreview('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview('');
    setFormData({ ...formData, image: '' });
  };

  return (
    <div className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Новости театра</h2>
          <Button onClick={handleAddNew} className="bg-primary hover:bg-primary/90">
            <Icon name="Plus" size={20} className="mr-2" />
            Добавить новость
          </Button>
        </div>

        {isAdding && (
          <Card className="mb-6 border-primary/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Новая новость</h3>
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
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(t => t.trim()) })}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    placeholder="тег1, тег2, тег3"
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                    Сохранить
                  </Button>
                  <Button onClick={handleCancel} variant="outline">
                    Отмена
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-6">
          {visibleNews.map((item) => (
            <Card key={item.id} className="bg-card border-primary/20 shadow-lg animate-fade-in">
              {editingId === item.id ? (
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Редактирование новости</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Заголовок</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Содержание</label>
                      <textarea
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background min-h-[200px]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Теги (через запятую)</label>
                      <input
                        type="text"
                        value={formData.tags?.join(', ')}
                        onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(t => t.trim()) })}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                        Сохранить
                      </Button>
                      <Button onClick={handleCancel} variant="outline">
                        Отмена
                      </Button>
                    </div>
                  </div>
                </CardContent>
              ) : (
                <CardContent className="p-8 md:p-12">
                  {item.image && (
                    <div className="mb-6 -mx-8 md:-mx-12 -mt-8 md:-mt-12">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover"
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
                  </div>

                  <div className="space-y-4 text-base leading-relaxed whitespace-pre-wrap">
                    {item.content}
                  </div>

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

        {news.filter(item => !item.isVisible).length > 0 && (
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