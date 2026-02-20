import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const EducationSection = () => {
  const [showPerformanceInfo, setShowPerformanceInfo] = useState(false);

  return (
    <div className="py-12 animate-fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Учебный театр</h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up delay-100">
          Откройте в себе талант актёра в камерной атмосфере нашего театра
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
                      <span>Продолжительность: 4 месяца</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CalendarCheck" size={18} className="text-primary mt-1" />
                      <span>Следующий поток: с сентября 2026 г.</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-2xl font-bold text-primary mb-2">12 000 ₽/мес</p>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.open('https://performance-therapy-landing--preview.poehali.dev/', '_blank')}
                    >
                      Подробнее
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
                    <p className="text-2xl font-bold text-primary mb-2">от 19 500 ₽</p>
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
              <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
              <p className="text-muted-foreground mb-6">
                Свяжитесь с нами, и мы ответим на все ваши вопросы
              </p>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://t.me/svetlana_kuzikova', '_blank')}
              >
                Написать в Telegram
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};