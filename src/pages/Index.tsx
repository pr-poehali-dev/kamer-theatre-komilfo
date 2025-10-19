import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О театре' },
    { id: 'repertoire', label: 'Репертуар' },
    { id: 'education', label: 'Учебный театр' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'schedule', label: 'Афиша' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const performances = [
    {
      title: 'Вечернее турне',
      description: 'Увлекательное театральное путешествие',
      duration: '1 час 30 мин',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/3d73f4ae-cdee-41e4-b17f-aba7a56c78e0.jpg',
    },
    {
      title: 'Безымянная карточка',
      description: 'История о поиске себя',
      duration: '1 час 20 мин',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/6d4ceee2-11fa-46be-9d9c-bfc981b32b19.jpg',
    },
    {
      title: 'Тайна "Кафе Ромашка"',
      description: 'Детективная комедия с юмором',
      duration: '1 час 45 мин',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/f82ad391-1da9-46c4-a8f4-6554bb5e7d15.jpg',
    },
    {
      title: 'КраШная шапочка',
      description: 'Сказка на новый лад',
      duration: '1 час 15 мин',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/d2eed063-bdee-47a3-9462-d2a928a2c641.jpg',
    },
    {
      title: 'Городские истории',
      description: 'Зарисовки из жизни мегаполиса',
      duration: '1 час 40 мин',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/00dd068e-6899-47f8-9f71-a203c55d58b3.jpg',
    },
    {
      title: 'Делегация радости',
      description: 'Позитивная комедия о дружбе',
      duration: '1 час 30 мин',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/ff425e05-bb76-4034-8224-db504a7a20c5.jpg',
    },
    {
      title: 'Баба Яга не против',
      description: 'Современная интерпретация сказки',
      duration: '1 час 25 мин',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/bf56f932-b49f-4241-afef-f2a7cd681710.jpg',
    },
    {
      title: 'Любовь и проводы',
      description: 'Трогательная история о чувствах',
      duration: '1 час 50 мин',
image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/00de7a63-d62e-49b6-a41c-fbebb119c06b.jpg',
    },
  ];

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/3d73f4ae-cdee-41e4-b17f-aba7a56c78e0.jpg',
      title: 'Вечернее турне',
      description: 'Главная сцена спектакля',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/6d4ceee2-11fa-46be-9d9c-bfc981b32b19.jpg',
      title: 'Безымянная карточка',
      description: 'Эмоциональный момент',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/f82ad391-1da9-46c4-a8f4-6554bb5e7d15.jpg',
      title: 'Тайна "Кафе Ромашка"',
      description: 'Детективная атмосфера',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/d2eed063-bdee-47a3-9462-d2a928a2c641.jpg',
      title: 'КраШная шапочка',
      description: 'Сказочные декорации',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/00dd068e-6899-47f8-9f71-a203c55d58b3.jpg',
      title: 'Городские истории',
      description: 'Современная постановка',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/ff425e05-bb76-4034-8224-db504a7a20c5.jpg',
      title: 'Делегация радости',
      description: 'Яркие моменты спектакля',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/bf56f932-b49f-4241-afef-f2a7cd681710.jpg',
      title: 'Баба Яга не против',
      description: 'Сказка на новый лад',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/00de7a63-d62e-49b6-a41c-fbebb119c06b.jpg',
      title: 'Любовь и проводы',
      description: 'Лирическая сцена',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/e9a89eb0-c604-47e0-946b-c6b64bcde8c1.jpg',
      title: 'За кулисами',
      description: 'Подготовка к спектаклю',
    },
  ];

const scheduleItems = [
    {
      date: '25 октября',
      time: '19:00',
      title: 'Вечернее турне',
      price: '800 ₽',
      available: true,
    },
    {
      date: '26 октября',
      time: '18:00',
      title: 'КраШная шапочка',
      price: '600 ₽',
      available: true,
    },
    {
      date: '27 октября',
      time: '19:30',
      title: 'Тайна "Кафе Ромашка"',
      price: '900 ₽',
      available: true,
    },
    {
      date: '1 ноября',
      time: '17:00',
      title: 'Безымянная карточка',
      price: '700 ₽',
      available: false,
    },
    {
      date: '3 ноября',
      time: '19:00',
      title: 'Городские истории',
      price: '850 ₽',
      available: true,
    },
  ];





  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
