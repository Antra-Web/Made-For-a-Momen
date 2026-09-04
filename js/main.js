/* MADE FOR A MOMENT — shared behaviour */
(function(){
  "use strict";

  /* ---------- Product catalogue (shared across pages) ---------- */
  const IMG = {
    boxOpen:   "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1000&q=80&auto=format&fit=crop",
    boxOpenAlt:"https://images.unsplash.com/photo-1513885535751-8b9238dd4d20?w=1000&q=80&auto=format&fit=crop",
    ribbon:    "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1000&q=80&auto=format&fit=crop",
    ribbonAlt: "https://images.unsplash.com/photo-1522423288387-6c8ab6b9e6a8?w=1000&q=80&auto=format&fit=crop",
    candle:    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000&q=80&auto=format&fit=crop",
    candleAlt: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=1000&q=80&auto=format&fit=crop",
    flowers:   "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1000&q=80&auto=format&fit=crop",
    flowersAlt:"https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1000&q=80&auto=format&fit=crop",
    hamper:    "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1000&q=80&auto=format&fit=crop",
    hamperAlt: "https://images.unsplash.com/photo-1608755728617-aefab37d0a75?w=1000&q=80&auto=format&fit=crop",
    mug:       "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=1000&q=80&auto=format&fit=crop",
    mugAlt:    "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1000&q=80&auto=format&fit=crop",
    jewelry:   "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&q=80&auto=format&fit=crop",
    jewelryAlt:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1000&q=80&auto=format&fit=crop",
    crochet:   "https://images.unsplash.com/photo-1631823410000-b93c62b1b933?w=1000&q=80&auto=format&fit=crop",
    crochetAlt:"https://images.unsplash.com/photo-1520903920243-30c0dfaf3ea9?w=1000&q=80&auto=format&fit=crop",
    memoryBox: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80&auto=format&fit=crop",
    memoryBoxAlt:"https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1000&q=80&auto=format&fit=crop",
    photo:     "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1000&q=80&auto=format&fit=crop",
    photoAlt:  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1000&q=80&auto=format&fit=crop",
    couple:    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1000&q=80&auto=format&fit=crop",
    coupleAlt: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1000&q=80&auto=format&fit=crop",
  };

  const PRODUCTS = [
    { id:"love-letter-box", name:"The Love Letter Box", desc:"A keepsake box of handwritten notes, dried florals, and a scented candle.", price:68, category:["best","couples","personalized","under100"], rating:4.9, img:IMG.boxOpen, imgAlt:IMG.boxOpenAlt },
    { id:"memory-garden", name:"The Memory Garden", desc:"Pressed-flower keepsake with a hand-poured soy candle and a printed photo card.", price:54, category:["best","her","personalized","under100"], rating:4.8, img:IMG.flowers, imgAlt:IMG.flowersAlt },
    { id:"forever-always", name:"Forever & Always", desc:"A wedding-day hamper with engraved glasses and a hand-tied ribbon box.", price:112, category:["weddings","couples"], rating:5.0, img:IMG.hamper, imgAlt:IMG.hamperAlt },
    { id:"sunday-morning", name:"Sunday Morning", desc:"A slow-living hamper — mug, candle, and a note for someone who needs rest.", price:46, category:["best","her","him","under50"], rating:4.7, img:IMG.mug, imgAlt:IMG.mugAlt },
    { id:"little-celebration", name:"The Little Celebration", desc:"A birthday-in-a-box with confetti, a candle, and a handwritten card.", price:39, category:["birthdays","under50"], rating:4.8, img:IMG.candle, imgAlt:IMG.candleAlt },
    { id:"just-because", name:"Just Because", desc:"No occasion needed — dried blooms, a mini candle, and a little note.", price:32, category:["her","friends","under50"], rating:4.6, img:IMG.flowersAlt, imgAlt:IMG.flowers },
    { id:"golden-hour", name:"Golden Hour Jewelry Box", desc:"A hand-finished keepsake box holding a personalised pendant.", price:89, category:["her","personalized","under100"], rating:4.9, img:IMG.jewelry, imgAlt:IMG.jewelryAlt },
    { id:"tiny-hands", name:"Tiny Hands Welcome Box", desc:"A crocheted keepsake and a hand-lettered growth card for new parents.", price:58, category:["family","personalized","under100"], rating:5.0, img:IMG.crochet, imgAlt:IMG.crochetAlt },
    { id:"our-story", name:"Our Story, So Far", desc:"A memory box for ticket stubs, polaroids, and love notes.", price:64, category:["couples","personalized","under100"], rating:4.9, img:IMG.memoryBox, imgAlt:IMG.memoryBoxAlt },
    { id:"in-frame", name:"In Frame", desc:"A hand-finished photo gift with a personalised engraving.", price:42, category:["family","personalized","under50"], rating:4.7, img:IMG.photo, imgAlt:IMG.photoAlt },
    { id:"two-of-us", name:"Two of Us", desc:"Matching keepsakes for the couple who has everything — nearly.", price:76, category:["couples","under100"], rating:4.8, img:IMG.couple, imgAlt:IMG.coupleAlt },
    { id:"first-birthday", name:"Their First Birthday", desc:"A crocheted keepsake bundle for a little one's first celebration.", price:48, category:["family","birthdays","under50"], rating:4.9, img:IMG.crochetAlt, imgAlt:IMG.crochet },
    { id:"studio-favourite", name:"The Studio Favourite", desc:"Our most-gifted hamper — candle, card, and hand-tied ribbon.", price:56, category:["best","under100"], rating:4.9, img:IMG.hamperAlt, imgAlt:IMG.hamper },
    { id:"corner-office", name:"The Corner Office", desc:"A refined corporate gift box for clients who matter.", price:74, category:["corporate","under100"], rating:4.6, img:IMG.boxOpenAlt, imgAlt:IMG.boxOpen },
    { id:"first-light", name:"First Light Candle Set", desc:"Three hand-poured candles in a ribboned keepsake tray.", price:44, category:["him","under50"], rating:4.7, img:IMG.candleAlt, imgAlt:IMG.candle },
    { id:"handwritten", name:"Handwritten", desc:"A personalised stationery and ribbon set for love letters that last.", price:36, category:["personalized","under50","friends"], rating:4.8, img:IMG.ribbon, imgAlt:IMG.ribbonAlt },
  ];
  window.MFAM = { PRODUCTS, IMG };

  /* ---------- image fallback (in case a source fails to load) ---------- */
  document.addEventListener("error", function(e){
    const t = e.target;
    if (t && t.tagName === "IMG" && !t.dataset.fallbackApplied){
      t.dataset.fallbackApplied = "1";
      t.style.background = "linear-gradient(135deg,#E2D2B4,#C06B3E)";
      t.removeAttribute("src");
    }
  }, true);

  /* ---------- header scroll state ---------- */
  const header = document.querySelector(".site-header");
  function onScroll(){
    if (!header) return;
    if (window.scrollY > 40) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  /* ---------- mobile nav ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const navClose = document.querySelector(".mobile-nav-close");
  function openMobileNav(){ mobileNav && mobileNav.classList.add("is-open"); document.body.style.overflow="hidden"; }
  function closeMobileNav(){ mobileNav && mobileNav.classList.remove("is-open"); document.body.style.overflow=""; }
  navToggle && navToggle.addEventListener("click", openMobileNav);
  navClose && navClose.addEventListener("click", closeMobileNav);
  mobileNav && mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click", closeMobileNav));

  /* ---------- reveal on scroll ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if (entry.isIntersecting){
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold:.15, rootMargin:"0px 0px -60px 0px" });
    revealEls.forEach(el=>io.observe(el));
  } else {
    revealEls.forEach(el=>el.classList.add("is-visible"));
  }

  /* ---------- page transition veil ---------- */
  const veil = document.querySelector(".page-veil");
  if (veil){
    requestAnimationFrame(()=>{ veil.classList.add("animate-out"); });
    document.querySelectorAll('a[href]').forEach(a=>{
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto") || a.target === "_blank") return;
      a.addEventListener("click", function(e){
        if (e.metaKey || e.ctrlKey) return;
        e.preventDefault();
        veil.classList.remove("animate-out");
        veil.classList.add("animate-in");
        setTimeout(()=>{ window.location.href = href; }, 420);
      });
    });
  }

  /* ---------- toast ---------- */
  let toastTimer;
  window.showToast = function(msg){
    let toast = document.querySelector(".toast");
    if (!toast){
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>'+msg+'</span>';
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=>toast.classList.remove("is-visible"), 2600);
  };

  /* ---------- CART ---------- */
  const CART_KEY = "mfam_cart_v1";
  function readCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }catch(e){ return []; } }
  function writeCart(items){ localStorage.setItem(CART_KEY, JSON.stringify(items)); renderCart(); }

  window.addToCart = function(id, qty){
    qty = qty || 1;
    const product = PRODUCTS.find(p=>p.id===id);
    if (!product) return;
    const items = readCart();
    const existing = items.find(i=>i.id===id);
    if (existing) existing.qty += qty;
    else items.push({ id, qty });
    writeCart(items);
    showToast("Added to your gift bag.");
    openCart();
  };

  function updateQty(id, delta){
    const items = readCart();
    const item = items.find(i=>i.id===id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0){ writeCart(items.filter(i=>i.id!==id)); }
    else writeCart(items);
  }
  function removeFromCart(id){ writeCart(readCart().filter(i=>i.id!==id)); }

  function currency(n){ return "$" + n.toFixed(2); }

  function renderCart(){
    const items = readCart();
    const countEls = document.querySelectorAll(".cart-count");
    const totalQty = items.reduce((s,i)=>s+i.qty,0);
    countEls.forEach(el=>{ el.textContent = totalQty; el.style.display = totalQty? "flex":"none"; });

    const list = document.querySelector(".cart-items");
    if (!list) return;
    if (!items.length){
      list.innerHTML = '<div class="cart-empty">Your gift bag is empty.<br><br><a href="shop.html" class="arrow-link">Start browsing <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>';
    } else {
      list.innerHTML = items.map(i=>{
        const p = PRODUCTS.find(p=>p.id===i.id);
        if (!p) return "";
        return `<div class="cart-item">
          <img src="${p.img}" alt="${p.name}">
          <div>
            <h5>${p.name}</h5>
            <div class="ci-meta">${currency(p.price)} each</div>
            <div class="ci-qty">
              <button aria-label="Decrease quantity" data-qty-minus="${p.id}">–</button>
              <span>${i.qty}</span>
              <button aria-label="Increase quantity" data-qty-plus="${p.id}">+</button>
            </div>
            <button class="ci-remove" data-remove="${p.id}">Remove</button>
          </div>
          <div class="ci-price">${currency(p.price*i.qty)}</div>
        </div>`;
      }).join("");
    }
    const subtotal = items.reduce((s,i)=>{ const p = PRODUCTS.find(p=>p.id===i.id); return s + (p? p.price*i.qty:0); },0);
    const shipping = subtotal===0 ? 0 : (subtotal >= 75 ? 0 : 8);
    const subEl = document.querySelector("[data-cart-subtotal]");
    const shipEl = document.querySelector("[data-cart-shipping]");
    const totalEl = document.querySelector("[data-cart-total]");
    if (subEl) subEl.textContent = currency(subtotal);
    if (shipEl) shipEl.textContent = subtotal===0 ? "—" : (shipping===0 ? "Free" : currency(shipping));
    if (totalEl) totalEl.textContent = currency(subtotal+shipping);
  }

  document.addEventListener("click", function(e){
    const plus = e.target.closest("[data-qty-plus]");
    const minus = e.target.closest("[data-qty-minus]");
    const remove = e.target.closest("[data-remove]");
    if (plus) updateQty(plus.dataset.qtyPlus, 1);
    if (minus) updateQty(minus.dataset.qtyMinus, -1);
    if (remove) removeFromCart(remove.dataset.remove);
    const addBtn = e.target.closest("[data-add-to-cart]");
    if (addBtn) addToCart(addBtn.dataset.addToCart);
    const wish = e.target.closest(".pc-wishlist");
    if (wish) wish.classList.toggle("is-active");
  });

  const cartOverlay = document.querySelector(".cart-overlay");
  const cartDrawer = document.querySelector(".cart-drawer");
  window.openCart = function(){
    cartOverlay && cartOverlay.classList.add("is-open");
    cartDrawer && cartDrawer.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };
  window.closeCart = function(){
    cartOverlay && cartOverlay.classList.remove("is-open");
    cartDrawer && cartDrawer.classList.remove("is-open");
    document.body.style.overflow = "";
  };
  document.querySelectorAll("[data-cart-open]").forEach(b=>b.addEventListener("click", openCart));
  document.querySelectorAll("[data-cart-close]").forEach(b=>b.addEventListener("click", closeCart));
  cartOverlay && cartOverlay.addEventListener("click", closeCart);

  renderCart();

  /* ---------- SEARCH ---------- */
  const searchOverlay = document.querySelector(".search-overlay");
  const searchInput = document.querySelector(".search-field input");
  const searchResults = document.querySelector(".search-results");
  window.openSearch = function(){
    searchOverlay && searchOverlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    setTimeout(()=>searchInput && searchInput.focus(), 350);
  };
  window.closeSearch = function(){
    searchOverlay && searchOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
  };
  document.querySelectorAll("[data-search-open]").forEach(b=>b.addEventListener("click", openSearch));
  document.querySelectorAll("[data-search-close]").forEach(b=>b.addEventListener("click", closeSearch));
  document.addEventListener("keydown", (e)=>{
    if (e.key === "Escape"){ closeSearch(); closeCart(); closeMobileNav(); }
  });

  if (searchInput){
    searchInput.addEventListener("input", function(){
      const q = this.value.trim().toLowerCase();
      if (!q){ searchResults.innerHTML = ""; return; }
      const matches = PRODUCTS.filter(p=>p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)).slice(0,8);
      searchResults.innerHTML = matches.length ? matches.map(p=>`
        <a class="search-result" href="product.html?id=${p.id}">
          <img src="${p.img}" alt="">
          <span>${p.name}<br><small style="opacity:.6">${currency(p.price)}</small></span>
        </a>`).join("") : '<p style="opacity:.5">No gifts found for that search — try “candle” or “box”.</p>';
    });
  }

  /* ---------- newsletter forms (no backend — confirm politely) ---------- */
  document.querySelectorAll("[data-newsletter-form]").forEach(form=>{
    form.addEventListener("submit", function(e){
      e.preventDefault();
      showToast("You're on the list. Little notes coming soon.");
      form.reset();
    });
  });

})();
