// ===== Configuration de la boutique =====
// ⚠️ Numéro WhatsApp de la boutique (format international, sans le +)
const WHATSAPP_NUMBER = "2250789573529";

// ⚠️ PRIX PROVISOIRES — à remplacer par les vrais prix de chaque produit
const PRODUCTS = [
  { id: "french-avenue-jade", brand: "French Avenue", name: "Jade", price: 35000, category: "French Avenue", img: "images/french-avenue-jade.jpg", tagline: "Fraîcheur boisée, élégance discrète" },
  { id: "french-avenue-genesis", brand: "French Avenue", name: "Genesis — Sagittarius", price: 30000, category: "French Avenue", img: "images/french-avenue-genesis.jpg", tagline: "Signature ambrée pour les audacieux" },
  { id: "khamrah-qahwa", brand: "Lattafa", name: "Khamrah Qahwa", price: 20000, category: "Lattafa", img: "images/khamrah-qahwa.jpg", tagline: "Café torréfié et épices, addictif" },
  { id: "honor-glory-badee-al-oud", brand: "Lattafa", name: "Honor & Glory — Badee Al Oud", price: 25000, category: "Lattafa", img: "images/honor-glory-badee-al-oud.jpg", tagline: "Oud royal, sillage qui marque" },
  { id: "amethyst-badre-al-oud", brand: "Lattafa", name: "Amethyst — Badre Al Oud", price: 25000, category: "Lattafa", img: "images/amethyst-badre-al-oud.jpg", tagline: "Oud floral, mystérieux et raffiné" },
  { id: "oud-for-glory-badee-al-oud", brand: "Lattafa", name: "Oud For Glory — Badee Al Oud", price: 25000, category: "Lattafa", img: "images/oud-for-glory-badee-al-oud.jpg", tagline: "Oud sombre et intense" },
  { id: "lattafa-musamam-black-intense", brand: "Lattafa", name: "Musamam — Black Intense", price: 25000, category: "Lattafa", img: "images/lattafa-musamam-black-intense.jpg", tagline: "Boisé musqué, caractère affirmé" },
  { id: "fakhan-lattafa", brand: "Lattafa", name: "Fakhan Lattafa — Pride of Lattafa", price: 20000, category: "Lattafa", img: "images/fakhan-lattafa.jpg", tagline: "L'élégance classique de Lattafa" },
  { id: "loui-martin-matiere-noire", brand: "Loui Martin", name: "Matière Noire", price: 15000, category: "Loui Martin", img: "images/loui-martin-matiere-noire.jpg", tagline: "Noir profond, sillage envoûtant" },
  { id: "loui-martin-immensty", brand: "Loui Martin", name: "Immensty", price: 15000, category: "Loui Martin", img: "images/loui-martin-immensty.jpg", tagline: "Frais et immense, pour chaque jour" },
  { id: "loui-martin-vanilla-leather", brand: "Loui Martin", name: "Vanilla Leather", price: 15000, category: "Loui Martin", img: "images/loui-martin-vanilla-leather.jpg", tagline: "Vanille chaude, cuir sensuel" },
  { id: "loui-martin-ombre-naomi", brand: "Loui Martin", name: "Ombre Naomi", price: 15000, category: "Loui Martin", img: "images/loui-martin-ombre-naomi.jpg", tagline: "Douceur boisée, subtilement féminine" },
  { id: "pinnace", brand: "Pinnace", name: "Pinnace", price: 25000, category: "Pinnace", img: "images/pinnace.jpg", tagline: "Signature dorée, prestige discret" },
  { id: "brulee", brand: "Brûlée", name: "Brûlée", price: 30000, category: "Autres", img: "images/brulee.jpg", tagline: "Gourmand caramélisé, addictif" },
  { id: "roses-emotion", brand: "Roses d'Émotion", name: "Roses d'Émotion", price: 20000, category: "Autres", img: "images/roses-emotion.jpg", tagline: "Pétales de rose, émotion pure" },
  { id: "vanille-exaltante", brand: "Maison Manël", name: "Vanille Exaltante", price: 25000, category: "Maison Manël", img: "images/vanille-exaltante.jpg", tagline: "Vanille parisienne, exaltante" },
  { id: "armaf-bon-bon-dolce", brand: "Armaf", name: "Bon Bon", price: 20000, category: "Autres", img: "images/armaf-bon-bon-dolce.jpg", tagline: "Sucré et pétillant, plein de peps" },
  { id: "hibiscus-magic", brand: "Artisan Perfumes", name: "Hibiscus Magic", price: 15000, category: "Autres", img: "images/hibiscus-magic.jpg", tagline: "Floral vibrant, magie tropicale" },
  { id: "oud-nuclear", brand: "Fragrance World", name: "Oud Nuclear", price: 15000, category: "Autres", img: "images/oud-nuclear.jpg", tagline: "Oud puissant, énergie brute" },
  { id: "oud-madness", brand: "Fragrance World", name: "Oud Madness", price: 15000, category: "Autres", img: "images/oud-madness.jpg", tagline: "Oud intense qui ne passe pas inaperçu" },
  { id: "french-avenue-cocoa-morado", brand: "French Avenue", name: "Cocoa Morado", price: 25000, category: "French Avenue", img: "images/french-avenue-cocoa-morado.jpg" },
  { id: "french-avenue-vulcan-baie", brand: "French Avenue", name: "Vulcan Baie", price: 25000, category: "French Avenue", img: "images/french-avenue-vulcan-baie.jpg" },
  { id: "oclock", brand: "O'Clock", name: "O'Clock", price: 30000, category: "Autres", img: "images/oclock.jpg" },
  { id: "marshmallow-blush", brand: "Paris Corner", name: "Marshmallow Blush", price: 25000, category: "Autres", img: "images/marshmallow-blush.jpg" },
  { id: "fakhar-lattafa", brand: "Lattafa", name: "Fakhar Lattafa", price: 20000, category: "Lattafa", img: "images/fakhar-lattafa.jpg" },
  { id: "vanilla-latte", brand: "Gulf Orchid", name: "Vanilla Latte", price: 30000, category: "Autres", img: "images/vanilla-latte.jpg" },
  { id: "french-avenue-ghost-spectre", brand: "French Avenue", name: "Ghost Spectre", price: 30000, category: "French Avenue", img: "images/french-avenue-ghost-spectre.jpg" },
  { id: "french-avenue-spectre", brand: "French Avenue", name: "Spectre", price: 30000, category: "French Avenue", img: "images/french-avenue-spectre.jpg" },
  { id: "musc-devastating", brand: "Editions de Parfums", name: "Musc Devastating — Diamond Ribbon", price: 30000, category: "Autres", img: "images/musc-devastating.jpg" },
  { id: "oud-envoutant", brand: "Signature Royale Paris", name: "Oud Envoûtant", price: 30000, category: "Autres", img: "images/oud-envoutant.jpg" },
  { id: "khamrah-waha", brand: "Lattafa", name: "Khamrah Waha", price: 30000, category: "Lattafa", img: "images/khamrah-waha.jpg" },
  { id: "king-of-arabia", brand: "Lattafa Pride", name: "King of Arabia", price: 35000, category: "Lattafa", img: "images/king-of-arabia.jpg" },
  { id: "eternal-vanille", brand: "Lattafa Pride", name: "Eternal Vanille", price: 35000, category: "Lattafa", img: "images/eternal-vanille.jpg" },
  { id: "eternal-oud", brand: "Lattafa Pride", name: "Eternal Oud", price: 35000, category: "Lattafa", img: "images/eternal-oud.jpg" },
  { id: "afnan-9pm-rebel", brand: "Afnan", name: "9pm Rebel", price: 25000, category: "Autres", img: "images/afnan-9pm-rebel.jpg", isNew: true },
  { id: "harmonie-secrete-intense", brand: "Maison Manël", name: "Harmonie Secrète Intense", price: 25000, category: "Maison Manël", img: "images/harmonie-secrete-intense.jpg", isNew: true },
  { id: "blossom-enigma", brand: "Maison Manël", name: "Blossom Enigma", price: 35000, category: "Maison Manël", img: "images/blossom-enigma.jpg", isNew: true },
  { id: "jardin-enchante", brand: "Maison Manël", name: "Jardin Enchanté", price: 25000, category: "Maison Manël", img: "images/jardin-enchante.jpg", isNew: true },
  { id: "illusion-exquise", brand: "Maison Manël", name: "Illusion Exquise", price: 25000, category: "Maison Manël", img: "images/illusion-exquise.jpg", isNew: true },
  { id: "french-avenue-eclair-affair", brand: "French Avenue", name: "Eclair Affair", price: 25000, category: "French Avenue", img: "images/french-avenue-eclair-affair.jpg", isNew: true },
];

