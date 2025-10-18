import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная' },
    { id: 'schedule', label: 'Репертуар' },
    { id: 'troupe', label: 'Руководитель' },
    { id: 'news', label: 'Расписание' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const performances = [
    {
      title: 'Вечернее турне',
      date: 'Репетиции по четвергам',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/db589e87-6f6f-43c9-801b-e394eb1cad13.jpg',
    },
    {
      title: 'Безымянная карточка',
      date: 'Репетиции по четвергам',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/a38c9992-a815-4090-914c-966def416b5c.jpg',
    },
    {
      title: 'Тайна "Кафе Ромашка"',
      date: 'Репетиции по четвергам',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/db589e87-6f6f-43c9-801b-e394eb1cad13.jpg',
    },
    {
      title: 'КраШная шапочка',
      date: 'Репетиции по четвергам',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/a38c9992-a815-4090-914c-966def416b5c.jpg',
    },
    {
      title: 'Городские истории',
      date: 'Репетиции по четвергам',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/db589e87-6f6f-43c9-801b-e394eb1cad13.jpg',
    },
    {
      title: 'Делегация радости',
      date: 'Репетиции по четвергам',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/a38c9992-a815-4090-914c-966def416b5c.jpg',
    },
    {
      title: 'Баба Яга не против',
      date: 'Репетиции по четвергам',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/db589e87-6f6f-43c9-801b-e394eb1cad13.jpg',
    },
    {
      title: 'Любовь и проводы',
      date: 'Репетиции по четвергам',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/a38c9992-a815-4090-914c-966def416b5c.jpg',
    },
  ];

  const troupe = [
    {
      name: 'Светлана Кузикова',
      role: 'Основатель и режиссёр театра',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/2edf09ae-deaa-4454-9bb4-1fae41b9ef61.jpg',
      bio: 'Психолог, арт-терапевт, театральный педагог, автор курсов и книг',
    },
  ];

  const aboutText = [
    'Театр «КОМИЛЬФО» (бывший «Театр для своих») - независимый самодеятельный театральный коллектив, созданный из выпускников курсов и программ Центра психологии и творчества Kuzikova school.',
    '"КОМИЛЬФО" это арт-пространство для исцеления души средствами театрального искусства и решения психологических задач личностного роста.',
    'Это площадка для раскрытия талантов и творческой реализации. Это место - где участники начинают верить в себя, освобождаются от зажатости и неуверенности, учатся смело выступать перед аудиторией.',
    'Театр «Комильфо» даёт возможность творчески развиваться, приобретать навыки актерского мастерства, ораторского искусства, а также решить психологические задачи по повышению самооценки и уверенности в себе, избавиться от страхов в общении и публичных выступлениях, развивать эмоциональный интеллект.',
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
                  Творим с любовью, играем с душой
                </p>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => setActiveSection('schedule')}
                >
                  Посмотреть репертуар
                </Button>
              </div>
            </section>

            <section className="py-20 bg-background">
              <div className="container mx-auto px-4 max-w-4xl">
                <h3 className="text-4xl font-bold text-center mb-12">О театре</h3>
                <div className="space-y-6 text-lg leading-relaxed">
                  {aboutText.map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 bg-card">
              <div className="container mx-auto px-4">
                <h3 className="text-4xl font-bold text-center mb-12">Репертуар театра</h3>
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
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Calendar" size={16} className="text-accent" />
                          <span>{perf.date}</span>
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
              <h2 className="text-5xl font-bold text-center mb-16">Репертуар</h2>
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
                        <div className="flex items-center gap-3 mb-6">
                          <Icon name="Calendar" size={20} className="text-accent" />
                          <span className="text-lg">{perf.date}</span>
                        </div>
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                          Узнать подробнее
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
              <h2 className="text-5xl font-bold text-center mb-16">Руководитель</h2>
              <div className="max-w-2xl mx-auto">
                {troupe.map((actor, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden bg-card border-border"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 aspect-square overflow-hidden">
                        <img
                          src={actor.image}
                          alt={actor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="md:w-2/3 p-8">
                        <h3 className="text-3xl font-bold mb-3 text-accent">{actor.name}</h3>
                        <p className="text-lg text-muted-foreground mb-4">{actor.role}</p>
                        <p className="text-base leading-relaxed">{actor.bio}</p>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-16">Расписание</h2>
              <div className="max-w-3xl mx-auto">
                <Card className="p-8 bg-card border-border">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Calendar" size={24} className="text-accent mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-accent">Занятия и репетиции</h3>
                        <p className="text-lg mb-2">Один раз в неделю по четвергам</p>
                      </div>
                    </div>
                  </div>
                </Card>
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
                        <p className="text-lg">г. Краснодар, улица Горького, 104, офис 26</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-accent mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-accent">Телефон</h3>
                        <p className="text-lg">8-918-311-17-12</p>
                        <p className="text-sm text-muted-foreground">Светлана Алексеевна Кузикова</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="MessageCircle" size={24} className="text-accent mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-accent">WhatsApp</h3>
                        <a href="https://wa.me/message/FKFHPRMEDBRYP1" target="_blank" rel="noopener noreferrer" className="text-lg text-accent hover:underline">
                          Написать в WhatsApp
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Calendar" size={24} className="text-accent mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-accent">Расписание</h3>
                        <p className="text-lg">Занятия по четвергам</p>
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