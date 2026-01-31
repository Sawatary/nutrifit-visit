export type LocaleCode = 'ru' | 'uk' | 'kk' | 'uz' | 'en' | 'es'

export interface FaqItem {
  q: string
  a: string
}

export interface HelpItem {
  title: string
  desc: string
}

export interface TeamMember {
  initials: string
  name: string
  role: string
  bio: string
}

export interface Translations {
  nav: { features: string; team: string; help: string; faq: string; pricing: string }
  hero: {
    title: string
    desc: string
    cta: string
    strip: [string, string, string]
    imageAlt: string
  }
  features: {
    title: string
    desc: string
    items: { title: string; desc: string }[]
  }
  team: {
    title: string
    desc: string
    members: TeamMember[]
  }
  faq: { title: string; items: FaqItem[] }
  help: { title: string; items: HelpItem[] }
  helpCta: {
    needHelp: string
    needHelpDesc: string
    contact: string
    needHelpBtn: string
    startNow: string
    startNowDesc: string
    startNowBtn: string
  }
  bottomCta: {
    title: string
    desc: string
    features: [string, string, string]
    primaryBtn: string
    secondaryBtn: string
  }
  footer: {
    tagline: string
    links: { features: string; team: string; help: string; faq: string; legal: string }
    copyright: string
    companyName: string
    jurisdiction: string
    email: string
  }
  pricing: {
    title: string
    subtitle: string
    lite: { name: string; price: string; pricePeriod?: string; features: string[]; buttonText: string }
    pro: { name: string; price: string; pricePeriod: string; features: string[]; buttonText: string }
    expert: { name: string; price: string; pricePeriod: string; features: string[]; buttonText: string }
  }
  legal: {
    title: string
    desc: string
    privacyPolicy: string
    userAgreement: string
    publicOffer: string
    openDoc: string
  }
  theme: { light: string; dark: string; system: string; lightLabel: string; darkLabel: string; systemLabel: string; groupLabel: string }
  langSelectLabel: string
}

const ru: Translations = {
  nav: { features: 'Возможности', team: 'Команда', help: 'Справка', faq: 'FAQ', pricing: 'Тарифы' },
  hero: {
    title: 'Здоровье, питание и цели — в одном месте',
    desc: 'NutriFit помогает вести дневник питания, следить за активностью и весом, хранить анализы и идти к целям вместе с наставниками и марафонами.',
    cta: 'Перейти на NutriFit',
    strip: ['Конфиденциальность данных', 'Поддержка датчиков', 'Работа со специалистами'],
    imageAlt: 'Превью интерфейса: карта клиента, графики, дневник питания',
  },
  features: {
    title: 'Возможности',
    desc: 'Все ключевые данные о здоровье и питании — в одном месте. Для клиентов, специалистов и их наставников.',
    items: [
      { title: 'Дневник питания', desc: 'Учёт калорий, БЖУ и приёмов пищи с удобной аналитикой. Добавляйте приёмы пищи, смотрите отчёты по дням и неделям.' },
      { title: 'Активность и вес', desc: 'Интеграция с датчиками, графики динамики и ежедневные цели. Отслеживайте вес, шаги, сон и активность в одном интерфейсе.' },
      { title: 'Лабораторные анализы', desc: 'Хранение и отслеживание результатов анализов в одном месте. Загружайте результаты, сравнивайте с предыдущими и делитесь с врачом.' },
      { title: 'Клиенты', desc: 'Список клиентов, отслеживание прогресса и работа со специалистами. Ведите базу клиентов, назначайте цели и отслеживайте их выполнение.' },
    ],
  },
  team: {
    title: 'Команда',
    desc: 'Люди, которые делают NutriFit удобным и полезным для вас.',
    members: [
      { initials: 'АС', name: 'Алексей Смирнов', role: 'CEO, основатель', bio: 'Стратегия продукта и развитие компании.' },
      { initials: 'МК', name: 'Мария Козлова', role: 'Product Lead', bio: 'Продукт и пользовательский опыт.' },
      { initials: 'ДП', name: 'Дмитрий Петров', role: 'Tech Lead', bio: 'Разработка платформы и интеграции.' },
      { initials: 'ЕВ', name: 'Елена Волкова', role: 'Head of Nutrition', bio: 'Питание и методология марафонов.' },
    ],
  },
  faq: {
    title: 'Частые вопросы',
    items: [
      { q: 'Безопасны ли мои данные?', a: 'Да. Мы храним данные в зашифрованном виде и соблюдаем политику конфиденциальности.' },
      { q: 'Есть ли мобильное приложение?', a: 'Сайт адаптирован под мобильные устройства. Приложения для iOS и Android в разработке.' },
      { q: 'Как подключить датчики?', a: 'В настройках можно подключить Google Fit, Apple Health и др. для шагов, сна и активности.' },
      { q: 'Сколько стоит?', a: 'Базовый функционал бесплатен. Расширенные возможности и марафоны — по подписке.' },
    ],
  },
  help: {
    title: 'Справка',
    items: [
      { title: 'Как начать пользоваться NUTRIFIT', desc: 'Регистрация, настройка профиля и первые шаги.' },
      { title: 'Дневник питания и цели', desc: 'Как вести дневник и ставить цели по калориям и БЖУ.' },
      { title: 'Подключение датчиков', desc: 'Часы, трекеры и приложения для шагов и сна.' },
      { title: 'Работа со специалистом', desc: 'Как найти наставника и участвовать в марафонах.' },
    ],
  },
  helpCta: {
    needHelp: 'Нужна помощь?',
    needHelpDesc: 'Напишите в поддержку — отвечаем в течение рабочего дня.',
    contact: 'support@nutrifit.ru',
    needHelpBtn: 'Написать в поддержку',
    startNow: 'Начните пользоваться сейчас',
    startNowDesc: 'Перейдите на NutriFit и настройте дневник питания, цели и активность под себя.',
    startNowBtn: 'Перейти на NutriFit',
  },
  bottomCta: {
    title: 'Готовы изменить свой образ жизни?',
    desc: 'Ведите дневник питания, отслеживайте активность и достигайте целей под руководством специалистов. Присоединяйтесь к платформе, которая уже помогает тысячам людей становиться здоровее.',
    features: [
      'Умные дневники питания и активности',
      'Аналитика прогресса и прогнозы веса',
      'Поддержка специалистов и сообщество',
    ],
    primaryBtn: 'Начать бесплатно',
    secondaryBtn: 'Для специалистов',
  },
  footer: {
    tagline: 'Здоровье, питание и цели в одном приложении',
    links: { features: 'Возможности', team: 'Команда', help: 'Справка', faq: 'FAQ', legal: 'Правовые документы' },
    copyright: 'Все права защищены.',
    companyName: 'NutriFit',
    jurisdiction: 'Юрисдикция: Аргентина',
    email: 'office@nutrifit.info',
  },
  pricing: {
    title: 'Тарифы',
    subtitle: 'Прозрачные планы для клиентов, специалистов и команд.',
    lite: {
      name: 'Lite',
      price: 'Бесплатно',
      features: [
        'Дневник питания и активности',
        'Базовая аналитика',
        'Участие в марафонах стройности',
        'Ведение до 3 клиентов (далее — платный доступ)',
      ],
      buttonText: 'Начать бесплатно',
    },
    pro: {
      name: 'PRO',
      price: '$5',
      pricePeriod: '/ мес',
      features: [
        'Всё из тарифа Lite',
        'Доступ к лабораторным анализам и расширенной аналитике',
        'Инструменты прогнозирования',
        'Проведение собственных марафонов стройности',
        'Расширенный лимит по ведению клиентов до 20 человек',
      ],
      buttonText: 'Оформить подписку',
    },
    expert: {
      name: 'EXPERT',
      price: '$10',
      pricePeriod: '/ мес',
      features: [
        'Всё из тарифа PRO',
        'Расширенное ведение клиентов и дополнительные инструменты',
        'Полный доступ без ограничений по количеству клиентов',
      ],
      buttonText: 'Оформить подписку',
    },
  },
  legal: {
    title: 'Правовые документы',
    desc: 'Основные документы сервиса NutriFit. Документы открываются на nutrifit.info.',
    privacyPolicy: 'Политика конфиденциальности',
    userAgreement: 'Пользовательское соглашение',
    publicOffer: 'Публичная оферта',
    openDoc: 'Открыть документ',
  },
  theme: { light: 'Светлая тема', dark: 'Тёмная тема', system: 'Как в системе', lightLabel: 'Светлая тема', darkLabel: 'Тёмная тема', systemLabel: 'Как в системе', groupLabel: 'Выбор темы' },
  langSelectLabel: 'Выбор языка',
}

