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
    source: samsungSource,
  },
];
const km = {
  searchLabel: "ស្វែងរក",
  availability: "សូមទាក់ទងដើម្បីបញ្ជាក់ស្តុក",
  showcaseNote: "គំនិតធំ។ ទំហំតូចងាយកាន់។",
  ribbon: "បង្ហាញភាពជាអ្នក ជាមួយលទ្ធភាពថ្មីៗ។",
  announcement: "ឆ្នាំថ្មី។ ជម្រើសកាន់តែឆ្លាតវៃ។",
  phones: "ទូរស័ព្ទ",
  about: "អំពីយើង",
  contact: "ទំនាក់ទំនង",
  talk: "ទាក់ទងយើង",
  collection: "ជម្រើសសម្រាប់ឆ្នាំ ២០២៦",
  headline: "ទូរស័ព្ទថ្មីរបស់អ្នក។<br><span>ជ្រើសរើសយ៉ាងងាយស្រួល។</span>",
  heroText:
    "ទូរស័ព្ទល្អៗ។ ជម្រើសច្បាស់លាស់។ ស្វែងរកទូរស័ព្ទសម្រាប់ប្រើប្រាស់ប្រចាំថ្ងៃ និងការច្នៃប្រឌិតរបស់អ្នក។",
  explore: "មើលទូរស័ព្ទទាំងអស់",
  local: "ជម្រើសបច្ចេកវិទ្យានៅជិតអ្នក។<br>រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា។",
  proTag: "បទពិសោធន៍កាន់តែអស្ចារ្យ។",
  benefit1: "ប្រៀបធៀបដោយទំនុកចិត្ត<small>ព័ត៌មានលម្អិតដែលសំខាន់</small>",
  benefit2:
    "ស្វែងរកជម្រើសសមស្រប<small>ពីការប្រើប្រចាំថ្ងៃដល់កម្រិតខ្ពស់</small>",
  benefit3: "ក្រុមការងារត្រៀមជួយអ្នក<small>ទាក់ទងក្រុមការងារនៅភ្នំពេញ</small>",
  lineup: "ជម្រើសទូរស័ព្ទ",
  find: "ស្វែងរកទូរស័ព្ទដែលអ្នកពេញចិត្ត។",
  catalogText: "គំនិតថ្មី។ រចនាស្អាត។<br>ទូរស័ព្ទសមស្របសម្រាប់អ្នក។",
  all: "ទាំងអស់",
  featured: "ជម្រើសណែនាំ",
  priceLow: "តម្លៃ៖ ទាបទៅខ្ពស់",
  priceHigh: "តម្លៃ៖ ខ្ពស់ទៅទាប",
  nameSort: "ឈ្មោះ៖ A–Z",
  compareHint: "ជ្រើសរើសរហូតដល់ ៣ ដើម្បីប្រៀបធៀប",
  emptyTitle: "រកមិនឃើញទូរស័ព្ទ។",
  emptyText: "សាកល្បងឈ្មោះ ឬម៉ាកផ្សេង។",
  reset: "កំណត់តម្រងឡើងវិញ",
  priceNote:
    "តម្លៃជាដុល្លារអាមេរិក គឺជាតម្លៃចាប់ផ្តើមពេលចេញលក់នៅអាមេរិក មិនរួមពន្ធ។ តម្លៃក្នុងស្រុក ជម្រើស និងស្តុកអាចខុសគ្នា។ សូមទាក់ទងយើងសម្រាប់តម្លៃបច្ចុប្បន្ន។",
  human: "ក្រុមការងាររីករាយនឹងជួយ",
  helpTitle: "បច្ចេកវិទ្យាល្អ ចាប់ផ្តើមពី<br>ការសន្ទនាល្អ។",
  helpText:
    "ចូលចិត្តថតរូប? ធ្វើការច្រើន? ឬត្រូវការទូរស័ព្ទប្រើប្រចាំថ្ងៃ? ប្រាប់យើងពីអ្វីដែលអ្នកត្រូវការ។ យើងនឹងជួយអ្នកស្វែងរកជម្រើស។",
  chat: "ជជែកជាមួយយើងតាម Telegram",
  footerText: "ទូរស័ព្ទសម្រាប់ប្រចាំថ្ងៃរបស់អ្នក។<br>ស្វែងរកនៅទីនេះ។",
  visit: "អាសយដ្ឋាន",
  follow: "តាមដានយើង",
  rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
  updated: "បានធ្វើបច្ចុប្បន្នភាព ខែកញ្ញា ២០២៦",
  compare: "ប្រៀបធៀបទូរស័ព្ទ",
  clear: "លុប",
  details: "ព័ត៌មានលម្អិត",
  reference: "តម្លៃចាប់ផ្តើមយោង",
  select: "ប្រៀបធៀប",
  display: "អេក្រង់",
  chip: "បន្ទះឈីប (អាមេរិក)",
  camera: "កាមេរ៉ាចម្បង",
  storage: "ទំហំផ្ទុក",
  inquire: "សួរតម្លៃ និងស្តុក",
  official: "ព័ត៌មានពីក្រុមហ៊ុនផលិត ↗",
  limit: "អ្នកអាចប្រៀបធៀបបានរហូតដល់ ៣ ទូរស័ព្ទ។",
  selected: "បានជ្រើសរើស",
  results: "ទូរស័ព្ទ",
  compareTitle: "ប្រៀបធៀបជម្រើសរបស់អ្នក។",
};
const en = {
  availability: "Contact us to confirm stock",
  details: "View details",
  reference: "Launch price from",
  select: "Compare",
  display: "Display",
  chip: "Chip (U.S. model)",
  camera: "Main camera",
  storage: "Base storage",
  inquire: "Ask for price & availability",
  official: "Official product information ↗",
  limit: "You can compare up to 3 phones. Remove one to add another.",
  selected: "phones selected",
  results: "phones",
  compareTitle: "Compare your favorites.",
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
const grid = document.getElementById("products-container");
const modal = document.getElementById("product-modal");
let lastFocus;
let currentModal = null;
const t = (key) => (lang === "km" ? km[key] : en[key]) || en[key] || key;
const money = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: n % 1 ? 2 : 0,
  }).format(n);
