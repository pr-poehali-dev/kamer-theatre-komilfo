import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showPerformanceInfo, setShowPerformanceInfo] = useState(false);
  const [selectedPerformance, setSelectedPerformance] = useState<number | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigation = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О театре' },
    { id: 'repertoire', label: 'Репертуар' },
    { id: 'troupe', label: 'Труппа' },
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
      description: 'Фантастическая история о памяти и патриотизме. Программист попадает в 1945 год и узнаёт правду о своих предках',
      duration: '1 час 20 мин',
      image: 'https://cdn.poehali.dev/files/f0dc3dd7-7473-4394-b8ad-06ae575dcfe2.jpg',
      fullDescription: `Спектакль создан по мотивам одноименной пьесы Эвелины Пиженко и материалам книги Светланы Алексиевич "У войны не женское лицо".

Действие происходит 9 мая 2025 года. Молодой, талантливый программист по имени Михаил, собирается уехать в Соединённые Штаты Америки, чтобы работать там по контракту.

Он уверен, что главное в жизни – финансовое благополучие, ради которого не грех «продать свои мозги». Его поддерживают невеста и мать, однако, сестра Юлия категорически против отъезда брата за границу.

Перед отлётом Михаил решает реставрировать старое довоенное фото, которое долгие годы хранится в семье Егоровых.

Это – единственная память о предках Михаила, но кто конкретно изображён на снимке, никому неизвестно.

Неожиданно, фантастическим образом, Михаил попадает в прошлое. Он оказывается в героическом Ленинграде… На календаре – 9 Мая 1945 года. Его принимают за его же прадеда, которого считали погибшим на фронте.

В спектакле центральной линий проходит повествование о женщинах, участвовавших в Великой Отечественной войне.Рассказ о «женской» войне, без героев, тактических манёвров, техники, генералов и невероятных подвигов. Это реальные их воспоминания о своих переживаниях, страхах и потерях, которые они испытали.

Параллельно в спектакле переплетается прошлое и современность, где наш главный герой Михаил встречается с одноклассницей, соседкой, учительницей своего прадеда, узнаёт трагическую военную историю своей семьи.

История его потрясает. Внутренний мир Михаила переворачивается, приходит осознание того, что он - потомок советского народа, героически защитившего мир от фашизма, преемник и хранитель памяти о миллионах соотечественников, погибших в этой страшной войне.

Вернувшись в реальное время, он меняет своё решение и остаётся в России: на Родине, за которую погибли его прадед и прабабушка.`,
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
                  onClick={() => handleNavigate(item.id)}
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
                onClick={() => handleNavigate('schedule')}
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
                <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                  Камерный театр<br />Комильфо
                </h2>
<p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in-up delay-200">
                  творим с любовью, играем с душой
                </p>
                <div className="flex gap-4 animate-fade-in-up delay-300">
<Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => handleNavigate('schedule')}
                  >
                    Афиша
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-background"
                    onClick={() => handleNavigate('about')}
                  >
                    О театре
                  </Button>
                </div>
              </div>
            </div>

            <div className="py-20 bg-muted/30">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="text-center animate-fade-in-up delay-100">
<Icon name="Theater" size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">8 лет на сцене</h3>
                    <p className="text-muted-foreground">
                      11 спектаклей в репертуаре
                    </p>
                  </div>
                  <div className="text-center animate-fade-in-up delay-200">
<Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Творческий коллектив</h3>
                    <p className="text-muted-foreground">
                      Труппа из 17 увлеченных артистов
                    </p>
                  </div>
                  <div className="text-center animate-fade-in-up delay-300">
<Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Внимание к деталям</h3>
                    <p className="text-muted-foreground">
                      Камерная атмосфера и качественные постановки
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
              <h2 className="text-5xl font-bold text-center mb-12 animate-fade-in-up">О театре</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-in-up delay-100">
                  Театр «КОМИЛЬФО» (бывший «Театр для своих») - независимый самодеятельный театральный коллектив, созданный из выпускников курсов и программ Центра психологии и творчества Kuzikova school.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-in-up delay-200">
                  "КОМИЛЬФО" это арт-пространство для исцеления души средствами театрального искусства и решения психологических задач личностного роста.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-in-up delay-300">
                  Это площадка для раскрытия талантов и творческой реализации. Это место - где участники начинают верить в себя, освобождаются от зажатости и неуверенности, учатся смело выступать перед аудиторией.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up delay-400">
                  Театр «Комильфо» даёт возможность творчески развиваться, приобретать навыки актерского мастерства, ораторского искусства, а также решить психологические задачи по повышению самооценки и уверенности в себе, избавиться от страхов в общении и публичных выступлениях, развивать эмоциональный интеллект.
                </p>
                
                <div className="mt-12">
                  <h3 className="text-3xl font-bold text-center mb-8">Наши достижения</h3>
                  <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <Card className="bg-card border-border animate-scale-in delay-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="https://cdn.poehali.dev/files/453ab62d-8b40-4ccb-8d36-d349133a1f36.jpg" 
                          alt="Диплом Лауреата - Шепот музы"
                          className="w-full h-auto object-contain"
                        />
                        <div className="p-4 bg-muted/30">
                          <h4 className="font-semibold text-lg mb-1">Диплом Лауреата I степени</h4>
                          <p className="text-sm text-muted-foreground">Международный фестиваль-конкурс "Шепот музы", Санкт-Петербург, май 2023</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-card border-border animate-scale-in delay-200 overflow-hidden hover:shadow-xl transition-shadow">
                      <CardContent className="p-0">
                        <img 
                          src="https://cdn.poehali.dev/files/9c20a630-785d-4885-adb2-668466b9c9cc.png" 
                          alt="Диплом победителя - Звездопад"
                          className="w-full h-auto object-contain"
                        />
                        <div className="p-4 bg-muted/30">
                          <h4 className="font-semibold text-lg mb-1">Диплом победителя</h4>
                          <p className="text-sm text-muted-foreground">Международный конкурс-фестиваль "Звездопад", Санкт-Петербург, март 2022</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'repertoire' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Репертуар</h2>
              <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up delay-100">
                Наши уникальные постановки для всей семьи
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {performances.map((perf, idx) => (
                  <Card
                    key={idx}
                    className={`overflow-hidden hover:shadow-xl transition-all cursor-pointer bg-card border-border group animate-scale-in delay-${100 + idx * 50}`}
                    onClick={() => setSelectedPerformance(idx)}
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
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigate('schedule');
                        }}
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

        {selectedPerformance !== null && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedPerformance(null)}
          >
            <div 
              className="bg-background rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto relative animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPerformance(null)}
                className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
              >
                <Icon name="X" size={24} />
              </button>
              
              <img
                src={performances[selectedPerformance].image}
                alt={performances[selectedPerformance].title}
                className="w-full h-80 object-cover"
              />
              
              <div className="p-8">
                <h2 className="text-4xl font-bold mb-4">{performances[selectedPerformance].title}</h2>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <Icon name="Clock" size={20} />
                  <span className="text-lg">{performances[selectedPerformance].duration}</span>
                </div>
                
                {performances[selectedPerformance].fullDescription ? (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
                      {performances[selectedPerformance].fullDescription}
                    </p>
                  </div>
                ) : (
                  <p className="text-lg text-muted-foreground">
                    {performances[selectedPerformance].description}
                  </p>
                )}
                
                <div className="mt-8 flex gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => {
                      setSelectedPerformance(null);
                      handleNavigate('schedule');
                    }}
                  >
                    Купить билет
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setSelectedPerformance(null)}
                  >
                    Закрыть
                  </Button>
                </div>
              </div>
            </div>
          </div>
)}

        {activeSection === 'education' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Учебный театр</h2>
              <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up delay-100">
                Откройте в себе талант актёра в камерной атмосфере профессионального театра
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <Card className="bg-card border-border p-8 relative animate-scale-in delay-100">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-6">
                      <Icon name="Users" size={32} className="text-primary mt-1" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold">Психологический актерский курс<br />«Перформанс-терапия»</h3>
                          <button
                            onClick={() => setShowPerformanceInfo(!showPerformanceInfo)}
                            className="ml-2 p-2 rounded-full hover:bg-muted transition-colors"
                            aria-label="Информация о курсе"
                          >
                            <Icon name="Info" size={20} className="text-primary" />
                          </button>
                        </div>
                        
                        {showPerformanceInfo && (
                          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4 animate-fade-in">
                            <h4 className="font-bold mb-3 text-lg">Что это такое «Перфоманс-терапия»?</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Это актерское мастерство + импровизация + групповая психотерапия, 
                              направленная на обретение контакта с собой и миром = личностный рост, 
                              уверенность в себе и готовность проЯвляться.
                            </p>
                            
                            <h4 className="font-bold mb-3">Как это работает?</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <span>🎭</span>
                                <span><strong>Актерские техники</strong> → убираем зажимы.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span>🎤</span>
                                <span><strong>Сценическая речь и вокал</strong> → прокачиваем уверенность.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span>👌</span>
                                <span><strong>Импровизация</strong> → учимся быть собой даже в стрессовых ситуациях.</span>
                              </li>
                            </ul>
                          </div>
                        )}
                        
                        <p className="text-muted-foreground mb-4">
                          Это уникальная групповая психотерапия с помощью театрального искусства.
                        </p>
                        
                        <ul className="space-y-2 text-muted-foreground mb-4">
                          <li className="flex items-start gap-2">
                            <Icon name="Calendar" size={18} className="text-primary mt-1" />
                            <span>Продолжительность: 3 месяца</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="CalendarCheck" size={18} className="text-primary mt-1" />
                            <span>Следующий поток: с 28 ноября 2025 г.</span>
                          </li>
                        </ul>
                        
                        <a 
                          href="https://orator.turbo.site/theatre" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:underline mb-4"
                        >
                          <span>Подробнее о курсе</span>
                          <Icon name="ExternalLink" size={16} />
                        </a>
                        
                        <div className="mt-6 pt-6 border-t border-border">
                          <p className="text-2xl font-bold text-primary mb-2">9 500 ₽/мес</p>
                          <Button 
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={() => window.open('https://orator.turbo.site/theatre', '_blank')}
                          >
                            Записаться на курс
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border p-8 animate-scale-in delay-200">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-6">
                      <Icon name="Mic" size={32} className="text-primary mt-1" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">Курс ораторского искусства<br />«Своя игра»</h3>
                        <p className="text-muted-foreground mb-4">
                          Уникальный формат обучения с групповыми и индивидуальными занятиями. 
                          Развитие навыков публичных выступлений и уверенной коммуникации.
                        </p>
                        <ul className="space-y-2 text-muted-foreground mb-4">
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={18} className="text-primary mt-1" />
                            <span>Групповые и индивидуальные занятия</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={18} className="text-primary mt-1" />
                            <span>Практика публичных выступлений</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={18} className="text-primary mt-1" />
                            <span>Работа с голосом и дикцией</span>
                          </li>
                        </ul>
                        
                        <a 
                          href="https://orator-site-creation--preview.poehali.dev/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:underline mb-4"
                        >
                          <span>Подробнее о курсе</span>
                          <Icon name="ExternalLink" size={16} />
                        </a>
                        
                        <div className="mt-6 pt-6 border-t border-border">
                          <p className="text-2xl font-bold text-primary mb-2">от 15 900 ₽</p>
                          <Button 
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={() => window.open('https://orator-site-creation--preview.poehali.dev/', '_blank')}
                          >
                            Записаться на курс
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/30 rounded-lg p-8 mb-12 animate-fade-in-up delay-100">
                <h3 className="text-3xl font-bold text-center mb-8">Что вы получите</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center animate-fade-in-up delay-200">
                    <Icon name="Star" size={40} className="text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Профессиональные педагоги</h4>
                    <p className="text-sm text-muted-foreground">
                      Действующие актёры нашего театра
                    </p>
                  </div>
                  <div className="text-center animate-fade-in-up delay-300">
                    <Icon name="Theater" size={40} className="text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Реальная сцена</h4>
                    <p className="text-sm text-muted-foreground">
                      Занятия на профессиональной площадке
                    </p>
                  </div>
                  <div className="text-center animate-fade-in-up delay-400">
                    <Icon name="Award" size={40} className="text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Сертификат</h4>
                    <p className="text-sm text-muted-foreground">
                      По окончании курса
                    </p>
                  </div>
                  <div className="text-center animate-fade-in-up delay-500">
                    <Icon name="Heart" size={40} className="text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Творческая атмосфера</h4>
                    <p className="text-sm text-muted-foreground">
                      Поддержка и вдохновение
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-primary/5 border-primary/20 animate-scale-in delay-100">
                  <CardContent className="p-8 text-center">
                    <Icon name="MessageSquare" size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Отзывы наших учеников</h3>
                    <p className="text-muted-foreground mb-6">
                      Узнайте, что говорят наши студенты о курсах и занятиях
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.open('https://yandex.ru/profile/108893235678?intent=reviews', '_blank')}
                    >
                      Читать отзывы
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20 animate-scale-in delay-200">
                  <CardContent className="p-8 text-center">
                    <Icon name="Gift" size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Бесплатное пробное занятие</h3>
                    <p className="text-muted-foreground mb-6">
                      Познакомьтесь с педагогами и почувствуйте атмосферу нашей студии
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Записаться на пробное занятие
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'schedule' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4 max-w-5xl">
<h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Афиша</h2>
              <p className="text-xl text-center text-muted-foreground mb-16 animate-fade-in-up delay-100">
                Ближайшие спектакли
              </p>
              <div className="space-y-6">
                {scheduleItems.map((item, idx) => (
                  <Card
                    key={idx}
                    className={`bg-card border-border hover:shadow-lg transition-shadow animate-scale-in delay-${100 + idx * 100}`}
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
              <h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Галерея</h2>
              <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up delay-100">
                Моменты наших спектаклей
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {galleryImages.map((image, idx) => (
                  <Card
                    key={idx}
                    className={`overflow-hidden hover:shadow-xl transition-all cursor-pointer bg-card border-border group animate-scale-in delay-${100 + idx * 50}`}
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

        {activeSection === 'troupe' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Наша труппа</h2>
              <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up delay-100">
                Артисты, влюблённые в театр, создающие каждый спектакль с профессиональным мастерством и искренней страстью к сцене
              </p>

              <div className="mb-16">
                <h3 className="text-3xl font-bold mb-8 text-center animate-fade-in-up delay-200">Главный режиссёр</h3>
                <Card className="bg-card border-border max-w-4xl mx-auto animate-scale-in delay-100">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="flex justify-center items-start">
                        <img
                          src="https://cdn.poehali.dev/files/3ff74dd6-f5e0-432d-84d8-0339f2d5d3a6.JPG"
                          alt="Кузикова Светлана Алексеевна"
                          className="w-full h-auto rounded-xl object-cover shadow-lg"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="text-2xl font-bold mb-2">Кузикова Светлана Алексеевна</h4>
                        <p className="text-primary text-lg mb-4">Главный режиссёр</p>
                        <div className="space-y-4 text-muted-foreground">
                          <p>
                            Основатель театра «Комильфо», театральный педагог, автор курсов и книг.
                          </p>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <Icon name="GraduationCap" size={20} className="text-primary mt-1 flex-shrink-0" />
                              <p>Высшее театрально-режиссерское и высшее психологическое образование</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Icon name="Award" size={20} className="text-primary mt-1 flex-shrink-0" />
                              <p>Повышение квалификации по сценической речи, актерскому и ораторскому мастерству в ГИТИС</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Icon name="Star" size={20} className="text-primary mt-1 flex-shrink-0" />
                              <p>Прошла обучение по режиссуре у Ивана Яновича Стависского, режиссера БДТ им. Товстоногова (1997-2011 гг.)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-8 text-center animate-fade-in-up delay-200">Актёры</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="bg-card border-border animate-scale-in delay-100">
                    <CardContent className="p-6 text-center">
                      <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                        <Icon name="User" size={60} className="text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Имя Фамилия</h4>
                      <p className="text-primary mb-4">Актриса театра</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Заслуженная артистка России. Выпускница Школы-студии МХАТ. 
                        Играет главные роли в спектаклях театра уже 15 лет.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold mb-1">Роли в репертуаре:</p>
                        <p>Раневская в "Вишнёвом саде"</p>
                        <p>Офелия в "Гамлете"</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border animate-scale-in delay-200">
                    <CardContent className="p-6 text-center">
                      <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                        <Icon name="User" size={60} className="text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Имя Фамилия</h4>
                      <p className="text-primary mb-4">Актёр театра</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Народный артист России. Закончил Щепкинское училище. 
                        Работает в театре с момента его основания.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold mb-1">Роли в репертуаре:</p>
                        <p>Гаев в "Вишнёвом саде"</p>
                        <p>Клавдий в "Гамлете"</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border animate-scale-in delay-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                        <Icon name="User" size={60} className="text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Имя Фамилия</h4>
                      <p className="text-primary mb-4">Актриса театра</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Лауреат премии "Хрустальная Турандот". Выпускница ГИТИСа. 
                        Молодая звезда труппы с яркими характерными ролями.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold mb-1">Роли в репертуаре:</p>
                        <p>Аня в "Вишнёвом саде"</p>
                        <p>Дуня в "Безумной карточке"</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border animate-scale-in delay-400">
                    <CardContent className="p-6 text-center">
                      <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                        <Icon name="User" size={60} className="text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Имя Фамилия</h4>
                      <p className="text-primary mb-4">Актёр театра</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Выпускник Театрального института им. Б. Щукина. 
                        Специализируется на комедийных и характерных ролях.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold mb-1">Роли в репертуаре:</p>
                        <p>Епиходов в "Вишнёвом саде"</p>
                        <p>Официант в "Кафе Ромашка"</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border animate-scale-in delay-500">
                    <CardContent className="p-6 text-center">
                      <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                        <Icon name="User" size={60} className="text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Имя Фамилия</h4>
                      <p className="text-primary mb-4">Актриса театра</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Заслуженная артистка РФ. Окончила РАТИ-ГИТИС. 
                        Обладательница множества театральных премий.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold mb-1">Роли в репертуаре:</p>
                        <p>Шарлотта в "Вишнёвом саде"</p>
                        <p>Баба Яга в "Баба Яга не против"</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border animate-scale-in delay-600">
                    <CardContent className="p-6 text-center">
                      <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                        <Icon name="User" size={60} className="text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Имя Фамилия</h4>
                      <p className="text-primary mb-4">Актёр театра</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Выпускник Школы-студии МХАТ. Молодой актёр с большим потенциалом. 
                        Исполняет как драматические, так и комедийные роли.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold mb-1">Роли в репертуаре:</p>
                        <p>Петя Трофимов в "Вишнёвом саде"</p>
                        <p>Молодой человек в "Городских историях"</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20 mt-16 animate-scale-in delay-100">
                <CardContent className="p-8 text-center">
                  <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Мечтаете выйти на сцену?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Присоединяйтесь к нашему учебному театру! Профессиональные актёры научат вас 
                    искусству перевоплощения, работе с голосом и актёрскому мастерству.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => handleNavigate('education')}
                  >
                    Узнать об учебном театре
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="py-20 animate-fade-in">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up">Контакты</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="animate-fade-in-up delay-100">
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

                <Card className="bg-card border-border animate-scale-in delay-200">
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