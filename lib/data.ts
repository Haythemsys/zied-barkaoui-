export type Category = 'peinture' | 'placo' | 'platre' | 'ferronnerie' | 'bricolage'

export interface CategoryMeta {
  key: Category
  ar: string
  fr: string
  descAr: string
  descFr: string
  icon: string
  coverImage: string
  accent: string
}

export interface GalleryImage {
  file: string
  category: Category
  labelAr: string
  labelFr: string
  featured?: boolean
}

// ─── Categories ──────────────────────────────────────────────────────────────
export const CATEGORIES: CategoryMeta[] = [
  {
    key: 'peinture',
    ar: 'الدهان',
    fr: 'Peinture',
    descAr: 'دهان داخلي وخارجي احترافي — واجهات فخمة، جدران برخامية، تأثيرات زخرفية لا مثيل لها بخبرة 10 سنوات.',
    descFr: 'Peinture intérieure & extérieure — façades somptueuses, effets marbre et décoratifs haut de gamme.',
    icon: '🎨',
    coverImage: '/images/Messenger_creation_049ADC22-90CF-4B9D-AF51-570E3AC64234.jpeg',
    accent: '#A3B847',
  },
  {
    key: 'placo',
    ar: 'البلاكو بلاتر',
    fr: 'Placo / Placoplâtre',
    descAr: 'فوكس بلافون بلاكو بلاتر مع إضاءة LED — أسقف عصرية تحوّل كل فراغ إلى تحفة هندسية.',
    descFr: 'Faux plafonds placo & LED — des plafonds modernes qui transforment chaque espace en chef-d\'œuvre.',
    icon: '🏗️',
    coverImage: '/images/Messenger_creation_03BFFC8A-B372-4EA9-946F-E8674F2A8163.jpeg',
    accent: '#C8A43A',
  },
  {
    key: 'platre',
    ar: 'الجبس والديكور',
    fr: 'Plâtre Décoratif',
    descAr: 'جبس زخرفي فني — أسقف منحوتة، رسومات جدارية وتأثيرات ثلاثية الأبعاد بإبداع لا يُضاهى.',
    descFr: 'Plâtre décoratif & artistique — plafonds sculptés, fresques murales et effets 3D uniques.',
    icon: '✨',
    coverImage: '/images/Messenger_creation_1491925551288526.jpeg',
    accent: '#A3B847',
  },
  {
    key: 'ferronnerie',
    ar: 'الحدادة',
    fr: 'Ferronnerie',
    descAr: 'حدادة فنية وزخرفية راقية — أبواب، بوابات، شبابيك وعناصر معدنية تجمع بين المتانة والجمال.',
    descFr: 'Ferronnerie artistique — portails, portes, grilles et éléments décoratifs alliant solidité et élégance.',
    icon: '⚒️',
    coverImage: '/images/Messenger_creation_E856D20E-DA54-4155-A2AA-F5A196AD94CB.jpeg',
    accent: '#C8A43A',
  },
  {
    key: 'bricolage',
    ar: 'البريكولاج',
    fr: 'Bricolage',
    descAr: 'خدمات بريكولاج شاملة — صيانة، إصلاحات، تركيب وتحسينات للمنازل والمحلات التجارية.',
    descFr: 'Bricolage & maintenance — réparations, installations et améliorations pour maisons et commerces.',
    icon: '🔧',
    coverImage: '/images/Messenger_creation_508244974601923.jpeg',
    accent: '#A3B847',
  },
]

