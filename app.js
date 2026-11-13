/**
 * ARABIC NEWS & FORMAL GOOGLE SEARCH ENGINE LOGIC
 * Features:
 * - Collapsible navigation header (reveals on hover/click)
 * - Authentic Google Search engine in Dark/Light themes
 * - Google Knowledge Panel & Multi-Outlet Related News (Youm7, Al Jazeera, Al Arabiya, Wikipedia)
 * - Real-time matching for any posted news
 * - Easy Arabic Admin with animated quick presets
 */

// =============================================================================
// ARABIC NEWS DATABASE (PRELOADED WITH REALISTIC ARABIC NEWS)
// =============================================================================
const DEFAULT_ARABIC_NEWS = [
  {
    id: "news-1",
    title: "حسن الجنيدي يعلن عن توسعات استثمارية جديدة ومبادرات تنموية رائدة",
    category: "اقتصاد وأعمال",
    date: "اليوم • منذ ساعتين",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
    content: "أعلن رجل الأعمال والمستثمر حسن الجنيدي اليوم خلال مؤتمر صحفي موسع عن إطلاق حزمة مشاريع استثمارية جديدة تركز على البنية التحتية والتقنيات الحديثة ودعم الكفاءات الشابة، مؤكداً أن المرحلة المقبلة ستشهد شراكات استراتيجية نوعية تعزز من مكانة الاقتصاد الوطني وتسهم في توفير آلاف الفرص التنموية."
  },
  {
    id: "news-2",
    title: "محطة الطاقة الشمسية المتطورة تبدأ التشغيل التجريبي بقدرات غير مسبوقة",
    category: "طاقة وتكنولوجيا",
    date: "أمس",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
    content: "أعلنت وزارة الكهرباء والطاقة عن بدء التشغيل التجريبي لمحطة الطاقة المتجددة الكبرى، والتي تعتمد على خلايا السيليكون فائقة الكفاءة. من المتوقع أن تغذي المحطة أكثر من 300 ألف منزل بالطاقة النظيفة مع خفض الانبعاثات الكربونية بنسبة 40%."
  },
  {
    id: "news-3",
    title: "نادي العاصمة يحقق فوزاً تاريخياً 3-1 ويتوج رسمياً ببطولة الدوري العام",
    category: "رياضة محلية وعالمية",
    date: "منذ يومين",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1000&q=80",
    content: "في ليلة كروية ملحمية أمام 40 ألف مشجع، استطاع الفريق الأول حسم لقب الدوري العام بعد تغلبه بثلاثة أهداف مقابل هدف واحد في المباراة الختامية، مقدماً أداءً تكتيكياً استثنائياً أشاد به كبار النقاد والجمهور الرياضي."
  }
];

// Presets for Visual Photo Selector
const VISUAL_PHOTO_PRESETS = {
  business: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
  project: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  energy: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
  stadium: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1000&q=80"
};

// Global State
let arabicNews = [];
let currentSearchTerm = "حسن الجنيدي";

// =============================================================================
// INITIALIZATION
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadStoredArabicNews();
  renderAdminPublishedList();
  renderArabicFeed();
  renderHomeQuickChips();
  setupSearchInputs();

  // Run initial search display for "حسن الجنيدي"
  executeSerpSearch("حسن الجنيدي");
});

function loadStoredArabicNews() {
  const stored = localStorage.getItem('elgnedy_arabic_news');
  if (stored) {
    try {
      arabicNews = JSON.parse(stored);
    } catch (e) {
      arabicNews = [...DEFAULT_ARABIC_NEWS];
    }
  } else {
    arabicNews = [...DEFAULT_ARABIC_NEWS];
  }
  updateStatsCounters();
}

function saveStoredArabicNews() {
  localStorage.setItem('elgnedy_arabic_news', JSON.stringify(arabicNews));
  updateStatsCounters();
}

function updateStatsCounters() {
  const count = arabicNews.length;
  const topbarBadge = document.getElementById('topbar-news-count');
  if (topbarBadge) topbarBadge.textContent = count;
  const adminBadge = document.getElementById('admin-badge-count');
  if (adminBadge) adminBadge.textContent = count;
  const statTotal = document.getElementById('stat-total-articles');
  if (statTotal) statTotal.textContent = count;
}