const uk: Translations = {
  nav: { features: 'Можливості', team: 'Команда', help: 'Довідка', faq: 'FAQ', pricing: 'Тарифи' },
  hero: {
    title: 'Здоров\'я, харчування та цілі — в одному місці',
    desc: 'NutriFit допомагає вести щоденник харчування, слідкувати за активністю та вагою, зберігати аналізи та йти до цілей разом з наставниками та марафонами.',
    cta: 'Перейти на NutriFit',
    strip: ['Конфіденційність даних', 'Підтримка датчиків', 'Робота з фахівцями'],
    imageAlt: 'Прев\'ю інтерфейсу: карта клієнта, графіки, щоденник харчування',
  },
  features: {
    title: 'Можливості',
    desc: 'Усі ключові дані про здоров\'я та харчування — в одному місці. Для клієнтів, фахівців та їх наставників.',
    items: [
      { title: 'Щоденник харчування', desc: 'Облік калорій, БЖУ та прийомів їжі з зручною аналітикою. Додавайте прийоми їжі, переглядайте звіти по днях та тижнях.' },
      { title: 'Активність та вага', desc: 'Інтеграція з датчиками, графіки динаміки та щоденні цілі. Відстежуйте вагу, кроки, сон та активність в одному інтерфейсі.' },
      { title: 'Лабораторні аналізи', desc: 'Зберігання та відстеження результатів аналізів в одному місці. Завантажуйте результати, порівнюйте з попередніми та діліться з лікарем.' },
      { title: 'Клієнти', desc: 'Список клієнтів, відстеження прогресу та робота з фахівцями. Ведіть базу клієнтів, призначайте цілі та відстежуйте їх виконання.' },
    ],
  },
  team: {
    title: 'Команда',
    desc: 'Люди, які роблять NutriFit зручним та корисним для вас.',
    members: [
      { initials: 'АС', name: 'Олексій Смирнов', role: 'CEO, засновник', bio: 'Стратегія продукту та розвиток компанії.' },
      { initials: 'МК', name: 'Марія Козлова', role: 'Product Lead', bio: 'Продукт та користувацький досвід.' },
      { initials: 'ДП', name: 'Дмитро Петров', role: 'Tech Lead', bio: 'Розробка платформи та інтеграції.' },
      { initials: 'ЕВ', name: 'Олена Волкова', role: 'Head of Nutrition', bio: 'Харчування та методологія марафонів.' },
    ],
  },
  faq: {
    title: 'Часті питання',
    items: [
      { q: 'Чи безпечні мої дані?', a: 'Так. Ми зберігаємо дані в зашифрованому вигляді та дотримуємось політики конфіденційності.' },
      { q: 'Чи є мобільний додаток?', a: 'Сайт адаптований під мобільні пристрої. Додатки для iOS та Android у розробці.' },
      { q: 'Як підключити датчики?', a: 'В налаштуваннях можна підключити Google Fit, Apple Health та ін. для кроків, сну та активності.' },
      { q: 'Скільки коштує?', a: 'Базовий функціонал безкоштовний. Розширені можливості та марафони — за підпискою.' },
    ],
  },
  help: {
    title: 'Довідка',
    items: [
      { title: 'Як почати користуватися NUTRIFIT', desc: 'Реєстрація, налаштування профілю та перші кроки.' },
      { title: 'Щоденник харчування та цілі', desc: 'Як вести щоденник та ставити цілі за калоріями та БЖУ.' },
      { title: 'Підключення датчиків', desc: 'Годинники, трекери та додатки для кроків та сну.' },
      { title: 'Робота з фахівцем', desc: 'Як знайти наставника та брати участь у марафонах.' },
    ],
  },
  helpCta: {
    needHelp: 'Потрібна допомога?',
    needHelpDesc: 'Напишіть у підтримку — відповідаємо протягом робочого дня.',
    contact: 'support@nutrifit.ru',
    needHelpBtn: 'Написати у підтримку',
    startNow: 'Почніть користуватися зараз',
    startNowDesc: 'Перейдіть на NutriFit та налаштуйте щоденник харчування, цілі та активність під себе.',
    startNowBtn: 'Перейти на NutriFit',
  },
  bottomCta: {
    title: 'Готові змінити свій спосіб життя?',
    desc: 'Ведіть щоденник харчування, відстежуйте активність та досягайте цілей під керівництвом фахівців. Приєднуйтесь до платформи, яка вже допомагає тисячам людей ставати здоровішими.',
    features: [
      'Розумні щоденники харчування та активності',
      'Аналітика прогресу та прогнози ваги',
      'Підтримка фахівців та спільнота',
    ],
    primaryBtn: 'Почати безкоштовно',
    secondaryBtn: 'Для фахівців',
  },
  footer: {
    tagline: 'Здоров\'я, харчування та цілі в одному додатку',
    links: { features: 'Можливості', team: 'Команда', help: 'Довідка', faq: 'FAQ', legal: 'Правові документи' },
    copyright: 'Усі права захищені.',
    companyName: 'NutriFit',
    jurisdiction: 'Юрисдикція: Аргентина',
    email: 'office@nutrifit.info',
  },
  pricing: {
    title: 'Тарифи',
    subtitle: 'Прозорі плани для клієнтів, фахівців та команд.',
    lite: {
      name: 'Lite',
      price: 'Безкоштовно',
      features: [
        'Щоденник харчування та активності',
        'Базова аналітика',
        'Участь у марафонах стройності',
        'Ведення до 3 клієнтів (далі — платний доступ)',
      ],
      buttonText: 'Почати безкоштовно',
    },
    pro: {
      name: 'PRO',
      price: '$5',
      pricePeriod: '/ міс',
      features: [
        'Усе з тарифу Lite',
        'Доступ до лабораторних аналізів та розширеної аналітики',
        'Інструменти прогнозування',
        'Проведення власних марафонів стройності',
        'Розширений ліміт ведення клієнтів до 20 осіб',
      ],
      buttonText: 'Оформити підписку',
    },
    expert: {
      name: 'EXPERT',
      price: '$10',
      pricePeriod: '/ міс',
      features: [
        'Усе з тарифу PRO',
        'Розширене ведення клієнтів та додаткові інструменти',
        'Повний доступ без обмежень за кількістю клієнтів',
      ],
      buttonText: 'Оформити підписку',
    },
  },
  legal: {
    title: 'Правові документи',
    desc: 'Основні документи сервісу NutriFit. Документи відкриваються на nutrifit.info.',
    privacyPolicy: 'Політика конфіденційності',
    userAgreement: 'Користувацька угода',
    publicOffer: 'Публічна оферта',
    openDoc: 'Відкрити документ',
  },
  theme: { light: 'Світла тема', dark: 'Темна тема', system: 'Як у системі', lightLabel: 'Світла тема', darkLabel: 'Темна тема', systemLabel: 'Як у системі', groupLabel: 'Вибір теми' },
  langSelectLabel: 'Вибір мови',
}

