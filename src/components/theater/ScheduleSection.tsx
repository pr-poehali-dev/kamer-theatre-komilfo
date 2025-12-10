import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { scheduleItems } from './data';

export const ScheduleSection = () => {
  return (
    <div className="py-12 animate-fade-in">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Афиша</h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up delay-100">
          Ближайшие спектакли театра Комильфо
        </p>

        <div className="space-y-4">
          {scheduleItems.map((item, idx) => (
            <Card
              key={idx}
              className={`bg-card border-border hover:shadow-lg transition-shadow animate-scale-in delay-${100 + idx * 50}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="text-center min-w-[100px]">
                      <Icon name="Calendar" size={24} className="text-primary mx-auto mb-2" />
                      <p className="font-semibold">{item.date}</p>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-lg text-primary font-semibold">{item.price}</p>
                    </div>
                  </div>
                  <Button
                    className={
                      item.available
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                    }
                    disabled={!item.available}
                    onClick={() => {
                      if (item.available && (item as any).ticketUrl) {
                        window.open((item as any).ticketUrl, '_blank');
                      }
                    }}
                  >
                    {item.available ? 'Купить билет' : 'Билеты проданы'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Для приобретения билетов свяжитесь с нами: {' '}
            <a 
              href="https://t.me/svetlana_kuzikova" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Telegram
            </a>
            {' '} или {' '}
            <a 
              href="tel:+79183111712"
              className="text-primary hover:underline font-semibold"
            >
              +7 918 311 17 12
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};