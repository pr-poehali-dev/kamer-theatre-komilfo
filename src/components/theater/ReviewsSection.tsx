import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { reviews } from './data';

export const ReviewsSection = () => {
  return (
    <div className="py-12 bg-muted/30 animate-fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Отзывы зрителей</h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up delay-100">
          Что говорят те, кто уже побывал на наших спектаклях
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <Card
              key={idx}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.performance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-card rounded-lg p-8 border border-border">
          <Icon name="MessageSquare" size={32} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Поделитесь впечатлениями</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Были на нашем спектакле? Будем рады вашему отзыву! Напишите нам в социальных сетях или мессенджерах.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://vk.com/theatre_komilfo?from=groups"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
              ВКонтакте
            </a>
            <a
              href="https://t.me/kuzikova_school_theatre"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Icon name="Send" size={20} />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};