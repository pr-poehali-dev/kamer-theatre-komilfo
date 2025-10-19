import { Card, CardContent } from '@/components/ui/card';

export const AboutSection = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-12 animate-fade-in-up">О театре</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-in-up delay-100">
            Театр «КОМИЛЬФО» (бывший «Театр для своих») - независимый самодеятельный театральный коллектив, созданный из выпускников курсов и программ Центра психологии и творчества Kuzikova school.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-in-up delay-200">
            "КОМИЛЬФО" это арт-пространство для исцеления души средствами театрального искусства и решения психологических задач личностного роста.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-in-up delay-300">
            Это площадка для раскрытия талантов и творческой реализации. Это место - где участники начинают верить в себя, освобождаются от зажатости и неуверенности, учатся смело выступать перед аудиторией.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up delay-400">
            Театр «Комильфо» даёт возможность творчески развиваться, приобретать навыки актерского мастерства, ораторского искусства, а также решить психологические задачи по повышению самооценки и уверенности в себе, избавиться от страхов в общении и публичных выступлениях, развивать эмоциональный интеллект.
          </p>
          
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-center mb-8">Наши достижения</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="bg-card border-border animate-scale-in delay-100 overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/453ab62d-8b40-4ccb-8d36-d349133a1f36.jpg" 
                    alt="Диплом Лауреата - Шепот музы"
                    className="w-full h-auto object-contain"
                  />
                  <div className="p-4 bg-muted/30">
                    <h4 className="font-semibold text-lg mb-1">Диплом Лауреата I степени</h4>
                    <p className="text-sm text-muted-foreground">Международный фестиваль-конкурс "Шепот музы", Санкт-Петербург, май 2023</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border animate-scale-in delay-200 overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/9c20a630-785d-4885-adb2-668466b9c9cc.png" 
                    alt="Диплом победителя - Звездопад"
                    className="w-full h-auto object-contain"
                  />
                  <div className="p-4 bg-muted/30">
                    <h4 className="font-semibold text-lg mb-1">Диплом победителя</h4>
                    <p className="text-sm text-muted-foreground">Международный конкурс-фестиваль "Звездопад", Санкт-Петербург, март 2022</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
