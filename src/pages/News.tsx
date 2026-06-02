import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { NewsSection } from '@/components/theater/NewsSection';

const News = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <Icon name="ArrowLeft" size={20} />
          </Button>
          <div className="flex items-center gap-2">
            <Icon name="Theater" size={24} className="text-primary" />
            <span className="text-xl font-bold">Комильфо</span>
          </div>
        </div>
      </nav>
      <main className="pt-20">
        <NewsSection />
      </main>
    </div>
  );
};

export default News;
