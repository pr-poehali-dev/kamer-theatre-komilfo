import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { performances } from './data';

interface RepertoireSectionProps {
  onNavigate: (sectionId: string) => void;
  onPerformanceClick: (index: number) => void;
}

export const RepertoireSection = ({ onNavigate, onPerformanceClick }: RepertoireSectionProps) => {
  return (
    <div className="py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Репертуар</h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up delay-100">
          Камерный театр большой искренности
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {performances.map((perf, idx) => (
            <Card
              key={idx}
              className={`overflow-hidden hover:shadow-xl transition-all cursor-pointer bg-card border-border group animate-scale-in delay-${100 + idx * 50}`}
              onClick={() => onPerformanceClick(idx)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={perf.image}
                  alt={perf.title}
                  className={`w-full h-full group-hover:scale-110 transition-transform duration-300 ${
                    perf.title === 'Баба Яга не против' ? 'object-contain bg-muted' : 'object-cover'
                  }`}
                />
                {perf.title === 'Идеальный неидеальный вечер' && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Премьера
                  </div>
                )}
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
                    if (perf.title === 'Идеальный неидеальный вечер') {
                      window.open('https://afisha.nethouse.ru/event/perfect-new-year', '_blank');
                    } else {
                      onNavigate('schedule');
                    }
                  }}
                >
                  {perf.title === 'Идеальный неидеальный вечер' ? 'Купить билет' : 'Афиша'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};