// ===== État du panier (persisté en localStorage) =====
let cart = JSON.parse(localStorage.getItem("royal-senteur-cart") || "{}");

function saveCart() {
  localStorage.setItem("royal-senteur-cart", JSON.stringify(cart));
}

function formatPrice(n) {
  return n.toLocaleString("fr-FR").replace(/,/g, " ") + " FCFA";
}

// ===== Rendu du catalogue =====
const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");

function renderFilters() {
  const categories = ["Tous", ...new Set(PRODUCTS.map((p) => p.category))];
  filtersEl.innerHTML = categories
    .map(
      (c, i) =>
        `<button class="filter-btn ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`
    )
    .join("");

  filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filtersEl.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGrid(btn.dataset.cat);
    });
  });
}

function renderGrid(category = "Tous") {
  const items = category === "Tous" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);
  grid.innerHTML = items
    .map((p) => {
      const inCart = !!cart[p.id];
      return `
      <div class="card">
        <div class="card-img">
          ${p.isNew ? '<span class="badge-new">Nouveau</span>' : ""}
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="card-body">
          <div class="card-brand">${p.brand}</div>
          <h3 class="card-name">${p.name}</h3>
          <div class="card-footer">
            <span class="card-price">${formatPrice(p.price)}</span>
            <button class="add-btn ${inCart ? "added" : ""}" data-id="${p.id}">
              ${inCart ? "Ajouté ✓" : "Ajouter"}
            </button>
          </div>
        </div>
      </div>`;
    })
    .join("");

  grid.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.id);
      btn.textContent = "Ajouté ✓";
      btn.classList.add("added");
      updateCartCount();
    });
  });
}

