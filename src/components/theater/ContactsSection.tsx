import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const ContactsSection = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Контакты</h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up delay-100">
          Мы всегда рады ответить на ваши вопросы
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card border-border hover:shadow-lg transition-shadow animate-scale-in delay-100">
            <CardContent className="p-8">
              <Icon name="MapPin" size={32} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Адрес театра</h3>
              <p className="text-muted-foreground mb-4">
                г. Краснодар, ул. Красная, 123<br />
                ТЦ "Галерея", 3 этаж
              </p>
              <Button
                variant="outline"
                onClick={() => window.open('https://yandex.ru/maps/-/CDdkv0dW', '_blank')}
              >
                <Icon name="Navigation" size={18} className="mr-2" />
                Построить маршрут
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow animate-scale-in delay-200">
            <CardContent className="p-8">
              <Icon name="Clock" size={32} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Режим работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Понедельник - Пятница: 10:00 - 21:00</p>
                <p>Суббота - Воскресенье: 11:00 - 22:00</p>
                <p className="text-sm mt-4">Кассы открываются за час до начала спектакля</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-primary/5 border-primary/20 hover:shadow-lg transition-shadow animate-scale-in delay-100">
            <CardContent className="p-6 text-center">
              <Icon name="Phone" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Телефон</h3>
              <a href="tel:+79183111712" className="text-muted-foreground hover:text-primary transition-colors">
                +7 (918) 311-17-12
              </a>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20 hover:shadow-lg transition-shadow animate-scale-in delay-200">
            <CardContent className="p-6 text-center">
              <Icon name="Mail" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <a href="mailto:info@komilfo-theatre.ru" className="text-muted-foreground hover:text-primary transition-colors">
                info@komilfo-theatre.ru
              </a>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20 hover:shadow-lg transition-shadow animate-scale-in delay-300">
            <CardContent className="p-6 text-center">
              <Icon name="MessageCircle" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/message/FKFHPRMEDBRYP1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Написать в WhatsApp
              </a>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/30 border-border animate-fade-in-up delay-100">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Напишите нам, и мы обязательно свяжемся с вами в ближайшее время
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open('https://wa.me/message/FKFHPRMEDBRYP1', '_blank')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать нам
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};