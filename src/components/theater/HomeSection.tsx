import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { AboutSection } from './AboutSection';

interface HomeSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  return (
    <div className="animate-fade-in">
      <div
        className="relative h-[500px] md:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/files/3d73f4ae-cdee-41e4-b17f-aba7a56c78e0.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up">
            Камерный театр<br />Комильфо
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 max-w-2xl px-4 animate-fade-in-up delay-200">
            маленькая сцена для больших переживаний
          </p>
          <div className="flex gap-4 animate-fade-in-up delay-300">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => onNavigate('schedule')}
            >
              Афиша
            </Button>
          </div>
        </div>
      </div>

      <div className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in-up delay-100">
              <Icon name="Theater" size={40} className="text-primary mx-auto mb-3" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">8 лет на сцене</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                11 спектаклей в репертуаре
              </p>
            </div>
            <div className="text-center animate-fade-in-up delay-200">
              <Icon name="Users" size={40} className="text-primary mx-auto mb-3" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Творческий коллектив</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Труппа из 17 увлеченных артистов
              </p>
            </div>
            <div className="text-center animate-fade-in-up delay-300">
              <Icon name="Heart" size={40} className="text-primary mx-auto mb-3" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Внимание к деталям</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Камерная атмосфера и качественные постановки
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};