const kk: Translations = {
  nav: { features: 'Мүмкіндіктер', team: 'Команда', help: 'Анықтама', faq: 'FAQ', pricing: 'Тарифтер' },
  hero: {
    title: 'Денсаулық, тамақтану және мақсаттар — бір жерде',
    desc: 'NutriFit тамақтану күнделігін жүргізуге, белсенділік пен салмақты бақылауға, талдауларды сақтауға және нұсқаушылар мен марафондармен мақсатқа жетуге көмектеседі.',
    cta: 'NutriFit-ке өту',
    strip: ['Деректердің құпиялылығы', 'Сенсорларды қолдау', 'Мамандармен жұмыс'],
    imageAlt: 'Интерфейс алдын ала қарау: клиент картасы, графиктер, тамақтану күнделігі',
  },
  features: {
    title: 'Мүмкіндіктер',
    desc: 'Денсаулық пен тамақтану туралы барлық негізгі деректер бір жерде. Клиенттер, мамандар және олардың нұсқаушылары үшін.',
    items: [
      { title: 'Тамақтану күнделігі', desc: 'Калориялар, БЖК және тамақ қабылдауды ыңғайлы аналитикамен есептеу. Тамақ қабылдауды қосыңыз, күндер мен апталар бойынша есептіліктерді қараңыз.' },
      { title: 'Белсенділік және салмақ', desc: 'Сенсорлармен интеграция, динамика графиктері және күнделікті мақсаттар. Салмақты, қадамдарды, ұйқыны және белсенділікті бір интерфейсте бақылаңыз.' },
      { title: 'Зертханалық талдаулар', desc: 'Талдау нәтижелерін бір жерде сақтау және бақылау. Нәтижелерді жүктеңіз, алдыңғылармен салыстырыңыз және дәрігермен бөлісіңіз.' },
      { title: 'Клиенттер', desc: 'Клиенттер тізімі, прогресті бақылау және мамандармен жұмыс. Клиенттер базасын жүргізіңіз, мақсаттар тағайындаңыз және орындалуын бақылаңыз.' },
    ],
  },
  team: {
    title: 'Команда',
    desc: 'NutriFit-ті сіз үшін ыңғайлы және пайдалы ететін адамдар.',
    members: [
      { initials: 'АС', name: 'Алексей Смирнов', role: 'CEO, негізін қалаушы', bio: 'Өнім стратегиясы және компанияның дамуы.' },
      { initials: 'МК', name: 'Мария Козлова', role: 'Product Lead', bio: 'Өнім және пайдаланушы тәжірибесі.' },
      { initials: 'ДП', name: 'Дмитрий Петров', role: 'Tech Lead', bio: 'Платформаны әзірлеу және интеграциялар.' },
      { initials: 'ЕВ', name: 'Елена Волкова', role: 'Head of Nutrition', bio: 'Тамақтану және марафондар методологиясы.' },
    ],
  },
  faq: {
    title: 'Жиі қойылатын сұрақтар',
    items: [
      { q: 'Менің деректерім қауіпсіз бе?', a: 'Иә. Деректерді шифрланған түрде сақтаймыз және құпиялылық саясатын сақтаймыз.' },
      { q: 'Мобильді қосымша бар ма?', a: 'Сайт мобильді құрылғыларға бейімделген. iOS және Android қосымшалары әзірленуде.' },
      { q: 'Сенсорларды қалай қосуға болады?', a: 'Параметрлерде Google Fit, Apple Health және т.б. қадамдар, ұйқы және белсенділік үшін қосуға болады.' },
      { q: 'Қанша тұрады?', a: 'Негізгі функциялар тегін. Кеңейтілген мүмкіндіктер және марафондар — жазылым бойынша.' },
    ],
  },
  help: {
    title: 'Анықтама',
    items: [
      { title: 'NUTRIFIT пайдалануды қалай бастауға болады', desc: 'Тіркелу, профильді баптау және алғашқы қадамдар.' },
      { title: 'Тамақтану күнделігі және мақсаттар', desc: 'Күнделік жүргізу және калория мен БЖК бойынша мақсат қою.' },
      { title: 'Сенсорларды қосу', desc: 'Сағаттар, трекерлер және қадамдар мен ұйқы үшін қосымшалар.' },
      { title: 'Маманмен жұмыс', desc: 'Нұсқаушыны табу және марафондарға қатысу.' },
    ],
  },
  helpCta: {
    needHelp: 'Көмек керек пе?',
    needHelpDesc: 'Қолдауға жазыңыз — жұмыс күні ішінде жауап береміз.',
    contact: 'support@nutrifit.ru',
    needHelpBtn: 'Қолдауға жазу',
    startNow: 'Қазір пайдалануды бастаңыз',
    startNowDesc: 'NutriFit-ке өтіңіз және тамақтану күнделігі, мақсаттар мен белсенділікті өзіңізге баптаңыз.',
    startNowBtn: 'NutriFit-ке өту',
  },
  bottomCta: {
    title: 'Өмір салтыңызды өзгертуге дайынсыз ба?',
    desc: 'Тамақтану күнделігін жүргізіңіз, белсенділікті бақылаңыз және мамандар жетекшілігінде мақсатқа жетіңіз. Мыңдаған адамдарға сау болуға көмектесетін платформаға қосылыңыз.',
    features: [
      'Тамақтану мен белсенділік күнделіктері',
      'Прогресс аналитикасы және салмақ болжамы',
      'Мамандар қолдауы және қоғамдастық',
    ],
    primaryBtn: 'Тегін бастау',
    secondaryBtn: 'Мамандар үшін',
  },
  footer: {
    tagline: 'Денсаулық, тамақтану және мақсаттар бір қосымшада',
    links: { features: 'Мүмкіндіктер', team: 'Команда', help: 'Анықтама', faq: 'FAQ', legal: 'Құқықтық құжаттар' },
    copyright: 'Барлық құқықтар қорғалған.',
    companyName: 'NutriFit',
    jurisdiction: 'Юрисдикция: Аргентина',
    email: 'office@nutrifit.info',
  },
  pricing: {
    title: 'Тарифтер',
    subtitle: 'Клиенттер, мамандар және командалар үшін ашық жоспарлар.',
    lite: {
      name: 'Lite',
      price: 'Тегін',
      features: [
        'Тамақтану және белсенділік күнделігі',
        'Базалық аналитика',
        'Стройность марафондарына қатысу',
        '3 клиентке дейін басқару (одан кейін — ақылы қол жеткізу)',
      ],
      buttonText: 'Тегін бастау',
    },
    pro: {
      name: 'PRO',
      price: '$5',
      pricePeriod: '/ ай',
      features: [
        'Lite тарифінің бәрі',
        'Зертханалық талдаулар мен кеңейтілген аналитикаға қол жеткізу',
        'Прогноздау құралдары',
        'Өз стройность марафондарын өткізу',
        'Клиенттерді басқару шегі 20 адамға дейін',
      ],
      buttonText: 'Жазылымды рәсімдеу',
    },
    expert: {
      name: 'EXPERT',
      price: '$10',
      pricePeriod: '/ ай',
      features: [
        'PRO тарифінің бәрі',
        'Клиенттерді кеңейтілген басқару және қосымша құралдар',
        'Клиент саны бойынша шектеусіз толық қол жеткізу',
      ],
      buttonText: 'Жазылымды рәсімдеу',
    },
  },
  legal: {
    title: 'Құқықтық құжаттар',
    desc: 'NutriFit сервисінің негізгі құжаттары. Құжаттар nutrifit.info сайтында ашылады.',
    privacyPolicy: 'Құпиялылық саясаты',
    userAgreement: 'Пайдаланушы келісімі',
    publicOffer: 'Жария оферта',
    openDoc: 'Құжатты ашу',
  },
  theme: { light: 'Жарық тақырып', dark: 'Қараңғы тақырып', system: 'Жүйедегідей', lightLabel: 'Жарық тақырып', darkLabel: 'Қараңғы тақырып', systemLabel: 'Жүйедегідей', groupLabel: 'Тақырыпты таңдау' },
  langSelectLabel: 'Тілді таңдау',
}

