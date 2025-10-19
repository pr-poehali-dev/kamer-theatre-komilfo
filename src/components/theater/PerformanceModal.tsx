import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { performances } from './data';

interface PerformanceModalProps {
  performanceIndex: number | null;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const PerformanceModal = ({ performanceIndex, onClose, onNavigate }: PerformanceModalProps) => {
  if (performanceIndex === null) return null;

  const performance = performances[performanceIndex];

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-background rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto relative animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
        >
          <Icon name="X" size={24} />
        </button>
        
        <img
          src={performance.image}
          alt={performance.title}
          className="w-full h-80 object-cover"
        />
        
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-4">{performance.title}</h2>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <Icon name="Clock" size={20} />
            <span className="text-lg">{performance.duration}</span>
          </div>
          
          {performance.fullDescription ? (
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
                {performance.fullDescription}
              </p>
            </div>
          ) : (
            <p className="text-lg text-muted-foreground">
              {performance.description}
            </p>
          )}
          
          <div className="mt-8 flex gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                onClose();
                onNavigate('schedule');
              }}
            >
              Купить билет
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onClose}
            >
              Закрыть
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