// =============================================================================
// COLLAPSIBLE HEADER CONTROLS (Hover & Click)
// =============================================================================
function toggleHeaderCollapse() {
  const wrapper = document.getElementById('floating-header-wrapper');
  if (wrapper) {
    wrapper.classList.toggle('expanded');
  }
}

function collapseHeader() {
  const wrapper = document.getElementById('floating-header-wrapper');
  if (wrapper) {
    wrapper.classList.remove('expanded');
  }
}

function switchMainTab(tabId) {
  // Update Buttons
  document.querySelectorAll('.nav-action-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === `btn-tab-${tabId}`);
  });

  // Update Page Views
  document.querySelectorAll('.main-tab-view').forEach(view => {
    view.classList.toggle('active-view', view.id === `tab-${tabId}`);
  });

  // Collapse header drawer automatically so the screen is completely authentic
  collapseHeader();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Google Theme Toggle (Dark / Light)
function toggleGoogleTheme() {
  const isLight = document.body.classList.toggle('google-light-theme');
  const label = document.getElementById('theme-toggle-icon');
  if (label) {
    label.textContent = isLight ? '🌙 المظهر الليلي' : '☀️ المظهر النهاري';
  }
  showAppToast(isLight ? 'تم تفعيل المظهر النهاري لجوجل' : 'تم تفعيل المظهر الليلي لجوجل');
}

// =============================================================================
// GOOGLE SEARCH ENGINE (FORMAL REAL GOOGLE + KNOWLEDGE PANEL)
// =============================================================================
function setupSearchInputs() {
  const homeInput = document.getElementById('g-home-input');
  if (homeInput) {
    homeInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') triggerGoogleHomeSearch();
    });
  }

  const resultsInput = document.getElementById('g-results-input');
  if (resultsInput) {
    resultsInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') triggerGoogleResultsSearch();
    });
  }
}

function renderHomeQuickChips() {
  const container = document.getElementById('home-quick-chips');
  if (!container) return;

  container.innerHTML = arabicNews.slice(0, 4).map(news => {
    const shortTitle = news.title.length > 36 ? news.title.substring(0, 36) + '...' : news.title;
    return `
      <button type="button" class="chip-item" onclick="quickSearchDirectly('${escapeHtml(news.title)}')">
        ${escapeHtml(shortTitle)}
      </button>
    `;
  }).join('');
}

function quickSearchDirectly(query) {
  const homeInput = document.getElementById('g-home-input');
  if (homeInput) homeInput.value = query;
  executeSerpSearch(query);
}

function triggerGoogleHomeSearch() {
  const input = document.getElementById('g-home-input');
  const query = input ? input.value.trim() : '';
  executeSerpSearch(query || 'حسن الجنيدي');
}

function triggerGoogleResultsSearch() {
  const input = document.getElementById('g-results-input');
  const query = input ? input.value.trim() : '';
  executeSerpSearch(query || 'حسن الجنيدي');
}

function triggerLuckySearch() {
  if (arabicNews.length > 0) {
    openSingleArticle(arabicNews[0].id);
    switchMainTab('news');
    showAppToast('ضربة حظ Google: تم فتح الخبر الأول مباشرة!');
  }
}

function backToGoogleHome() {
  document.getElementById('google-results-view').style.display = 'none';
  document.getElementById('google-home-view').style.display = 'flex';
  const homeInput = document.getElementById('g-home-input');
  if (homeInput) homeInput.focus();
}

function clearResultsInput() {
  const input = document.getElementById('g-results-input');
  if (input) {
    input.value = '';
    input.focus();
  }
}

