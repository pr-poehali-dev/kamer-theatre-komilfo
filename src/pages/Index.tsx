import { useState, useEffect } from 'react';
import { Navigation } from '@/components/theater/Navigation';
import { HomeSection } from '@/components/theater/HomeSection';
import { NewsSection } from '@/components/theater/NewsSection';
import { AboutSection } from '@/components/theater/AboutSection';
import { RepertoireSection } from '@/components/theater/RepertoireSection';
import { PerformanceModal } from '@/components/theater/PerformanceModal';
import { TroupeSection } from '@/components/theater/TroupeSection';
import { EducationSection } from '@/components/theater/EducationSection';
import { GallerySection } from '@/components/theater/GallerySection';
import { ReviewsSection } from '@/components/theater/ReviewsSection';
import { ScheduleSection } from '@/components/theater/ScheduleSection';
import { ContactsSection } from '@/components/theater/ContactsSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPerformance, setSelectedPerformance] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'schedule', 'repertoire', 'about', 'troupe', 'education', 'gallery', 'reviews', 'contacts'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="pt-20">
        <div id="home">
          <HomeSection onNavigate={handleNavigate} />
        </div>
        <NewsSection />
        <div id="schedule">
          <ScheduleSection />
        </div>
        <div id="repertoire">
          <RepertoireSection 
            onNavigate={handleNavigate}
            onPerformanceClick={setSelectedPerformance}
          />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="troupe">
          <TroupeSection />
        </div>
        <div id="education">
          <EducationSection />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="contacts">
          <ContactsSection />
        </div>
      </main>

      <PerformanceModal
        performanceIndex={selectedPerformance}
        onClose={() => setSelectedPerformance(null)}
        onNavigate={handleNavigate}
      />

      <footer className="bg-muted/30 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Официальная информация</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>ИП Кузикова Светлана Алексеевна</strong></p>
                <p>ОГРНИП: 318237500160591</p>
                <p>Адрес: г. Краснодар, ул. Горького, 104, офис 26</p>
                <p>Телефон: <a href="tel:+79183111712" className="hover:text-primary transition-colors">+7 918 311 17 12</a></p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Документы</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Политика конфиденциальности
                  </a>
                </p>
                <p>
                  <a href="/offer" className="text-muted-foreground hover:text-primary transition-colors">
                    Публичная оферта
                  </a>
                </p>
                <p>
                  <a href="/consent" className="text-muted-foreground hover:text-primary transition-colors">
                    Согласие на обработку персональных данных
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground text-sm pt-6 border-t border-border">
            <p>&copy; 2017 Камерный театр Комильфо. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;