const uz: Translations = {
  nav: { features: 'Imkoniyatlar', team: 'Jamoa', help: 'Yordam', faq: 'FAQ', pricing: 'Tariflar' },
  hero: {
    title: 'Salomatlik, ovqatlanish va maqsadlar — bitta joyda',
    desc: 'NutriFit ovqatlanish kundaligini yuritish, faollik va vaznni kuzatish, tahlillarni saqlash va maslahatchilar va marafonlar bilan maqsadlarga erishishga yordam beradi.',
    cta: "NutriFitga o'tish",
    strip: ["Ma'lumotlarning maxfiyligi", "Sensorni qo'llab-quvvatlash", "Mutaxassislar bilan ishlash"],
    imageAlt: "Interfeys ko'rinishi: mijoz kartasi, grafikalar, ovqatlanish kundaligi",
  },
  features: {
    title: 'Imkoniyatlar',
    desc: "Salomatlik va ovqatlanish bo'yicha barcha asosiy ma'lumotlar bitta joyda. Mijozlar, mutaxassislar va ularning maslahatchilari uchun.",
    items: [
      { title: 'Ovqatlanish kundaligi', desc: "Kaloriyalar, BJU va ovqat qabul qilishni qulay tahlil bilan hisoblash. Ovqat qabul qilishni qo'shing, kunlar va haftalar bo'yicha hisobotlarni ko'ring." },
      { title: 'Faollik va vazn', desc: "Sensorga integratsiya, dinamika grafiklari va kunlik maqsadlar. Vazn, qadamlar, uyqu va faollikni bitta interfeysda kuzating." },
      { title: 'Laboratoriya tahlillari', desc: "Tahlil natijalarini bitta joyda saqlash va kuzatish. Natijalarni yuklang, oldingilari bilan solishtiring va shifokor bilan ulashing." },
      { title: "Mijozlar", desc: "Mijozlar ro'yxati, progressni kuzatish va mutaxassislar bilan ishlash. Mijozlar bazasini yuriting, maqsadlar tayinlang va bajarilishini kuzating." },
    ],
  },
  team: {
    title: 'Jamoa',
    desc: "NutriFitni siz uchun qulay va foydali qiladigan odamlar.",
    members: [
      { initials: 'АС', name: 'Aleksey Smirnov', role: "CEO, asoschi", bio: "Mahsulot strategiyasi va kompaniya rivojlanishi." },
      { initials: 'МК', name: 'Mariya Kozlova', role: 'Product Lead', bio: "Mahsulot va foydalanuvchi tajribasi." },
      { initials: 'ДП', name: 'Dmitriy Petrov', role: 'Tech Lead', bio: "Platforma ishlab chiqish va integratsiyalar." },
      { initials: 'ЕВ', name: 'Yelena Volkova', role: 'Head of Nutrition', bio: "Ovqatlanish va marafonlar metodologiyasi." },
    ],
  },
  faq: {
    title: "Tez-tez so'raladigan savollar",
    items: [
      { q: "Ma'lumotlarim xavfsizmi?", a: "Ha. Ma'lumotlarni shifrlangan holda saqlaymiz va maxfiylik siyosatiga amal qilamiz." },
      { q: "Mobil ilova bormi?", a: "Sayt mobil qurilmalarga moslashtirilgan. iOS va Android ilovalari ishlab chiqilmoqda." },
      { q: "Sensorni qanday ulash mumkin?", a: "Sozlamalarda Google Fit, Apple Health va boshqalarni qadamlar, uyqu va faollik uchun ulash mumkin." },
      { q: "Narxi qancha?", a: "Asosiy funksiyalar bepul. Kengaytirilgan imkoniyatlar va marafonlar — obuna bo'yicha." },
    ],
  },
  help: {
    title: 'Yordam',
    items: [
      { title: "NUTRIFITdan qanday foydalanishni boshlash", desc: "Ro'yxatdan o'tish, profil sozlash va birinchi qadamlar." },
      { title: "Ovqatlanish kundaligi va maqsadlar", desc: "Kundalik yuritish va kaloriya va BJU bo'yicha maqsad qo'yish." },
      { title: "Sensorni ulash", desc: "Soatlar, trekerlar va qadamlar va uyqu uchun ilovalar." },
      { title: "Mutaxassis bilan ishlash", desc: "Maslahatchi topish va marafonlarda qatnashish." },
    ],
  },
  helpCta: {
    needHelp: "Yordam kerakmi?",
    needHelpDesc: "Qo'llab-quvvatlashga yozing — ish kuni davomida javob beramiz.",
    contact: 'support@nutrifit.ru',
    needHelpBtn: "Qo'llab-quvvatlashga yozish",
    startNow: "Hozir foydalanishni boshlang",
    startNowDesc: "NutriFitga o'ting va ovqatlanish kundaligi, maqsadlar va faollikni o'zingizga sozlang.",
    startNowBtn: "NutriFitga o'tish",
  },
  bottomCta: {
    title: "Hayot tarzingizni o'zgartirishga tayyormisiz?",
    desc: "Ovqatlanish kundaligini yuriting, faollikni kuzating va mutaxassislar rahbarligida maqsadlarga erishing. Minglab odamlarga sog'lomroq bo'lishga yordam beradigan platformaga qo'shiling.",
    features: [
      "Ovqatlanish va faollik kundaliklari",
      "Progress tahlili va vazn prognozlari",
      "Mutaxassislar qo'llovi va jamiyat",
    ],
    primaryBtn: "Bepul boshlash",
    secondaryBtn: "Mutaxassislar uchun",
  },
  footer: {
    tagline: "Salomatlik, ovqatlanish va maqsadlar bitta ilovada",
    links: { features: 'Imkoniyatlar', team: 'Jamoa', help: 'Yordam', faq: 'FAQ', legal: 'Huquqiy hujjatlar' },
    copyright: "Barcha huquqlar himoyalangan.",
    companyName: 'NutriFit',
    jurisdiction: 'Yurisdiktsiya: Argentina',
    email: 'office@nutrifit.info',
  },
  pricing: {
    title: 'Tariflar',
    subtitle: "Mijozlar, mutaxassislar va jamoalar uchun ochiq rejalar.",
    lite: {
      name: 'Lite',
      price: 'Bepul',
      features: [
        "Ovqatlanish va faollik kundaligi",
        "Asosiy analitika",
        "Sroynost marafonlarida qatnashish",
        "3 tagacha mijozni boshqarish (keyin — pullik kirish)",
      ],
      buttonText: "Bepul boshlash",
    },
    pro: {
      name: 'PRO',
      price: '$5',
      pricePeriod: '/ oy',
      features: [
        "Lite tarifidagi barchasi",
        "Lab tahlillari va kengaytirilgan analitikaga kirish",
        "Prognozlashtirish vositalari",
        "O'z sroynost marafonlarini o'tkazish",
        "Mijozlarni boshqarish limiti 20 kishigacha",
      ],
      buttonText: "Obunani rasmiylashtirish",
    },
    expert: {
      name: 'EXPERT',
      price: '$10',
      pricePeriod: '/ oy',
      features: [
        "PRO tarifidagi barchasi",
        "Kengaytirilgan mijoz boshqaruvi va qo'shimcha vositalar",
        "Mijozlar soni bo'yicha cheklovsiz to'liq kirish",
      ],
      buttonText: "Obunani rasmiylashtirish",
    },
  },
  legal: {
    title: 'Huquqiy hujjatlar',
    desc: "NutriFit xizmatining asosiy hujjatlari. Hujjatlar nutrifit.info saytida ochiladi.",
    privacyPolicy: "Maxfiylik siyosati",
    userAgreement: "Foydalanuvchi shartnomasi",
    publicOffer: "Ochiq oferta",
    openDoc: "Hujjatni ochish",
  },
  theme: { light: "Yorug' mavzu", dark: "Qorong'i mavzu", system: "Tizimdagidek", lightLabel: "Yorug' mavzu", darkLabel: "Qorong'i mavzu", systemLabel: "Tizimdagidek", groupLabel: "Mavzuni tanlash" },
  langSelectLabel: "Tilni tanlash",
}

