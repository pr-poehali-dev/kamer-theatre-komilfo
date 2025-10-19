import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { scheduleItems } from './data';

export const ScheduleSection = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Афиша</h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up delay-100">
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
        <div className="mt-12 text-center bg-muted/30 rounded-lg p-8">
          <Icon name="Info" size={32} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Как купить билеты</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Для приобретения билетов свяжитесь с нами по телефону или через мессенджеры. 
            Мы поможем выбрать лучшие места и ответим на все вопросы.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open('https://t.me/tanya_kuzikova', '_blank')}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('tel:+79189999999', '_blank')}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};