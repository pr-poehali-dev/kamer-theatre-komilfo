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
    { id: 'troupe', label: 'Труппа' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'schedule', label: 'Расписание' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const performances = [
    {
      title: 'Вишнёвый сад',
      author: 'А.П. Чехов',
      description: 'Лирическая комедия о прощании с прошлым',
      duration: '2 часа 30 мин',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/3d73f4ae-cdee-41e4-b17f-aba7a56c78e0.jpg',
    },
    {
      title: 'Женитьба',
      author: 'Н.В. Гоголь',
      description: 'Комедия о поисках семейного счастья',
      duration: '1 час 40 мин',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/6d4ceee2-11fa-46be-9d9c-bfc981b32b19.jpg',
    },
    {
      title: 'Три сестры',
      author: 'А.П. Чехов',
      description: 'Драма о мечтах и разочарованиях',
      duration: '2 часа 15 мин',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/f82ad391-1da9-46c4-a8f4-6554bb5e7d15.jpg',
    },
    {
      title: 'Горе от ума',
      author: 'А.С. Грибоедов',
      description: 'Комедия о столкновении поколений',
      duration: '2 часа',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/3d73f4ae-cdee-41e4-b17f-aba7a56c78e0.jpg',
    },
  ];

  const actors = [
    {
      name: 'Екатерина Волкова',
      role: 'Заслуженная артистка России',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/6d4ceee2-11fa-46be-9d9c-bfc981b32b19.jpg',
    },
    {
      name: 'Александр Соколов',
      role: 'Народный артист России',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/f82ad391-1da9-46c4-a8f4-6554bb5e7d15.jpg',
    },
    {
      name: 'Мария Петрова',
      role: 'Заслуженная артистка',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/3d73f4ae-cdee-41e4-b17f-aba7a56c78e0.jpg',
    },
    {
      name: 'Дмитрий Иванов',
      role: 'Артист театра',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/6d4ceee2-11fa-46be-9d9c-bfc981b32b19.jpg',
    },
    {
      name: 'Ольга Смирнова',
      role: 'Артистка театра',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/f82ad391-1da9-46c4-a8f4-6554bb5e7d15.jpg',
    },
    {
      name: 'Николай Морозов',
      role: 'Артист театра',
      image: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/3d73f4ae-cdee-41e4-b17f-aba7a56c78e0.jpg',
    },
  ];

  const scheduleItems = [
    {
      date: '25 октября, 19:00',
      title: 'Вишнёвый сад',
      available: true,
    },
    {
      date: '27 октября, 19:00',
      title: 'Женитьба',
      available: true,
    },
    {
      date: '1 ноября, 19:00',
      title: 'Три сестры',
      available: false,
    },
    {
      date: '3 ноября, 19:00',
      title: 'Горе от ума',
      available: true,
    },
    {
      date: '8 ноября, 19:00',
      title: 'Вишнёвый сад',
      available: true,
    },
  ];

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/d2eed063-bdee-47a3-9462-d2a928a2c641.jpg',
      title: 'Вишнёвый сад',
      description: 'Сцена из спектакля',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/00dd068e-6899-47f8-9f71-a203c55d58b3.jpg',
      title: 'Репетиция',
      description: 'Подготовка к премьере',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/ff425e05-bb76-4034-8224-db504a7a20c5.jpg',
      title: 'Поклоны',
      description: 'Благодарность зрителям',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/bf56f932-b49f-4241-afef-f2a7cd681710.jpg',
      title: 'Актёрская игра',
      description: 'Эмоциональная сцена',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/00de7a63-d62e-49b6-a41c-fbebb119c06b.jpg',
      title: 'Зрительный зал',
      description: 'Вид на сцену',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/e9a89eb0-c604-47e0-946b-c6b64bcde8c1.jpg',
      title: 'За кулисами',
      description: 'Костюмерная',
    },
  ];

  const reviews = [
    {
      name: 'Анна Волкова',
      date: '15 октября 2025',
      performance: 'Вишнёвый сад',
      rating: 5,
      text: 'Потрясающая постановка! Актёры играют так искренне, что невозможно сдержать эмоции. Камерная атмосфера зала создаёт ощущение личного присутствия в истории. Обязательно вернусь!',
    },
    {
      name: 'Дмитрий Соколов',
      date: '10 октября 2025',
      performance: 'Женитьба',
      rating: 5,
      text: 'Гоголь в исполнении труппы Комильфо — это настоящее открытие! Современная интерпретация классики, но с глубоким уважением к первоисточнику. Смеялись всем залом!',
    },
    {
      name: 'Елена Петрова',
      date: '5 октября 2025',
      performance: 'Три сестры',
      rating: 5,
      text: 'Сильнейший спектакль. Чувствуется профессионализм каждого актёра. Декорации и свет дополняют атмосферу, а игра артистов цепляет за живое. Рекомендую всем ценителям качественного театра.',
    },
    {
      name: 'Михаил Иванов',
      date: '1 октября 2025',
      performance: 'Горе от ума',
      rating: 5,
      text: 'Был с семьёй, все в восторге! Классика никогда не устареет, особенно в такой подаче. Актёры великолепны, постановка продумана до мелочей. Спасибо театру за незабываемый вечер!',
    },
    {
      name: 'Ольга Смирнова',
      date: '28 сентября 2025',
      performance: 'Вишнёвый сад',
      rating: 5,
      text: 'Впервые в этом театре, и я очарована! Уютный зал, внимательный персонал и невероятно талантливые актёры. Чехов звучит современно и проникновенно. Буду приходить ещё!',
    },
    {
      name: 'Александр Морозов',
      date: '22 сентября 2025',
      performance: 'Женитьба',
      rating: 5,
      text: 'Отличный театр для тех, кто ценит камерность и качество. Небольшой зал позволяет видеть каждую эмоцию актёров. Постановка Женитьбы — шедевр! Рекомендую.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Drama" size={32} className="text-accent" />
              <h1 className="text-2xl font-bold text-foreground">Комильфо</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id
                      ? 'text-accent font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
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
                  Творим с любовью, играем с душой
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => setActiveSection('repertoire')}
                  >
                    Репертуар
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-background"
                    onClick={() => setActiveSection('schedule')}
                  >
                    Расписание
                  </Button>
                </div>
              </div>
            </div>

            <div className="py-20 bg-muted/30">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="text-center">
                    <Icon name="Calendar" size={48} className="text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Регулярные показы</h3>
                    <p className="text-muted-foreground">
                      Спектакли каждую неделю
                    </p>
                  </div>
                  <div className="text-center">
                    <Icon name="Users" size={48} className="text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Профессиональная труппа</h3>
                    <p className="text-muted-foreground">
                      Заслуженные артисты России
                    </p>
                  </div>
                  <div className="text-center">
                    <Icon name="Award" size={48} className="text-accent mx-auto mb-4" />
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
                  Камерный театр "Комильфо" был основан в 2010 году группой энтузиастов, 
                  влюблённых в классическую драматургию. Наша миссия — сохранить традиции 
                  русского театра и представить классические произведения в современной, 
                  актуальной интерпретации.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Название "Комильфо" (от фр. comme il faut — "как следует") отражает нашу 
                  философию: каждый спектакль создаётся с максимальным вниманием к деталям, 
                  с уважением к автору и зрителю.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Наш зал рассчитан на 80 мест, что создаёт уникальную камерную атмосферу — 
                  вы становитесь не просто зрителем, а участником происходящего на сцене.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <Icon name="Trophy" size={32} className="text-accent mb-4" />
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
                      <Icon name="Heart" size={32} className="text-accent mb-4" />
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
                Классические произведения русской драматургии
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
                        <p className="text-sm text-white/80">{perf.author}</p>
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

        {activeSection === 'troupe' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-8">Наша труппа</h2>
              <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
                Профессиональные артисты с богатым опытом
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {actors.map((actor, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-border"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={actor.image}
                        alt={actor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-2">{actor.name}</h3>
                      <p className="text-muted-foreground">{actor.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'schedule' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-5xl font-bold text-center mb-8">Расписание</h2>
              <p className="text-xl text-center text-muted-foreground mb-16">
                Ближайшие спектакли
              </p>
              <div className="space-y-4">
                {scheduleItems.map((item, idx) => (
                  <Card
                    key={idx}
                    className="bg-card border-border hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-3 text-accent">
                            <Icon name="Calendar" size={24} />
                            <span className="text-lg font-semibold">{item.date}</span>
                          </div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                        </div>
                        <Button
                          disabled={!item.available}
                          className="bg-accent hover:bg-accent/90 text-accent-foreground"
                        >
                          {item.available ? 'Купить билет' : 'Билетов нет'}
                        </Button>
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
                Моменты из жизни театра: спектакли, репетиции, закулисье
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {galleryImages.map((image, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden hover:scale-105 transition-transform cursor-pointer bg-card border-border group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                        <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                        <p className="text-sm text-white/90">{image.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'reviews' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-8">Отзывы зрителей</h2>
              <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
                Что говорят наши зрители о спектаклях
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {reviews.map((review, idx) => (
                  <Card
                    key={idx}
                    className="bg-card border-border hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                        ))}
                      </div>
                      <p className="text-base mb-6 text-foreground leading-relaxed">
                        "{review.text}"
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.performance}</p>
                        <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                      </div>
                    </CardContent>
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
                      <Icon name="MapPin" size={24} className="text-accent mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Адрес</p>
                        <p className="text-muted-foreground">
                          г. Москва, ул. Театральная, д. 15
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-accent mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={24} className="text-accent mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <p className="text-muted-foreground">info@commefo-theatre.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Clock" size={24} className="text-accent mt-1" />
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
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
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
              <Icon name="Drama" size={28} className="text-accent" />
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