const samsungSource =
  "https://news.samsung.com/us/samsung-unveils-galaxy-s26-series-most-intuitive-galaxy-ai-phone-yet";

const products = [
  {
    id: "pro",
    brand: "Apple",
    name: "iPhone 17 Pro",
    price: 1099,
    image: "iphone17pro",
    badge: "The pro pick",
    desc: "Creative power. A camera system that goes further.",
    km: "ថាមពលសម្រាប់ការច្នៃប្រឌិត និងប្រព័ន្ធកាមេរ៉ាកម្រិតខ្ពស់។",
    display: "6.3-inch",
    chip: "A19 Pro",
    camera: "48MP Fusion",
    storage: "256GB",
    colors: [
      { name: "Cosmic Orange", kmName: "ទឹកក្រូច Cosmic", hex: "#D85C27" },
      { name: "Deep Blue", kmName: "ខៀវចាស់ Deep Blue", hex: "#1F3554" },
      { name: "Natural Titanium", kmName: "ទីតានីញ៉ូមធម្មជាតិ", hex: "#99948D" },
      { name: "Space Black", kmName: "ខ្មៅ Space Black", hex: "#242527" },
    ],
    storageTiers: [
      { size: "256GB", price: 1099 },
      { size: "512GB", price: 1299 },
      { size: "1TB", price: 1499 },
    ],
    source:
      "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
  },
  {
    id: "ultra",
    brand: "Samsung",
    name: "Galaxy S26 Ultra",
    price: 1299.99,
    image: "ultra",
    badge: "2026 flagship",
    desc: "A bigger canvas for your biggest ideas. With S Pen.",
    km: "អេក្រង់ធំសម្រាប់គំនិតរបស់អ្នក ជាមួយ S Pen។",
    display: "6.9-inch",
    chip: "Snapdragon 8 Elite Gen 5",
    camera: "200MP wide",
    storage: "256GB",
    colors: [
      { name: "Titanium Cobalt", kmName: "ខៀវ Cobalt", hex: "#283C56" },
      { name: "Titanium Silver", kmName: "ប្រាក់ Silver", hex: "#D3D8E0" },
      { name: "Titanium Emerald", kmName: "បៃតង Emerald", hex: "#2C5343" },
      { name: "Titanium Black", kmName: "ខ្មៅ Titanium Black", hex: "#202123" },
    ],
    storageTiers: [
      { size: "256GB", price: 1299.99 },
      { size: "512GB", price: 1419.99 },
      { size: "1TB", price: 1659.99 },
    ],
    source: samsungSource,
  },
  {
    id: "17",
    brand: "Apple",
    name: "iPhone 17",
    price: 799,
    image: "iphone17",
    badge: "Everyday favorite",
    desc: "A vibrant display. A fresh perspective on every day.",
    km: "អេក្រង់ភ្លឺច្បាស់ និងបទពិសោធន៍ថ្មីសម្រាប់រាល់ថ្ងៃ។",
    display: "6.3-inch",
    chip: "A19",
    camera: "48MP Fusion",
    storage: "256GB",
    colors: [
      { name: "Ultramarine", kmName: "ខៀវ Ultramarine", hex: "#2E569C" },
      { name: "Teal", kmName: "បៃតង Teal", hex: "#418B8D" },
      { name: "Pink", kmName: "ផ្កាឈូក Pink", hex: "#EAA0AB" },
      { name: "White", kmName: "ស White", hex: "#F4F5F7", border: "#cbd5e1" },
      { name: "Black", kmName: "ខ្មៅ Black", hex: "#242426" },
    ],
    storageTiers: [
      { size: "256GB", price: 799 },
      { size: "512GB", price: 999 },
    ],
    source: "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
  },
  {
    id: "s26",
    brand: "Samsung",
    name: "Galaxy S26",
    price: 899.99,
    image: "s26",
    badge: "New for 2026",
    desc: "Flagship features in a comfortably compact design.",
    km: "មុខងារកម្រិតខ្ពស់ក្នុងការរចនាតូចងាយស្រួលកាន់។",
    display: "6.3-inch",
    chip: "Snapdragon 8 Elite Gen 5",
    camera: "50MP wide",
    storage: "256GB",
    colors: [
      { name: "Icy Blue", kmName: "ខៀវស្រាល Icy Blue", hex: "#A5C3DC" },
      { name: "Silver Shadow", kmName: "ប្រាក់ Silver Shadow", hex: "#CACDCE" },
      { name: "Mint", kmName: "បៃតងខ្ចី Mint", hex: "#B9DCBF" },
      { name: "Onyx Black", kmName: "ខ្មៅ Onyx Black", hex: "#272729" },
    ],
    storageTiers: [
      { size: "256GB", price: 899.99 },
      { size: "512GB", price: 999.99 },
    ],
    source: samsungSource,
  },
  {
    id: "air",
    brand: "Apple",
    name: "iPhone Air",
    price: 999,
    image: "air",
    badge: "Light by design",
    desc: "A remarkably thin titanium design. Seriously capable.",
    km: "រចនាស្តើងពីទីតានីញ៉ូម ជាមួយសមត្ថភាពខ្លាំង។",
    display: "6.5-inch",
    chip: "A19 Pro",
    camera: "48MP Fusion",
    storage: "256GB",
    colors: [
      { name: "Cloud Silver", kmName: "ប្រាក់ Cloud Silver", hex: "#E6E8EC", border: "#cbd5e1" },
      { name: "Space Black", kmName: "ខ្មៅ Space Black", hex: "#222325" },
      { name: "Sky Blue", kmName: "ផ្ទៃមេឃ Sky Blue", hex: "#99BDDF" },
      { name: "Light Gold", kmName: "ទឹកមាស Light Gold", hex: "#EADABF" },
    ],
    storageTiers: [
      { size: "256GB", price: 999 },
      { size: "512GB", price: 1199 },
      { size: "1TB", price: 1399 },
    ],
    source:
      "https://www.apple.com/newsroom/2025/09/introducing-iphone-air-a-powerful-new-iphone-with-a-breakthrough-design/",
  },
  {
    id: "plus",
    brand: "Samsung",
    name: "Galaxy S26+",
    price: 1099.99,
    image: "plus",
    badge: "More room to play",
    desc: "More space for everything you love to do.",
    km: "ទំហំធំជាងមុនសម្រាប់អ្វីៗគ្រប់យ៉ាងដែលអ្នកចូលចិត្ត។",
    display: "6.7-inch",
    chip: "Snapdragon 8 Elite Gen 5",
    camera: "50MP wide",
    storage: "256GB",
    colors: [
      { name: "Cobalt Violet", kmName: "ស្វាយ Cobalt Violet", hex: "#4F4D6B" },
      { name: "Amber Yellow", kmName: "លឿង Amber Yellow", hex: "#DEC78E" },
      { name: "Onyx Black", kmName: "ខ្មៅ Onyx Black", hex: "#27282B" },
      { name: "Marble Gray", kmName: "ប្រផេះ Marble Gray", hex: "#D9DADB" },
    ],
    storageTiers: [
      { size: "256GB", price: 1099.99 },
      { size: "512GB", price: 1219.99 },
    ],
    source: samsungSource,
  },
];

