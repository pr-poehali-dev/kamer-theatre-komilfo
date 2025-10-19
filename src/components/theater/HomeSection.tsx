import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HomeSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  return (
    <div className="animate-fade-in">
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://cdn.poehali.dev/files/4bd2b07f-862b-4c63-903e-0439f472c17b.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-3 mb-4 animate-fade-in-up">
            <p className="text-white font-semibold text-lg">🎄 Новогодняя премьера 🎄</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up delay-100">
            Идеальный неидеальный вечер
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl animate-fade-in-up delay-200">
            Новогодняя комедия о встрече Нового года в неожиданном месте
          </p>
          <p className="text-lg text-white/80 mb-8 animate-fade-in-up delay-250">
            1 и 8 декабря 2025 г. • 19:00
          </p>
          <div className="flex gap-4 animate-fade-in-up delay-300">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open('https://afisha.nethouse.ru/event/perfect-new-year', '_blank')}
            >
              <Icon name="Ticket" size={20} className="mr-2" />
              Купить билет
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white"
              onClick={() => onNavigate('schedule')}
            >
              Афиша
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
  );
};