// Core SERP Rendering Logic
function executeSerpSearch(query) {
  currentSearchTerm = (query || "حسن الجنيدي").trim();

  // Sync inputs
  const resultsInput = document.getElementById('g-results-input');
  if (resultsInput) resultsInput.value = currentSearchTerm;

  // Toggle screens
  document.getElementById('google-home-view').style.display = 'none';
  document.getElementById('google-results-view').style.display = 'block';

  // Random realistic results count & speed
  const randomCount = (Math.floor(Math.random() * 50) + 20) / 10;
  const randomSeconds = (Math.random() * 0.18 + 0.16).toFixed(2);
  const statsLine = document.getElementById('g-stats-line');
  if (statsLine) {
    statsLine.textContent = `حوالي ${(randomCount * 1000000).toLocaleString('ar-EG')} نتيجة (${randomSeconds} ثانية)`;
  }

  // 1. Find or dynamically generate matching news for this search query
  const bestArticle = findBestArticleMatch(currentSearchTerm);

  // 2. Render Google "Top Stories" (أهم الأخبار ذات الصلة) carousel
  renderTopStoriesCarousel(bestArticle, currentSearchTerm);

  // 3. Render Client's #1 Ranking Result Card with clean URL
  renderClientRankOneCard(bestArticle, currentSearchTerm);

  // 4. Update Knowledge Panel (Left Column)
  updateKnowledgePanel(bestArticle, currentSearchTerm);

  // 5. Render Related News from Recognized Media Outlets (Youm7, Al Jazeera, Al Arabiya, Sky News, Wikipedia)
  renderDynamicRelatedOutlets(currentSearchTerm);

  // 6. Update Related Search Pills
  updateRelatedSearchPills(currentSearchTerm);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function findBestArticleMatch(query) {
  if (!query) return arabicNews[0];

  const qTrim = query.trim();
  const qLower = qTrim.toLowerCase();
  const words = qLower.split(/\s+/).filter(w => w.length > 1);

  let bestMatch = null;
  let highestScore = 0;

  arabicNews.forEach(news => {
    let score = 0;
    const titleLower = news.title.toLowerCase();
    const contentLower = news.content.toLowerCase();

    // Exact or direct match
    if (titleLower.includes(qLower)) score += 100;

    words.forEach(w => {
      if (titleLower.includes(w)) score += 25;
      if (contentLower.includes(w)) score += 10;
    });

    if (score > highestScore) {
      highestScore = score;
      bestMatch = news;
    }
  });

  // If a good existing match is found, return it!
  if (bestMatch && highestScore >= 20) {
    return bestMatch;
  }

  // IF NO EXISTING NEWS MATCHES THIS SEARCH:
  // Dynamically synthesize a rich, true news article for this query!
  const isSolar = qLower.includes('طاقة') || qLower.includes('شمس');
  const isSports = qLower.includes('رياض') || qLower.includes('كورة') || qLower.includes('نادي') || qLower.includes('أهلي') || qLower.includes('زمالك');

  let genTitle = `${qTrim} يتصدر المشهد الاقتصادي ويعلن عن إطلاق مشاريع استثمارية جديدة`;
  let genCat = "أخبار حصرية واقتصاد";
  let genImg = VISUAL_PHOTO_PRESETS.business;
  let genContent = `في متابعة صحفية حصرية، أعلن ${qTrim} اليوم عن تدشين مرحلة جديدة من الأعمال والمشاريع الاستثمارية الكبرى التي تستهدف تعزيز النشاط الاقتصادي وتوسيع نطاق المبادرات التنموية، مؤكداً استقطاب شراكات رائدة وخلق فرص عمل واعدة.`;

  if (isSolar) {
    genTitle = `${qTrim} يحقق إنجازاً قياسياً جديداً في مشروعات الطاقة المتجددة`;
    genCat = "طاقة وتكنولوجيا";
    genImg = VISUAL_PHOTO_PRESETS.energy;
    genContent = `أعلنت الهيئات المختصة اليوم عن نجاح المرحلة التشغيلية الجديدة لـ ${qTrim}، مسجلة أعلى معدلات كفاءة وتوليد للطاقة النظيفة بما يعزز الاستدامة ويخدم آلاف المنشآت.`;
  } else if (isSports) {
    genTitle = `${qTrim} يحقق فوزاً تاريخياً ويتصدر جدول الترتيب العام`;
    genCat = "رياضة وبطولات";
    genImg = VISUAL_PHOTO_PRESETS.stadium;
    genContent = `قدم ${qTrim} أداءً بطولياً استثنائياً اليوم ليحسم النتيجة لصالحه وسط احتفالات جماهيرية غفيرة وإشادة واسعة من المحللين الرياضيين بالمستوى الفني العالي.`;
  }

  const generatedArticle = {
    id: "news-" + Date.now(),
    title: genTitle,
    category: genCat,
    date: "اليوم • منذ ساعة",
    image: genImg,
    content: genContent
  };

  // Prepend to news list so it becomes a live article on the news portal!
  arabicNews.unshift(generatedArticle);
  saveStoredArabicNews();
  renderAdminPublishedList();
  renderArabicFeed();
  renderHomeQuickChips();

  return generatedArticle;
}

// Render Google "Top Stories" News Carousel
function renderTopStoriesCarousel(article, query) {
  const container = document.getElementById('top-stories-cards-grid');
  if (!container) return;

  const q = query || "أخبار";
  const stories = [
    {
      source: "شبكة أخبار الجنيدي",
      time: "منذ ساعتين",
      badge: "الخبر الحصري #1",
      title: article.title,
      img: article.image || VISUAL_PHOTO_PRESETS.business,
      isClient: true,
      id: article.id
    },
    {
      source: "اليوم السابع • Youm7",
      time: "منذ 3 ساعات",
      badge: "تغطية موسعة",
      title: `اليوم السابع: ${q} يكشف عن رؤية عمل جديدة ومبادرات استثمارية واعدة`,
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
      isClient: false
    },
    {
      source: "الجزيرة نت • Al Jazeera",
      time: "منذ 4 ساعات",
      badge: "تقرير تحليلي",
      title: `الجزيرة نت: متابعة شاملة لأحدث التطورات والتصريحات الخاصة بـ ${q}`,
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
      isClient: false
    }
  ];

  container.innerHTML = stories.map(st => `
    <div class="top-story-mini-card ${st.isClient ? 'client-highlight-story' : ''}" 
         onclick="${st.isClient ? `openSingleArticle('${st.id}'); switchMainTab('news');` : `showAppToast('مقال خارجي: ${escapeHtml(st.source)}')`}">
      <div class="story-img-frame">
        <img src="${escapeHtml(st.img)}" alt="${escapeHtml(st.title)}">
        <span class="story-badge">${escapeHtml(st.badge)}</span>
      </div>
      <div class="story-meta-row">
        <span class="story-source">${escapeHtml(st.source)}</span>
        <span class="story-time">${escapeHtml(st.time)}</span>
      </div>
      <h4 class="story-title">${escapeHtml(st.title)}</h4>
    </div>
  `).join('');
}

function renderClientRankOneCard(article, query) {
  const container = document.getElementById('client-rank-one-card');
  if (!container || !article) return;

  // Clean readable Arabic slug - NO ugly percent encoding!
  const cleanSlug = article.title
    .replace(/[^\u0621-\u064Aa-zA-Z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .substring(0, 32);

  const queryWords = query ? query.split(/\s+/).filter(w => w.length > 1) : [];
  const highlightedTitle = highlightSearchWords(article.title, queryWords);
  const highlightedSnippet = highlightSearchWords(article.content.substring(0, 200) + '...', queryWords);
  const qTerm = query || "المشاريع";

  container.innerHTML = `
    <div class="client-serp-card">
      <div class="serp-meta-header">
        <span class="serp-favicon">✦</span>
        <div class="serp-source-details">
          <span class="serp-site-title">شبكة أخبار الجنيدي • El-Gnedy News</span>
          <cite class="serp-url">https://elgnedynews.com › news › ${cleanSlug}</cite>
        </div>
        <span class="serp-dots-menu">⋮</span>
      </div>

      <h3 class="serp-headline">
        <a href="javascript:void(0)" onclick="openSingleArticle('${article.id}'); switchMainTab('news');">
          ${highlightedTitle}
        </a>
      </h3>

      <div class="serp-body-split">
        <p class="serp-snippet">
          <strong>${article.date.split('•')[0]} — </strong>${highlightedSnippet}
        </p>
        ${article.image ? `
          <div class="serp-thumb">
            <img src="${escapeHtml(article.image)}" alt="صورة الخبر">
          </div>
        ` : ''}
      </div>

      <!-- Authentic Google Sitelinks Grid -->
      <div class="g-sitelinks-container">
        <div class="sitelink-box" onclick="openSingleArticle('${article.id}'); switchMainTab('news');">
          <a href="javascript:void(0)" class="sitelink-link">أبرز المشروعات التابعة لـ ${escapeHtml(qTerm)}</a>
          <span class="sitelink-sub">استعراض تفصيلي لأحدث الخطط والمبادرات التنموية المعتمدة.</span>
        </div>
        <div class="sitelink-box" onclick="openSingleArticle('${article.id}'); switchMainTab('news');">
          <a href="javascript:void(0)" class="sitelink-link">السيرة المهنية والجوائز الموثقة</a>
          <span class="sitelink-sub">محطات النجاح والتكريمات الرسمية في قطاع الأعمال.</span>
        </div>
        <div class="sitelink-box" onclick="openSingleArticle('${article.id}'); switchMainTab('news');">
          <a href="javascript:void(0)" class="sitelink-link">التصريحات الرسمية والأخبار الحصرية</a>
          <span class="sitelink-sub">البيانات الصحفية الحصرية الصادرة عن المكتب الإعلامي.</span>
        </div>
        <div class="sitelink-box" onclick="openSingleArticle('${article.id}'); switchMainTab('news');">
          <a href="javascript:void(0)" class="sitelink-link">سياسة النشر والتوثيق الصحفي</a>
          <span class="sitelink-sub">معايير الدقة والشفافية المعتمدة لدى شبكة أخبار الجنيدي.</span>
        </div>
      </div>
    </div>
  `;
}

// Update Google Knowledge Panel (بطاقة المعلومات الجانبية)
function updateKnowledgePanel(article, query) {
  const kpTitle = document.getElementById('kp-title');
  const kpSubtitle = document.getElementById('kp-subtitle');
  const kpBio = document.getElementById('kp-bio-text');
  const kpActivity = document.getElementById('kp-activity');
  const kpImgMain = document.getElementById('kp-img-main');

  if (!kpTitle) return;

  const entityName = query.length > 2 && query.length < 35 ? query : (article ? article.title.substring(0, 24) : "حسن الجنيدي");
  kpTitle.textContent = entityName;

  if (query.includes('طاقة') || (article && article.category.includes('طاقة'))) {
    kpSubtitle.textContent = "مشروع طاقة متجددة وبنية تحتية";
    kpActivity.textContent = "الطاقة النظيفة، الاستدامة والبيئة";
    kpBio.textContent = `أحد أهم المشاريع الرائدة في مجال الطاقة المتجددة وتوليد الكهرباء النظيفة، يساهم بشكل مباشر في خفض الانبعاثات وتوفير بنية طاقية مستدامة وفق أعلى المعايير العالمية.`;
    if (article && article.image) kpImgMain.src = article.image;
  } else if (query.includes('رياض') || (article && article.category.includes('رياض'))) {
    kpSubtitle.textContent = "بطولة ومنافسات كرة القدم الرسمية";
    kpActivity.textContent = "الرياضة، أندية المحترفين والبطولات";
    kpBio.textContent = `تغطية شاملة وموثقة للمنافسات والانتصارات التاريخية لـ ${entityName}، ترصد مسيرة الأندية والتتويج بالبطولات الكبرى بحضور جماهيري وإعلامي واسع.`;
    if (article && article.image) kpImgMain.src = article.image;
  } else {
    // Business / Personal entity (like رافت رضا or حسن الجنيدي)
    kpSubtitle.textContent = "رجل أعمال ومستثمر رائد";
    kpActivity.textContent = "ريادة الأعمال، التطوير العقاري والاستثمار";
    kpBio.textContent = `شخصية رائدة في قطاع الأعمال والمشاريع الاستثمارية الحديثة، يمتلك سجلاً حافلاً في قيادة المبادرات التنموية والتطوير التجاري. تصدرت أخبار وإنجازات ${entityName} كبرى المنصات الإخبارية نظراً لدوره الفاعل ومساهماته الاقتصادية البارزة.`;
    if (article && article.image) kpImgMain.src = article.image;
  }
}

// Render Related News from Recognized Outlets (Youm7, Al Jazeera, Al Arabiya, Sky News, Wikipedia)
function renderDynamicRelatedOutlets(query) {
  const container = document.getElementById('dynamic-outlets-list');
  if (!container) return;

  const term = query.length > 2 && query.length < 35 ? query : "حسن الجنيدي";
  const queryWords = query ? query.split(/\s+/).filter(w => w.length > 1) : [];

  const outlets = [
    {
      source: "اليوم السابع • Youm7",
      iconClass: "red",
      iconText: "ي",
      url: `https://www.youm7.com › story › ${encodeURIComponent(term).substring(0, 20)}`,
      title: `اليوم السابع: ${term} يكشف عن رؤية استثمارية جديدة لدعم المشروعات`,
      snippet: `استعرضت تقارير اليوم السابع اليوم تفاصيل الخطوات النوعية التي أعلنها ${term}، مؤكدة نجاح المبادرات السابقة في تحقيق نمو متصاعد واستقطاب شراكات دولية متميزة...`,
      date: "اليوم • منذ ساعتين",
      thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80"
    },
    {
      source: "الجزيرة نت • Al Jazeera",
      iconClass: "gold",
      iconText: "ج",
      url: `https://www.aljazeera.net › economy › ${encodeURIComponent(term).substring(0, 20)}`,
      title: `الجزيرة نت: قراءة تحليلية في أبعاد المشروعات والخطط التي يقودها ${term}`,
      snippet: `رصدت الجزيرة ردود الأفعال الاقتصادية والتحليلات السوقية بعد الإعلان الأخير الخاص بـ ${term}، والذي يعكس قوة الحضور الاستراتيجي وتنامي الثقة في المشروعات القادمة...`,
      date: "اليوم • منذ 4 ساعات",
      thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&q=80"
    },
    {
      source: "العربية نت • Al Arabiya Business",
      iconClass: "purple",
      iconText: "ع",
      url: `https://www.alarabiya.net › aswaq › ${encodeURIComponent(term).substring(0, 20)}`,
      title: `العربية نت: مؤتمر المال والأعمال يبرز مسيرة وإنجازات ${term}`,
      snippet: `سلطت العربية الضوء على نماذج العمل الرائدة، مؤكدة أن المبادرات التي أطلقها ${term} تدعم الاستقرار التجاري وتفتح آفاقاً جديدة للنمو والتطوير في المنطقة...`,
      date: "أمس",
      thumb: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=200&q=80"
    },
    {
      source: "سكاي نيوز عربية • Sky News Arabia",
      iconClass: "red",
      iconText: "س",
      url: `https://www.skynewsarabia.com › business › ${encodeURIComponent(term).substring(0, 20)}`,
      title: `سكاي نيوز: تغطية خاصة لتحركات ${term} في دعم الاقتصاد والتنمية`,
      snippet: `أفاد مراسل سكاي نيوز بارتفاع وتيرة التنسيق الاستثماري بعد المؤتمر الأخير لـ ${term}، والذي شهد توقيع مذكرات تفاهم واعدة مع كبرى الكيانات التمويلية...`,
      date: "منذ يومين",
      thumb: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80"
    },
    {
      source: "ويكيبيديا • الموسوعة الحرة",
      iconClass: "white",
      iconText: "W",
      url: `https://ar.wikipedia.org › wiki › ${encodeURIComponent(term).substring(0, 20)}`,
      title: `ويكيبيديا: ${term} - السيرة الذاتية والمعلومات الرسمية الموثقة`,
      snippet: `صفحة توثيقية تستعرض المحطات البارزة، الجوائز، والمسيرة المهنية لـ ${term} وفق المصادر الإعلامية المعتمدة والأرشيف الصحفي المنشور...`,
      date: "تم التحديث حديثاً",
      thumb: ""
    }
  ];

  container.innerHTML = outlets.map(out => {
    const hlTitle = highlightSearchWords(out.title, queryWords);
    const hlSnippet = highlightSearchWords(out.snippet, queryWords);

    return `
      <div class="g-serp-item outlet-serp-card" onclick="showAppToast('مقال من أرشيف: ${escapeHtml(out.source)}')">
        <div class="serp-meta-header">
          <span class="serp-outlet-icon ${out.iconClass}">${out.iconText}</span>
          <div class="serp-source-details">
            <span class="serp-site-title">${escapeHtml(out.source)}</span>
            <cite class="serp-url">${escapeHtml(out.url)}</cite>
          </div>
          <span class="serp-dots-menu">⋮</span>
        </div>
        <h3 class="serp-headline">
          <a href="javascript:void(0)">${hlTitle}</a>
        </h3>
        <div class="serp-body-split">
          <p class="serp-snippet">
            <strong>${escapeHtml(out.date)} — </strong>${hlSnippet}
          </p>
          ${out.thumb ? `
            <div class="serp-thumb">
              <img src="${escapeHtml(out.thumb)}" alt="صورة المقال">
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// Update Related Search Pills
function updateRelatedSearchPills(query) {
  const container = document.getElementById('related-queries-pills');
  if (!container) return;

  const term = query.length > 2 && query.length < 30 ? query : "حسن الجنيدي";
  const pillOptions = [
    `أخبار ${term} اليوم`,
    `مشاريع ${term} الجديدة`,
    `السيرة الذاتية ${term}`,
    `استثمارات ${term} 2026`,
    `تصريحات ${term} الرسمية`
  ];

  container.innerHTML = pillOptions.map(p => `
    <button type="button" class="related-pill" onclick="executeSerpSearch('${escapeHtml(p)}')">
      ${escapeHtml(p)}
    </button>
  `).join('');
}

function openCurrentArticleInNews() {
  const article = findBestArticleMatch(currentSearchTerm);
  if (article) {
    openSingleArticle(article.id);
    switchMainTab('news');
  }
}

function highlightSearchWords(text, words) {
  if (!words || words.length === 0) return escapeHtml(text);
  let safe = escapeHtml(text);

  words.forEach(w => {
    try {
      const reg = new RegExp(`(${escapeRegExp(w)})`, 'gi');
      safe = safe.replace(reg, '<strong>$1</strong>');
    } catch (e) {}
  });

  return safe;
}

// =============================================================================
// TAB 2: ARABIC NEWS READER VIEW
// =============================================================================
function renderArabicFeed() {
  const container = document.getElementById('arabic-news-grid');
  if (!container) return;

  container.innerHTML = arabicNews.map(item => {
    return `
      <div class="arabic-card-box">
        <div class="card-cover">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}">
        </div>
        <div class="card-body-text">
          <div class="badge-row">
            <span class="card-cat">${escapeHtml(item.category)}</span>
            <span class="card-time">${escapeHtml(item.date)}</span>
          </div>
          <h3 class="card-heading">${escapeHtml(item.title)}</h3>
          <p class="card-summary">${escapeHtml(item.content.substring(0, 110))}...</p>
          <div class="card-actions-row">
            <button type="button" class="btn-open-story" onclick="openSingleArticle('${item.id}')">
              اقرأ التفاصيل
            </button>
            <button type="button" class="btn-search-google-card" onclick="testNewsInGoogleSearch('${item.id}')">
              🔍 ابحث عنه في جوجل
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openSingleArticle(id) {
  const article = arabicNews.find(n => n.id === id);
  if (!article) return;

  document.getElementById('feed-cards-view').style.display = 'none';
  document.getElementById('single-read-view').style.display = 'block';

  document.getElementById('single-cat').textContent = article.category;
  document.getElementById('single-title').textContent = article.title;
  document.getElementById('single-date').textContent = article.date;
  document.getElementById('single-image').src = article.image;
  document.getElementById('single-content').innerHTML = `<p>${escapeHtml(article.content)}</p>`;

  const actBtn = document.getElementById('btn-jump-google-act');
  if (actBtn) {
    actBtn.onclick = () => testNewsInGoogleSearch(article.id);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToNewsFeed() {
  document.getElementById('single-read-view').style.display = 'none';
  document.getElementById('feed-cards-view').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =============================================================================
// TAB 3: ADMIN PANEL (EASY, BEAUTIFUL, ARABIC)
// =============================================================================
function fillSampleNews(type) {
  const titleInput = document.getElementById('input-title');
  const catInput = document.getElementById('input-category');
  const imgInput = document.getElementById('input-image-url');
  const bodyInput = document.getElementById('input-body');

  if (type === 'hassan') {
    titleInput.value = "حسن الجنيدي يعلن عن إطلاق أكبر مجمع تجاري واستثماري في العاصمة";
    catInput.value = "اقتصاد وأعمال";
    imgInput.value = VISUAL_PHOTO_PRESETS.business;
    bodyInput.value = "أكد المستثمر حسن الجنيدي خلال تصريحات صحفية اليوم عن جاهزية المشروع الجديد لبدء العمل في الربع الأول، مؤكداً استقطاب علامات تجارية عالمية وخلق أكثر من 2,500 فرصة عمل مباشرة للكوادر الوطنية.";
  } else if (type === 'solar') {
    titleInput.value = "محطة الطاقة الشمسية المتطورة تحقق رقماً قياسياً في توليد الكهرباء النظيفة";
    catInput.value = "طاقة وتكنولوجيا";
    imgInput.value = VISUAL_PHOTO_PRESETS.energy;
    bodyInput.value = "سجلت المحطة اليوم إنتاجية قياسية تجاوزت التوقعات بنسبة 35%، في إنجاز وطني غير مسبوق يعزز مكانة الدولة في ريادة مشاريع التحول الأخضر والاستدامة البيئية.";
  } else if (type === 'sports') {
    titleInput.value = "نادي العاصمة يحسم رسمياً لقب البطولة بعد انتصار تاريخي 3-1";
    catInput.value = "رياضة محلية وعالمية";
    imgInput.value = VISUAL_PHOTO_PRESETS.stadium;
    bodyInput.value = "توج الفريق بلقب الدوري الممتاز وسط احتفالات جماهيرية غفيرة غطت شوارع العاصمة، مشيدين بالروح القتالية والانضباط التكتيكي طوال الموسم الكروي.";
  }

  showAppToast('تم تعبئة نموذج الخبر بنجاح! اضغط الآن على زر النشر.');
}

function selectVisualPhoto(type, btn) {
  document.querySelectorAll('.photo-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const photo = VISUAL_PHOTO_PRESETS[type] || VISUAL_PHOTO_PRESETS.business;
  document.getElementById('input-image-url').value = photo;
}

function handleArabicPublish(e) {
  e.preventDefault();

  const titleInput = document.getElementById('input-title');
  const catInput = document.getElementById('input-category');
  const imgInput = document.getElementById('input-image-url');
  const bodyInput = document.getElementById('input-body');

  const newArticle = {
    id: "news-" + Date.now(),
    title: titleInput.value.trim(),
    category: catInput.value,
    date: "الآن • منشور حديثاً",
    image: imgInput.value.trim() || VISUAL_PHOTO_PRESETS.business,
    content: bodyInput.value.trim()
  };

  // Prepend to top
  arabicNews.unshift(newArticle);
  saveStoredArabicNews();

  // Re-render
  renderAdminPublishedList();
  renderArabicFeed();
  renderHomeQuickChips();

  // Reset form
  titleInput.value = '';
  bodyInput.value = '';

  showAppToast('🚀 تم نشر الخبر بنجاح! اضغط على "شاهد في جوجل" لتراه في المركز الأول.');
}

function renderAdminPublishedList() {
  const container = document.getElementById('published-articles-stack');
  if (!container) return;

  if (arabicNews.length === 0) {
    container.innerHTML = `<p style="color:#94a3b8; font-size:0.9rem;">لا توجد أخبار منشورة حالياً. أضف خبرك الأول من النموذج المقابل!</p>`;
    return;
  }

  container.innerHTML = arabicNews.map(item => {
    return `
      <div class="admin-card-entry">
        <div class="entry-top-bar">
          <span class="entry-cat">${escapeHtml(item.category)}</span>
          <span class="entry-date">${escapeHtml(item.date)}</span>
        </div>
        <div class="entry-title">${escapeHtml(item.title)}</div>
        <div class="entry-actions">
          <button type="button" class="btn-test-in-google" onclick="testNewsInGoogleSearch('${item.id}')">
            🔍 شاهد في جوجل (المركز #1)
          </button>
          <button type="button" class="btn-delete-entry" onclick="deleteArabicNewsItem('${item.id}')">
            🗑️ حذف
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function testNewsInGoogleSearch(id) {
  const article = arabicNews.find(n => n.id === id);
  if (!article) return;

  switchMainTab('google');
  executeSerpSearch(article.title);
  showAppToast(`جاري عرض نتائج بحث جوجل للخبر: "${article.title.substring(0, 30)}..."`);
}

function deleteArabicNewsItem(id) {
  if (confirm('هل أنت متأكد من رغبتك في حذف هذا الخبر؟')) {
    arabicNews = arabicNews.filter(n => n.id !== id);
    saveStoredArabicNews();
    renderAdminPublishedList();
    renderArabicFeed();
    renderHomeQuickChips();
    showAppToast('تم حذف الخبر.');
  }
}

function restoreDefaultArticles() {
  arabicNews = [...DEFAULT_ARABIC_NEWS];
  saveStoredArabicNews();
  renderAdminPublishedList();
  renderArabicFeed();
  renderHomeQuickChips();
  showAppToast('تمت استعادة الأخبار الافتراضية.');
}

// =============================================================================
// UTILITIES & TOAST
// =============================================================================
function showAppToast(message) {
  const toast = document.getElementById('app-toast');
  if (!toast) return;

  toast.textContent = message;
  toast.style.display = 'block';

  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.style.display = 'none';
  }, 3200);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[m]);
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
