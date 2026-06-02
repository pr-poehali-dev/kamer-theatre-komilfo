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

        <div className="max-w-4xl mx-auto mb-16">
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
                    <span>Создала более 20 спектаклей</span>
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
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/f98031a8-0fc8-4c71-bf9d-9628d48097eb.jpg"
              alt="Александра Линькова"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Александра Линькова</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-100">
            <img
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/ee00f924-9259-4418-9399-a8842ad4b250.jpg"
              alt="Оксана Суханова"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Оксана Суханова</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-200">
            <img
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/df8dcfff-979e-4f29-b972-d2c29aaf5da4.jpg"
              alt="Евгения Трунова"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Евгения Трунова</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-300">
            <img
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/16a533ff-e245-42ee-aea9-d51c77f9739e.jpg"
              alt="Елена Короткова"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Елена Короткова</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-400">
            <img
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/29a8d77a-79a3-4208-b836-4c89e7966f49.jpg"
              alt="Елена Соболева"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Елена Соболева</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-500">
            <img
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/bb987394-3f46-4017-bbf4-0526d6b09683.jpg"
              alt="Анна Котышева"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Анна Котышева</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-600">
            <img
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/1aee55cb-04f9-4321-ad31-000a6146cd9e.jpg"
              alt="Марина Лапанина"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Марина Лапанина</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-1000">
            <img
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/0853da0d-1061-478f-9a66-183f95216079.jpg"
              alt="Валерия Суханова"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Валерия Суханова</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-700">
            <img
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/39f33c9a-e755-4357-b873-75e29fd208e1.jpg"
              alt="Екатерина Миронова"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Екатерина Миронова</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-700">
            <img
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/4ebb95e3-515b-4629-b46f-ae407be6508a.jpg"
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
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/3504c7bc-3537-4951-bfa9-244541509aa0.jpg"
              alt="Наталия Сыроваткина"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Наталия Сыроваткина</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-700">
            <img
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/1f5a4fa8-f4b3-45c5-b3b0-c8d19ad9fb8a.jpg"
              alt="Анна Бабенко"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Анна Бабенко</h3>
              <p className="text-primary font-semibold">Актриса</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-900">
            <img
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/eb111943-06a5-45a0-be90-b58a68752935.jpg"
              alt="Леонид Батышев"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Леонид Батышев</h3>
              <p className="text-primary font-semibold">Актёр</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-1000">
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

          <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-1000">
            <img
              src="https://cdn.poehali.dev/projects/b938984c-0d60-47c5-a439-7d0d401d3bf4/bucket/c87b64ae-c46d-4219-9d23-2d880e4835f7.jpg"
              alt="Темирлан Тугушев"
              className="w-full h-80 object-cover object-top"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">Темирлан Тугушев</h3>
              <p className="text-primary font-semibold">Актёр</p>
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