// ─── Image Catalog (36 photos) ────────────────────────────────────────────────
export const GALLERY: GalleryImage[] = [
  // PEINTURE — 10 images
  { file: 'Messenger_creation_049ADC22-90CF-4B9D-AF51-570E3AC64234.jpeg',  category: 'peinture',     labelAr: 'واجهة فيلا — دهان خارجي',          labelFr: 'Façade villa — peinture extérieure',       featured: true },
  { file: 'Messenger_creation_3B86C9CE-27B7-49E9-8EB2-7CE86F682463.jpeg',  category: 'peinture',     labelAr: 'واجهة فيلا كلاسيكية',               labelFr: 'Façade villa classique',                   featured: true },
  { file: 'Messenger_creation_4B6EAA92-23AB-465C-BE84-E6631E56E718.jpeg',  category: 'peinture',     labelAr: 'واجهة منزل حديث',                   labelFr: 'Façade maison contemporaine',               featured: true },
  { file: 'Messenger_creation_B523308D-0B34-4E8A-86D9-82FF3E033EFC.jpeg',  category: 'peinture',     labelAr: 'فيلا كاملة — واجهة بانورامية',      labelFr: 'Villa complète — façade panoramique',      featured: true },
  { file: 'Messenger_creation_937696CB-5392-4BF6-8943-48343CA8DDB0.jpeg',  category: 'peinture',     labelAr: 'فيلا عصرية — دهان خارجي',           labelFr: 'Villa moderne — peinture extérieure' },
  { file: 'Messenger_creation_A8B9465E-25A5-4A87-A470-BA14EAB25A8E.jpeg',  category: 'peinture',     labelAr: 'دهان خارجي — تشطيب فاخر',           labelFr: 'Peinture extérieure — finition luxueuse' },
  { file: 'Messenger_creation_1791107657935563.jpeg',                        category: 'peinture',     labelAr: 'تأثير رخامي — جدار مقهى',           labelFr: 'Effet marbre — mur café',                  featured: true },
  { file: 'Messenger_creation_651616830083231.jpeg',                         category: 'peinture',     labelAr: 'تأثير رخامي — بار مقهى',            labelFr: 'Effet marbre — bar café',                  featured: true },
  { file: 'Messenger_creation_678557610592182.jpeg',                         category: 'peinture',     labelAr: 'جدار رخامي — قاعة جلوس',            labelFr: 'Mur marbre — salon' },
  { file: 'Messenger_creation_723839038671699.jpeg',                         category: 'peinture',     labelAr: 'ديكور رخامي — صالون فاخر',          labelFr: 'Décor marbre — salon luxueux' },

  // PLACO — 8 images
  { file: 'Messenger_creation_03BFFC8A-B372-4EA9-946F-E8674F2A8163.jpeg',  category: 'placo',        labelAr: 'فوكس بلافون LED — غرفة معيشة',     labelFr: 'Faux plafond LED — salon',                 featured: true },
  { file: 'Messenger_creation_28161ABB-E2A9-4DB4-86E9-5DADA467528A.jpeg',  category: 'placo',        labelAr: 'بلاكو بلاتر — ممر داخلي',          labelFr: 'Placo — couloir intérieur',                featured: true },
  { file: 'Messenger_creation_5E1E3B44-E5B2-48AB-B7AA-58B8770BC005.jpeg',  category: 'placo',        labelAr: 'فوكس بلافون — نيش LED',             labelFr: 'Faux plafond — niche LED',                 featured: true },
  { file: 'Messenger_creation_7DF96238-75AE-474A-A558-0724C380AA87.jpeg',  category: 'placo',        labelAr: 'بلاكو هندسي — إضاءة مدمجة',        labelFr: 'Placo géométrique — éclairage intégré' },
  { file: 'Messenger_creation_9401941D-290A-4049-B1D5-86730AAEDA92.jpeg',  category: 'placo',        labelAr: 'بلاكو مطبخ — مطبخ عصري',           labelFr: 'Placo cuisine — cuisine moderne' },
  { file: 'Messenger_creation_9AA9EEE0-5EDE-4F71-AE6B-C1DD699F0748.jpeg',  category: 'placo',        labelAr: 'فوكس بلافون — تشطيب نهائي',        labelFr: 'Faux plafond — finition soignée' },
  { file: 'Messenger_creation_D7545683-4040-45AC-8A45-7367CF63FDF8.jpeg',  category: 'placo',        labelAr: 'بلاكو هندسي — غرفة نوم',           labelFr: 'Placo géométrique — chambre à coucher' },
  { file: 'Messenger_creation_EB755D85-5D04-49A1-A99F-25928756B704.jpeg',  category: 'placo',        labelAr: 'فوكس بلافون حديث',                  labelFr: 'Faux plafond moderne' },

  // PLÂTRE DÉCORATIF — 8 images
  { file: 'Messenger_creation_1491925551288526.jpeg',                        category: 'platre',       labelAr: 'سقف مقهى — جبس زخرفي إبداعي',     labelFr: 'Plafond café — plâtre décoratif créatif',  featured: true },
  { file: 'Messenger_creation_492900442684770.jpeg',                         category: 'platre',       labelAr: 'دائرة زخرفية — إضاءة مركزية',      labelFr: 'Rosace décorative — éclairage central',    featured: true },
  { file: 'Messenger_creation_57704653-93C9-4084-8C02-59FB94C4A358.jpeg',  category: 'platre',       labelAr: 'سقف برخامي — تأثير فني',            labelFr: 'Plafond marbre — effet artistique',         featured: true },
  { file: 'Messenger_creation_48C242B2-4BAA-4433-9BA0-3F05587CFB44.jpeg',  category: 'platre',       labelAr: 'نيش جبسي — إضاءة LED فاخرة',       labelFr: 'Niche en plâtre — LED luxueux',             featured: true },
  { file: 'Messenger_creation_BD39901C-872C-452E-9955-5614D3CD2B16.jpeg',  category: 'platre',       labelAr: 'جبس ديكور — ممر فاخر',              labelFr: 'Plâtre déco — couloir luxueux' },
  { file: 'Messenger_creation_CB5D35B2-4471-44E9-94CF-CC4B93CF4094.jpeg',  category: 'platre',       labelAr: 'واجهة حجرية — ديكور خارجي',        labelFr: 'Façade pierre — déco extérieure' },
  { file: 'Messenger_creation_DA70FFCB-3E5C-49EF-8B34-549007043212.jpeg',  category: 'platre',       labelAr: 'جبس زخرفي — تفاصيل فنية',          labelFr: 'Plâtre décoratif — détails artistiques' },
  { file: 'Messenger_creation_D124656A-33CC-4926-82CF-BA3E5EE2AE29.jpeg',  category: 'platre',       labelAr: 'سقف فني — أسلوب كلاسيك حديث',      labelFr: 'Plafond artistique — style classique moderne' },

  // FERRONNERIE — 5 images
  { file: 'Messenger_creation_DDC3668C-538E-40BA-A5A5-DCE0FB8D21F2.jpeg',  category: 'ferronnerie',  labelAr: 'حدادة زخرفية — تشكيل فني',         labelFr: 'Ferronnerie décorative — formage artistique', featured: true },
  { file: 'Messenger_creation_E856D20E-DA54-4155-A2AA-F5A196AD94CB.jpeg',  category: 'ferronnerie',  labelAr: 'أعمال معدنية — تشطيب فاخر',        labelFr: 'Travaux métalliques — finition luxueuse',     featured: true },
  { file: 'Messenger_creation_F1C5692E-C7A8-4B46-9B1E-A70EF1FCDF29.jpeg',  category: 'ferronnerie',  labelAr: 'حدادة — عمل ميداني',               labelFr: 'Ferronnerie — réalisation sur chantier' },
  { file: 'Messenger_creation_FAFDE8BF-5FFC-452D-8E71-1249EF540328.png',   category: 'ferronnerie',  labelAr: 'حدادة فنية — عمل احترافي',          labelFr: 'Ferronnerie artistique — travail professionnel' },
  { file: '048958bdbe6d710d67f27efbd158d83a.jpg',                            category: 'ferronnerie',  labelAr: 'أعمال حديد — إتقان وجودة',         labelFr: 'Travaux de fer — précision et qualité' },

  // BRICOLAGE — 5 images
  { file: 'Messenger_creation_508244974601923.jpeg',                         category: 'bricolage',    labelAr: 'ديكور مقهى — تهيئة شاملة',         labelFr: 'Déco café — aménagement complet',           featured: true },
  { file: '146445403fbbe728b07b3b19500848a3.jpg',                            category: 'bricolage',    labelAr: 'بريكولاج — تحسينات داخلية',        labelFr: 'Bricolage — améliorations intérieures',     featured: true },
  { file: 'ec4c418ec3557185ece92009162a462b.jpg',                            category: 'bricolage',    labelAr: 'صيانة وإصلاحات احترافية',           labelFr: 'Maintenance & réparations professionnelles' },
  { file: 'file_00000000987871f4826ef86274e4c868.png',                       category: 'bricolage',    labelAr: 'خدمات بريكولاج — إنجازات متنوعة',  labelFr: 'Services bricolage — réalisations diverses' },
  { file: 'Messenger_creation_B2F648EB-C068-4BF8-A5E7-9BD9FC05D707.jpeg',  category: 'bricolage',    labelAr: 'بريكولاج — عمل يدوي محترف',         labelFr: 'Bricolage — travail manuel expert' },
]

