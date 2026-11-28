export const navItems = [
  ['/', 'home'],
  ['/fleet', 'fleet'],
  ['/trips', 'trips'],
  ['/clients', 'clients'],
  ['/about', 'about'],
  ['/contact', 'contact'],
];

// Vehicles shown on the home page
export const homeFleetKeys = [
  // First row — Vans
  'oldHiace',
  'newHiace',
  'h1',

  // Second row — Buses
  'coaster',
  'mitsubishiBus',
  'superJet',

  // Third row — Sedans
  'corolla',
  'fortuner',
  'mgG50',
];


export const fullFleetKeys = [
  // Vans
  'oldHiace',
  'newHiace',
  'h1',
  'coaster',
  'mitsubishiBus',
  'superJet',
  'v300',
  'hyundaiStaria',


  // SUVs — priority order requested
  'mercedesGLC300',
  'gClass',
  'mercedesE200',
  'mercedesS500',
  'rangeRover',
  'landCruiser',
  'nissanPatrol',
  'jeepGrand',
  'mgG50',
  'jetour',
  'fortuner',
  'tucson',
  'newSportage',
  'sportage',
  'kiaGrand',
  'tiggo7',
  'eclipse',
  'zs',

  // Sedans — Mercedes first, then the remaining cars
  'corolla',
  'accent',
  'mg5',
  'elantra',
  'elantraMD',
];

export const tripKeys = ['museum', 'pyramids', 'nubia'];

export const destinationKeys = [
  'pyramids',
  'whiteDesert',
  'pharaonicVillage',
  'karnak',
  'stepPyramid',
  'cairoTower',
  'sphinx',
  'alAzhar',
  'mohamedAliMosque',
  'babylonFortress',
  'operaHouse',
  'saintCatherine',
  'alMuizz',
  'montaza',
  'abdeen',
  'mohamedAliPalace',
  'islamicArt',
  'rasMohamed',
  'abuSimbel',
  'hatshepsut',
  'alexLibrary',
  'ahlMisr',
  'soho',
  'luxor',
  'aswan',
];