// ===== Logique panier =====
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
  renderGrid(document.querySelector(".filter-btn.active")?.dataset.cat || "Tous");
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
  renderCart();
  renderGrid(document.querySelector(".filter-btn.active")?.dataset.cat || "Tous");
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find((p) => p.id === id);
    return sum + (p ? p.price * qty : 0);
  }, 0);
}

function updateCartCount() {
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  document.getElementById("cart-count").textContent = count;
}

const cartItemsEl = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");
const cartTotalEl = document.getElementById("cart-total");

function renderCart() {
  const entries = Object.entries(cart);
  updateCartCount();

  if (entries.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Votre panier est vide.</p>';
    checkoutBtn.disabled = true;
    cartTotalEl.textContent = formatPrice(0);
    return;
  }

  cartItemsEl.innerHTML = entries
    .map(([id, qty]) => {
      const p = PRODUCTS.find((p) => p.id === id);
      if (!p) return "";
      return `
      <div class="cart-item">
        <img src="${p.img}" alt="${p.name}" />
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${formatPrice(p.price)}</div>
          <div class="qty-row">
            <button class="qty-btn" data-action="dec" data-id="${id}">−</button>
            <span>${qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${id}">+</button>
            <button class="remove-btn" data-action="remove" data-id="${id}">Retirer</button>
          </div>
        </div>
      </div>`;
    })
    .join("");

  cartItemsEl.querySelectorAll("[data-action]").forEach((btn) => {
    const id = btn.dataset.id;
    btn.addEventListener("click", () => {
      if (btn.dataset.action === "inc") changeQty(id, 1);
      if (btn.dataset.action === "dec") changeQty(id, -1);
      if (btn.dataset.action === "remove") removeFromCart(id);
    });
  });

  checkoutBtn.disabled = false;
  cartTotalEl.textContent = formatPrice(cartTotal());
}

// ===== Redirection WhatsApp =====
function buildWhatsAppMessage(customer) {
  let msg = "Bonjour Royal Senteur, je souhaite commander :\n\n";
  Object.entries(cart).forEach(([id, qty]) => {
    const p = PRODUCTS.find((p) => p.id === id);
    if (p) msg += `• ${p.name} x${qty} — ${formatPrice(p.price * qty)}\n`;
  });
  msg += `\nTotal : ${formatPrice(cartTotal())}`;
  msg += `\n\n— Mes informations —`;
  msg += `\nNom : ${customer.name}`;
  msg += `\nTéléphone : ${customer.phone}`;
  msg += `\nAdresse de livraison : ${customer.address}`;
  msg += `\n\nNB : je comprends qu'un acompte de 2 000 FCFA est demandé pour confirmer la commande.`;
  return msg;
}

const checkoutForm = document.getElementById("checkout-form");

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const customer = {
    name: document.getElementById("cust-name").value.trim(),
    phone: document.getElementById("cust-phone").value.trim(),
    address: document.getElementById("cust-address").value.trim(),
  };
  if (!customer.name || !customer.phone || !customer.address) return;

  const message = encodeURIComponent(buildWhatsAppMessage(customer));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
});

// ===== Drawer panier =====
const drawer = document.getElementById("cart-drawer");
const overlay = document.getElementById("overlay");

function openCart() {
  drawer.classList.add("open");
  overlay.classList.add("open");
}
function closeCart() {
  drawer.classList.remove("open");
  overlay.classList.remove("open");
}

document.getElementById("cart-toggle").addEventListener("click", openCart);
document.getElementById("close-cart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

// ===== Init =====
renderFilters();
renderGrid();
renderCart();