const km = {
  searchLabel: "ស្វែងរក",
  availability: "សូមទាក់ទងដើម្បីបញ្ជាក់ស្តុក",
  announcement: "ឆ្នាំថ្មី។ ជម្រើសកាន់តែឆ្លាតវៃ។",
  phones: "ទូរស័ព្ទ",
  about: "អំពីយើង",
  contact: "ទំនាក់ទំនង",
  talk: "ទាក់ទងយើង",
  collection: "ជម្រើសសម្រាប់ឆ្នាំ ២០២៦",
  headline: "ទូរស័ព្ទថ្មីរបស់អ្នក។<br><span class=\"accent-text\">ជ្រើសរើសយ៉ាងងាយស្រួល។</span>",
  heroText:
    "ទូរស័ព្ទល្អៗ។ ជម្រើសច្បាស់លាស់។ ស្វែងរកទូរស័ព្ទសម្រាប់ប្រើប្រាស់ប្រចាំថ្ងៃ និងការច្នៃប្រឌិតរបស់អ្នក។",
  explore: "មើលទូរស័ព្ទទាំងអស់",
  chatShort: "សួរតម្លៃ និងស្តុក",
  local: "ជម្រើសបច្ចេកវិទ្យានៅជិតអ្នក។<br>រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា។",
  proTag: "បទពិសោធន៍កាន់តែអស្ចារ្យ។",
  benefit1Title: "ប្រៀបធៀបដោយទំនុកចិត្ត",
  benefit1Desc: "ព័ត៌មានបច្ចេកទេសលម្អិតដែលសំខាន់",
  benefit2Title: "ជម្រើសសម្រាប់ឆ្នាំ ២០២៦",
  benefit2Desc: "ពីការប្រើប្រាស់ប្រចាំថ្ងៃ ដល់កម្រិតខ្ពស់បំផុត",
  benefit3Title: "ជំនួយផ្ទាល់នៅភ្នំពេញ",
  benefit3Desc: "ជជែកផ្ទាល់ជាមួយ Bobby សម្រាប់ស្តុក និងតម្លៃ",
  lineup: "ជម្រើសទូរស័ព្ទ",
  find: "ស្វែងរកទូរស័ព្ទដែលអ្នកពេញចិត្ត។",
  catalogText: "គំនិតថ្មីៗ។ រចនាស្អាត។<br>ទូរស័ព្ទសមស្របសម្រាប់អ្នក។",
  all: "ទាំងអស់",
  featured: "ជម្រើសណែនាំ",
  priceLow: "តម្លៃ៖ ទាបទៅខ្ពស់",
  priceHigh: "តម្លៃ៖ ខ្ពស់ទៅទាប",
  nameSort: "ឈ្មោះ៖ A–Z",
  compareHint: "ជ្រើសរើសរហូតដល់ ៣ ដើម្បីប្រៀបធៀប",
  emptyTitle: "រកមិនឃើញទូរស័ព្ទ។",
  emptyText: "សាកល្បងឈ្មោះ បន្ទះឈីប ឬម៉ាកផ្សេងៗ។",
  reset: "កំណត់តម្រងឡើងវិញ",
  priceNote:
    "តម្លៃជាដុល្លារអាមេរិក គឺជាតម្លៃចាប់ផ្តើមពេលចេញលក់នៅអាមេរិក មិនរួមពន្ធ។ តម្លៃក្នុងស្រុក ជម្រើស និងស្តុកអាចខុសគ្នា។ សូមទាក់ទងយើងសម្រាប់តម្លៃបច្ចុប្បន្ន។",
  human: "ក្រុមការងាររីករាយនឹងជួយ",
  helpTitle: "បច្ចេកវិទ្យាល្អ ចាប់ផ្តើមពី<br>ការសន្ទនាល្អ។",
  helpText:
    "ចូលចិត្តថតរូប? ធ្វើការច្រើន? ឬត្រូវការទូរស័ព្ទប្រើប្រចាំថ្ងៃ? ប្រាប់យើងពីអ្វីដែលអ្នកត្រូវការ។ យើងនឹងជួយអ្នកស្វែងរកជម្រើស។",
  advisorNote:
    "សួរគ្រប់សំណួរអំពីលក្ខណៈបច្ចេកទេស ការប្រៀបធៀប ឬការបញ្ជាទិញក្នុងស្រុក។ រួសរាយ និងស្មោះត្រង់។",
  chat: "ជជែកជាមួយយើងតាម Telegram",
  footerText: "ទូរស័ព្ទសម្រាប់ប្រចាំថ្ងៃរបស់អ្នក។<br>ស្វែងរកនៅទីនេះ។",
  curatedBy: "រៀបចំដោយ សាយ រិទ្ធី (Bobby)",
  footerCredit: "បង្កើតដោយ សាយ រិទ្ធី · រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា",
  visit: "អាសយដ្ឋាន",
  follow: "តាមដានយើង",
  rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
  updated: "បានធ្វើបច្ចុប្បន្នភាព ខែកញ្ញា ២០២៦",
  compare: "ប្រៀបធៀបទូរស័ព្ទ",
  clear: "លុបជម្រើស",
  details: "ព័ត៌មានលម្អិត",
  reference: "តម្លៃយោងអាមេរិក",
  select: "ប្រៀបធៀប",
  display: "អេក្រង់",
  chip: "បន្ទះឈីប (អាមេរិក)",
  camera: "កាមេរ៉ាចម្បង",
  storage: "ទំហំផ្ទុក",
  inquire: "សួរតម្លៃ និងស្តុកលើ Telegram",
  official: "ព័ត៌មានពីក្រុមហ៊ុនផលិត",
  limit: "អ្នកអាចប្រៀបធៀបបានរហូតដល់ ៣ ទូរស័ព្ទ។",
  selected: "បានជ្រើសរើស",
  results: "ទូរស័ព្ទ",
  compareTitle: "ប្រៀបធៀបលក្ខណៈបច្ចេកទេស",
  modelYear: "ម៉ូដែលឆ្នាំ ២០២៦",
  genuineNotice: "ឧបករណ៍សុទ្ធ និងការធានាផ្លូវការពីរោងចក្រ",
  directInquiry: "ផ្ញើសារសួរតម្លៃភ្លាមៗ",
  sortLabel: "តម្រៀបតាម",
  colorLabel: "ពណ៌",
  storageLabel: "ទំហំផ្ទុក",
  quizBadge: "ការណែនាំពិសេស",
  quizBannerTitle: "មិនទាន់ដឹងថាទូរស័ព្ទមួយណាត្រូវនឹងអ្នក?",
  quizBannerSub: "ឆ្លើយសំណួរងាយៗ ៣ ដើម្បីស្វែងរកទូរស័ព្ទសមស្របបំផុតក្នុងរយៈពេល ៣០ វិនាទី។",
  quizStartBtn: "ស្វែងរកទូរស័ព្ទខ្ញុំ 🎯",
  quizCloseBtn: "បិទកម្រងសំណួរ",
  quizStep: "ជំហាន",
  quizOf: "នៃ",
  quizNext: "បន្តទៅមុខ",
  quizBack: "ត្រឡប់ក្រោយ",
  quizRetake: "ធ្វើម្តងទៀត",
  quizViewDetails: "មើលព័ត៌មានលម្អិត",
  quizInquireMatch: "សួរតម្លៃតាម Telegram",
  quizMatchLabel: "ត្រូវគ្នា",
};

const en = {
  availability: "Contact to confirm stock",
  details: "View details",
  reference: "Launch MSRP from",
  select: "Compare",
  display: "Display",
  chip: "Chip (U.S. spec)",
  camera: "Main camera",
  storage: "Base storage",
  inquire: "Ask for Price & Stock on Telegram",
  official: "Official manufacturer specifications",
  limit: "You can compare up to 3 phones. Remove one to add another.",
  selected: "phones selected",
  results: "phones available",
  compareTitle: "Side-by-side comparison",
  modelYear: "2026 Model",
  genuineNotice: "Authentic hardware with original factory packaging",
  directInquiry: "Instant Telegram quote",
  sortLabel: "Sort by",
  colorLabel: "Color",
  storageLabel: "Storage",
  quizBadge: "Personalized Match",
  quizBannerTitle: "Not sure which 2026 phone fits you?",
  quizBannerSub: "Answer 3 quick questions to find your ideal match in 30 seconds.",
  quizStartBtn: "Start 30s Quiz 🎯",
  quizCloseBtn: "Close Quiz",
  quizStep: "Step",
  quizOf: "of",
  quizNext: "Next",
  quizBack: "Back",
  quizRetake: "Retake Quiz",
  quizViewDetails: "View Details & Options",
  quizInquireMatch: "Ask Price on Telegram",
  quizMatchLabel: "Match",
};

document.querySelectorAll("[data-t]").forEach((el) => {
  en[el.dataset.t] = el.innerHTML;
});

let lang = "en";
try {
  lang =
    (localStorage.getItem("bobbyshop-language") ||
      localStorage.getItem("shopeasy-language")) === "km"
      ? "km"
      : "en";
} catch {}

let brand = "All";
const selected = new Set();
const userConfig = {};