export const fleetCatalog = {
  en: {
    // Vans
    oldHiace: ['Toyota Hiace', '14', 'Diesel', 'Toyota', '120 km/h'],
    newHiace: ['Toyota Hiace', '13', 'Diesel', 'Toyota', '130 km/h'],
    h1: ['Hyundai H1', '8', 'Diesel', 'Hyundai', '160 km/h'],
    hyundaiStaria: ['Hyundai Staria', '7', 'Petrol', 'Hyundai', '180 km/h'],
    v300: ['Mercedes V300', '6', 'Petrol', 'Mercedes', '210 km/h'],

    // Coaches
    coaster: ['Toyota Coaster', '22', 'Diesel', 'Toyota', '110 km/h'],
    mitsubishiBus: ['Minibus', '28', 'Diesel', 'Mitsubishi', '110 km/h'],
    superJet: ['Bus Mercedes', '50', 'Diesel', 'SuperJet', '100 km/h'],

    // SUVs
    mercedesGLC300: ['Mercedes GLC 300', '4', 'Petrol', 'Mercedes', '230 km/h'],
    gClass: ['Mercedes-Benz G-Class', '4', 'Petrol', 'Mercedes', '210 km/h'],
    rangeRover: ['Range Rover', '4', 'Petrol', 'Land Rover', '225 km/h'],
    landCruiser: ['Toyota Land Cruiser', '4', 'Petrol', 'Toyota', '210 km/h'],
    nissanPatrol: ['Nissan Patrol', '4', 'Petrol', 'Nissan', '210 km/h'],
    jeepGrand: ['Jeep Grand Cherokee', '4', 'Petrol', 'Jeep', '210 km/h'],
    jetour: ['Jetour', '4', 'Petrol', 'Jetour', '185 km/h'],
    mgG50: ['MG G50', '7', 'Petrol', 'MG', '180 km/h'],
    fortuner: ['Toyota Fortuner', '4', 'Petrol', 'Toyota', '185 km/h'],
    tucson: ['Hyundai Tucson', '4', 'Petrol', 'Hyundai', '195 km/h'],
    newSportage: ['Kia Sportage - New Shape', '4', 'Petrol', 'Kia', '195 km/h'],
    sportage: ['Kia Sportage - Old Shape', '4', 'Petrol', 'Kia', '190 km/h'],
    kiaGrand: ['Kia Carnival', '7', 'Petrol', 'Kia', '180 km/h'],
    tiggo7: ['Chery Tiggo 7', '4', 'Petrol', 'Chery', '190 km/h'],
    eclipse: ['Mitsubishi Eclipse', '4', 'Petrol', 'Mitsubishi', '200 km/h'],
    zs: ['MG ZS', '4', 'Petrol', 'MG', '180 km/h'],

    // Sedans
    mercedesE200: ['Mercedes E200', '4', 'Petrol', 'Mercedes', '240 km/h'],
    mercedesS500: ['Mercedes S500', '4', 'Petrol', 'Mercedes', '250 km/h'],
    corolla: ['Toyota Corolla', '4', 'Petrol', 'Toyota', '190 km/h'],
    accent: ['Hyundai Accent RB', '4', 'Petrol', 'Hyundai', '190 km/h'],
    mg5: ['MG 5', '4', 'Petrol', 'MG', '185 km/h'],
    elantra: ['Hyundai Elantra CN7', '4', 'Petrol', 'Hyundai', '200 km/h'],
    elantraMD: ['Hyundai Elantra MD', '4', 'Petrol', 'Hyundai', '190 km/h'],
  },

  ar: {
    // الفانات
    oldHiace: ['تويوتا هاي إس', '14', 'ديزل', 'تويوتا', '120 كم/س'],
    newHiace: ['تويوتا هاي إس', '13', 'ديزل', 'تويوتا', '130 كم/س'],
    h1: ['هيونداي إتش وان', '8', 'ديزل', 'هيونداي', '160 كم/س'],
    hyundaiStaria: ['هيونداي ستاريا', '7', 'بنزين', 'هيونداي', '180 كم/س'],
    v300: ['مرسيدس V300', '6', 'بنزين', 'مرسيدس', '210 كم/س'],

    // الأتوبيسات
    coaster: ['تويوتا كوستر', '22', 'ديزل', 'تويوتا', '110 كم/س'],
    mitsubishiBus: ['ميني باص', '28', 'ديزل', 'ميتسوبيشي', '110 كم/س'],
    superJet: ['باص مرسيدس', '50', 'ديزل', 'سوبر جيت', '100 كم/س'],

    // سيارات SUV — بالترتيب المطلوب
    mercedesGLC300: ['مرسيدس GLC 300', '4', 'بنزين', 'مرسيدس', '230 كم/س'],
    gClass: ['مرسيدس G-Class', '4', 'بنزين', 'مرسيدس', '210 كم/س'],
    rangeRover: ['رينج روفر', '4', 'بنزين', 'لاند روفر', '225 كم/س'],
    landCruiser: ['تويوتا لاند كروزر', '4', 'بنزين', 'تويوتا', '210 كم/س'],
    nissanPatrol: ['نيسان باترول', '4', 'بنزين', 'نيسان', '210 كم/س'],
    jeepGrand: ['جيب جراند شيروكي', '4', 'بنزين', 'جيب', '210 كم/س'],
    jetour: ['جيتور', '4', 'بنزين', 'جيتور', '185 كم/س'],
    mgG50: ['إم جي G50', '7', 'بنزين', 'إم جي', '180 كم/س'],
    fortuner: ['تويوتا فورتشنر', '4', 'بنزين', 'تويوتا', '185 كم/س'],
    tucson: ['هيونداي توسان', '4', 'بنزين', 'هيونداي', '195 كم/س'],
    newSportage: ['كيا سبورتاج — الشكل الجديد', '4', 'بنزين', 'كيا', '195 كم/س'],
    sportage: ['كيا سبورتاج — الشكل القديم', '4', 'بنزين', 'كيا', '190 كم/س'],
    kiaGrand: ['كيا كرنفال', '7', 'بنزين', 'كيا', '180 كم/س'],
    tiggo7: ['شيري تيجو 7', '4', 'بنزين', 'شيري', '190 كم/س'],
    eclipse: ['ميتسوبيشي إكليبس', '4', 'بنزين', 'ميتسوبيشي', '200 كم/س'],
    zs: ['إم جي ZS', '4', 'بنزين', 'إم جي', '180 كم/س'],

    // سيارات السيدان
    mercedesE200: ['مرسيدس E200', '4', 'بنزين', 'مرسيدس', '240 كم/س'],
    mercedesS500: ['مرسيدس S500', '4', 'بنزين', 'مرسيدس', '250 كم/س'],
    corolla: ['تويوتا كورولا', '4', 'بنزين', 'تويوتا', '190 كم/س'],
    accent: ['هيونداي أكسنت RB', '4', 'بنزين', 'هيونداي', '190 كم/س'],
    mg5: ['إم جي 5', '4', 'بنزين', 'إم جي', '185 كم/س'],
    elantra: ['هيونداي إلنترا CN7', '4', 'بنزين', 'هيونداي', '200 كم/س'],
    elantraMD: ['هيونداي إلنترا MD', '4', 'بنزين', 'هيونداي', '190 كم/س'],
  },
};