const en: Translations = {
  nav: { features: 'Features', team: 'Team', help: 'Help', faq: 'FAQ', pricing: 'Pricing' },
  hero: {
    title: 'Health, nutrition, and goals — in one place',
    desc: 'NutriFit helps you keep a food diary, track activity and weight, store lab results, and reach your goals with mentors and challenges.',
    cta: 'Go to NutriFit',
    strip: ['Data privacy', 'Sensor support', 'Work with experts'],
    imageAlt: 'Interface preview: client dashboard, charts, food diary',
  },
  features: {
    title: 'Features',
    desc: 'All key health and nutrition data in one place. For users, professionals, and their mentors.',
    items: [
      { title: 'Food diary', desc: 'Track calories, macros, and meals with clear analytics. Log meals, view reports by day and week.' },
      { title: 'Activity and weight', desc: 'Integration with sensors, progress charts, and daily goals. Track weight, steps, sleep, and activity in one interface.' },
      { title: 'Lab results', desc: 'Store and track lab results in one place. Upload results, compare with previous ones, and share with your doctor.' },
      { title: 'Clients', desc: 'Client list, progress tracking, and working with specialists. Manage your client base, set goals, and track their completion.' },
    ],
  },
  team: {
    title: 'Team',
    desc: 'The people making NutriFit easy and useful for you.',
    members: [
      { initials: 'AS', name: 'Alexey Smirnov', role: 'CEO, Founder', bio: 'Product strategy and company growth.' },
      { initials: 'MK', name: 'Maria Kozlova', role: 'Product Lead', bio: 'Product and user experience.' },
      { initials: 'DP', name: 'Dmitry Petrov', role: 'Tech Lead', bio: 'Platform development and integrations.' },
      { initials: 'EV', name: 'Elena Volkova', role: 'Head of Nutrition', bio: 'Nutrition and challenge methodology.' },
    ],
  },
  faq: {
    title: 'FAQ',
    items: [
      { q: 'Is my data safe?', a: 'Yes. We store data encrypted and follow a strict privacy policy.' },
      { q: 'Is there a mobile app?', a: 'The site is mobile-friendly. iOS and Android apps are in development.' },
      { q: 'How do I connect sensors?', a: 'In settings you can connect Google Fit, Apple Health, and others for steps, sleep, and activity.' },
      { q: 'How much does it cost?', a: 'Core features are free. Advanced features and challenges are available by subscription.' },
    ],
  },
  help: {
    title: 'Help',
    items: [
      { title: 'Getting started with NUTRIFIT', desc: 'Registration, profile setup, and first steps.' },
      { title: 'Food diary and goals', desc: 'How to keep a diary and set calorie and macro goals.' },
      { title: 'Connecting sensors', desc: 'Watches, trackers, and apps for steps and sleep.' },
      { title: 'Working with a specialist', desc: 'How to find a mentor and join challenges.' },
    ],
  },
  helpCta: {
    needHelp: 'Need help?',
    needHelpDesc: 'Write to support — we reply within one business day.',
    contact: 'support@nutrifit.ru',
    needHelpBtn: 'Contact support',
    startNow: 'Start using now',
    startNowDesc: 'Go to NutriFit and set up your food diary, goals, and activity.',
    startNowBtn: 'Go to NutriFit',
  },
  bottomCta: {
    title: 'Ready to change your lifestyle?',
    desc: 'Keep a food diary, track activity, and reach your goals with expert guidance. Join a platform that already helps thousands of people get healthier.',
    features: [
      'Smart food and activity diaries',
      'Progress analytics and weight predictions',
      'Specialist support and community',
    ],
    primaryBtn: 'Start for free',
    secondaryBtn: 'For specialists',
  },
  footer: {
    tagline: 'Health, nutrition, and goals in one app',
    links: { features: 'Features', team: 'Team', help: 'Help', faq: 'FAQ', legal: 'Legal' },
    copyright: 'All rights reserved.',
    companyName: 'NutriFit',
    jurisdiction: 'Jurisdiction: Argentina',
    email: 'office@nutrifit.info',
  },
  pricing: {
    title: 'Pricing',
    subtitle: 'Transparent plans for clients, specialists, and teams.',
    lite: {
      name: 'Lite',
      price: 'Free',
      features: [
        'Food and activity diary',
        'Basic analytics',
        'Participation in fitness marathons',
        'Up to 3 clients (then — paid access)',
      ],
      buttonText: 'Start for free',
    },
    pro: {
      name: 'PRO',
      price: '$5',
      pricePeriod: '/ mo',
      features: [
        'Everything from Lite',
        'Access to lab analyses and advanced analytics',
        'Forecasting tools',
        'Running your own fitness marathons',
        'Extended client limit up to 20',
      ],
      buttonText: 'Subscribe',
    },
    expert: {
      name: 'EXPERT',
      price: '$10',
      pricePeriod: '/ mo',
      features: [
        'Everything from PRO',
        'Advanced client onboarding and extra tools',
        'Full access with no client limit',
      ],
      buttonText: 'Subscribe',
    },
  },
  legal: {
    title: 'Legal documents',
    desc: 'Key NutriFit service documents. Documents open on nutrifit.info.',
    privacyPolicy: 'Privacy policy',
    userAgreement: 'User agreement',
    publicOffer: 'Public offer',
    openDoc: 'Open document',
  },
  theme: { light: 'Light theme', dark: 'Dark theme', system: 'System', lightLabel: 'Light theme', darkLabel: 'Dark theme', systemLabel: 'System', groupLabel: 'Theme' },
  langSelectLabel: 'Select language',
}

