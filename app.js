const SUPPORTED_LANGS = ['pl', 'en', 'zh'];
const DEFAULT_LANG = 'en';

const i18n = {
  pl: {
    siteMark: 'Wydarzenie',
    homeTitle: 'Witaj',
    homeSubtitle: 'Wybierz sekcję, aby zobaczyć najważniejsze informacje.',
    program: 'Program',
    artists: 'Artyści',
    attractions: 'Atrakcje',
    foodanddrinks: 'Jedzenie i picie',
    back: '← Powrót',
    programTitle: 'Program',
    artistsTitle: 'Artyści',
    attractionsTitle: 'Atrakcje',
    foodTitle: 'Jedzenie i picie',
    programText: '<p><strong>10:00</strong> – Otwarcie wydarzenia</p><p><strong>12:00</strong> – Główny punkt programu</p><p><strong>15:00</strong> – Część popołudniowa</p><p><strong>18:00</strong> – Zakończenie dnia</p>',
    artistsText: '<p>Tu wstaw opis artystów, prowadzących lub gości specjalnych.</p><p>Każdy akapit możesz łatwo podmienić bez zmiany układu strony.</p>',
    attractionsCaption: 'Mapa atrakcji / plan strefy',
    foodCaption: 'Mapa strefy gastronomicznej',
    imageAltAttractions: 'Mapa atrakcji',
    imageAltFood: 'Mapa jedzenia i picia'
  },
  en: {
    siteMark: 'Event',
    homeTitle: 'Welcome',
    homeSubtitle: 'Choose a section to see the most important information.',
    program: 'Program',
    artists: 'Artists',
    attractions: 'Attractions',
    foodanddrinks: 'Food & Drinks',
    back: '← Back',
    programTitle: 'Program',
    artistsTitle: 'Artists',
    attractionsTitle: 'Attractions',
    foodTitle: 'Food & Drinks',
    programText: '<p><strong>10:00</strong> – Opening</p><p><strong>12:00</strong> – Main program highlight</p><p><strong>15:00</strong> – Afternoon activities</p><p><strong>18:00</strong> – End of day</p>',
    artistsText: '<p>Place your artist, host, or guest descriptions here.</p><p>You can easily replace each paragraph without changing the layout.</p>',
    attractionsCaption: 'Attractions map / zone plan',
    foodCaption: 'Food and drinks area map',
    imageAltAttractions: 'Attractions map',
    imageAltFood: 'Food and drinks map'
  },
  zh: {
    siteMark: '活动',
    homeTitle: '欢迎',
    homeSubtitle: '请选择一个栏目查看主要信息。',
    program: '节目安排',
    artists: '艺术家',
    attractions: '活动区域',
    foodanddrinks: '餐饮',
    back: '← 返回',
    programTitle: '节目安排',
    artistsTitle: '艺术家',
    attractionsTitle: '活动区域',
    foodTitle: '餐饮',
    programText: '<p><strong>10:00</strong> – 活动开始</p><p><strong>12:00</strong> – 主要节目</p><p><strong>15:00</strong> – 下午活动</p><p><strong>18:00</strong> – 活动结束</p>',
    artistsText: '<p>这里可以填写艺术家、主持人或特别嘉宾的介绍。</p><p>你可以直接替换文字内容，而不用改动页面布局。</p>',
    attractionsCaption: '活动区域地图 / 分区图',
    foodCaption: '餐饮区地图',
    imageAltAttractions: '活动区域地图',
    imageAltFood: '餐饮区地图'
  }
};

function detectLang() {
  const saved = localStorage.getItem('site_lang');
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  const raw = (navigator.language || navigator.userLanguage || DEFAULT_LANG).toLowerCase();
  if (raw.startsWith('pl')) return 'pl';
  if (raw.startsWith('zh')) return 'zh';
  return 'en';
}

function setLang(lang) {
  const finalLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  localStorage.setItem('site_lang', finalLang);
  document.documentElement.lang = finalLang;
  applyTranslations(finalLang);
}

function t(lang, key) {
  return (i18n[lang] && i18n[lang][key]) || i18n[DEFAULT_LANG][key] || key;
}

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(lang, el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(lang, el.dataset.i18nHtml);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    el.alt = t(lang, el.dataset.i18nAlt);
  });

  document.title = document.body.dataset-titleKey ? t(lang, document.body.dataset.titleKey) : 'Event';

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLang();
  setLang(lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
