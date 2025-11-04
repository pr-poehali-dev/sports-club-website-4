import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Dumbbell',
      title: 'Тренажёрный зал',
      description: 'Современное оборудование для силовых и кардио тренировок',
      color: 'text-primary'
    },
    {
      icon: 'Users',
      title: 'Групповые занятия',
      description: 'Йога, пилатес, зумба, функциональный тренинг',
      color: 'text-secondary'
    },
    {
      icon: 'HeartPulse',
      title: 'Фитнес-тестирование',
      description: 'Оценка физического состояния и составление программ',
      color: 'text-accent'
    },
    {
      icon: 'Apple',
      title: 'Консультации по питанию',
      description: 'Индивидуальные планы питания от экспертов',
      color: 'text-primary'
    }
  ];

  const trainers = [
    {
      name: 'Алексей Петров',
      specialization: 'Силовые тренировки',
      experience: '8 лет опыта',
      image: 'https://cdn.poehali.dev/projects/b1cbf909-f333-4f78-9f68-b243ecafdcbf/files/ddeb204d-d616-489a-b7be-16f7103d2278.jpg'
    },
    {
      name: 'Мария Иванова',
      specialization: 'Йога и растяжка',
      experience: '5 лет опыта',
      image: 'https://cdn.poehali.dev/projects/b1cbf909-f333-4f78-9f68-b243ecafdcbf/files/ddeb204d-d616-489a-b7be-16f7103d2278.jpg'
    },
    {
      name: 'Дмитрий Соколов',
      specialization: 'Функциональный тренинг',
      experience: '6 лет опыта',
      image: 'https://cdn.poehali.dev/projects/b1cbf909-f333-4f78-9f68-b243ecafdcbf/files/ddeb204d-d616-489a-b7be-16f7103d2278.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm animate-slide-in-left">
              <Icon name="MapPin" size={18} className="text-primary" />
              <div>
                <p className="font-medium">г. Москва, ул. Спортивная, 15</p>
                <p className="text-muted-foreground">Пн-Вс: 07:00 - 23:00</p>
              </div>
            </div>

            <div className="text-center animate-scale-up">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                ЭНЕРГИЯ
              </h1>
              <p className="text-sm text-muted-foreground">Спортивно-оздоровительный клуб</p>
            </div>

            <div className="flex items-center gap-4 animate-slide-in-right">
              <div className="text-right">
                <p className="font-semibold text-lg">+7 (495) 123-45-67</p>
                <div className="flex gap-2 mt-1 justify-end">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-green-100">
                    <Icon name="MessageCircle" size={18} className="text-green-600" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-blue-100">
                    <Icon name="Send" size={18} className="text-blue-600" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <nav className="mt-4 flex justify-center gap-1">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'services', label: 'Услуги' },
              { id: 'trainers', label: 'Тренеры' },
              { id: 'gallery', label: 'Галерея' },
              { id: 'blog', label: 'Журнал' },
              { id: 'contacts', label: 'Контакты' }
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => scrollToSection(item.id)}
                className="font-medium transition-all hover:scale-105"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/b1cbf909-f333-4f78-9f68-b243ecafdcbf/files/38cf6e06-cbca-41bc-b94f-45c47212d1e2.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-secondary/70 to-accent/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h2 className="text-6xl font-bold mb-4">Начни меняться сегодня</h2>
          <p className="text-2xl mb-8 font-medium">Твой путь к здоровью и силе начинается здесь</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6">
              Записаться на пробное занятие
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 animate-fade-in">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Всё необходимое для достижения ваших целей
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${
                    service.color === 'text-primary' ? 'from-primary/20 to-primary/10' :
                    service.color === 'text-secondary' ? 'from-secondary/20 to-secondary/10' :
                    'from-accent/20 to-accent/10'
                  } mb-4`}>
                    <Icon name={service.icon as any} size={32} className={service.color} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="trainers" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Наши тренеры</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Профессионалы с многолетним опытом
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                  <p className="text-primary font-semibold mb-1">{trainer.specialization}</p>
                  <p className="text-muted-foreground">{trainer.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Наша атмосфера в фотографиях
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'https://cdn.poehali.dev/projects/b1cbf909-f333-4f78-9f68-b243ecafdcbf/files/38cf6e06-cbca-41bc-b94f-45c47212d1e2.jpg',
              'https://cdn.poehali.dev/projects/b1cbf909-f333-4f78-9f68-b243ecafdcbf/files/04f62635-dfcf-4646-88c1-13bb22511752.jpg',
              'https://cdn.poehali.dev/projects/b1cbf909-f333-4f78-9f68-b243ecafdcbf/files/ddeb204d-d616-489a-b7be-16f7103d2278.jpg',
            ].map((img, index) => (
              <div
                key={index}
                className="relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Журнал</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полезные статьи о здоровье и фитнесе
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '10 правил эффективной тренировки',
                date: '15 марта 2024',
                excerpt: 'Узнайте, как сделать ваши тренировки максимально продуктивными',
                icon: 'TrendingUp'
              },
              {
                title: 'Питание для набора мышечной массы',
                date: '12 марта 2024',
                excerpt: 'Что есть до и после тренировки для лучших результатов',
                icon: 'Apple'
              },
              {
                title: 'Восстановление после тренировок',
                date: '10 марта 2024',
                excerpt: 'Почему отдых так же важен, как и сама тренировка',
                icon: 'Moon'
              }
            ].map((article, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Icon name={article.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{article.date}</p>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                  <Button variant="link" className="mt-4 p-0 text-primary font-semibold">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-orange-100 via-blue-100 to-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами удобным способом
          </p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="animate-slide-in-left">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Спортивная, 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 07:00 - 23:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@energia-club.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-in-right">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Записаться на занятие</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                  <Button className="w-full text-lg py-6 font-semibold">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            ЭНЕРГИЯ
          </h3>
          <p className="text-gray-400 mb-4">Спортивно-оздоровительный клуб</p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-primary">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-secondary">
              <Icon name="Send" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-accent">
              <Icon name="Instagram" size={20} />
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-6">© 2024 Энергия. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
