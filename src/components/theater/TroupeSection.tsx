import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const TroupeSection = () => {
  return (
    <div className="py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8 animate-fade-in-up">Наша труппа</h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up delay-100">
          Познакомьтесь с творческой командой театра Комильфо
        </p>

        <div className="max-w-3xl mx-auto mb-16">
          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in">
            <div className="md:flex md:flex-row">
              <div className="md:w-2/5 h-72 md:h-auto">
                <img
                  src="https://cdn.poehali.dev/files/69dfcfe5-c796-4a3f-99a4-abf7a96dd6ce.JPG"
                  alt="Светлана Кузикова"
                  className="w-full h-full object-cover object-[center_30%]"
                />
              </div>
              <CardContent className="p-6 md:w-3/5 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Светлана Кузикова</h3>
                <p className="text-primary font-semibold mb-3 text-base">Художественный руководитель и режиссёр</p>
                <p className="text-muted-foreground mb-4 text-base">
                  Основатель театра «Комильфо» и школы Kuzikova school. 
                  Создатель уникального курса «Перформанс-терапия», сочетающего театральное искусство и психологию.
                </p>
                <div className="space-y-2 text-muted-foreground text-base">
                  <div className="flex items-center gap-2">
                    <Icon name="Award" size={18} className="text-primary" />
                    <span>Профессиональный психолог и режиссёр</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Theater" size={18} className="text-primary" />
                    <span>Режиссёр более 20 спектаклей</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={18} className="text-primary" />
                    <span>Педагог по ораторскому искусству</span>
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
              style={{objectPosition: 'center 20%'}}
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
              className="w-full h-80 object-cover object-[center_20%]"
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

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-500">
            <img
              src="https://cdn.poehali.dev/files/bc5eda8a-7b07-47f4-a36d-67fb6bcb0df7.jpg"
              alt="Анна Котышева"
              className="w-full h-80 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Анна Котышева</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-600">
            <img
              src="https://cdn.poehali.dev/files/894949bf-cfd4-4859-92dc-bd1adaeaed46.jpg"
              alt="Марина Лапанина"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Марина Лапанина</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-700">
            <img
              src="https://cdn.poehali.dev/files/eed38ff6-37cf-4311-a81c-38cda6f02ebb.jpg"
              alt="Вадим Котков"
              className="w-full h-80 object-cover object-[center_35%]"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Вадим Котков</h3>
              <p className="text-primary font-semibold">Актёр</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-700">
            <img
              src="https://cdn.poehali.dev/files/d297b153-c34b-4120-a41d-e24c16a95cc0.jpg"
              alt="Екатерина Миронова"
              className="w-full h-80 object-cover object-[center_15%]"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Екатерина Миронова</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-700">
            <img
              src="https://cdn.poehali.dev/files/3eacd4c3-117b-4ab9-b141-d56502b29550.JPG"
              alt="Галина Попова"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Галина Попова</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-700">
            <img
              src="https://cdn.poehali.dev/files/11dcaa16-ed28-46bc-b380-e297748dded9.jpg"
              alt="Наталья Сыроваткина"
              className="w-full h-80 object-cover"
              style={{objectPosition: 'center 20%'}}
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Наталья Сыроваткина</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-700">
            <img
              src="https://cdn.poehali.dev/files/ee2b4f35-40a3-4a9e-92f5-f21932b26000.jpg"
              alt="Анна Бабенко"
              className="w-full h-80 object-cover"
              style={{objectPosition: 'center 20%'}}
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Анна Бабенко</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-800">
            <img
              src="https://cdn.poehali.dev/files/6222ec37-1322-42c3-84a4-d7a055807477.JPG"
              alt="Андрей Савченко"
              className="w-full h-80 object-cover"
              style={{objectPosition: 'center 20%'}}
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Андрей Савченко</h3>
              <p className="text-primary font-semibold">Актёр</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-900">
            <img
              src="https://cdn.poehali.dev/files/4a84b9a1-caa2-4a3d-81c0-05d17d1d5a05.JPG"
              alt="Леонид Батышев"
              className="w-full h-80 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Леонид Батышев</h3>
              <p className="text-primary font-semibold">Актёр</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-1000">
            <img
              src="https://cdn.poehali.dev/files/793fb641-52ba-4cc9-9132-9f4b31b5693a.jpg"
              alt="Темирлан Тугушев"
              className="w-full h-80 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Темирлан Тугушев</h3>
              <p className="text-primary font-semibold">Актёр</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-1100">
            <img
              src="https://cdn.poehali.dev/files/8f415f8c-d913-4207-b8b6-59caaa53d957.jpg"
              alt="Маргарита Щадова"
              className="w-full h-80 object-cover"
              style={{objectPosition: 'center 25%'}}
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Маргарита Щадова</h3>
              <p className="text-primary font-semibold">Помощник режиссёра</p>
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