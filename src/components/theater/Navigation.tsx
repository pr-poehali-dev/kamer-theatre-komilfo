import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { navigation } from './data';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  return (
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
                onClick={() => onNavigate(item.id)}
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
              onClick={() => onNavigate('schedule')}
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
  );
};
