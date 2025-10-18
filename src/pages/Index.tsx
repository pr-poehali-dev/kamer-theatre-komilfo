import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная' },
    { id: 'schedule', label: 'Афиша' },
    { id: 'troupe', label: 'Труппа' },
    { id: 'news', label: 'Новости' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const performances = [
    {
      title: 'Вишнёвый сад',
      author: 'А.П. Чехов',
      date: '15 ноября, 19:00',
      duration: '2 часа 30 минут',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/db589e87-6f6f-43c9-801b-e394eb1cad13.jpg',
    },
    {
      title: 'Три сестры',
      author: 'А.П. Чехов',
      date: '22 ноября, 19:00',
      duration: '2 часа 45 минут',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/a38c9992-a815-4090-914c-966def416b5c.jpg',
    },
    {
      title: 'Гроза',
      author: 'А.Н. Островский',
      date: '29 ноября, 19:00',
      duration: '2 часа 15 минут',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/db589e87-6f6f-43c9-801b-e394eb1cad13.jpg',
    },
  ];

  const troupe = [
    {
      name: 'Анна Петрова',
      role: 'Заслуженная артистка',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/2edf09ae-deaa-4454-9bb4-1fae41b9ef61.jpg',
      bio: 'Более 20 лет на театральной сцене',
    },
    {
      name: 'Михаил Иванов',
      role: 'Народный артист',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/2edf09ae-deaa-4454-9bb4-1fae41b9ef61.jpg',
      bio: 'Главные роли в постановках классического репертуара',
    },
    {
      name: 'Елена Смирнова',
      role: 'Актриса театра',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/2edf09ae-deaa-4454-9bb4-1fae41b9ef61.jpg',
      bio: 'Лауреат премии "Золотая маска"',
    },
  ];

  const news = [
    {
      title: 'Премьера спектакля "Вишнёвый сад"',
      date: '1 ноября 2024',
      description: 'Приглашаем на премьерный показ новой постановки классического произведения А.П. Чехова.',
    },
    {
      title: 'Гастроли в Санкт-Петербурге',
      date: '15 октября 2024',
      description: 'Наш театр с успехом выступил на сцене Александринского театра.',
    },
    {
      title: 'Награда на фестивале',
      date: '5 октября 2024',
      description: 'Спектакль "Три сестры" получил Гран-при на международном театральном фестивале.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-accent">Комильфо</h1>
            <div className="flex gap-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background z-0"></div>
              <div className="container mx-auto px-4 text-center z-10">
                <h2 className="text-6xl md:text-8xl font-bold mb-6 animate-scale-in">
                  Камерный театр Комильфо
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Классические постановки в современной интерпретации
                </p>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => setActiveSection('schedule')}
                >
                  Посмотреть афишу
                </Button>
              </div>
            </section>

            <section className="py-20 bg-card">
              <div className="container mx-auto px-4">
                <h3 className="text-4xl font-bold text-center mb-12">Ближайшие спектакли</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {performances.map((perf, idx) => (
                    <Card
                      key={idx}
                      className="overflow-hidden hover:scale-105 transition-transform cursor-pointer bg-muted border-border"
                    >
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={perf.image}
                          alt={perf.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-2xl font-bold mb-2 text-accent">{perf.title}</h4>
                        <p className="text-muted-foreground mb-4">{perf.author}</p>
                        <div className="flex items-center gap-2 text-sm mb-2">
                          <Icon name="Calendar" size={16} className="text-accent" />
                          <span>{perf.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Clock" size={16} className="text-accent" />
                          <span>{perf.duration}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'schedule' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-16">Афиша</h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {performances.map((perf, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden hover:border-accent transition-colors bg-card border-border"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 aspect-[4/5] overflow-hidden">
                        <img
                          src={perf.image}
                          alt={perf.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="md:w-2/3 p-8">
                        <h3 className="text-3xl font-bold mb-3 text-accent">{perf.title}</h3>
                        <p className="text-lg text-muted-foreground mb-6">{perf.author}</p>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3">
                            <Icon name="Calendar" size={20} className="text-accent" />
                            <span className="text-lg">{perf.date}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Icon name="Clock" size={20} className="text-accent" />
                            <span className="text-lg">{perf.duration}</span>
                          </div>
                        </div>
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                          Купить билет
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'troupe' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-16">Труппа</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {troupe.map((actor, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden hover:scale-105 transition-transform bg-card border-border"
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={actor.image}
                        alt={actor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-2xl font-bold mb-2 text-accent">{actor.name}</h3>
                      <p className="text-muted-foreground mb-4">{actor.role}</p>
                      <p className="text-sm">{actor.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-16">Новости</h2>
              <div className="max-w-3xl mx-auto space-y-8">
                {news.map((item, idx) => (
                  <Card key={idx} className="p-8 bg-card border-border hover:border-accent transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                      <Icon name="Newspaper" size={24} className="text-accent mt-1" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-accent">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.date}</p>
                        <p className="text-lg">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-16">Контакты</h2>
              <div className="max-w-2xl mx-auto">
                <Card className="p-8 bg-card border-border">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={24} className="text-accent mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-accent">Адрес</h3>
                        <p className="text-lg">г. Москва, ул. Театральная, д. 15</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-accent mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-accent">Телефон</h3>
                        <p className="text-lg">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={24} className="text-accent mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-accent">Email</h3>
                        <p className="text-lg">info@comilfo-theatre.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Clock" size={24} className="text-accent mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-accent">Касса</h3>
                        <p className="text-lg">Ежедневно с 10:00 до 20:00</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-card border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-accent">Камерный театр Комильфо</h3>
          <p className="text-muted-foreground mb-6">Искусство, которое трогает души</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            © 2024 Камерный театр Комильфо. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;