function render() {
  const query = document.getElementById("search").value.trim().toLowerCase();
  let list = products.filter(
    (p) =>
      (brand === "All" || p.brand === brand) &&
      `${p.brand} ${p.name} ${p.chip} ${p.storage}`
        .toLowerCase()
        .includes(query),
  );
  const sort = document.getElementById("sort").value;
  if (sort === "low") list.sort((a, b) => a.price - b.price);
  if (sort === "high") list.sort((a, b) => b.price - a.price);
  if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
  document.getElementById("result-count").textContent =
    `${list.length} ${t("results")}${brand !== "All" ? ` · ${brand}` : ""}${query ? ` · “${document.getElementById("search").value.trim()}”` : ""}`;
  document.getElementById("clear-filters").hidden =
    brand === "All" && !query && sort === "featured";
  document.getElementById("empty").hidden = list.length > 0;
  grid.innerHTML = list
    .map(
      (p) =>
        `<article class="product-card"><div class="product-art"><span class="badge">${lang === "km" ? "ជម្រើសឆ្នាំ ២០២៦" : p.badge}</span><img src="assets/${p.image}.jpg" alt="${p.name} color collection" loading="lazy" decoding="async" width="400" height="240"></div><div class="product-info"><div class="brand">${p.brand}</div><h3>${p.name}</h3><p class="description">${lang === "km" ? p.km : p.desc}</p><div class="specs"><span>${p.display}</span><span>${p.storage}</span><span>${p.camera}</span></div><div class="card-bottom"><div class="price"><small>${t("reference")} · USD</small><strong>${money(p.price)}</strong></div><button class="details-btn" data-detail="${p.id}" aria-label="${t("details")}: ${p.name}">${t("details")} ↗</button></div><p class="availability">${t("availability")}</p><label class="compare-check"><input type="checkbox" data-compare="${p.id}" aria-label="${t("select")} ${p.name}" ${selected.has(p.id) ? "checked" : ""}>${t("select")}</label></div></article>`,
    )
    .join("");
  updateBar();
}
function updateBar() {
  document.getElementById("compare-bar").hidden = !selected.size;
  document.getElementById("selected-count").textContent =
    `${selected.size}/3 ${t("selected")}`;
  document.getElementById("compare-open").disabled = selected.size < 2;
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
function detail(id) {
  const p = products.find((p) => p.id === id);
  if (!p) return;
  currentModal = id;
  openDialog(
    `<div class="modal-detail"><img src="assets/${p.image}.jpg" alt="${p.name} color collection" width="400" height="340"><div><div class="brand">${p.brand} · 2026</div><h2 id="modal-title">${p.name}</h2><p>${lang === "km" ? p.km : p.desc}</p><div class="price"><small>${t("reference")} · USD</small><strong>${money(p.price)}</strong></div><p class="availability">${t("availability")}</p><dl>${["display", "chip", "camera", "storage"].map((k) => `<div><dt>${t(k)}</dt><dd>${p[k]}</dd></div>`).join("")}</dl><p>${t("priceNote")}</p><a class="button primary" href="https://t.me/Bobbyplzy?text=${encodeURIComponent("Hi BobbyShop! I’m interested in the " + p.name + ". What is the current local price and availability?")}" target="_blank" rel="noopener">${t("inquire")} ↗</a><br><a class="source" href="${p.source}" target="_blank" rel="noopener">${t("official")}</a></div></div>`,
  );
}
function compare() {
  if (selected.size < 2) return;
  currentModal = "compare";
  const list = products.filter((p) => selected.has(p.id));
  openDialog(
    `<h2 id="modal-title">${t("compareTitle")}</h2><div class="table-wrap"><table><thead><tr><th scope="col">${lang === "km" ? "ទូរស័ព្ទ" : "Phone"}</th>${list.map((p) => `<th scope="col">${p.name}</th>`).join("")}</tr></thead><tbody>${["brand", "price", "display", "chip", "camera", "storage"].map((k) => `<tr><th scope="row">${k === "price" ? t("reference") : k === "brand" ? (lang === "km" ? "ម៉ាក" : "Brand") : t(k)}</th>${list.map((p) => `<td>${k === "price" ? money(p.price) : p[k]}</td>`).join("")}</tr>`).join("")}</tbody></table></div><p class="price-note">${t("priceNote")}</p>`,
  );
}
function setLanguage() {
  document.getElementById("toast").hidden = true;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-t]").forEach((el) => {
    el.innerHTML = t(el.dataset.t);
  });
  const button = document.getElementById("language");
  button.textContent = lang === "en" ? "ខ្មែរ" : "English";
  button.setAttribute(
    "aria-label",
    lang === "en" ? "Switch to Khmer" : "Switch to English",
  );
  document
    .getElementById("back-top")
    .setAttribute(
      "aria-label",
      lang === "en" ? "Back to top" : "ត្រឡប់ទៅខាងលើ",
    );
  document.getElementById("search").placeholder =
    lang === "en" ? "Find a phone…" : "ស្វែងរកទូរស័ព្ទ…";
  document
    .getElementById("search")
    .setAttribute(
      "aria-label",
      lang === "en" ? "Search phones" : "ស្វែងរកទូរស័ព្ទ",
    );
  document
    .getElementById("sort")
    .setAttribute(
      "aria-label",
      lang === "en" ? "Sort phones" : "តម្រៀបទូរស័ព្ទ",
    );
  document
    .getElementById("close-modal")
    .setAttribute("aria-label", lang === "en" ? "Close dialog" : "បិទ");
  render();
  try {
    localStorage.setItem("bobbyshop-language", lang);
  } catch {}
}
document.getElementById("language").addEventListener("click", () => {
  lang = lang === "en" ? "km" : "en";
  setLanguage();
});
document.querySelectorAll("[data-brand]").forEach((button) =>
  button.addEventListener("click", () => {
    brand = button.dataset.brand;
    document.querySelectorAll("[data-brand]").forEach((b) => {
      b.classList.toggle("active", b === button);
      b.setAttribute("aria-pressed", String(b === button));
    });
    render();
  }),
);
document.getElementById("search").addEventListener("input", render);
document.getElementById("sort").addEventListener("change", render);
document.addEventListener("click", (e) => {
  const button = e.target.closest("[data-detail]");
  if (button) detail(button.dataset.detail);
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
  } else selected.delete(id);
  updateBar();
});
document.getElementById("compare-open").addEventListener("click", compare);
document.getElementById("compare-clear").addEventListener("click", () => {
  selected.clear();
  document.getElementById("toast").hidden = true;
  render();
  document.getElementById("search").focus();
});
document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("search").value = "";
  document.getElementById("sort").value = "featured";
  document.querySelector('[data-brand="All"]').click();
  document.getElementById("search").focus();
});
document
  .getElementById("clear-filters")
  .addEventListener("click", () => document.getElementById("reset").click());
document.getElementById("search-link").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("search").focus();
  document.getElementById("search").scrollIntoView({ block: "center" });
});
document
  .getElementById("close-modal")
  .addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    const r = modal.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      modal.close();
  }
});
modal.addEventListener("close", () => {
  currentModal = null;
  if (lastFocus?.isConnected) lastFocus.focus();
});
setLanguage();

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const backTop = document.getElementById("back-top");
let scrollFrame = 0;
function updateScroll() {
  backTop.hidden = window.scrollY < 650;
  document
    .querySelector("header")
    .classList.toggle("is-scrolled", window.scrollY > 35);
  scrollFrame = 0;
}
window.addEventListener(
  "scroll",
  () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
  },
  { passive: true },
);
window.addEventListener("resize", updateScroll);
backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: motionPreference.matches ? "instant" : "smooth",
  });
  document.querySelector("header .logo").focus({ preventScroll: true });
});
updateScroll();