export const clientCatalog = {
  en: [
    ['Quest Egypt International', 'QE', '6', 'quest-egypt.png'],
    ['Givaudan Egypt', 'GE', '5', 'givaudan.png'],
    ['LG October Factory', 'LG', '4', 'lg.png'],
    ['Wazzef Company', 'W', '3', 'wazzef.png'],
    ['Alpha Logistic', 'AL', '2', 'alpha-logistic.png'],
    ['Marbella Group', 'MG', '1', 'marbella.png'],
    ['Al Safi Group', 'AS', '10', 'al-safi.png'],
    ['Banque Misr · Tahrir', 'BM', '9', 'banque-misr.png'],
    ['Careem', 'CA', '8', 'careem.png'],
    ['Uber', 'UB', '', 'uber.webp'],
    ['Noon', 'NO', '', 'noon.png'],
    ['Kellorid', 'KL', '', 'kellorid.png'],
    ['Global Pharma', 'GP', '', 'global-pharma.png'],
    ['Orascom Construction', 'OC', '', 'orascom.png'],
    ['Arab Ambassadors', 'AA', '7', 'arab-ambassadors.png'],
  ],

  ar: [
    ['كويست مصر الدولية', 'ك', '6', 'quest-egypt.png'],
    ['جيفودان مصر', 'ج', '5', 'givaudan.png'],
    ['LG مصنع أكتوبر', 'LG', '4', 'lg.png'],
    ['شركة وظف', 'و', '3', 'wazzef.png'],
    ['شركة ألفا لوجيستك', 'أ', '2', 'alpha-logistic.png'],
    ['شركة ماربيلا جروب', 'م', '1', 'marbella.png'],
    ['شركة الصافي جروب', 'ص', '10', 'al-safi.png'],
    ['بنك مصر · فرع التحرير', 'ب', '9', 'banque-misr.png'],
    ['شركة كريم', 'ك', '8', 'careem.png'],
    ['شركة أوبر', 'أو', '', 'uber.webp'],
    ['شركة نون', 'ن', '', 'noon.png'],
    ['كيلوريد', 'ك', '', 'kellorid.png'],
    ['شركة جلوبال للأدوية', 'ج', '', 'global-pharma.png'],
    ['أوراسكوم للإنشاءات', 'أو', '', 'orascom.png'],
    ['سفراء العرب', 'س', '7', 'arab-ambassadors.png'],
  ],
};

