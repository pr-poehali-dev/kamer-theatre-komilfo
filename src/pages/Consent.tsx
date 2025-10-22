import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Consent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Вернуться на главную
        </Button>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Согласие на обработку персональных данных</h1>
          
          <div className="bg-muted/30 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold mb-4">
              Внося любые персональные данные в данную форму, вы даете согласие на обработку своих персональных данных.
            </p>
            <p className="text-xl font-bold text-primary">
              «Настоящим я даю согласие на обработку персональных данных»
            </p>
          </div>

          <p className="mb-6">
            Заполняя настоящую форму, в соответствии с требованиями статьи 9 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных», я подтверждаю свое согласие на обработку вносимых в форму моих персональных данных, лицом, оказывающим услуги на основании данной формы (далее Сайт), в том числе:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>фамилию, имя, отчество;</li>
            <li>контактный номер телефона;</li>
            <li>адрес электронной почты;</li>
          </ul>

          <p className="mb-6">
            Целью обработки персональных данных является оказание мне услуг на основании заполненной формы.
          </p>

          <p className="mb-6">
            Настоящее согласие действует бессрочно, срок хранения моих персональных данных не ограничен.
          </p>

          <p className="mb-6">
            Оставляю за собой право отозвать свое согласие посредством составления соответствующего письменного документа, который может быть направлен мной по почте{' '}
            <a href="mailto:s_kuzikova@mail.ru" className="text-primary hover:underline">
              s_kuzikova@mail.ru
            </a>{' '}
            заказным письмом с уведомлением о вручении либо вручен лично под расписку представителю автору проекта.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consent;