// ─── Videos ───────────────────────────────────────────────────────────────────
export const VIDEOS = [
  {
    file: '880e4393-3083-45e4-80d4-8d927545bcb0.mp4',
    titleAr: 'عمل ميداني — مشروع دهان',
    titleFr: 'Chantier en cours — projet peinture',
    category: 'peinture' as Category,
  },
  {
    file: 'Messenger_creation_65854D5D-0149-4C5C-AC34-3AB45BF47E4F.mp4',
    titleAr: 'إنجاز مميز — فوكس بلافون LED',
    titleFr: 'Réalisation — faux plafond LED',
    category: 'placo' as Category,
  },
  {
    file: 'Messenger_creation_77604003-8F80-4DA0-AC87-BEDA5F2C1312.mp4',
    titleAr: 'مشروع متكامل — ديكور شامل',
    titleFr: 'Projet complet — décoration intégrale',
    category: 'platre' as Category,
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: '+10', labelAr: 'سنوات خبرة', labelFr: "Ans d'expérience" },
  { value: '+200', labelAr: 'مشروع منجز', labelFr: 'Projets réalisés' },
  { value: '5', labelAr: 'تخصصات', labelFr: 'Spécialités' },
  { value: '100%', labelAr: 'رضا العملاء', labelFr: 'Satisfaction client' },
]

// ─── Brands (typography only — no logos) ─────────────────────────────────────
export const BRANDS = [
  'Astral', 'Plasdecor', 'Mont-Blanc Deco', 'V33', 'Tollens',
  'Cromad', 'Chaux Saint-Astier', 'Weber', 'Knauf', 'Isoglass',
]

// ─── Contact ──────────────────────────────────────────────────────────────────
export const CONTACT = {
  phone: '+21626705410',
  phoneFmt: '+216 26 705 410',
  whatsapp: 'https://wa.me/21626705410',
  email: 'barkaouizied58@gmail.com',
  zoneAr: 'منوبة وكامل تراب الجمهورية التونسية',
  zoneFr: 'Manouba et tout le territoire tunisien',
}

// ─── Featured images (for home page preview) ─────────────────────────────────
export const FEATURED = GALLERY.filter(img => img.featured).slice(0, 8)
