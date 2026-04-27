const SUPPORTED_LANGS = ['pl', 'en', 'zh'];
const DEFAULT_LANG = 'en';

const i18n = {
  pl: {
    siteMark: 'Święto Narodowe - 234. rocznica uchwalenia Konstytucji 3 Maja',
    homeTitle: 'Witaj',
    homeSubtitle: 'Wybierz sekcję, aby zobaczyć najważniejsze informacje.',
    program: 'Program',
    artists: 'Artyści',
    attractions: 'Mapa',
    foodanddrinks: 'Jedzenie i picie',
    back: '← Powrót',
    programTitle: 'Program',
    artistsTitle: 'Artyści',
    attractionsTitle: 'Mapa',
    foodTitle: 'Jedzenie i picie',
    programText: '<p><strong>10:00</strong> – Otwarcie wydarzenia</p><p><strong>12:00</strong> – Główny punkt programu</p><p><strong>15:00</strong> – Część popołudniowa</p><p><strong>18:00</strong> – Zakończenie dnia</p>',
    artistsText: '<img src="bb.jpg" alt="Beata Bojda"><p><strong>Beata Bojda </strong></p><p>Polska projektantka mody i wzornictwa tekstylnego, której twórczość łączy współczesny design z inspiracjami folklorem, rzemiosłem oraz tradycyjnymi technikami dekoracyjnymi. Jej projekty wyróżniają się wyrazistą kolorystyką, ornamentalnością oraz dbałością o detal, tworząc charakterystyczny, autorski język wizualny.</p><p>W jej twórczości szczególne miejsce zajmuje dialog z tradycją. Artystka czerpie inspiracje z polskiego folkloru – m.in. z koronki koniakowskiej czy haftu szamotulskiego – nadając im współczesny, indywidualny charakter, zamiast wiernego odtwarzania.</p><p>Jej projekty powstają w duchu świadomego, zrównoważonego projektowania: wykorzystuje zarówno nowe, jak i dawne tkaniny, często nadając im „drugie życie”, a kolekcje szyte są w niewielkich nakładach w lokalnych pracowniach krawieckich.</p><p>Twórczość Beaty Bojdy to połączenie nowoczesności z tradycją – estetyka, w której rękodzieło, historia i współczesny design współistnieją, tworząc wyraziste i ponadczasowe formy.<br><br></p><p><strong>An On Bast & Daga Gregorowicz</strong></p><p>Polski duet łączący elektronikę z ekspresyjnym wokalem i inspiracjami muzyką świata. Ich wspólny projekt opiera się na żywej interakcji między głosem a warstwą elektroniczną, tworzoną w czasie rzeczywistym. Brzmienie artystek oscyluje między ambientem, house’em i techno, wzbogaconym o elementy etniczne i improwizację.<img src="aob.jpg" alt="An On Bast"><p><strong>An On Bast</strong> – producentka, live performerka i DJ-ka, jedna z rozpoznawalnych postaci polskiej sceny elektronicznej. Znana z energetycznych, improwizowanych występów na żywo, w których wykorzystuje analogowe instrumenty i tworzy muzykę w czasie rzeczywistym. </p><img src="daga.jpg" alt="Daga Gregorowicz"><p><strong>Daga Gregorowicz</strong> – wokalistka, kompozytorka i autorka tekstów, współtwórczyni zespołu Dagadana. Jej twórczość łączy elementy muzyki ludowej z nowoczesną elektroniką, a charakterystyczny, wielowymiarowy wokal stanowi centralny element jej artystycznej ekspresji. </p>Koncerty duetu mają charakter performatywny – dynamiczne, często improwizowane sety budują intensywne, taneczne doświadczenie, w którym nowoczesna elektronika spotyka się z organiczną ekspresją wokalną. </p>',
    attractionsCaption: 'Mapa wydarzenia',
    foodCaption: 'Mapa strefy gastronomicznej',
    imageAltAttractions: 'Mapa wydarzenia',
    imageAltFood: 'Mapa jedzenia i picia'
  },
  en: {
    siteMark: 'National Day Reception commemoration the 235th anniversary of adopting The Constitution of 3 May 1791',
    homeTitle: 'Welcome',
    homeSubtitle: 'Choose to see important information.',
    program: 'Program',
    artists: 'Artists',
    attractions: 'Map',
    foodanddrinks: 'Food & Drinks',
    back: '← Back',
    programTitle: 'Program',
    artistsTitle: 'Artists',
    attractionsTitle: 'Map',
    foodTitle: 'Food & Drinks',
    programText: '<p><strong>10:00</strong> – Opening</p><p><strong>12:00</strong> – Main program highlight</p><p><strong>15:00</strong> – Afternoon activities</p><p><strong>18:00</strong> – End of day</p>',
    artistsText: '<img src="bb.jpg" alt="Beata Bojda"><p><strong>Beata Bojda </strong></p><p>A Polish fashion and textile designer whose work combines contemporary design with inspirations drawn from folklore, craftsmanship, and traditional decorative techniques. Her creations are distinguished by bold color palettes, ornamental qualities, and meticulous attention to detail, forming a distinctive and recognizable visual language. </p><p>A dialogue with tradition plays a central role in her work. She draws inspiration from Polish folk culture—such as Koniaków lace and Szamotuły embroidery—reinterpreting them with a contemporary, individual character rather than reproducing them directly. </p><p>Her designs are created in the spirit of conscious, sustainable practice: she uses both new and vintage fabrics, often giving them a “second life,” while her collections are produced in small batches in local tailoring workshops. </p><p>Beata Bojda’s work is a fusion of modernity and tradition—an aesthetic in which craftsmanship, history, and contemporary design coexist, creating expressive and timeless forms. <br><br></p><p><strong>An On Bast & Daga Gregorowicz</strong></p><p>A Polish duo blending electronic music with expressive vocals and inspirations drawn from world music. Their collaborative project is based on a live interaction between voice and electronic layers created in real time. Their sound moves between ambient, house and techno, enriched with ethnic elements and improvisation. </p><img src="aob.jpg" alt="An On Bast"><p><strong>An On Bast</strong> – producer, live performer and DJ, one of the recognizable figures of the Polish electronic scene. Known for energetic, improvised live sets in which she uses analog instruments and creates music in real time. </p><img src="daga.jpg" alt="Daga Gregorowicz"><p><strong>Daga Gregorowicz</strong> – vocalist, composer and lyricist, co-founder of the band Dagadana. Her work combines elements of folk music with modern electronics, while her distinctive, multi-dimensional voice is central to her artistic expression. </p><p>Their concerts have a performative character – dynamic, often improvised sets that create an intense, dance-driven experience where modern electronic music meets organic vocal expression. </p>',
    attractionsCaption: 'Map of event',
    foodCaption: 'Food and drinks area map',
    imageAltAttractions: 'Map of event',
    imageAltFood: 'Food and drinks map'
  },
  zh: {
    siteMark: '国庆日招待会 以纪念1791年5月3日宪法颁布235周年',
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
    artistsText: '<img src="bb.jpg" alt="Beata Bojda"><p><strong>Beata Bojda </strong></p><p>波兰时装与纺织品设计师。其作品将当代设计与源自民间文化、手工艺及传统装饰技法的灵感相结合。她的创作以大胆的色彩搭配、装饰性以及对细节的精雕细琢而著称，形成了独特且具有辨识度的视觉语言。</p><p>在她的创作中，与传统的对话占据核心地位。她从波兰民间艺术中汲取灵感——如科尼亚库夫蕾丝（Koniaków lace）和沙莫图维刺绣（Szamotuły embroidery）——并赋予当代且个性化的表达，而非简单复刻。</p><p>她的设计秉持责任感与可持续的理念：既使用新面料，也运用旧织物，常常赋予其“第二次生命”。 她的作品多在本地裁缝工坊以小批量方式制作完成。</p><p>Beata Bojda的作品体现了现代与传统的融合——手工艺、历史与当代设计相互交融的美学，创造出富有表现力且经久不衰的艺术形式。<br><br></p><p><strong>An On Bast & Daga Gregorowicz</strong></p><p>来自波兰的双人音乐组合， 融合了电子音乐、富有表现力的人声以及世界音乐元素。其音乐风格游走于氛围音乐（ambient）、浩室（house）与科技舞曲（techno）之间，并融入民族音乐元素与即兴创作。<br><br></p><img src="aob.jpg" alt="An On Bast"><p><strong>An On Bast</strong>——音乐制作人及DJ，是波兰电子音乐领域具有代表性的艺术家之一。她以充满能量的即兴现场演出著称，擅长运用模拟乐器进行实时创作。</p><img src="daga.jpg" alt="Daga Gregorowicz"><p><strong>Daga Gregorowicz</strong>——歌手、作曲家及词作者，乐队Dagadana的联合创始人。她的作品融合了民间音乐元素与现代电子音乐，其极具辨识度且层次丰富的嗓音是其艺术表达的核心。</p><p>该组合的演出具有强烈的现场表演性——充满活力且富有即兴色彩的演出，在现代电子音乐与有机人声表达之间构建出富有张力的舞台体验。</p>',
    attractionsCaption: '活动区域地图 / 分区图',
    foodCaption: '餐饮区地图',
    imageAltAttractions: '活动区域地图',
    imageAltFood: '餐饮区地图'
  }
};

function detectLang() {
  try {
    const saved = localStorage.getItem('site_lang');
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  } catch (e) {}

  const navLangs = Array.isArray(navigator.languages) ? navigator.languages : [navigator.language || navigator.userLanguage || DEFAULT_LANG];
  const raw = String(navLangs[0] || DEFAULT_LANG).toLowerCase();
  if (raw.startsWith('pl')) return 'pl';
  if (raw.startsWith('zh')) return 'zh';
  return 'en';
}

function persistLang(lang) {
  try {
    localStorage.setItem('site_lang', lang);
  } catch (e) {}
}

function setLang(lang) {
  const finalLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  persistLang(finalLang);
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

  document.title = document.body.dataset.titleKey ? t(lang, document.body.dataset.titleKey) : 'Event';

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });
}

function initLang() {
  setLang(detectLang());

  document.addEventListener('click', (event) => {
    const btn = event.target.closest('.lang-btn');
    if (!btn) return;
    event.preventDefault();
    setLang(btn.dataset.lang);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
}
