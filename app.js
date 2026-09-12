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
    storages: [
      { size: "256GB", price: 1099 },
      { size: "512GB", price: 1299 },
      { size: "1TB", price: 1499 },
    ],
    colors: [
      { name: "Cosmic Orange", km: "ពណ៌ទឹកក្រូច Cosmic", hex: "#e06338" },
      { name: "Deep Blue", km: "ពណ៌ខៀវចាស់", hex: "#22354b" },
      { name: "Natural Titanium", km: "ពណ៌ទីតានីញ៉ូមធម្មជាតិ", hex: "#9a958e" },
      { name: "Silver", km: "ពណ៌ប្រាក់", hex: "#e2e4e6" },
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
    storages: [
      { size: "256GB", price: 1299.99 },
      { size: "512GB", price: 1419.99 },
      { size: "1TB", price: 1659.99 },
    ],
    colors: [
      { name: "Titanium Black", km: "ពណ៌ខ្មៅ Titanium", hex: "#2b2b2c" },
      { name: "Titanium Silver", km: "ពណ៌ប្រាក់ Titanium", hex: "#c4c5c7" },
      { name: "Titanium Violet", km: "ពណ៌ស្វាយ Titanium", hex: "#68667a" },
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
    storages: [
      { size: "256GB", price: 799 },
      { size: "512GB", price: 999 },
    ],
    colors: [
      { name: "Ultramarine", km: "ពណ៌ខៀវ Ultramarine", hex: "#3b5284" },
      { name: "Teal", km: "ពណ៌បៃតងខ្ចី Teal", hex: "#689390" },
      { name: "White", km: "ពណ៌ស", hex: "#f2f3f5" },
      { name: "Black", km: "ពណ៌ខ្មៅ", hex: "#2e3033" },
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
    storages: [
      { size: "256GB", price: 899.99 },
      { size: "512GB", price: 979.99 },
    ],
    colors: [
      { name: "Cobalt Violet", km: "ពណ៌ស្វាយ Cobalt", hex: "#575672" },
      { name: "Amber Yellow", km: "ពណ៌លឿងទុំ Amber", hex: "#d9c086" },
      { name: "Onyx Black", km: "ពណ៌ខ្មៅ Onyx", hex: "#2c2d30" },
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
    storages: [
      { size: "256GB", price: 999 },
      { size: "512GB", price: 1199 },
    ],
    colors: [
      { name: "Sky Blue", km: "ពណ៌ផ្ទៃមេឃ", hex: "#769bbb" },
      { name: "Natural Titanium", km: "ពណ៌ទីតានីញ៉ូមធម្មជាតិ", hex: "#98948d" },
      { name: "Cloud White", km: "ពណ៌សពពក", hex: "#e8ebed" },
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
    km: "ទំហំធំជាងមុនសម្រាប់អ្វីគ្រប់យ៉ាងដែលអ្នកចូលចិត្ត។",
    display: "6.7-inch",
    chip: "Snapdragon 8 Elite Gen 5",
    camera: "50MP wide",
    storage: "256GB",
    storages: [
      { size: "256GB", price: 1099.99 },
      { size: "512GB", price: 1179.99 },
    ],
    colors: [
      { name: "Marble Gray", km: "ពណ៌ប្រផេះថ្មម៉ាប", hex: "#b8babd" },
      { name: "Cobalt Violet", km: "ពណ៌ស្វាយ Cobalt", hex: "#575672" },
      { name: "Onyx Black", km: "ពណ៌ខ្មៅ Onyx", hex: "#2c2d30" },
    ],
    source: samsungSource,
  },
];

const km = {
  searchLabel: "ស្វែងរក",
  availability: "សូមទាក់ទងដើម្បីបញ្ជាក់ស្តុក",
  announcement: "ឆ្នាំថ្មី។ ជម្រើសកាន់តែឆ្លាតវៃ។",
  collectionLink: "ជម្រើសសម្រាប់ឆ្នាំ ២០២៦",
  phones: "ទូរស័ព្ទ",
  about: "អំពីយើង",
  contact: "ទំនាក់ទំនង",
  talk: "ទាក់ទងយើង",
  collection: "ជម្រើសសម្រាប់ឆ្នាំ ២០២៦",
  headline: "ទូរស័ព្ទថ្មីរបស់អ្នក។<br><span class=\"accent-text\">ជ្រើសរើសយ៉ាងងាយស្រួល។</span>",
  heroText:
    "ទូរស័ព្ទល្អៗ។ ជម្រើសច្បាស់លាស់។ ស្វែងរកទូរស័ព្ទសម្រាប់ការប្រើប្រាស់ប្រចាំថ្ងៃ និងការច្នៃប្រឌិតរបស់អ្នក។",
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
  catalogText: "គំនិតថ្មីៗ។ រចនាសអាត។<br>ទូរស័ព្ទសមស្របសម្រាប់អ្នក។",
  all: "ទាំងអស់",
  featured: "ជម្រើសណែនាំ",
  priceLow: "តម្លៃ៖ ទាបទៅខ្ពស់",
  priceHigh: "តម្លៃ៖ ខ្ពស់ទៅទាប",
  nameSort: "ឈ្មោះ៖ A–Z",
  compareHint: "ជ្រើសរើសរហូតដល់ ៣ ដើម្បីប្រៀបធៀប",
  emptyTitle: "រកមិនឃើញទូរស័ព្ទ។",
  emptyText: "សាកល្បងឈ្មោះ បន្ទះឈីប ឬម៉ាកផ្សេង។",
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
  storageLabel: "ជម្រើសទំហំផ្ទុក",
  colorLabel: "ពណ៌",
  quantityLabel: "ចំនួន",
  inquire: "សួរតម្លៃ និងស្តុកលើ Telegram",
  official: "ព័ត៌មានពីក្រុមហ៊ុនផលិត",
  limit: "អ្នកអាចប្រៀបធៀបបានរហូតដល់ ៣ ទូរស័ព្ទ។",
  limitNeedTwo: "សូមជ្រើសរើសយ៉ាងហោចណាស់ ២ ទូរស័ព្ទដើម្បីប្រៀបធៀប។",
  selected: "បានជ្រើសរើស",
  results: "ទូរស័ព្ទមានក្នុងបញ្ជី",
  compareTitle: "ប្រៀបធៀបលក្ខណៈបច្ចេកទេស",
  modelYear: "ម៉ូដែលឆ្នាំ ២០២៦",
  genuineNotice: "ឧបករណ៍សុទ្ធ និងការធានាផ្លូវការពីរោងចក្រ",
  directInquiry: "ផ្ញើសារសួរតម្លៃភ្លាមៗ៖",
  sortLabel: "តម្រៀបតាម",
  localAssurance: "ទាក់ទង BobbyShop នៅភ្នំពេញ សម្រាប់ការផ្ទៀងផ្ទាត់ស្តុក និងការដឹកជញ្ជូនរហ័ស។",
};

const en = {
  searchLabel: "Search",
  availability: "Contact to confirm stock",
  announcement: "A fresh year. A smarter upgrade.",
  collectionLink: "THE 2026 COLLECTION",
  details: "View details",
  reference: "Launch MSRP from",
  select: "Compare",
  display: "Display",
  chip: "Chip (U.S. spec)",
  camera: "Main camera",
  storage: "Base storage",
  storageLabel: "Storage capacity",
  colorLabel: "Color finish",
  quantityLabel: "Quantity",
  inquire: "Ask for Price & Stock on Telegram",
  official: "Official manufacturer specifications",
  limit: "You can compare up to 3 phones. Remove one to add another.",
  limitNeedTwo: "Select at least 2 phones to view side-by-side comparison.",
  selected: "phones selected",
  results: "phones available",
  compareTitle: "Side-by-side comparison",
  modelYear: "2026 Model",
  genuineNotice: "Authentic hardware with original factory packaging",
  directInquiry: "Instant Telegram quote",
  sortLabel: "Sort by",
  localAssurance: "Contact BobbyShop in Phnom Penh for verified local stock and swift delivery.",
};

// Harvest existing DOM text for English defaults
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
const grid = document.getElementById("products-container");
const modal = document.getElementById("product-modal");
let lastFocus;
let currentModal = null;

// Modal interactive state
let modalState = {
  productId: null,
  selectedStorage: null,
  selectedPrice: null,
  selectedColor: null,
  quantity: 1,
};

const t = (key) => (lang === "km" ? km[key] : en[key]) || en[key] || key;

const money = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: n % 1 ? 2 : 0,
  }).format(n);

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
      low: lang === "km" ? "តម្លៃ៖ ទាប" : "Price: Low",
      high: lang === "km" ? "តម្លៃ៖ ខ្ពស់" : "Price: High",
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
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
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

  const sortSelect = document.getElementById("sort");
  const sort = sortSelect ? sortSelect.value : "featured";
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

  if (!grid) return;

  grid.innerHTML = list
    .map((p, i) => {
      const isSelected = selected.has(p.id);
      const delay = `${Math.min(i * 0.05, 0.4)}s`;
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
                alt="${p.name} official photograph"
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
            <div class="specs-pills" aria-label="Key specifications">
              <span class="spec-pill" title="${t("display")}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
                ${p.display}
              </span>
              <span class="spec-pill" title="${t("storage")}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                ${p.storage}
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
                <strong class="price-amount">${money(p.price)}</strong>
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
  const navCompareBtn = document.getElementById("nav-compare-btn");
  const navCompareCount = document.getElementById("nav-compare-count");

  const count = selected.size;

  if (navCompareBtn && navCompareCount) {
    navCompareBtn.hidden = count === 0;
    navCompareCount.textContent = count;
  }

  if (!bar) return;
  bar.hidden = count === 0;

  if (countEl) {
    countEl.textContent = `${count}/3 ${t("selected")}`;
  }
  if (openBtn) {
    openBtn.disabled = count < 2;
    openBtn.innerHTML = `<span>${t("compare")}</span> <span class="compare-badge-count">(${count})</span>`;
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

function buildTelegramInquiryUrl(product, storage, color, quantity) {
  const storageText = storage ? storage.size : product.storage;
  const colorText = color
    ? lang === "km"
      ? color.km
      : color.name
    : "";
  const qty = quantity || 1;

  const text =
    lang === "km"
      ? `សួស្តី BobbyShop! ខ្ញុំចាប់អារម្មណ៍លើ ${product.name} (${storageText}${colorText ? `, ${colorText}` : ""}) ចំនួន៖ ${qty}។ តើមានស្តុក និងតម្លៃក្នុងស្រុកបច្ចុប្បន្នប៉ុន្មានដែរ?`
      : `Hi BobbyShop! I am interested in the ${product.name} (${storageText}${colorText ? `, ${colorText}` : ""}), Quantity: ${qty}. What is the current local Phnom Penh price and stock availability?`;

  return `https://t.me/Bobbyplzy?text=${encodeURIComponent(text)}`;
}

function updateModalView() {
  const p = products.find((item) => item.id === modalState.productId);
  if (!p) return;

  const currentStorage =
    p.storages.find((s) => s.size === modalState.selectedStorage) ||
    p.storages[0];
  const currentColor =
    p.colors.find((c) => c.name === modalState.selectedColor) || p.colors[0];
  const currentPrice = currentStorage ? currentStorage.price : p.price;
  const qty = modalState.quantity || 1;

  // Update price in modal
  const priceValEl = document.getElementById("modal-price-display");
  if (priceValEl) {
    priceValEl.textContent = money(currentPrice * qty);
  }

  // Update storage active states
  document.querySelectorAll(".storage-pill-btn").forEach((btn) => {
    const isCur = btn.dataset.storageSize === currentStorage.size;
    btn.classList.toggle("is-active", isCur);
    btn.setAttribute("aria-pressed", String(isCur));
  });

  // Update color active states and label
  document.querySelectorAll(".color-swatch-btn").forEach((btn) => {
    const isCur = btn.dataset.colorName === currentColor.name;
    btn.classList.toggle("is-active", isCur);
    btn.setAttribute("aria-pressed", String(isCur));
  });

  const activeColorLabel = document.getElementById("modal-active-color-name");
  if (activeColorLabel) {
    activeColorLabel.textContent =
      lang === "km" ? currentColor.km : currentColor.name;
  }

  // Update quantity display
  const qtyDisplay = document.getElementById("modal-qty-value");
  if (qtyDisplay) {
    qtyDisplay.textContent = qty;
  }

  // Update Telegram inquiry button URL
  const inquiryBtn = document.getElementById("modal-telegram-inquiry-btn");
  if (inquiryBtn) {
    inquiryBtn.href = buildTelegramInquiryUrl(
      p,
      currentStorage,
      currentColor,
      qty
    );
  }

  // Update compare toggle state in modal
  const modalCompareBtn = document.getElementById("modal-compare-toggle-btn");
  if (modalCompareBtn) {
    const isComp = selected.has(p.id);
    modalCompareBtn.classList.toggle("is-active", isComp);
    modalCompareBtn.setAttribute("aria-pressed", String(isComp));
    modalCompareBtn.querySelector(".modal-compare-btn-text").textContent = isComp
      ? t("inCompare")
      : t("addToCompare");
  }
}

function detail(id) {
  const p = products.find((item) => item.id === id);
  if (!p) return;
  currentModal = id;

  modalState.productId = p.id;
  modalState.selectedStorage = p.storages[0].size;
  modalState.selectedPrice = p.storages[0].price;
  modalState.selectedColor = p.colors[0].name;
  modalState.quantity = 1;

  const defaultColor = p.colors[0];
  const isSelected = selected.has(p.id);

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

        <!-- Dynamic Reference Price Box -->
        <div class="modal-price-box">
          <div class="price-meta-label">${t("reference")} · USD</div>
          <div class="modal-price-val" id="modal-price-display">${money(p.storages[0].price)}</div>
          <div class="price-disclaimer">${t("priceNote")}</div>
        </div>

        <!-- Interactive Storage Selector -->
        <div class="variant-section">
          <div class="variant-label-row">
            <span class="variant-label">${t("storageLabel")}</span>
          </div>
          <div class="storage-options-grid" role="group" aria-label="${t("storageLabel")}">
            ${p.storages
              .map(
                (s, idx) => `
              <button
                type="button"
                class="storage-pill-btn ${idx === 0 ? "is-active" : ""}"
                data-storage-size="${s.size}"
                aria-pressed="${idx === 0 ? "true" : "false"}"
              >
                <span class="storage-size">${s.size}</span>
                <span class="storage-price">${money(s.price)}</span>
              </button>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- Interactive Color Finish Selector -->
        <div class="variant-section">
          <div class="variant-label-row">
            <span class="variant-label">${t("colorLabel")}:</span>
            <strong class="variant-value" id="modal-active-color-name">
              ${lang === "km" ? defaultColor.km : defaultColor.name}
            </strong>
          </div>
          <div class="color-swatches-row" role="group" aria-label="${t("colorLabel")}">
            ${p.colors
              .map(
                (c, idx) => `
              <button
                type="button"
                class="color-swatch-btn ${idx === 0 ? "is-active" : ""}"
                data-color-name="${c.name}"
                title="${lang === "km" ? c.km : c.name}"
                aria-label="${lang === "km" ? c.km : c.name}"
                aria-pressed="${idx === 0 ? "true" : "false"}"
              >
                <span class="color-dot" style="background-color: ${c.hex}"></span>
              </button>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- Quantity Selector & Comparison Quick Action -->
        <div class="modal-row-actions">
          <div class="quantity-wrapper">
            <label class="quantity-label" for="modal-qty-btn-minus">${t("quantityLabel")}</label>
            <div class="quantity-selector">
              <button type="button" class="qty-btn" id="modal-qty-btn-minus" aria-label="Decrease quantity">−</button>
              <span class="qty-value" id="modal-qty-value" aria-live="polite">1</span>
              <button type="button" class="qty-btn" id="modal-qty-btn-plus" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button
            type="button"
            class="button outline-sm modal-compare-btn ${isSelected ? "is-active" : ""}"
            id="modal-compare-toggle-btn"
            data-compare-product="${p.id}"
            aria-pressed="${isSelected ? "true" : "false"}"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>
            </svg>
            <span class="modal-compare-btn-text">${isSelected ? t("inCompare") : t("addToCompare")}</span>
          </button>
        </div>

        <!-- Technical Specs Grid -->
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
            <div class="spec-card-val">${p.storage}</div>
          </div>
        </div>

        <!-- Store Credibility & Assurance Note -->
        <div class="modal-local-stock-card">
          <div class="stock-status-banner">
            <span class="status-dot-pulse"></span>
            <strong>${t("availability")}</strong>
          </div>
          <p class="stock-note-small">${t("genuineNotice")}</p>
          <p class="stock-note-small local-note">${t("localAssurance")}</p>
        </div>

        <!-- Primary Telegram Quote Inquiry Button -->
        <div class="modal-actions-area">
          <a
            class="button telegram-primary-btn"
            id="modal-telegram-inquiry-btn"
            href="${buildTelegramInquiryUrl(p, p.storages[0], defaultColor, 1)}"
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

  // Attach interactive listeners inside the modal
  const modalEl = document.getElementById("product-modal");
  modalEl.querySelectorAll(".storage-pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      modalState.selectedStorage = btn.dataset.storageSize;
      updateModalView();
    });
  });

  modalEl.querySelectorAll(".color-swatch-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      modalState.selectedColor = btn.dataset.colorName;
      updateModalView();
    });
  });

  const btnMinus = document.getElementById("modal-qty-btn-minus");
  if (btnMinus) {
    btnMinus.addEventListener("click", () => {
      if (modalState.quantity > 1) {
        modalState.quantity -= 1;
        updateModalView();
      }
    });
  }

  const btnPlus = document.getElementById("modal-qty-btn-plus");
  if (btnPlus) {
    btnPlus.addEventListener("click", () => {
      if (modalState.quantity < 10) {
        modalState.quantity += 1;
        updateModalView();
      }
    });
  }

  const compareToggleBtn = document.getElementById("modal-compare-toggle-btn");
  if (compareToggleBtn) {
    compareToggleBtn.addEventListener("click", () => {
      if (selected.has(p.id)) {
        selected.delete(p.id);
      } else {
        if (selected.size === 3) {
          const toast = document.getElementById("toast");
          if (toast) {
            toast.textContent = t("limit");
            toast.hidden = false;
            setTimeout(() => (toast.hidden = true), 3500);
          }
          return;
        }
        selected.add(p.id);
      }
      render();
      updateModalView();
    });
  }
}

