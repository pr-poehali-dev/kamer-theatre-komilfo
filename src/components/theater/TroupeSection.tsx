import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const TroupeSection = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Наша труппа</h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up delay-100">
          Познакомьтесь с творческой командой театра Комильфо
        </p>

        <div className="max-w-2xl mx-auto mb-16">
          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="https://cdn.poehali.dev/files/69dfcfe5-c796-4a3f-99a4-abf7a96dd6ce.JPG"
                  alt="Светлана Кузикова"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-2">Светлана Кузикова</h3>
                <p className="text-primary font-semibold mb-4">Художественный руководитель и режиссёр</p>
                <p className="text-muted-foreground mb-4">
                  Основатель театра «Комильфо» и школы Kuzikova school. 
                  Создатель уникальной методики «Перформанс-терапия», сочетающей театральное искусство и психологию.
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Award" size={18} className="text-primary" />
                    <span>Профессиональный психолог</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Theater" size={18} className="text-primary" />
                    <span>Режиссёр более 20 спектаклей</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={18} className="text-primary" />
                    <span>Преподаватель актерского мастерства</span>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in">
            <img
              src="https://cdn.poehali.dev/files/333df901-4df8-4e3d-97d2-db05a168637a.JPG"
              alt="Александра Линькова"
              className="w-full h-80 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Александра Линькова</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-100">
            <img
              src="https://cdn.poehali.dev/files/05270faa-ccc9-4e82-95b2-91e989be40c4.JPG"
              alt="Оксана Суханова"
              className="w-full h-80 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Оксана Суханова</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-200">
            <img
              src="https://cdn.poehali.dev/files/44de1856-5684-422b-91e2-915bf5cbe0a7.jpg"
              alt="Евгения Трунова"
              className="w-full h-80 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Евгения Трунова</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-300">
            <img
              src="https://cdn.poehali.dev/files/0217f62e-3092-4c22-bdd5-96ee006168bb.jpg"
              alt="Елена Короткова"
              className="w-full h-80 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Елена Короткова</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-400">
            <img
              src="https://cdn.poehali.dev/files/fa153495-5697-4b90-8503-4aaa2ee50e64.jpg"
              alt="Елена Соболева"
              className="w-full h-80 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Елена Соболева</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            В нашей труппе — талантливые актёры, объединённые любовью к театру и стремлением к творческому росту. 
            Каждый участник вносит свой уникальный вклад в создание незабываемых спектаклей.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center animate-fade-in-up delay-100">
              <Icon name="Users" size={48} className="text-primary mx-auto mb-3" />
              <p className="font-semibold text-xl">17</p>
              <p className="text-muted-foreground">Актёров в труппе</p>
            </div>
            <div className="text-center animate-fade-in-up delay-200">
              <Icon name="Heart" size={48} className="text-primary mx-auto mb-3" />
              <p className="font-semibold text-xl">100%</p>
              <p className="text-muted-foreground">Увлечённых своим делом</p>
            </div>
            <div className="text-center animate-fade-in-up delay-300">
              <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-3" />
              <p className="font-semibold text-xl">8+</p>
              <p className="text-muted-foreground">Лет вместе на сцене</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};