const es: Translations = {
  nav: { features: 'Funciones', team: 'Equipo', help: 'Ayuda', faq: 'FAQ', pricing: 'Precios' },
  hero: {
    title: 'Salud, nutrición y metas — en un solo lugar',
    desc: 'NutriFit te ayuda a llevar un diario de alimentación, seguir actividad y peso, guardar análisis e ir hacia tus metas con mentores y retos.',
    cta: 'Ir a NutriFit',
    strip: ['Privacidad de datos', 'Soporte de sensores', 'Trabajo con expertos'],
    imageAlt: 'Vista previa del interfaz: panel del cliente, gráficos, diario de alimentación',
  },
  features: {
    title: 'Funciones',
    desc: 'Toda la información clave sobre salud y nutrición en un solo lugar. Para usuarios, profesionales y sus mentores.',
    items: [
      { title: 'Diario de alimentación', desc: 'Control de calorías, macros y comidas con análisis claros. Registra comidas, consulta informes por día y semana.' },
      { title: 'Actividad y peso', desc: 'Integración con sensores, gráficos de evolución y metas diarias. Sigue peso, pasos, sueño y actividad en una sola interfaz.' },
      { title: 'Análisis de laboratorio', desc: 'Guardar y seguir resultados de análisis en un solo lugar. Sube resultados, compáralos con anteriores y comparte con tu médico.' },
      { title: 'Clientes', desc: 'Lista de clientes, seguimiento del progreso y trabajo con expertos. Gestiona tu base de clientes, fija metas y sigue su cumplimiento.' },
    ],
  },
  team: {
    title: 'Equipo',
    desc: 'Las personas que hacen NutriFit fácil y útil para ti.',
    members: [
      { initials: 'AS', name: 'Alexey Smirnov', role: 'CEO, Fundador', bio: 'Estrategia de producto y crecimiento.' },
      { initials: 'MK', name: 'Maria Kozlova', role: 'Product Lead', bio: 'Producto y experiencia de usuario.' },
      { initials: 'DP', name: 'Dmitry Petrov', role: 'Tech Lead', bio: 'Desarrollo de plataforma e integraciones.' },
      { initials: 'EV', name: 'Elena Volkova', role: 'Head of Nutrition', bio: 'Nutrición y metodología de retos.' },
    ],
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { q: '¿Mis datos están seguros?', a: 'Sí. Almacenamos los datos cifrados y cumplimos una política de privacidad estricta.' },
      { q: '¿Hay aplicación móvil?', a: 'El sitio es apto para móviles. Las apps para iOS y Android están en desarrollo.' },
      { q: '¿Cómo conecto sensores?', a: 'En ajustes puedes conectar Google Fit, Apple Health y otros para pasos, sueño y actividad.' },
      { q: '¿Cuánto cuesta?', a: 'Las funciones básicas son gratuitas. Funciones avanzadas y retos por suscripción.' },
    ],
  },
  help: {
    title: 'Ayuda',
    items: [
      { title: 'Empezar con NUTRIFIT', desc: 'Registro, configuración del perfil y primeros pasos.' },
      { title: 'Diario de alimentación y metas', desc: 'Cómo llevar el diario y fijar metas de calorías y macros.' },
      { title: 'Conectar sensores', desc: 'Relojes, trackers y apps para pasos y sueño.' },
      { title: 'Trabajar con un especialista', desc: 'Cómo encontrar un mentor y participar en retos.' },
    ],
  },
  helpCta: {
    needHelp: '¿Necesitas ayuda?',
    needHelpDesc: 'Escribe a soporte — respondemos en un día laboral.',
    contact: 'support@nutrifit.ru',
    needHelpBtn: 'Contactar soporte',
    startNow: 'Empieza a usar ahora',
    startNowDesc: 'Entra en NutriFit y configura tu diario de alimentación, metas y actividad.',
    startNowBtn: 'Ir a NutriFit',
  },
  bottomCta: {
    title: '¿Listo para cambiar tu estilo de vida?',
    desc: 'Lleva un diario de alimentación, sigue tu actividad y alcanza tus metas con la guía de expertos. Únete a una plataforma que ya ayuda a miles de personas a estar más sanas.',
    features: [
      'Diarios inteligentes de alimentación y actividad',
      'Analítica de progreso y predicciones de peso',
      'Apoyo de especialistas y comunidad',
    ],
    primaryBtn: 'Empezar gratis',
    secondaryBtn: 'Para especialistas',
  },
  footer: {
    tagline: 'Salud, nutrición y metas en una sola app',
    links: { features: 'Funciones', team: 'Equipo', help: 'Ayuda', faq: 'FAQ', legal: 'Documentos legales' },
    copyright: 'Todos los derechos reservados.',
    companyName: 'NutriFit',
    jurisdiction: 'Jurisdicción: Argentina',
    email: 'office@nutrifit.info',
  },
  pricing: {
    title: 'Precios',
    subtitle: 'Planes transparentes para clientes, especialistas y equipos.',
    lite: {
      name: 'Lite',
      price: 'Gratis',
      features: [
        'Diario de alimentación y actividad',
        'Analítica básica',
        'Participación en retos de bienestar',
        'Hasta 3 clientes (luego — acceso de pago)',
      ],
      buttonText: 'Empezar gratis',
    },
    pro: {
      name: 'PRO',
      price: '$5',
      pricePeriod: '/ mes',
      features: [
        'Todo de Lite',
        'Acceso a análisis de laboratorio y analítica avanzada',
        'Herramientas de pronóstico',
        'Realizar tus propios retos',
        'Límite ampliado de clientes hasta 20',
      ],
      buttonText: 'Suscribirse',
    },
    expert: {
      name: 'EXPERT',
      price: '$10',
      pricePeriod: '/ mes',
      features: [
        'Todo de PRO',
        'Gestión avanzada de clientes y herramientas extra',
        'Acceso completo sin límite de clientes',
      ],
      buttonText: 'Suscribirse',
    },
  },
  legal: {
    title: 'Documentos legales',
    desc: 'Documentos principales del servicio NutriFit. Se abren en nutrifit.info.',
    privacyPolicy: 'Política de privacidad',
    userAgreement: 'Acuerdo de usuario',
    publicOffer: 'Oferta pública',
    openDoc: 'Abrir documento',
  },
  theme: { light: 'Tema claro', dark: 'Tema oscuro', system: 'Como en el sistema', lightLabel: 'Tema claro', darkLabel: 'Tema oscuro', systemLabel: 'Como en el sistema', groupLabel: 'Tema' },
  langSelectLabel: 'Seleccionar idioma',
}

