import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const NewsSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="bg-card border-primary/20 shadow-xl animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Icon name="Trophy" size={32} className="text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl md:text-4xl font-bold">Важная новость!</h2>
                  <span className="text-3xl">🎉</span>
                </div>
                <p className="text-sm text-muted-foreground">Январь 2026</p>
              </div>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p className="font-semibold text-xl text-primary">
                Наш театр «Комильфо» стал победителем грантового конкурса Президентского фонда культурных инициатив 2026 года!
              </p>

              <p>
                Наш проект <strong>«ОЖИВШАЯ ИСТОРИЯ: театральный тур по местам боевой славы 46-го авиационного женского полка»</strong> вошел в число 810 лучших инициатив со всей России.
              </p>

              <p className="text-primary font-semibold">
                Для нас это большая честь и высокая степень ответственности!
              </p>

              <div className="bg-muted/30 rounded-lg p-6 my-6">
                <h3 className="font-bold text-xl mb-4">О проекте</h3>
                <p className="mb-4">
                  В рамках проекта мы в 2026 году организуем выезды в регионы края с показом спектакля <strong>«Безымянная карточка»</strong>, посвященного Великой Победе в 1941-1945 гг. и героическому подвигу женщин-ветеранов ВОВ, воевавших в разных родах войск, в том числе летчиц гвардейского авиационного полка «ночных ведьм», который базировался у нас в крае во время освобождения Кубани и Таманского полуострова.
                </p>
              </div>

              <div>
                <p className="font-semibold mb-3">Именно поэтому мы выбрали выезды в эти регионы края:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎖️</span>
                    <span><strong>Станица Ивановская</strong> — здесь женскому авиационному полку было вручено знамя и присвоено звание Гвардейского.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎖️</span>
                    <span><strong>Поселок Пересыпь, Новороссийск и Крымск</strong> — в этих местах полк базировался в период воздушных боев на «Голубой линии».</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                Спектакль создан по материалам пьесы Э. Пиженко, книги С. Алексиевич «У войны не женское лицо», а также поэзии и прозы советских авторов.
              </p>

              <p className="font-semibold text-lg">
                Мы уверены, что наша команда сможет ярко и качественно воплотить задуманное в жизнь, а наш патриотический проект будет тепло встречен жителями Кубани.
              </p>

              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">#ФондКультурныхИнициатив</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">#ЯПобедительПФКИ</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">#театрКомильфо</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">#ВеликаяПобеда</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">#ПамятьПоколений</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
