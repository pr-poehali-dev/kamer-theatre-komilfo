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
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && ['home', 'about', 'repertoire', 'troupe', 'education', 'gallery', 'schedule', 'contacts'].includes(hash)) {
        setActiveSection(hash);
      } else if (!hash) {
        setActiveSection('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.location.hash = sectionId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="pt-20">
        {activeSection === 'home' && <HomeSection onNavigate={handleNavigate} />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'repertoire' && (
          <RepertoireSection 
            onNavigate={handleNavigate}
            onPerformanceClick={setSelectedPerformance}
          />
        )}
        {activeSection === 'troupe' && <TroupeSection />}
        {activeSection === 'education' && <EducationSection />}
        {activeSection === 'gallery' && <GallerySection />}
        {activeSection === 'schedule' && <ScheduleSection />}
        {activeSection === 'contacts' && <ContactsSection />}
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