export const destinationCatalog = {
  en: {
    pyramids: ['Pyramids', 'A golden-hour horizon that needs no introduction.', 'Giza'],
    whiteDesert: ['White Desert National Park', 'Moon-white formations and a sky full of silence.', 'Farafra'],
    pharaonicVillage: ['Pharaonic Village', 'A vivid journey through the layers of ancient Egypt.', 'Cairo'],
    karnak: ['Karnak Temple', 'Colonnades, stories, and an unforgettable Luxor light.', 'Luxor'],
    stepPyramid: ['Step Pyramid', 'The first great stone statement at Saqqara.', 'Saqqara'],
    cairoTower: ['Cairo Tower', 'A city view that keeps moving long after sunset.', 'Cairo'],
    sphinx: ['Great Sphinx', 'Meet the guardian of the Giza plateau.', 'Giza'],
    alAzhar: ['Al-Azhar Mosque', 'A living landmark of learning, craft, and calm.', 'Cairo'],
    mohamedAliMosque: ['Muhammad Ali Mosque', 'A citadel view framed by Ottoman geometry.', 'Cairo'],
    babylonFortress: ['Babylon Fortress', 'Layered history at the heart of Old Cairo.', 'Cairo'],
    operaHouse: ['Egyptian Opera House', 'Culture, performance, and a night in the city.', 'Cairo'],
    saintCatherine: ['Saint Catherine Monastery', 'A mountain pause at the edge of the Sinai.', 'Sinai'],
    alMuizz: ['Al-Muizz Street', 'Lantern light and stories through historic Cairo.', 'Cairo'],
    montaza: ['Montaza Palace', 'Mediterranean gardens with a royal breeze.', 'Alexandria'],
    abdeen: ['Abdeen Palace', 'A closer look at Cairo’s modern royal history.', 'Cairo'],
    mohamedAliPalace: ['Muhammad Ali Palace', 'A hidden jewel of architecture and gardens.', 'Cairo'],
    islamicArt: ['Museum of Islamic Art', 'Masterpieces of geometry, calligraphy, and light.', 'Cairo'],
    rasMohamed: ['Ras Mohammed Reserve', 'Sea, reef, and a horizon made for breathing.', 'Sharm El Sheikh'],
    abuSimbel: ['Abu Simbel Temple', 'Monumental scale on the shore of Lake Nasser.', 'Aswan'],
    hatshepsut: ['Hatshepsut Temple', 'A mountain-backed masterpiece of ancient design.', 'Luxor'],
    alexLibrary: ['Bibliotheca Alexandrina', 'A contemporary landmark for curious minds.', 'Alexandria'],
    ahlMisr: ['Ahl Misr Walkway', 'A slow Nile-side stroll with Cairo all around.', 'Cairo'],
    soho: ['SOHO Square', 'A bright evening between mountain and sea.', 'Sharm El Sheikh'],
    luxor: ['Luxor', 'The world’s greatest open-air museum, at your pace.', 'Luxor'],
    aswan: ['Aswan', 'A softer rhythm, warmer colours, and the river.', 'Aswan'],
  },

  ar: {
    pyramids: ['الأهرامات', 'أفق ذهبي لا يحتاج إلى مقدمة.', 'الجيزة'],
    whiteDesert: ['الحديقة القومية للصحراء البيضاء', 'تكوينات بيضاء وسماء مليئة بالصمت.', 'الفرافرة'],
    pharaonicVillage: ['القرية الفرعونية', 'رحلة حيّة بين طبقات مصر القديمة.', 'القاهرة'],
    karnak: ['الكرنك', 'أعمدة وحكايات وضوء لا يُنسى في الأقصر.', 'الأقصر'],
    stepPyramid: ['الهرم المدرج', 'أول بيان حجري عظيم في سقارة.', 'سقارة'],
    cairoTower: ['برج القاهرة', 'مشهد للمدينة يستمر بعد الغروب.', 'القاهرة'],
    sphinx: ['تمثال أبو الهول', 'تعرّف على حارس هضبة الجيزة.', 'الجيزة'],
    alAzhar: ['جامع الأزهر', 'علامة حيّة للتعلّم والحِرف والسكينة.', 'القاهرة'],
    mohamedAliMosque: ['جامع محمد علي', 'إطلالة القلعة داخل هندسة عثمانية.', 'القاهرة'],
    babylonFortress: ['حصن بابليون', 'تاريخ متراكم في قلب مصر القديمة.', 'القاهرة'],
    operaHouse: ['دار الأوبرا المصرية', 'ثقافة وفن وليلة مختلفة في المدينة.', 'القاهرة'],
    saintCatherine: ['دير سانت كاترين', 'استراحة جبلية عند أطراف سيناء.', 'سيناء'],
    alMuizz: ['شارع المعز لدين الله الفاطمي', 'فوانيس وحكايات في القاهرة التاريخية.', 'القاهرة'],
    montaza: ['قصر المنتزه', 'حدائق متوسطية ونسمة ملكية.', 'الإسكندرية'],
    abdeen: ['قصر عابدين', 'نظرة أقرب إلى تاريخ القاهرة الملكي الحديث.', 'القاهرة'],
    mohamedAliPalace: ['قصر محمد علي', 'جوهرة مخفية من العمارة والحدائق.', 'القاهرة'],
    islamicArt: ['متحف الفن الإسلامي بالقاهرة', 'روائع الهندسة والخط والضوء.', 'القاهرة'],
    rasMohamed: ['محمية رأس محمد', 'بحر وشعاب وأفق للتنفس.', 'شرم الشيخ'],
    abuSimbel: ['معبد أبو سمبل', 'حجم هائل على ضفاف بحيرة ناصر.', 'أسوان'],
    hatshepsut: ['معبد حتشبسوت', 'تحفة تستند إلى الجبل بتصميم خالد.', 'الأقصر'],
    alexLibrary: ['مكتبة الإسكندرية الجديدة', 'علامة معاصرة للعقول الفضولية.', 'الإسكندرية'],
    ahlMisr: ['ممشى أهل مصر', 'نزهة هادئة على النيل والقاهرة حولك.', 'القاهرة'],
    soho: ['ميدان سوهو', 'مساء مشرق بين الجبل والبحر.', 'شرم الشيخ'],
    luxor: ['الأقصر', 'أعظم متحف مفتوح في العالم بإيقاعك الخاص.', 'الأقصر'],
    aswan: ['أسوان', 'إيقاع أهدأ وألوان أدفأ والنيل حاضر.', 'أسوان'],
  },
};