<Icon name="Theater" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Комильфо</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
className={`transition-colors ${
                    activeSection === item.id
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
<div className="flex items-center gap-3">
              <Button 
                className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setActiveSection('schedule')}
              >
                Купить билет
              </Button>
              <Button className="md:hidden" variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <div
              className="relative h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/3d73f4ae-cdee-41e4-b17f-aba7a56c78e0.jpg')`,
              }}
            >
              <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
                  Камерный театр<br />Комильфо
                </h2>
<p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                  Искусство изысканных постановок
                </p>
                <div className="flex gap-4">
<Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => setActiveSection('schedule')}
                  >
                    Афиша
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-background"
                    onClick={() => setActiveSection('about')}
                  >
                    О театре
                  </Button>
                </div>
              </div>
            </div>

            <div className="py-20 bg-muted/30">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="text-center">
<Icon name="Calendar" size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Регулярные показы</h3>
                    <p className="text-muted-foreground">
                      Спектакли каждую неделю
                    </p>
                  </div>
                  <div className="text-center">
<Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Профессиональная труппа</h3>
                    <p className="text-muted-foreground">
                      Заслуженные артисты России
                    </p>
                  </div>
                  <div className="text-center">
<Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Высокое качество</h3>
                    <p className="text-muted-foreground">
                      Камерная атмосфера и внимание к деталям
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-5xl font-bold text-center mb-12">О театре</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
Камерный театр "Комильфо" — это место, где искусство встречается с изысканностью.
                  Основанный в 2010 году, наш театр создан для тех, кто ценит качественные 
                  постановки в уютной камерной атмосфере.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
Название "Комильфо" (от фр. comme il faut — "как следует") отражает нашу 
                  философию: каждый спектакль — это произведение искусства, созданное 
                  с максимальным вниманием к деталям.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
Наш зал на 80 мест создаёт особую камерную атмосферу, где каждый зритель 
                  становится частью театрального действа. Мы предлагаем уникальные спектакли, 
                  которые сочетают традиции с современным взглядом на театральное искусство.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
<Icon name="Trophy" size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Наши достижения</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Лауреаты премии "Золотая маска" 2018</li>
                        <li>• Более 200 постановок</li>
                        <li>• 15 лет на сцене</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
