import { Card } from '@/components/ui/card';
import { galleryImages } from './data';

export const GallerySection = () => {
  return (
    <div className="py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Галерея</h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up delay-100">
          Моменты из наших спектаклей и театральной жизни
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((img, idx) => (
            <Card
              key={idx}
              className={`overflow-hidden hover:shadow-xl transition-all cursor-pointer group animate-scale-in delay-${100 + idx * 50}`}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-bold text-white mb-1">{img.title}</h3>
                  <p className="text-sm text-white/80">{img.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};