function getConfig(id) {
  const p = products.find((item) => item.id === id);
  if (!p) return null;
  if (!userConfig[id]) {
    userConfig[id] = { colorIndex: 0, storageIndex: 0 };
  }
  const color = p.colors[userConfig[id].colorIndex] || p.colors[0];
  const tier = p.storageTiers[userConfig[id].storageIndex] || p.storageTiers[0];
  return {
    colorIndex: userConfig[id].colorIndex,
    storageIndex: userConfig[id].storageIndex,
    color,
    tier,
    price: tier.price,
    storage: tier.size,
  };
}

const grid = document.getElementById("products-container");
const modal = document.getElementById("product-modal");
let lastFocus;
let currentModal = null;

const t = (key) => (lang === "km" ? km[key] : en[key]) || en[key] || key;

const EXCHANGE_RATE_KHR = 4100;
let currency = "USD";
try {
  currency = localStorage.getItem("bobbyshop-currency") || "USD";
} catch {}

const money = (n) => {
  if (currency === "KHR") {
    const khr = Math.round(n * EXCHANGE_RATE_KHR);
    return new Intl.NumberFormat("en-US").format(khr) + " ៛";
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: n % 1 ? 2 : 0,
  }).format(n);
};

function updateCurrencyUI() {
  const btn = document.getElementById("currency-toggle");
  if (btn) {
    if (currency === "KHR") {
      btn.innerHTML = '<span class="currency-symbol">៛</span> <span class="currency-code">KHR</span>';
      btn.setAttribute("aria-label", "Switch to USD");
      btn.setAttribute("title", "Exchange Rate: $1 ≈ 4,100 KHR");
    } else {
      btn.innerHTML = '<span class="currency-symbol">$</span> <span class="currency-code">USD</span>';
      btn.setAttribute("aria-label", "Switch to Khmer Riel (KHR)");
      btn.setAttribute("title", "Exchange Rate: $1 ≈ 4,100 KHR");
    }
  }
}

function setCurrency(newCurr) {
  currency = newCurr;
  try {
    localStorage.setItem("bobbyshop-currency", currency);
  } catch {}
  updateCurrencyUI();
  render();

  if (currentModal && currentModal !== "compare") {
    const cfg = getConfig(currentModal);
    const modalPrice = document.getElementById(`modal-price-val-${currentModal}`);
    if (modalPrice) {
      modalPrice.textContent = money(cfg.price);
      modalPrice.classList.remove("is-bumped");
      void modalPrice.offsetWidth;
      modalPrice.classList.add("is-bumped");
    }
  } else if (currentModal === "compare") {
    compare();
  }

  const quizWrapper = document.getElementById("quiz-card-wrapper");
  if (quizWrapper && !quizWrapper.hidden && typeof quizState !== "undefined" && quizState.step >= 3) {
    renderQuiz();
  }
}

const badgeTranslations = {
  "The pro pick": { en: "The pro pick", km: "ជម្រើសកម្រិតខ្ពស់" },
  "2026 flagship": { en: "2026 flagship", km: "កំពូលទូរស័ព្ទ ២០២៦" },
  "Everyday favorite": { en: "Everyday favorite", km: "ពេញនិយមប្រចាំថ្ងៃ" },
  "New for 2026": { en: "New for 2026", km: "ម៉ូដែលថ្មី ២០២៦" },
  "Light by design": { en: "Light by design", km: "ស្តើង និងស្រាល" },
  "More room to play": { en: "More room to play", km: "អេក្រង់ធំទូលាយ" },
};

function getBadge(badgeText) {
  if (badgeTranslations[badgeText]) {
    return lang === "km"
      ? badgeTranslations[badgeText].km
      : badgeTranslations[badgeText].en;
  }
  return badgeText;
}

function renderActiveFilters(query, sort) {
  const container = document.getElementById("active-filters");
  if (!container) return;

  const chips = [];
  if (brand !== "All") {
    chips.push(
      `<button class="active-chip" data-filter-type="brand" aria-label="Remove brand filter ${brand}">
        <span>${brand}</span> <span class="chip-x" aria-hidden="true">×</span>
      </button>`
    );
  }
  if (query) {
    chips.push(
      `<button class="active-chip" data-filter-type="query" aria-label="Remove search filter">
        <span>“${query}”</span> <span class="chip-x" aria-hidden="true">×</span>
      </button>`
    );
  }
  if (sort && sort !== "featured") {
    const sortLabels = {
      low: lang === "km" ? "តម្លៃទាប" : "Price: Low",
      high: lang === "km" ? "តម្លៃខ្ពស់" : "Price: High",
      name: lang === "km" ? "ឈ្មោះ A–Z" : "Name A–Z",
    };
    chips.push(
      `<button class="active-chip" data-filter-type="sort" aria-label="Reset sort">
        <span>${sortLabels[sort] || sort}</span> <span class="chip-x" aria-hidden="true">×</span>
      </button>`
    );
  }

  container.innerHTML = chips.join("");
}

