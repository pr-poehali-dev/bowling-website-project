import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';

const IMG_HALL = 'https://cdn.poehali.dev/projects/fb78d2f9-99cf-4f62-a3b0-18e639c48fef/files/89f23c45-ecf9-415a-a3ef-a1ff5f8143f3.jpg';
const IMG_BALLS = 'https://cdn.poehali.dev/projects/fb78d2f9-99cf-4f62-a3b0-18e639c48fef/files/1c42649a-c738-4f55-810e-d64c8d9fe657.jpg';
const IMG_BAR = 'https://cdn.poehali.dev/projects/fb78d2f9-99cf-4f62-a3b0-18e639c48fef/files/1d3d7b85-faff-4295-83d6-d591097de99b.jpg';

const navLinks = [
  { label: 'Главная', href: '#home' },
  { label: 'Бронирование', href: '#booking' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Меню', href: '#menu' },
  { label: 'О клубе', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
];

const tariffs = [
  { name: 'Утро', time: 'Пн–Пт · 10:00–16:00', price: '600', unit: '₽ / час', icon: 'Sunrise', popular: false },
  { name: 'Вечер', time: 'Пн–Пт · 16:00–23:00', price: '1200', unit: '₽ / час', icon: 'Sunset', popular: true },
  { name: 'Выходные', time: 'Сб–Вс · весь день', price: '1500', unit: '₽ / час', icon: 'PartyPopper', popular: false },
];

const gallery = [
  { src: IMG_HALL, title: 'Игровая зона', span: 'md:col-span-2 md:row-span-2' },
  { src: IMG_BALLS, title: 'Оборудование', span: '' },
  { src: IMG_BAR, title: 'Бар и лаунж', span: '' },
];

const menu = [
  { cat: 'Закуски', icon: 'Drumstick', items: [
    { name: 'Куриные крылья BBQ', price: '490' },
    { name: 'Картофель фри с соусом', price: '290' },
    { name: 'Сырные палочки', price: '390' },
    { name: 'Начос с гуакамоле', price: '450' },
  ]},
  { cat: 'Бургеры & Пицца', icon: 'Pizza', items: [
    { name: 'Чизбургер STRIKE', price: '590' },
    { name: 'Двойной бекон-бургер', price: '690' },
    { name: 'Пицца Пепперони', price: '650' },
    { name: 'Пицца 4 сыра', price: '690' },
  ]},
  { cat: 'Напитки', icon: 'GlassWater', items: [
    { name: 'Лимонад домашний', price: '250' },
    { name: 'Крафтовое пиво 0.5', price: '350' },
    { name: 'Коктейль «Турбина»', price: '490' },
    { name: 'Кофе / Чай', price: '180' },
  ]},
];

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-2xl tracking-wider">
            <Icon name="Disc3" className="text-primary animate-glow rounded-full" size={28} />
            <span className="text-gradient">ТУРБИНА</span>
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <Button asChild className="hidden lg:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
            <a href="#booking">Забронировать</a>
          </Button>
          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {mobileOpen && (
          <nav className="lg:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-3 animate-fade-in">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-base py-1 text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 grid-glow">
        <div className="absolute inset-0">
          <img src={IMG_HALL} alt="Боулинг" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        </div>
        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-sm font-medium mb-6 animate-fade-in">
              <Icon name="Sparkles" size={16} /> Новый формат отдыха в городе
            </span>
            <h1 className="font-display font-bold uppercase leading-[0.95] text-6xl md:text-8xl mb-6 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
Запусти свою <span className="text-gradient">ТУРБИНУ</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
              Современные дорожки, неоновая атмосфера, бар с авторскими коктейлями. Идеальное место для друзей, свиданий и вечеринок.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base h-13 px-8 animate-glow">
                <a href="#booking"><Icon name="CalendarCheck" size={20} className="mr-2" /> Забронировать дорожку</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-card/40 hover:bg-card text-foreground font-semibold text-base h-13 px-8">
                <a href="#menu"><Icon name="UtensilsCrossed" size={20} className="mr-2" /> Смотреть меню</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 mt-14 animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
              {[['12', 'дорожек'], ['24/7', 'работаем'], ['5★', 'рейтинг гостей']].map(([n, t]) => (
                <div key={t}>
                  <div className="font-display text-4xl font-bold text-gradient">{n}</div>
                  <div className="text-sm text-muted-foreground">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 relative">
        <div className="container">
          <SectionHead eyebrow="Бронирование" title="Выбери своё время" subtitle="Гибкие тарифы на любой формат отдыха — от утренней игры до зажигательных выходных." />
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {tariffs.map((t) => (
              <div key={t.name} className={`relative rounded-2xl border p-7 transition-transform hover:-translate-y-1 ${t.popular ? 'border-primary bg-primary/10 shadow-[0_0_40px_hsl(var(--primary)/0.25)]' : 'border-border bg-card'}`}>
                {t.popular && <span className="absolute -top-3 left-7 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">ХИТ</span>}
                <Icon name={t.icon} size={32} className="text-accent mb-4" />
                <h3 className="font-display text-2xl font-bold uppercase">{t.name}</h3>
                <p className="text-sm text-muted-foreground mb-5">{t.time}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-gradient">{t.price}</span>
                  <span className="text-muted-foreground">{t.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Booking form */}
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold uppercase mb-6 flex items-center gap-2">
              <Icon name="CalendarPlus" className="text-primary" /> Забронировать стол
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Ваше имя"><Input placeholder="Иван" className="bg-background border-border" /></Field>
              <Field label="Телефон"><Input placeholder="+7 (___) ___-__-__" className="bg-background border-border" /></Field>
              <Field label="Дата"><Input type="date" className="bg-background border-border" /></Field>
              <Field label="Тариф">
                <Select>
                  <SelectTrigger className="bg-background border-border"><SelectValue placeholder="Выберите тариф" /></SelectTrigger>
                  <SelectContent>
                    {tariffs.map((t) => <SelectItem key={t.name} value={t.name}>{t.name} — {t.price}{t.unit}</SelectItem>)}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Количество гостей"><Input type="number" min={1} placeholder="4" className="bg-background border-border" /></Field>
              <Field label="Дорожек"><Input type="number" min={1} placeholder="1" className="bg-background border-border" /></Field>
            </div>
            <Button size="lg" className="w-full mt-7 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12">
              <Icon name="Check" size={20} className="mr-2" /> Отправить заявку
            </Button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-card/30">
        <div className="container">
          <SectionHead eyebrow="Галерея" title="Атмосфера клуба" subtitle="Загляни внутрь: неоновые дорожки, современное оборудование и уютный бар." />
          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[520px]">
            {gallery.map((g) => (
              <div key={g.title} className={`group relative overflow-hidden rounded-2xl border border-border ${g.span} h-64 md:h-auto`}>
                <img src={g.src} alt={g.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <Icon name="Camera" size={18} className="text-accent" />
                  <span className="font-display font-semibold uppercase tracking-wide">{g.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24">
        <div className="container">
          <SectionHead eyebrow="Меню" title="Вкусно между бросками" subtitle="Сытные закуски, сочные бургеры и освежающие напитки — прямо к вашей дорожке." />
          <div className="grid md:grid-cols-3 gap-6">
            {menu.map((m) => (
              <div key={m.cat} className="rounded-2xl border border-border bg-card p-7">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Icon name={m.icon} size={22} className="text-primary" />
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase">{m.cat}</h3>
                </div>
                <ul className="space-y-4">
                  {m.items.map((i) => (
                    <li key={i.name} className="flex items-baseline justify-between gap-3">
                      <span className="text-foreground/90">{i.name}</span>
                      <span className="flex-1 border-b border-dashed border-border mx-1 translate-y-[-3px]" />
                      <span className="font-semibold text-accent whitespace-nowrap">{i.price} ₽</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-card/30">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={IMG_BALLS} alt="О клубе" className="rounded-2xl border border-border w-full object-cover h-[420px]" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 hidden md:block animate-float">
              <div className="font-display text-3xl font-bold">8 лет</div>
              <div className="text-sm">дарим эмоции</div>
            </div>
          </div>
          <div>
            <SectionHead align="left" eyebrow="О клубе" title="Больше, чем боулинг" subtitle="" />
            <p className="text-muted-foreground text-lg mb-6">
              STRIKE — это место, где спорт встречается с вечеринкой. Профессиональные дорожки, светомузыка, бар с авторскими коктейлями и команда, которая знает толк в отдыхе.
            </p>
            <ul className="space-y-4">
              {[
                ['Trophy', 'Профессиональное оборудование Brunswick'],
                ['Music', 'Светомузыка и диджей по выходным'],
                ['Users', 'Зоны для компаний и корпоративов'],
                ['Cake', 'Организация дней рождения под ключ'],
              ].map(([ic, txt]) => (
                <li key={txt} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <Icon name={ic} size={18} className="text-accent" />
                  </span>
                  <span className="text-foreground/90">{txt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="container">
          <SectionHead eyebrow="Контакты" title="Ждём в гости" subtitle="Мы в ТРЦ People's Park — 3 этаж, рядом с кинотеатром." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'MapPin', title: 'Адрес', lines: ['г. Улан-Удэ', 'ул. Жердева, 104Б, 3 этаж', 'ТРЦ People\'s Park'] },
              { icon: 'Phone', title: 'Телефон', lines: ['+7 (3012) 42-09-02', 'Бронь и вопросы'] },
              { icon: 'Clock', title: 'Время работы', lines: ['Пн–Чт: 11:00 – 02:00', 'Пт: 11:00 – 03:00', 'Сб: 10:00 – 03:00', 'Вс: 10:00 – 02:00'] },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-7 text-center">
                <span className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-5">
                  <Icon name={c.icon} size={26} className="text-primary" />
                </span>
                <h3 className="font-display text-lg font-bold uppercase mb-2">{c.title}</h3>
                {c.lines.map((l) => <p key={l} className="text-muted-foreground">{l}</p>)}
              </div>
            ))}
          </div>
          {/* Map */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-border" style={{ height: 400 }}>
            <iframe
              title="Боулинг Турбина на карте"
              src="https://yandex.ru/map-widget/v1/?ll=107.608038%2C51.838725&z=17&pt=107.608038%2C51.838725%2Cpm2rdm&text=%D0%A3%D0%BB%D0%B0%D0%BD-%D0%A3%D0%B4%D1%8D%2C+%D1%83%D0%BB.+%D0%96%D0%B5%D1%80%D0%B4%D0%B5%D0%B2%D0%B0+104%D0%91"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              style={{ border: 0 }}
            />
          </div>

          <div className="flex justify-center gap-4 mt-10">
            {['Send', 'Instagram', 'Phone'].map((ic) => (
              <a key={ic} href="#" className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Icon name={ic} size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <Icon name="Disc3" className="text-primary" size={22} />
            <span className="text-gradient">ТУРБИНА</span>
          </div>
          <p>© 2026 ТУРБИНА Боулинг клуб. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

const SectionHead = ({ eyebrow, title, subtitle, align = 'center' }: { eyebrow: string; title: string; subtitle?: string; align?: 'center' | 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'text-left'}`}>
    <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-3">{eyebrow}</span>
    <h2 className="font-display font-bold uppercase text-4xl md:text-5xl leading-tight">{title}</h2>
    {subtitle && <p className="text-muted-foreground mt-4 text-lg">{subtitle}</p>}
  </div>
);

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <Label className="text-sm text-muted-foreground">{label}</Label>
    {children}
  </div>
);

export default Index;