export const LOCALES: Record<LocaleCode, Translations> = { ru, uk, kk, uz, en, es }

/** Код страны для флага (ISO 3166-1 alpha-2), используется в URL картинки */
export const LOCALE_OPTIONS: { code: LocaleCode; name: string; countryCode: string }[] = [
  { code: 'ru', name: 'Русский', countryCode: 'ru' },
  { code: 'uk', name: 'Українська', countryCode: 'ua' },
  { code: 'kk', name: 'Қазақша', countryCode: 'kz' },
  { code: 'uz', name: "O'zbekcha", countryCode: 'uz' },
  { code: 'en', name: 'English', countryCode: 'us' },
  { code: 'es', name: 'Español', countryCode: 'es' },
]

const FLAG_CDN = 'https://flagcdn.com'

export function getFlagSrc(countryCode: string, size: 'w40' | 'w80' = 'w40'): string {
  return `${FLAG_CDN}/${size}/${countryCode}.png`
}

const LOCALE_STORAGE_KEY = 'nutrifit-locale'

export function getStoredLocale(): LocaleCode {
  if (typeof window === 'undefined') return 'ru'
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as LocaleCode | null
  if (stored && LOCALES[stored]) return stored
  return 'ru'
}

export function setStoredLocale(code: LocaleCode): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(LOCALE_STORAGE_KEY, code)
}