function compare() {
  if (selected.size < 2) {
    const toast = document.getElementById("toast");
    if (toast) {
      toast.textContent = t("limitNeedTwo");
      toast.hidden = false;
      setTimeout(() => (toast.hidden = true), 3500);
    }
    return;
  }

  currentModal = "compare";
  const list = products.filter((p) => selected.has(p.id));

  openDialog(`
    <div class="compare-modal-header">
      <h2 id="modal-title" class="modal-title">${t("compareTitle")}</h2>
      <p class="compare-subtitle">${
        lang === "km"
          ? "ប្រៀបធៀបលក្ខណៈសម្បត្តិទូរស័ព្ទដែលបានជ្រើសរើស"
          : "Review technical specifications side-by-side"
      }</p>
    </div>
    <div class="table-wrap">
      <table class="compare-table">
        <thead>
          <tr>
            <th scope="col" class="sticky-col-header">${lang === "km" ? "លក្ខណៈសម្បត្តិ" : "Feature"}</th>
            ${list
              .map(
                (p) => `
                <th scope="col" class="phone-col-header">
                  <div class="compare-card-top">
                    <img src="assets/${p.image}.jpg" alt="${p.name}" width="90" height="90" class="compare-head-img" />
                    <div class="compare-head-name">${p.name}</div>
                    <div class="compare-head-price">${money(p.price)}</div>
                    <a
                      class="button compare-inquire-btn"
                      href="${buildTelegramInquiryUrl(p, p.storages[0], p.colors[0], 1)}"
                      target="_blank"
                      rel="noopener"
                    >
                      ${lang === "km" ? "សួរតម្លៃ" : "Inquire"} ↗
                    </a>
                  </div>
                </th>
              `
              )
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
            ${list.map((p) => `<td class="price-cell">${money(p.price)}</td>`).join("")}
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
          <tr>
            <th scope="row" class="sticky-col">${t("storage")}</th>
            ${list.map((p) => `<td>${p.storage}</td>`).join("")}
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
      lang === "en"
        ? "Find a phone, chip, or brand…"
        : "ស្វែងរកទូរស័ព្ទ បន្ទះឈីប ឬម៉ាក…";
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

  try {
    localStorage.setItem("bobbyshop-language", lang);
  } catch {}
}

// Global Event Listeners
const langButton = document.getElementById("language");
if (langButton) {
  langButton.addEventListener("click", () => {
    lang = lang === "en" ? "km" : "en";
    setLanguage();
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
if (searchInputEl) {
  searchInputEl.addEventListener("input", render);
}

const searchClearEl = document.getElementById("search-clear");
if (searchClearEl && searchInputEl) {
  searchClearEl.addEventListener("click", () => {
    searchInputEl.value = "";
    searchInputEl.focus();
    render();
  });
}

const sortSelectEl = document.getElementById("sort");
if (sortSelectEl) {
  sortSelectEl.addEventListener("change", render);
}

// Header Search Trigger: Focus and highlight search box
const searchLink = document.getElementById("search-link");
if (searchLink && searchInputEl) {
  searchLink.addEventListener("click", (event) => {
    event.preventDefault();
    searchInputEl.focus();
    searchInputEl.scrollIntoView({ behavior: "smooth", block: "center" });

    const searchWrap = document.getElementById("search-box-wrap");
    if (searchWrap) {
      searchWrap.classList.remove("search-highlight");
      void searchWrap.offsetWidth;
      searchWrap.classList.add("search-highlight");
    }
  });
}

// Header Compare Button
const navCompareBtn = document.getElementById("nav-compare-btn");
if (navCompareBtn) {
  navCompareBtn.addEventListener("click", () => {
    if (selected.size >= 2) {
      compare();
    } else if (selected.size === 1) {
      const toast = document.getElementById("toast");
      if (toast) {
        toast.textContent = t("limitNeedTwo");
        toast.hidden = false;
        setTimeout(() => (toast.hidden = true), 3500);
      }
      const compareBar = document.getElementById("compare-bar");
      if (compareBar) {
        compareBar.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}

// Global click delegation
document.addEventListener("click", (e) => {
  const detailBtn = e.target.closest("[data-detail]");
  if (detailBtn) {
    detailBtn.classList.add("is-loading");
    setTimeout(() => {
      detail(detailBtn.dataset.detail);
      detailBtn.classList.remove("is-loading");
    }, 100);
    return;
  }

  const removeThumb = e.target.closest("[data-remove-compare]");
  if (removeThumb) {
    const id = removeThumb.dataset.removeCompare;
    selected.delete(id);
    render();
    return;
  }

  const activeChip = e.target.closest("[data-filter-type]");
  if (activeChip) {
    const type = activeChip.dataset.filterType;
    if (type === "brand") {
      const allBtn = document.querySelector('[data-brand="All"]');
      if (allBtn) allBtn.click();
    } else if (type === "query" && searchInputEl) {
      searchInputEl.value = "";
      render();
    } else if (type === "sort" && sortSelectEl) {
      sortSelectEl.value = "featured";
      render();
    }
    return;
  }
});

// Compare checkbox change on product cards
let toastTimer;
if (grid) {
  grid.addEventListener("change", (e) => {
    const id = e.target.dataset.compare;
    if (!id) return;
    if (e.target.checked) {
      if (selected.size === 3) {
        e.target.checked = false;
        const toast = document.getElementById("toast");
        if (toast) {
          toast.textContent = t("limit");
          toast.hidden = false;
          clearTimeout(toastTimer);
          toastTimer = setTimeout(() => (toast.hidden = true), 3500);
        }
        return;
      }
      selected.add(id);
    } else {
      selected.delete(id);
    }
    render();
  });
}

const compareOpenBtn = document.getElementById("compare-open");
if (compareOpenBtn) {
  compareOpenBtn.addEventListener("click", compare);
}

const compareClearBtn = document.getElementById("compare-clear");
if (compareClearBtn) {
  compareClearBtn.addEventListener("click", () => {
    selected.clear();
    const toast = document.getElementById("toast");
    if (toast) toast.hidden = true;
    render();
  });
}

const resetBtn = document.getElementById("reset");
if (resetBtn && searchInputEl && sortSelectEl) {
  resetBtn.addEventListener("click", () => {
    searchInputEl.value = "";
    sortSelectEl.value = "featured";
    const allBtn = document.querySelector('[data-brand="All"]');
    if (allBtn) allBtn.click();
    searchInputEl.focus();
  });
}

const clearFiltersBtn = document.getElementById("clear-filters");
if (clearFiltersBtn && resetBtn) {
  clearFiltersBtn.addEventListener("click", () => {
    resetBtn.click();
  });
}

const closeModalBtn = document.getElementById("close-modal");
if (closeModalBtn && modal) {
  closeModalBtn.addEventListener("click", () => modal.close());
}

if (modal) {
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
    if (lastFocus && lastFocus.isConnected) lastFocus.focus();
  });
}

// Motion preference and scroll actions
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const backTop = document.getElementById("back-top");
let scrollFrame = 0;

function updateScroll() {
  if (backTop) {
    backTop.hidden = window.scrollY < 500;
  }
  const header = document.getElementById("main-header");
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 15);
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

// Initialize on load
setLanguage();
updateScroll();
