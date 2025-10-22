import { useState, useEffect } from 'react';
import { Navigation } from '@/components/theater/Navigation';
import { HomeSection } from '@/components/theater/HomeSection';
import { AboutSection } from '@/components/theater/AboutSection';
import { RepertoireSection } from '@/components/theater/RepertoireSection';
import { PerformanceModal } from '@/components/theater/PerformanceModal';
import { TroupeSection } from '@/components/theater/TroupeSection';
import { EducationSection } from '@/components/theater/EducationSection';
import { GallerySection } from '@/components/theater/GallerySection';
import { ScheduleSection } from '@/components/theater/ScheduleSection';
import { ContactsSection } from '@/components/theater/ContactsSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPerformance, setSelectedPerformance] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'schedule', 'repertoire', 'troupe', 'education', 'gallery', 'contacts'];
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
        <div id="schedule">
          <ScheduleSection />
        </div>
        <div id="repertoire">
          <RepertoireSection 
            onNavigate={handleNavigate}
            onPerformanceClick={setSelectedPerformance}
          />
        </div>
        <AboutSection />
        <div id="troupe">
          <TroupeSection />
        </div>
        <div id="education">
          <EducationSection />
        </div>
        <div id="gallery">
          <GallerySection />
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

      <footer className="bg-muted/30 py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2017 Камерный театр Комильфо. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;