function render() {
  const searchInput = document.getElementById("search");
  const query = searchInput.value.trim().toLowerCase();
  const searchClearBtn = document.getElementById("search-clear");
  if (searchClearBtn) {
    searchClearBtn.hidden = !query;
  }

  let list = products.filter(
    (p) =>
      (brand === "All" || p.brand === brand) &&
      `${p.brand} ${p.name} ${p.chip} ${p.storage} ${p.camera} ${p.desc} ${p.km} ${p.badge}`
        .toLowerCase()
        .includes(query)
  );

  const sort = document.getElementById("sort").value;
  if (sort === "low") list.sort((a, b) => a.price - b.price);
  if (sort === "high") list.sort((a, b) => b.price - a.price);
  if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

  const resultCountEl = document.getElementById("result-count");
  if (resultCountEl) {
    resultCountEl.textContent = `${list.length} ${t("results")}`;
  }

  const clearFiltersBtn = document.getElementById("clear-filters");
  if (clearFiltersBtn) {
    clearFiltersBtn.hidden = brand === "All" && !query && sort === "featured";
  }

  const emptyEl = document.getElementById("empty");
  if (emptyEl) {
    emptyEl.hidden = list.length > 0;
  }

  renderActiveFilters(query, sort);

  grid.innerHTML = list
    .map((p, i) => {
      const cfg = getConfig(p.id);
      const isSelected = selected.has(p.id);
      const delay = `${Math.min(i * 0.06, 0.48)}s`;
      const activeColorName = lang === "km" ? cfg.color.kmName : cfg.color.name;

      return `
        <article class="product-card" data-id="${p.id}" style="animation-delay:${delay}">
          <div class="product-art">
            <span class="badge-pill">${getBadge(p.badge)}</span>
            <label class="compare-toggle ${isSelected ? "is-selected" : ""}" title="${t("select")} ${p.name}">
              <input type="checkbox" data-compare="${p.id}" aria-label="${t("select")} ${p.name}" ${isSelected ? "checked" : ""}>
              <span class="checkbox-indicator" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span class="compare-label-text">${t("select")}</span>
            </label>
            <div class="product-img-box">
              <img
                src="assets/${p.image}.jpg"
                alt="${p.name} color lineup"
                loading="lazy"
                decoding="async"
                width="400"
                height="240"
              />
            </div>
          </div>
          <div class="product-info">
            <div class="product-header-line">
              <span class="brand-badge">${p.brand}</span>
              <span class="year-badge">2026</span>
            </div>
            <h3 class="product-title">${p.name}</h3>
            <p class="description">${lang === "km" ? p.km : p.desc}</p>
            
            <!-- Interactive Color Swatches & Storage Selector -->
            <div class="card-config-box">
              <div class="config-header">
                <div class="config-label-group">
                  <span>${t("colorLabel")}:</span>
                  <span class="active-color-label" id="color-name-${p.id}">${activeColorName}</span>
                </div>
              </div>
              <div class="color-swatches-row" role="radiogroup" aria-label="${t("colorLabel")}">
                ${p.colors
                  .map(
                    (c, cIdx) => `
                  <button
                    type="button"
                    class="color-swatch-dot ${cIdx === cfg.colorIndex ? "is-active" : ""}"
                    style="--swatch-color: ${c.hex}; ${c.border ? `box-shadow: inset 0 0 0 1px ${c.border};` : ""}"
                    data-color-btn="${p.id}"
                    data-color-idx="${cIdx}"
                    title="${lang === "km" ? c.kmName : c.name}"
                    aria-label="${lang === "km" ? c.kmName : c.name}"
                    aria-checked="${cIdx === cfg.colorIndex}"
                  ></button>
                `
                  )
                  .join("")}
              </div>
              <div class="storage-selector-row" role="radiogroup" aria-label="${t("storageLabel")}">
                ${p.storageTiers
                  .map(
                    (s, sIdx) => `
                  <button
                    type="button"
                    class="storage-pill-btn ${sIdx === cfg.storageIndex ? "is-active" : ""}"
                    data-storage-btn="${p.id}"
                    data-storage-idx="${sIdx}"
                    aria-checked="${sIdx === cfg.storageIndex}"
                  >
                    ${s.size}
                  </button>
                `
                  )
                  .join("")}
              </div>
            </div>

            <div class="specs-pills" aria-label="Key specifications">
              <span class="spec-pill" title="${t("display")}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
                ${p.display}
              </span>
              <span class="spec-pill" id="spec-storage-${p.id}" title="${t("storage")}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <span class="spec-val-text">${cfg.storage}</span>
              </span>
              <span class="spec-pill" title="${t("camera")}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
                ${p.camera}
              </span>
            </div>
            <div class="card-bottom">
              <div class="price-block">
                <span class="price-meta">${t("reference")}</span>
                <strong class="price-amount" id="price-val-${p.id}">${money(cfg.price)}</strong>
              </div>
              <button class="button details-btn" data-detail="${p.id}" aria-label="${t("details")}: ${p.name}">
                <span>${t("details")}</span>
                <span class="arrow-icon" aria-hidden="true">↗</span>
              </button>
            </div>
            <div class="stock-status">
              <span class="status-indicator"></span>
              <span class="status-text">${t("availability")}</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  updateBar();
}

function updateBar() {
  const bar = document.getElementById("compare-bar");
  const countEl = document.getElementById("selected-count");
  const openBtn = document.getElementById("compare-open");
  const thumbsContainer = document.getElementById("compare-thumbnails");

  if (!bar) return;
  bar.hidden = !selected.size;

  if (countEl) {
    countEl.textContent = `${selected.size}/3 ${t("selected")}`;
  }
  if (openBtn) {
    openBtn.disabled = selected.size < 2;
    const badgeEl = `<span class="compare-badge-count" id="compare-badge-count">(${selected.size})</span>`;
    openBtn.innerHTML = `<span>${t("compare")}</span> ${badgeEl}`;
    requestAnimationFrame(() => {
      const badge = document.getElementById("compare-badge-count");
      if (badge) {
        badge.classList.remove("is-pinging");
        void badge.offsetWidth;
        badge.classList.add("is-pinging");
      }
    });
  }

  if (thumbsContainer) {
    const selectedProducts = products.filter((p) => selected.has(p.id));
    thumbsContainer.innerHTML = selectedProducts
      .map(
        (p) => `
        <div class="compare-thumb" title="${p.name}">
          <img src="assets/${p.image}.jpg" alt="${p.name}" width="36" height="36" />
          <span class="thumb-name">${p.name}</span>
          <button class="thumb-remove-btn" data-remove-compare="${p.id}" aria-label="Remove ${p.name} from comparison">×</button>
        </div>
      `
      )
      .join("");
  }
}

function openDialog(content) {
  lastFocus = document.activeElement;
  document.getElementById("modal-body").innerHTML = content;
  const table = modal.querySelector(".table-wrap");
  if (table) {
    table.tabIndex = 0;
    table.setAttribute("role", "region");
    table.setAttribute("aria-label", t("compareTitle"));
  }
  if (!modal.open) modal.showModal();
  document.getElementById("close-modal").focus();
}

function updateModalTelegramLink(p) {
  const cfg = getConfig(p.id);
  const activeColorName = lang === "km" ? cfg.color.kmName : cfg.color.name;
  const inquiryText = encodeURIComponent(
    lang === "km"
      ? `សួស្តី BobbyShop! ខ្ញុំចាប់អារម្មណ៍លើ ${p.name} ពណ៌ ${activeColorName} (${cfg.storage})។ តើមានស្តុក និងតម្លៃក្នុងស្រុកបច្ចុប្បន្នប៉ុន្មានដែរ?`
      : `Hi BobbyShop! I am interested in the ${p.name} in ${activeColorName} (${cfg.storage}). What is the current local Phnom Penh price and availability?`
  );
  const tgBtn = document.getElementById("modal-telegram-btn");
  if (tgBtn) {
    tgBtn.href = `https://t.me/Bobbyplzy?text=${inquiryText}`;
  }
}

function setColor(id, idx) {
  if (!userConfig[id]) userConfig[id] = { colorIndex: 0, storageIndex: 0 };
  userConfig[id].colorIndex = idx;

  const p = products.find((item) => item.id === id);
  if (!p) return;
  const c = p.colors[idx];
  const colorName = lang === "km" ? c.kmName : c.name;

  // 1. Update card color buttons
  document.querySelectorAll(`[data-color-btn="${id}"]`).forEach((btn) => {
    const isThis = parseInt(btn.dataset.colorIdx, 10) === idx;
    btn.classList.toggle("is-active", isThis);
    btn.setAttribute("aria-checked", String(isThis));
  });

  // 2. Update card color name text
  const labelEl = document.getElementById(`color-name-${id}`);
  if (labelEl) {
    labelEl.textContent = colorName;
  }

  // 3. Update modal if open
  if (currentModal === id) {
    const modalColorName = document.getElementById(`modal-color-name-${id}`);
    if (modalColorName) modalColorName.textContent = colorName;

    document.querySelectorAll(`[data-modal-color-btn="${id}"]`).forEach((btn) => {
      const isThis = parseInt(btn.dataset.colorIdx, 10) === idx;
      btn.classList.toggle("is-active", isThis);
      btn.setAttribute("aria-checked", String(isThis));
    });

    updateModalTelegramLink(p);
  }
}

function setStorage(id, idx) {
  if (!userConfig[id]) userConfig[id] = { colorIndex: 0, storageIndex: 0 };
  userConfig[id].storageIndex = idx;

  const p = products.find((item) => item.id === id);
  if (!p) return;
  const tier = p.storageTiers[idx];

  // 1. Update card storage buttons
  document.querySelectorAll(`[data-storage-btn="${id}"]`).forEach((btn) => {
    const isThis = parseInt(btn.dataset.storageIdx, 10) === idx;
    btn.classList.toggle("is-active", isThis);
    btn.setAttribute("aria-checked", String(isThis));
  });

  // 2. Update price in card with bump animation
  const priceEl = document.getElementById(`price-val-${id}`);
  if (priceEl) {
    priceEl.textContent = money(tier.price);
    priceEl.classList.remove("is-bumped");
    void priceEl.offsetWidth;
    priceEl.classList.add("is-bumped");
  }

  // 3. Update storage spec pill in card
  const specStorageEl = document.getElementById(`spec-storage-${id}`);
  if (specStorageEl) {
    const valText = specStorageEl.querySelector(".spec-val-text");
    if (valText) valText.textContent = tier.size;
  }

  // 4. Update modal if open
  if (currentModal === id) {
    const modalPrice = document.getElementById(`modal-price-val-${id}`);
    if (modalPrice) {
      modalPrice.textContent = money(tier.price);
      modalPrice.classList.remove("is-bumped");
      void modalPrice.offsetWidth;
      modalPrice.classList.add("is-bumped");
    }

    const modalSpecStorage = document.getElementById(`modal-spec-storage-${id}`);
    if (modalSpecStorage) {
      modalSpecStorage.textContent = tier.size;
    }

    document.querySelectorAll(`[data-modal-storage-btn="${id}"]`).forEach((btn) => {
      const isThis = parseInt(btn.dataset.storageIdx, 10) === idx;
      btn.classList.toggle("is-active", isThis);
      btn.setAttribute("aria-checked", String(isThis));
    });

    updateModalTelegramLink(p);
  }
}

function detail(id) {
  const p = products.find((item) => item.id === id);
  if (!p) return;
  currentModal = id;
  const cfg = getConfig(id);
  const activeColorName = lang === "km" ? cfg.color.kmName : cfg.color.name;

  const inquiryText = encodeURIComponent(
    lang === "km"
      ? `សួស្តី BobbyShop! ខ្ញុំចាប់អារម្មណ៍លើ ${p.name} ពណ៌ ${activeColorName} (${cfg.storage})។ តើមានស្តុក និងតម្លៃក្នុងស្រុកបច្ចុប្បន្នប៉ុន្មានដែរ?`
      : `Hi BobbyShop! I am interested in the ${p.name} in ${activeColorName} (${cfg.storage}). What is the current local Phnom Penh price and availability?`
  );

  openDialog(`
    <div class="modal-detail">
      <div class="modal-media-col">
        <div class="modal-image-container">
          <span class="badge-pill modal-badge">${getBadge(p.badge)}</span>
          <img
            src="assets/${p.image}.jpg"
            alt="${p.name} official product photograph"
            width="500"
            height="380"
          />
        </div>
        <div class="modal-media-footer">
          <a class="source-link" href="${p.source}" target="_blank" rel="noopener">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>${t("official")}</span>
          </a>
        </div>
      </div>
      <div class="modal-content-col">
        <div class="modal-brand-tag">${p.brand} · ${t("modelYear")}</div>
        <h2 id="modal-title" class="modal-title">${p.name}</h2>
        <p class="modal-desc">${lang === "km" ? p.km : p.desc}</p>

        <!-- Interactive Color & Storage in Modal -->
        <div class="modal-config-box">
          <div>
            <div class="modal-config-title-row">
              <span class="modal-config-title">${t("colorLabel")}</span>
              <span class="modal-active-color" id="modal-color-name-${p.id}">${activeColorName}</span>
            </div>
            <div class="modal-swatches-row" role="radiogroup" aria-label="${t("colorLabel")}">
              ${p.colors
                .map(
                  (c, cIdx) => `
                <button
                  type="button"
                  class="color-swatch-dot ${cIdx === cfg.colorIndex ? "is-active" : ""}"
                  style="--swatch-color: ${c.hex}; ${c.border ? `box-shadow: inset 0 0 0 1px ${c.border};` : ""}"
                  data-modal-color-btn="${p.id}"
                  data-color-idx="${cIdx}"
                  title="${lang === "km" ? c.kmName : c.name}"
                  aria-label="${lang === "km" ? c.kmName : c.name}"
                  aria-checked="${cIdx === cfg.colorIndex}"
                ></button>
              `
                )
                .join("")}
            </div>
          </div>

          <div>
            <div class="modal-config-title-row">
              <span class="modal-config-title">${t("storageLabel")}</span>
            </div>
            <div class="modal-storage-row" role="radiogroup" aria-label="${t("storageLabel")}">
              ${p.storageTiers
                .map(
                  (s, sIdx) => `
                <button
                  type="button"
                  class="storage-pill-btn ${sIdx === cfg.storageIndex ? "is-active" : ""}"
                  data-modal-storage-btn="${p.id}"
                  data-storage-idx="${sIdx}"
                  aria-checked="${sIdx === cfg.storageIndex}"
                >
                  ${s.size}
                </button>
              `
                )
                .join("")}
            </div>
          </div>
        </div>

        <div class="modal-price-box">
          <div class="price-meta-label">${t("reference")} · USD</div>
          <div class="modal-price-val" id="modal-price-val-${p.id}">${money(cfg.price)}</div>
          <div class="price-disclaimer">${t("priceNote")}</div>
        </div>

        <div class="specs-grid-dialog">
          <div class="spec-card">
            <div class="spec-card-label">${t("display")}</div>
            <div class="spec-card-val">${p.display}</div>
          </div>
          <div class="spec-card">
            <div class="spec-card-label">${t("chip")}</div>
            <div class="spec-card-val">${p.chip}</div>
          </div>
          <div class="spec-card">
            <div class="spec-card-label">${t("camera")}</div>
            <div class="spec-card-val">${p.camera}</div>
          </div>
          <div class="spec-card">
            <div class="spec-card-label">${t("storage")}</div>
            <div class="spec-card-val" id="modal-spec-storage-${p.id}">${cfg.storage}</div>
          </div>
        </div>

        <div class="modal-local-stock-card">
          <div class="stock-status-banner">
            <span class="status-dot-pulse"></span>
            <strong>${t("availability")}</strong>
          </div>
          <p class="stock-note-small">${t("genuineNotice")}</p>
        </div>

        <div class="modal-actions-area">
          <a
            class="button telegram-primary-btn"
            id="modal-telegram-btn"
            href="https://t.me/Bobbyplzy?text=${inquiryText}"
            target="_blank"
            rel="noopener"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
            </svg>
            <span>${t("inquire")}</span>
            <span class="arrow-ext" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  `);
}

function compare() {
  if (selected.size < 2) return;
  currentModal = "compare";
  const list = products.filter((p) => selected.has(p.id));

  openDialog(`
    <div class="compare-modal-header">
      <h2 id="modal-title" class="modal-title">${t("compareTitle")}</h2>
      <p class="compare-subtitle">${lang === "km" ? "ប្រៀបធៀបលក្ខណៈសម្បត្តិទូរស័ព្ទដែលបានជ្រើសរើស" : "Review technical specifications side-by-side"}</p>
    </div>
    <div class="table-wrap">
      <table class="compare-table">
        <thead>
          <tr>
            <th scope="col" class="sticky-col-header">${lang === "km" ? "លក្ខណៈសម្បត្តិ" : "Feature"}</th>
            ${list
              .map((p) => {
                const cfg = getConfig(p.id);
                const activeColorName = lang === "km" ? cfg.color.kmName : cfg.color.name;
                const tgCompareText = encodeURIComponent(
                  lang === "km"
                    ? `សួស្តី BobbyShop! ខ្ញុំកំពុងប្រៀបធៀប ${p.name} ពណ៌ ${activeColorName} (${cfg.storage})។ តើអាចផ្តល់តម្លៃជូនបានទេ?`
                    : `Hi BobbyShop! I am comparing the ${p.name} in ${activeColorName} (${cfg.storage}). Can you provide a quote?`
                );
                return `
                <th scope="col" class="phone-col-header">
                  <div class="compare-card-top">
                    <img src="assets/${p.image}.jpg" alt="${p.name}" width="90" height="90" class="compare-head-img" />
                    <div class="compare-head-name">${p.name}</div>
                    <div class="compare-head-price">${money(cfg.price)}</div>
                    <div style="font-size:11px;color:var(--muted);font-weight:600;margin-top:2px;">${activeColorName} · ${cfg.storage}</div>
                    <a
                      class="button compare-inquire-btn"
                      href="https://t.me/Bobbyplzy?text=${tgCompareText}"
                      target="_blank"
                      rel="noopener"
                    >
                      ${lang === "km" ? "សួរតម្លៃ" : "Inquire"} ↗
                    </a>
                  </div>
                </th>
              `;
              })
              .join("")}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="sticky-col">${lang === "km" ? "ម៉ាក" : "Brand"}</th>
            ${list.map((p) => `<td><strong>${p.brand}</strong></td>`).join("")}
          </tr>
          <tr>
            <th scope="row" class="sticky-col">${t("reference")}</th>
            ${list.map((p) => `<td class="price-cell">${money(getConfig(p.id).price)}</td>`).join("")}
          </tr>
          <tr>
            <th scope="row" class="sticky-col">${t("storageLabel")}</th>
            ${list.map((p) => `<td><strong>${getConfig(p.id).storage}</strong></td>`).join("")}
          </tr>
          <tr>
            <th scope="row" class="sticky-col">${t("colorLabel")}</th>
            ${list
              .map((p) => {
                const cfg = getConfig(p.id);
                const cName = lang === "km" ? cfg.color.kmName : cfg.color.name;
                return `<td><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${cfg.color.hex};vertical-align:middle;margin-right:5px;box-shadow:0 0 0 1px rgba(0,0,0,0.15);"></span> ${cName}</td>`;
              })
              .join("")}
          </tr>
          <tr>
            <th scope="row" class="sticky-col">${t("display")}</th>
            ${list.map((p) => `<td>${p.display}</td>`).join("")}
          </tr>
          <tr>
            <th scope="row" class="sticky-col">${t("chip")}</th>
            ${list.map((p) => `<td>${p.chip}</td>`).join("")}
          </tr>
          <tr>
            <th scope="row" class="sticky-col">${t("camera")}</th>
            ${list.map((p) => `<td>${p.camera}</td>`).join("")}
          </tr>
        </tbody>
      </table>
    </div>
    <div class="compare-modal-footer">
      <p class="price-note">${t("priceNote")}</p>
    </div>
  `);
}

function setLanguage() {
  const toast = document.getElementById("toast");
  if (toast) toast.hidden = true;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-t]").forEach((el) => {
    const key = el.dataset.t;
    if (t(key)) {
      el.innerHTML = t(key);
    }
  });

  const button = document.getElementById("language");
  if (button) {
    button.textContent = lang === "en" ? "ខ្មែរ" : "English";
    button.setAttribute(
      "aria-label",
      lang === "en" ? "Switch to Khmer" : "Switch to English"
    );
  }

  const backTop = document.getElementById("back-top");
  if (backTop) {
    backTop.setAttribute(
      "aria-label",
      lang === "en" ? "Back to top" : "ត្រឡប់ទៅខាងលើ"
    );
  }

  const search = document.getElementById("search");
  if (search) {
    search.placeholder =
      lang === "en" ? "Find a phone, chip, or brand…" : "ស្វែងរកទូរស័ព្ទ បន្ទះឈីប ឬម៉ាក…";
    search.setAttribute(
      "aria-label",
      lang === "en" ? "Search phones" : "ស្វែងរកទូរស័ព្ទ"
    );
  }

  const sort = document.getElementById("sort");
  if (sort) {
    sort.setAttribute(
      "aria-label",
      lang === "en" ? "Sort phones" : "តម្រៀបទូរស័ព្ទ"
    );
  }

  const closeModal = document.getElementById("close-modal");
  if (closeModal) {
    closeModal.setAttribute(
      "aria-label",
      lang === "en" ? "Close dialog" : "បិទ"
    );
  }

  render();

  const quizWrapper = document.getElementById("quiz-card-wrapper");
  if (quizWrapper && !quizWrapper.hidden && typeof renderQuiz === "function") {
    renderQuiz();
  }

  try {
    localStorage.setItem("bobbyshop-language", lang);
  } catch {}
}

document.getElementById("language").addEventListener("click", () => {
  lang = lang === "en" ? "km" : "en";
  setLanguage();
});

const currToggleBtn = document.getElementById("currency-toggle");
if (currToggleBtn) {
  currToggleBtn.addEventListener("click", () => {
    setCurrency(currency === "USD" ? "KHR" : "USD");
  });
}

document.querySelectorAll("[data-brand]").forEach((button) =>
  button.addEventListener("click", () => {
    brand = button.dataset.brand;
    document.querySelectorAll("[data-brand]").forEach((b) => {
      b.classList.toggle("active", b === button);
      b.setAttribute("aria-pressed", String(b === button));
    });
    render();
  })
);

const searchInputEl = document.getElementById("search");
searchInputEl.addEventListener("input", render);

const searchClearEl = document.getElementById("search-clear");
if (searchClearEl) {
  searchClearEl.addEventListener("click", () => {
    searchInputEl.value = "";
    searchInputEl.focus();
    render();
  });
}

document.getElementById("sort").addEventListener("change", render);

// Delegate click on details buttons, active chips, color swatches, and storage pills
document.addEventListener("click", (e) => {
  // Color swatch on card
  const colorBtn = e.target.closest("[data-color-btn]");
  if (colorBtn) {
    const id = colorBtn.dataset.colorBtn;
    const idx = parseInt(colorBtn.dataset.colorIdx, 10);
    setColor(id, idx);
    return;
  }

  // Color swatch in modal
  const modalColorBtn = e.target.closest("[data-modal-color-btn]");
  if (modalColorBtn) {
    const id = modalColorBtn.dataset.modalColorBtn;
    const idx = parseInt(modalColorBtn.dataset.colorIdx, 10);
    setColor(id, idx);
    return;
  }

  // Storage pill on card
  const storageBtn = e.target.closest("[data-storage-btn]");
  if (storageBtn) {
    const id = storageBtn.dataset.storageBtn;
    const idx = parseInt(storageBtn.dataset.storageIdx, 10);
    setStorage(id, idx);
    return;
  }

  // Storage pill in modal
  const modalStorageBtn = e.target.closest("[data-modal-storage-btn]");
  if (modalStorageBtn) {
    const id = modalStorageBtn.dataset.modalStorageBtn;
    const idx = parseInt(modalStorageBtn.dataset.storageIdx, 10);
    setStorage(id, idx);
    return;
  }

  // Details button
  const detailBtn = e.target.closest("[data-detail]");
  if (detailBtn) {
    detailBtn.classList.add("is-loading");
    setTimeout(() => {
      detail(detailBtn.dataset.detail);
      detailBtn.classList.remove("is-loading");
    }, 120);
    return;
  }

  // Remove compare item
  const removeThumb = e.target.closest("[data-remove-compare]");
  if (removeThumb) {
    const id = removeThumb.dataset.removeCompare;
    selected.delete(id);
    render();
    return;
  }

  // Active filter chip remove
  const activeChip = e.target.closest("[data-filter-type]");
  if (activeChip) {
    const type = activeChip.dataset.filterType;
    if (type === "brand") {
      document.querySelector('[data-brand="All"]').click();
    } else if (type === "query") {
      searchInputEl.value = "";
      render();
    } else if (type === "sort") {
      document.getElementById("sort").value = "featured";
      render();
    }
    return;
  }
});

let toastTimer;
grid.addEventListener("change", (e) => {
  const id = e.target.dataset.compare;
  if (!id) return;
  if (e.target.checked) {
    if (selected.size === 3) {
      e.target.checked = false;
      const toast = document.getElementById("toast");
      toast.textContent = t("limit");
      toast.hidden = false;
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => (toast.hidden = true), 3500);
      return;
    }
    selected.add(id);
  } else {
    selected.delete(id);
  }
  render();
});

document.getElementById("compare-open").addEventListener("click", compare);

document.getElementById("compare-clear").addEventListener("click", () => {
  selected.clear();
  const toast = document.getElementById("toast");
  if (toast) toast.hidden = true;
  render();
});

document.getElementById("reset").addEventListener("click", () => {
  searchInputEl.value = "";
  document.getElementById("sort").value = "featured";
  document.querySelector('[data-brand="All"]').click();
  searchInputEl.focus();
});

const clearFiltersBtn = document.getElementById("clear-filters");
if (clearFiltersBtn) {
  clearFiltersBtn.addEventListener("click", () => {
    document.getElementById("reset").click();
  });
}

const searchLink = document.getElementById("search-link");
if (searchLink) {
  searchLink.addEventListener("click", (event) => {
    event.preventDefault();
    searchInputEl.focus();
    searchInputEl.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

document.getElementById("close-modal").addEventListener("click", () => modal.close());

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    const r = modal.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    ) {
      modal.close();
    }
  }
});

modal.addEventListener("close", () => {
  currentModal = null;
  if (lastFocus?.isConnected) lastFocus.focus();
});

setLanguage();
updateCurrencyUI();

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const backTop = document.getElementById("back-top");
let scrollFrame = 0;

function updateScroll() {
  if (backTop) {
    backTop.hidden = window.scrollY < 600;
  }
  const header = document.getElementById("main-header") || document.querySelector("header");
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }
  scrollFrame = 0;
}

window.addEventListener(
  "scroll",
  () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
  },
  { passive: true }
);

window.addEventListener("resize", updateScroll);

if (backTop) {
  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: motionPreference.matches ? "instant" : "smooth",
    });
    const logo = document.querySelector("header .logo");
    if (logo) logo.focus({ preventScroll: true });
  });
}

updateScroll();

// Motion & Micro-interactions Enhancements
// --- Find My Phone Quiz Engine ---
const quizQuestions = [
  {
    id: "priority",
    en: {
      title: "What is your top priority in a smartphone?",
      sub: "Choose what matters most in your daily use.",
      options: [
        { id: "photo", icon: "📸", title: "Pro Photography & Video", desc: "Highest zoom, ProRes/8K, best low-light camera" },
        { id: "power", icon: "💼", title: "Productivity & Big Screen", desc: "Multitasking, S Pen notes, biggest canvas" },
        { id: "design", icon: "🪶", title: "Ultra-Thin & Lightweight", desc: "Breakthrough thin titanium feel in your pocket" },
        { id: "value", icon: "⚡", title: "Daily Comfort & Reliability", desc: "All-day battery life, smooth speed & great value" },
      ],
    },
    km: {
      title: "តើអ្វីជាចំណុចសំខាន់បំផុតសម្រាប់អ្នក?",
      sub: "ជ្រើសរើសអ្វីដែលអ្នកត្រូវការបំផុតក្នុងការប្រើប្រាស់ប្រចាំថ្ងៃ។",
      options: [
        { id: "photo", icon: "📸", title: "កាមេរ៉ា និងវីដេអូកម្រិតខ្ពស់", desc: "ហ្ស៊ូមច្បាស់ ថតច្បាស់ពេលយប់ គុណភាពខ្ពស់" },
        { id: "power", icon: "💼", title: "ការងារ និងថាមពលខ្លាំង", desc: "ប្រើកម្មវិធីច្រើនក្នុងពេលតែមួយ សរសេរជាមួយ S Pen" },
        { id: "design", icon: "🪶", title: "ស្តើង និងស្រាលពិសេស", desc: "រចនាស្តើងពីទីតានីញ៉ូម ងាយស្រួលកាន់ក្នុងដៃ" },
        { id: "value", icon: "⚡", title: "ភាពងាយស្រួល និងតម្លៃសមរម្យ", desc: "ថ្មកាន់បានយូរ ល្បឿនលឿន និងតម្លៃល្អ" },
      ],
    },
  },
  {
    id: "os",
    en: {
      title: "Which ecosystem do you prefer?",
      sub: "Operating system or brand inclination.",
      options: [
        { id: "apple", icon: "🍎", title: "Apple iOS", desc: "Apple ecosystem, clean simplicity, A19 Pro chip" },
        { id: "samsung", icon: "🌌", title: "Samsung Galaxy AI", desc: "One UI flexibility, Galaxy AI tools, S Pen" },
        { id: "any", icon: "🤝", title: "Open to Either", desc: "Show me whatever fits my needs best" },
      ],
    },
    km: {
      title: "តើអ្នកចូលចិត្តប្រព័ន្ធប្រតិបត្តិការមួយណា?",
      sub: "ជ្រើសរើសម៉ាក ឬប្រព័ន្ធដែលអ្នកធ្លាប់ប្រើ។",
      options: [
        { id: "apple", icon: "🍎", title: "Apple iOS", desc: "ប្រព័ន្ធ Apple ងាយស្រួលប្រើ បន្ទះឈីប A19 Pro" },
        { id: "samsung", icon: "🌌", title: "Samsung Galaxy AI", desc: "មុខងារ AI ទំនើប ប៊ិច S Pen និងអេក្រង់ច្បាស់" },
        { id: "any", icon: "🤝", title: "មួយណាក៏បាន", desc: "ណែនាំទូរស័ព្ទណាដែលស័ក្តិសមបំផុត" },
      ],
    },
  },
  {
    id: "size",
    en: {
      title: "What screen size feels best in your hand?",
      sub: "Pocketability vs immersive entertainment.",
      options: [
        { id: "compact", icon: "📱", title: "Comfortably Compact (~6.3 inches)", desc: "Easy one-handed reach, light in pocket" },
        { id: "large", icon: "🖥️", title: "Large & Immersive (6.7 – 6.9 inches)", desc: "Maximum canvas for media, games & work" },
        { id: "balanced", icon: "⚖️", title: "Balanced / Medium (~6.5 inches)", desc: "Perfect sweet spot between size and weight" },
      ],
    },
    km: {
      title: "តើទំហំអេក្រង់ណាដែលអ្នកចូលចិត្ត?",
      sub: "ងាយស្រួលដាក់ហោប៉ៅ ឬអេក្រង់ធំទូលាយ។",
      options: [
        { id: "compact", icon: "📱", title: "ទំហំល្មម (~៦.៣ អ៊ីញ)", desc: "ងាយស្រួលកាន់ដោយដៃម្ខាង ស្រាលហោប៉ៅ" },
        { id: "large", icon: "🖥️", title: "ទំហំធំ (៦.៧ – ៦.៩ អ៊ីញ)", desc: "មើលវីដេអូ លេងហ្គេម និងធ្វើការងារបានស្រួល" },
        { id: "balanced", icon: "⚖️", title: "ទំហំកណ្តាល (~៦.៥ អ៊ីញ)", desc: "តុល្យភាពរវាងភាពងាយស្រួល និងទំហំអេក្រង់" },
      ],
    },
  },
];

const quizState = {
  isOpen: false,
  step: 0,
  answers: {},
};

function calculateQuizMatch(answers) {
  if (answers.priority === "design") {
    return {
      productId: "air",
      score: "99%",
      enReason: "The all-new iPhone Air delivers breakthrough ultra-thin titanium engineering with zero compromise on A19 Pro performance.",
      kmReason: "iPhone Air ថ្មីផ្តល់នូវការរចនាស្តើងពិសេសពីទីតានីញ៉ូម ស្រាលបំផុតក្នុងដៃ ជាមួយបន្ទះឈីប A19 Pro ខ្លាំងក្លា។",
    };
  }

  if (answers.priority === "power" || (answers.os === "samsung" && answers.size === "large")) {
    return {
      productId: "ultra",
      score: "98%",
      enReason: "Galaxy S26 Ultra is the ultimate powerhouse with built-in S Pen, 200MP camera, and huge 6.9-inch Dynamic AMOLED display.",
      kmReason: "Galaxy S26 Ultra គឺជាកំពូលទូរស័ព្ទជាមួយប៊ិច S Pen, កាមេរ៉ា 200MP និងអេក្រង់ធំ 6.9 អ៊ីញ។",
    };
  }

  if (answers.priority === "photo") {
    if (answers.os === "samsung") {
      return {
        productId: "ultra",
        score: "97%",
        enReason: "Galaxy S26 Ultra's 200MP sensor and enhanced AI zoom give you unmatched photographic versatility.",
        kmReason: "កាមេរ៉ា 200MP និងប្រព័ន្ធ AI Zoom របស់ Galaxy S26 Ultra ផ្តល់នូវរូបភាពច្បាស់ឥតខ្ចោះ។",
      };
    }
    return {
      productId: "pro",
      score: "99%",
      enReason: "iPhone 17 Pro is the gold standard for creative professionals, 48MP Fusion cameras, and ProRes video recording.",
      kmReason: "iPhone 17 Pro ជាជម្រើសកំពូលសម្រាប់អ្នកច្នៃប្រឌិត ថតរូប និងវីដេអូជាមួយកាមេរ៉ា 48MP Fusion។",
    };
  }

  if (answers.size === "large") {
    return answers.os === "apple"
      ? {
          productId: "air",
          score: "95%",
          enReason: "At 6.5 inches with titanium lightness, iPhone Air gives you plenty of screen without the pocket bulk.",
          kmReason: "អេក្រង់ 6.5 អ៊ីញ ស្រាលងាយស្រួលកាន់ ផ្តល់នូវទំហំធំទូលាយដោយមិនធ្ងន់។",
        }
      : {
          productId: "plus",
          score: "97%",
          enReason: "Galaxy S26+ gives you a gorgeous 6.7-inch display, massive battery life, and flagship Snapdragon speed at great value.",
          kmReason: "Galaxy S26+ ផ្តល់នូវអេក្រង់ 6.7 អ៊ីញ ថ្មកាន់បានយូរ និងបន្ទះឈីប Snapdragon 8 Elite ក្នុងតម្លៃសមរម្យ។",
        };
  }

  if (answers.os === "samsung") {
    return {
      productId: "s26",
      score: "96%",
      enReason: "Galaxy S26 gives you complete flagship Galaxy AI power in a comfortable 6.3-inch compact body.",
      kmReason: "Galaxy S26 ផ្តល់នូវមុខងារ Galaxy AI កម្រិតខ្ពស់ទាំងអស់ ក្នុងទំហំ 6.3 អ៊ីញ ងាយស្រួលកាន់។",
    };
  }

  return {
    productId: "17",
    score: "98%",
    enReason: "iPhone 17 is the sweetest all-rounder: vibrant display, durable design, dual 48MP Fusion cameras, and incredible daily speed.",
    kmReason: "iPhone 17 គឺជាជម្រើសដ៏ល្អឥតខ្ចោះសម្រាប់រាល់ថ្ងៃ៖ អេក្រង់ភ្លឺច្បាស់ កាមេរ៉ា 48MP និងល្បឿនលឿន។",
  };
}

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  if (!container) return;

  const isKm = lang === "km";

  // Result screen
  if (quizState.step >= quizQuestions.length) {
    const match = calculateQuizMatch(quizState.answers);
    const p = products.find((item) => item.id === match.productId);
    const cfg = getConfig(p.id);
    const activeColorName = isKm ? cfg.color.kmName : cfg.color.name;
    const matchReason = isKm ? match.kmReason : match.enReason;

    const tgInquiryText = encodeURIComponent(
      isKm
        ? `សួស្តី BobbyShop! ខ្ញុំបានឆ្លើយកម្រងសំណួរ ហើយទទួលបានការណែនាំ ${p.name} (${match.score}) ពណ៌ ${activeColorName} (${cfg.storage})។ តើមានស្តុក និងតម្លៃក្នុងស្រុកបច្ចុប្បន្នប៉ុន្មានដែរ?`
        : `Hi BobbyShop! I completed your 30s quiz and matched with the ${p.name} (${match.score} Match) in ${activeColorName} (${cfg.storage}). What is the current local Phnom Penh price and availability?`
    );

    container.innerHTML = `
      <div class="quiz-result-view">
        <div class="quiz-header">
          <div class="quiz-match-pill">
            <span>✨</span>
            <span>${match.score} ${t("quizMatchLabel")}</span>
          </div>
          <button class="quiz-close-btn" data-quiz-close aria-label="${t("quizCloseBtn")}">×</button>
        </div>

        <div class="quiz-result-header">
          <h3 class="quiz-result-title">${isKm ? "ទូរស័ព្ទដែលស័ក្តិសមបំផុតសម្រាប់អ្នក!" : "Your Ideal 2026 Smartphone Match!"}</h3>
          <p class="quiz-result-sub">${isKm ? "ផ្អែកលើតម្រូវការប្រើប្រាស់ ប្រព័ន្ធប្រតិបត្តិការ និងទំហំអេក្រង់ដែលអ្នកបានជ្រើសរើស" : "Based on your daily priorities, preferred ecosystem, and screen size."}</p>
        </div>

        <div class="quiz-card-hero-match">
          <img src="assets/${p.image}.jpg" alt="${p.name}" class="quiz-matched-img" width="200" height="160" />
          <div class="quiz-matched-details">
            <span class="quiz-matched-brand">${p.brand} · 2026 EDITION</span>
            <h4 class="quiz-matched-name">${p.name}</h4>
            <div class="quiz-matched-reason">${matchReason}</div>
            <div class="quiz-matched-specs">
              <span class="spec-pill">${p.display}</span>
              <span class="spec-pill">${p.chip}</span>
              <span class="spec-pill">${p.camera}</span>
              <span class="spec-pill">${cfg.storage}</span>
            </div>
            <div class="quiz-matched-price-row">
              <span class="quiz-matched-price">${money(cfg.price)}</span>
              <span class="price-meta">${t("reference")}</span>
            </div>
          </div>
        </div>

        <div class="quiz-result-actions">
          <button class="button primary" data-detail="${p.id}">
            <span>${t("quizViewDetails")}</span>
            <span class="arrow-icon" aria-hidden="true">↗</span>
          </button>
          <a
            class="button telegram-btn"
            href="https://t.me/Bobbyplzy?text=${tgInquiryText}"
            target="_blank"
            rel="noopener"
          >
            <span>${t("quizInquireMatch")}</span>
            <span class="arrow-icon" aria-hidden="true">↗</span>
          </a>
          <button class="button secondary" data-quiz-retake>
            <span>↺ ${t("quizRetake")}</span>
          </button>
        </div>
      </div>
    `;
    return;
  }

  // Question step
  const q = quizQuestions[quizState.step];
  const qData = isKm ? q.km : q.en;
  const progressPct = ((quizState.step + 1) / quizQuestions.length) * 100;
  const currentAnswer = quizState.answers[q.id];

  container.innerHTML = `
    <div class="quiz-step-view">
      <div class="quiz-header">
        <div class="quiz-progress-track">
          <div class="quiz-progress-bar-bg">
            <div class="quiz-progress-bar-fill" style="width: ${progressPct}%;"></div>
          </div>
          <span class="quiz-step-count">${t("quizStep")} ${quizState.step + 1} ${t("quizOf")} ${quizQuestions.length}</span>
        </div>
        <button class="quiz-close-btn" data-quiz-close aria-label="${t("quizCloseBtn")}">×</button>
      </div>

      <h3 class="quiz-question-title">${qData.title}</h3>
      <p class="quiz-question-sub">${qData.sub}</p>

      <div class="quiz-options-grid" role="radiogroup" aria-label="${qData.title}">
        ${qData.options
          .map(
            (opt) => `
          <button
            type="button"
            class="quiz-option-card ${currentAnswer === opt.id ? "is-selected" : ""}"
            data-quiz-option="${opt.id}"
            aria-checked="${currentAnswer === opt.id}"
          >
            <span class="quiz-option-icon" aria-hidden="true">${opt.icon}</span>
            <div class="quiz-option-info">
              <strong class="quiz-option-title">${opt.title}</strong>
              <span class="quiz-option-desc">${opt.desc}</span>
            </div>
          </button>
        `
          )
          .join("")}
      </div>

      <div class="quiz-nav-row">
        ${
          quizState.step > 0
            ? `<button type="button" class="button outline-sm" data-quiz-back>← ${t("quizBack")}</button>`
            : `<div></div>`
        }
        <button
          type="button"
          class="button secondary"
          data-quiz-close
        >
          ${t("quizCloseBtn")}
        </button>
      </div>
    </div>
  `;
}

function initQuiz() {
  const toggleBtn = document.getElementById("quiz-toggle-btn");
  const wrapper = document.getElementById("quiz-card-wrapper");
  if (!toggleBtn || !wrapper) return;

  toggleBtn.addEventListener("click", () => {
    const isHidden = wrapper.hidden;
    wrapper.hidden = !isHidden;
    toggleBtn.setAttribute("aria-expanded", String(isHidden));
    if (isHidden) {
      renderQuiz();
      wrapper.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });

  document.addEventListener("click", (e) => {
    // Option clicked
    const optBtn = e.target.closest("[data-quiz-option]");
    if (optBtn) {
      const q = quizQuestions[quizState.step];
      quizState.answers[q.id] = optBtn.dataset.quizOption;
      // Smooth advance to next step
      setTimeout(() => {
        quizState.step++;
        renderQuiz();
      }, 150);
      return;
    }

    // Back clicked
    const backBtn = e.target.closest("[data-quiz-back]");
    if (backBtn) {
      if (quizState.step > 0) {
        quizState.step--;
        renderQuiz();
      }
      return;
    }

    // Retake clicked
    const retakeBtn = e.target.closest("[data-quiz-retake]");
    if (retakeBtn) {
      quizState.step = 0;
      quizState.answers = {};
      renderQuiz();
      return;
    }

    // Close clicked
    const closeBtn = e.target.closest("[data-quiz-close]");
    if (closeBtn) {
      wrapper.hidden = true;
      toggleBtn.setAttribute("aria-expanded", "false");
      return;
    }
  });
}

function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (!revealElements.length) return;

  if (motionPreference.matches || !("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function setupHeroCardTilt() {
  const heroCard = document.getElementById("hero-visual-card") || document.querySelector(".hero-visual");
  if (!heroCard || motionPreference.matches) return;

  heroCard.addEventListener("mousemove", (e) => {
    const rect = heroCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heroCard.style.setProperty("--hero-mouse-x", `${x}px`);
    heroCard.style.setProperty("--hero-mouse-y", `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 6;

    heroCard.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
  });

  heroCard.addEventListener("mouseleave", () => {
    heroCard.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  });
}

function setupProductCardsTilt() {
  if (motionPreference.matches) return;

  grid.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px)`;
  });

  grid.addEventListener("mouseout", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;
    const related = e.relatedTarget;
    if (related && card.contains(related)) return;

    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  });
}

setupScrollReveal();
setupHeroCardTilt();
setupProductCardsTilt();

initQuiz();