<Icon name="Heart" size={32} className="text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Наши ценности</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Уважение к классике</li>
                        <li>• Внимание к зрителю</li>
                        <li>• Профессионализм труппы</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'repertoire' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-8">Репертуар</h2>
              <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
                Наши уникальные постановки для всей семьи
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {performances.map((perf, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden hover:shadow-xl transition-all cursor-pointer bg-card border-border group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={perf.image}
                        alt={perf.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">{perf.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-2">{perf.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{perf.duration}</span>
                      </div>
                      <Button
                        className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground"
                        onClick={() => setActiveSection('schedule')}
                      >
                        Купить билет
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
)}

        {activeSection === 'education' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-5xl font-bold text-center mb-8">Учебный театр</h2>
              <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
                Откройте в себе талант актёра в камерной атмосфере профессионального театра
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <Card className="bg-card border-border p-8">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-6">
                      <Icon name="Users" size={32} className="text-primary mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Актёрское мастерство</h3>
                        <p className="text-muted-foreground mb-4">
                          Курс для взрослых и подростков от 14 лет. Основы актёрской техники, 
                          сценическая речь, работа с текстом и импровизация.
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={18} className="text-primary mt-1" />
                            <span>Занятия 2 раза в неделю по 2 часа</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={18} className="text-primary mt-1" />
                            <span>Группы до 12 человек</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={18} className="text-primary mt-1" />
                            <span>Итоговый спектакль на сцене театра</span>
                          </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-border">
                          <p className="text-2xl font-bold text-primary mb-2">12 000 ₽/мес</p>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            Записаться на курс
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border p-8">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-6">
                      <Icon name="Sparkles" size={32} className="text-primary mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Детская театральная студия</h3>
                        <p className="text-muted-foreground mb-4">
                          Программа для детей 7-13 лет. Развитие творческих способностей, 
                          уверенности в себе и навыков публичных выступлений.
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={18} className="text-primary mt-1" />
                            <span>Занятия 1 раз в неделю по 1,5 часа</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={18} className="text-primary mt-1" />
                            <span>Группы до 10 детей</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={18} className="text-primary mt-1" />
                            <span>Выступления для родителей</span>
                          </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-border">
                          <p className="text-2xl font-bold text-primary mb-2">8 000 ₽/мес</p>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            Записаться на курс
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/30 rounded-lg p-8 mb-12">
                <h3 className="text-3xl font-bold text-center mb-8">Что вы получите</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Icon name="Star" size={40} className="text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Профессиональные педагоги</h4>
                    <p className="text-sm text-muted-foreground">
                      Действующие актёры нашего театра
                    </p>
                  </div>
                  <div className="text-center">
                    <Icon name="Theater" size={40} className="text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Реальная сцена</h4>
                    <p className="text-sm text-muted-foreground">
                      Занятия на профессиональной площадке
                    </p>
                  </div>
                  <div className="text-center">
                    <Icon name="Award" size={40} className="text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Сертификат</h4>
                    <p className="text-sm text-muted-foreground">
                      По окончании курса
                    </p>
                  </div>
                  <div className="text-center">
                    <Icon name="Heart" size={40} className="text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Творческая атмосфера</h4>
                    <p className="text-sm text-muted-foreground">
                      Поддержка и вдохновение
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Бесплатное пробное занятие</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Приходите на пробное занятие, познакомьтесь с педагогами и почувствуйте 
                    атмосферу нашей театральной студии
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Записаться на пробное занятие
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'schedule' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4 max-w-5xl">
<h2 className="text-5xl font-bold text-center mb-8">Афиша</h2>
              <p className="text-xl text-center text-muted-foreground mb-16">
                Ближайшие спектакли
              </p>
              <div className="space-y-6">
                {scheduleItems.map((item, idx) => (
                  <Card
                    key={idx}
                    className="bg-card border-border hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between gap-8">
                        <div className="flex flex-col gap-2 min-w-[140px]">
                          <div className="flex items-center gap-2 text-primary">
                            <Icon name="Calendar" size={20} />
                            <span className="text-lg font-semibold">{item.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-primary">
                            <Icon name="Clock" size={20} />
                            <span className="text-lg font-semibold">{item.time}</span>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="MapPin" size={16} />
                            <span className="text-sm">Основной зал</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">{item.price}</p>
                          </div>
                          <Button
                            disabled={!item.available}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[160px]"
                          >
                            {item.available ? 'Купить билет' : 'Билетов нет'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
)}

        {activeSection === 'gallery' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-8">Галерея</h2>
              <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
                Моменты наших спектаклей
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {galleryImages.map((image, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden hover:shadow-xl transition-all cursor-pointer bg-card border-border group"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                        <p className="text-sm text-white/90">{image.description}</p>
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
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-5xl font-bold text-center mb-16">Контакты</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Как нас найти</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
<Icon name="MapPin" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Адрес</p>
                        <p className="text-muted-foreground">
                          г. Москва, ул. Театральная, д. 15
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
<Icon name="Phone" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
<Icon name="Mail" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <p className="text-muted-foreground">info@commefo-theatre.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
<Icon name="Clock" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Касса работает</p>
                        <p className="text-muted-foreground">
                          Вт-Вс: 11:00 — 19:00<br />
                          Пн: выходной
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-6">Напишите нам</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Ваше имя
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground"
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground"
                          placeholder="example@mail.ru"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Сообщение
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground"
                          placeholder="Ваш вопрос..."
                        />
                      </div>
<Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Отправить
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-muted/30 border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
<Icon name="Theater" size={28} className="text-primary" />
              <span className="text-xl font-bold">Комильфо</span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2025 Камерный театр Комильфо. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;