document.addEventListener("DOMContentLoaded", () => {

  // No navigation interception for menu links. Let browser handle navigation normally.

  /* ================= TRANSLATIONS ================= */

  // Default inline translations (fallback). Keys are looked up via data-key attributes.
  const defaultTranslations = {
    en: {
      hero1: "Full Digital",
      hero2: "Management",
      hero3: "for Small",
      hero4: "Businesses",
      heroText: "Modern digital solutions — zero monthly payments.",
      nav: { home: "Home", about: "About", services: "Services", portfolio: "Portfolio", contact: "Contact" },
      footer: { copyright: "© 2026 Ninart Vision. All rights reserved." },
      contactCTA: "Contact",
      services: { title: "Services", overview: "Overview of services offered. Explore each area to learn more." },
      simple: {
        title: "Website",
        hero: "Websites for businesses or personal projects",
        description: "Fast, responsive one-page sites suitable for small businesses and portfolios.",
        features: ["Responsive layout","SEO-friendly markup","Fast load times","Easy updates"],
        cta: "Contact"
      },
      medium: {
        title: "SEO Optimization",
        hero: "Optimization and strategy for your business.",
        description: "Multi-page sites with content sections, galleries and contact flows.",
        features: ["CMS ready","Contact forms","Portfolio pages","Performance optimizations"],
        cta: "Contact"
      },
      advanced: {
        title: "Video Editing",
        hero: "All Types of Video Editing.",
        description: "Complex web apps, e-commerce, integrations and custom backend work.",
        features: ["API integrations","Payment gateways","Admin dashboards","Scalable architecture"],
        cta: "Contact"
      },
      uiux: {
        title: "UI/UX Design",
        hero: "User-centered interfaces that convert.",
        description: "Research-driven designs focused on usability and conversion.",
        features: ["User research","Wireframes & prototypes","High-fidelity UI","Design handoff"],
        cta: "Contact"
      },
      seo: {
        title: "SEO Optimization",
        hero: "Improve visibility and organic traffic.",
        description: "Technical SEO, on-page optimization and structured data.",
        features: ["Technical audits","Content recommendations","Performance tuning","Rich snippets"],
        cta: "Contact"
      },
      analytics: {
        title: "Analytics & Ads",
        hero: "Data-driven campaigns and analytics setup.",
        description: "Tracking, dashboards and paid media strategy to grow your business.",
        features: ["Analytics setup","Conversion tracking","Ad campaigns","Reporting"],
        cta: "Contact"
      }
      ,
      // extra UI keys used on the index page
      hero: { about: "About Me", projects: "Projects", calcCTA: "Project cost" },
      portfolio: {
        title: "Portfolio",
        project1: { title: "Project One", desc: "Landing page" },
        project2: { title: "Project Two", desc: "Business website" },
        project3: { title: "Project Three", desc: "Portfolio website" }
      },
      contact: { title: "Contact", lead: "Interested in working together? Let’s build something great." }
      ,
      calc: {
        title: "Calculate project cost",
        open: "Open calculator",
        step1: "Choose project type",
        websiteCategoriesTitle: "Category",
        websiteCategories: { onepage: "One-page website", info: "Informational website", business: "Business website", ecommerce: "E-commerce website" },
        sizesTitle: "Size",
        sizes: { small: "Small", medium: "Medium", large: "Large" },
        featuresTitle: "Additional features",
        features: { seo: "SEO optimization", multi: "Multilingual", custom: "Custom design", admin: "Admin panel", booking: "Booking system", payment: "Payment integration" },
        summary: "Summary",
        cta: "Contact / Start Project",
        reset: "Reset",
        close: "Close calculator",
        types: { website: "Website Development", logo: "Logo Design", social: "Social Media Setup" },
        websiteCategoriesTitle_short: "Category"
      }
    },
    ka: {
      hero1: "მცირე ბიზნესის",
      hero2: "სრული ციფრული",
      hero3: "მართვა",
      hero4: "Digital Support",
      heroText: "თანამედროვე გადაწყვეტილებები ყოველთვიური გადასახადის გარეშე",
      nav: { home: "მთავარი", about: "ჩემ შესახებ", services: "სერვისები", portfolio: "პორტფოლიო", contact: "კონტაქტი" },
      footer: { copyright: "© 2026 Ninart Vision. All rights reserved." },
      contactCTA: "კონტაქტი",
      services: { title: "სერვისები", overview: "სერვისების მიმოხილვა. დაათვალიერეთ ყველა სფერო, რომ გაიგოთ მეტი." },
      simple: {
        title: "სრული ვებსაიტი (Simple)",
        hero: "ერთი გვერდიანი ვებსაიტები მცირე ბიზნესებისთვის ან პირადი პროექტებისთვის.",
        description: "სწრაფი, საპასუხო ერთი გვერდიანი საიტები მცირე ბიზნესებისთვის და პორტფოლიოებისთვის.",
        features: ["საპასუხო დიზაინი","SEO-მიმზიდველი მარკაპი","სწრაფი დატვირთვა","მსუბუქი განახლება"],
        cta: "დაგვიკავშირდი"
      },
      medium: {
        title: "საშუალო ვებსაიტი",
        hero: "მრავალფენოვანი საიტები პორტფოლიოსა და კონტაქტის ფორმით.",
        description: "მრავალ გვერდიანი საიტები კონტენტით, გალერეითა და კონტაქტის ფუნქციებით.",
        features: ["CMS მზად","კონტაქტის ფორმები","პორტფოლიო გვერდები","ეფექტურობის ოპტიმიზაცია"],
        cta: "დაგვიკავშირდი"
      },
      advanced: {
        title: "პენაციონალური ვებსაიტი",
        hero: "პერსონალიზებული გადაწყვეტილებები ბექენდით და მოწინავე ფუნქციონალით.",
        description: "გახსნილი ვებაპლიკაციები, ელექტრონული კომერცია და ინტეგრაციები.",
        features: ["API ინტეგრაციები","გადახდის შერწყმა","ადმინ პანელები","მოქნილი არქიტექტურა"],
        cta: "დაგვიკავშირდი"
      },
      uiux: {
        title: "UI/UX დიზაინი",
        hero: "მომხმარებელზე ორიენტირებული ინტერფეისები რომ აქციონ.",
        description: "საოცნებო დიზაინი მომხმარებლის გამოცდილებაზე გათვლით.",
        features: ["მომხმარებლის კვლევა","უაირეფრეიმი და პროტოტიპი","უზუსტესი UI","დიზაინის გადაცემა"],
        cta: "დაგვიკავშირდი"
      },
      seo: {
        title: "SEO ოპტიმიზაცია",
        hero: "ვერიფიკაცია და ორგანული ტრაფიკის ზრდა.",
        description: "ტექნიკური SEO, გვერდზე ოპტიმიზაცია და სტრუქტურირებული მონაცემები.",
        features: ["ტექნიკური აუდიტი","კონტენტის რეკომენდაციები","ეფექტურობის ოპტიმიზაცია","ბრძნული ნიშანი"],
        cta: "დაგვიკავშირდი"
      },
      analytics: {
        title: "ანალიტიკა და რეკლამა",
        hero: "მონაცემებზე დაფუძნებული კამპანიები და ანალიტიკის დაყენება.",
        description: "ტრეკინგი, დაფები და გადახდის მედია სტრატეგია ბიზნესის ზრდისთვის.",
        features: ["ანალიტიკის დაყენება","კონვერსიის ტრექინგი","რეკლამული კამპანიები","რეპორტინგი"],
        cta: "დაგვიკავშირდი"
      }
      ,
      hero: { about: "ჩემ შესახებ", projects: "პროექტები", calcCTA: "პროექტის ღირებულება" },
      portfolio: {
        title: "პორტფოლიო",
        project1: { title: "პროექტი ერთი", desc: "ლენდინგ გვერდი" },
        project2: { title: "პროექტი ორი", desc: "ბიზნეს საიტი" },
        project3: { title: "პროექტი სამი", desc: "პორტფოლიო საიტი" }
      },
      contact: { title: "", lead: "პროფესიონალური ციფრული გადაწყვეტილებები" }
      ,
      calc: {
        title: "გაანგარიშე პროექტის ღირებულება",
        open: "კალკულატორის გახსნა",
        step1: "აირჩიე პროექტის ტიპი",
        websiteCategoriesTitle: "კატეგორია",
        websiteCategories: { onepage: "ერთი გვერდი", info: "ინფორმაციული საიტი", business: "ბიზნეს საიტი", ecommerce: "ელ. კომერცია" },
        sizesTitle: "ნათელი",
        sizes: { small: "პატარა", medium: "საშუალო", large: "დიდი" },
        featuresTitle: "დამატებითი ფუნქციები",
        features: { seo: "SEO ოპტიმიზაცია", multi: "მრავალენოვანი", custom: "კასტომ დიზაინი", admin: "ადმინ პანელი", booking: "ბუქინგ სისტემა", payment: "გადახდის ინტეგრაცია" },
        summary: "შესაჯამი",
        cta: "დაგვიკავშირდი / დავიწყოთ პროექტი",
        reset: "გაასუფთავე",
        close: "კალკულატორის დახურვა",
        types: { website: "ვებსაიტის განვითარება", logo: "ლოგოს დიზაინი", social: "სოციალური მედია" },
        websiteCategoriesTitle_short: "კატეგორია"
      }
    }
  };

  // runtime translations (may be replaced by fetched JSON)
  let translations = defaultTranslations;

  // deep merge helper: source overrides target, but missing keys keep target values
  function deepMerge(target, source) {
    if (!source) return JSON.parse(JSON.stringify(target));
    const out = JSON.parse(JSON.stringify(target || {}));
    const merge = (o, s) => {
      for (const k in s) {
        if (Object.prototype.hasOwnProperty.call(s, k)) {
          if (s[k] && typeof s[k] === 'object' && !Array.isArray(s[k])) {
            o[k] = o[k] || {};
            merge(o[k], s[k]);
          } else {
            o[k] = s[k];
          }
        }
      }
    };
    merge(out, source);
    return out;
  }

  function getTranslationValue(lang, key) {
    if (!lang) return null;
    const parts = key.split('.');

    // try runtime translations first
    const tryLookup = (obj) => {
      let v = obj;
      for (let p of parts) {
        if (v && Object.prototype.hasOwnProperty.call(v, p)) v = v[p];
        else return null;
      }
      return v;
    };

    // normalize lang like en-US -> en
    const normalized = (lang || '').split('-')[0];

    // use normalized language code directly (expect 'ka' for Georgian)
    const candidates = [normalized];

    // runtime translations
    for (const c of candidates) {
      if (translations && translations[c]) {
        const val = tryLookup(translations[c]);
        if (val !== null && val !== undefined) return val;
      }
    }

    // fallback to defaults
    for (const c of candidates) {
      if (defaultTranslations && defaultTranslations[c]) {
        const val = tryLookup(defaultTranslations[c]);
        if (val !== null && val !== undefined) return val;
      }
    }

    return null;
  }

  function switchLanguage(lang) {
    if (!lang) return;
    // accept language tags like en-US and normalize to short code
    const normalized = (lang || '').split('-')[0];
    // helper to set text content safely while preserving inline child elements
    // Attempts to map translation text around existing child elements to avoid
    // duplicated words (common when child spans already contain tokens like "UI/UX" or "SEO").
    function setElementText(el, text) {
      if (!el) return;
      const children = Array.from(el.children || []);
      // Simple case: no child elements -> replace textContent
      if (children.length === 0) {
        el.textContent = text;
        return;
      }

      // Remove all existing text nodes (we will rebuild them)
      Array.from(el.childNodes).forEach(n => { if (n.nodeType === Node.TEXT_NODE) n.remove(); });

      // Work on a mutable remaining string
      let remaining = String(text);

      // For each child, try to locate the child's expected token inside the remaining text.
      // If found, place the text before it, update the child's text, and continue.
      for (const child of children) {
        const original = (child.textContent || '').trim();
        // Attempt to find the child's token inside the remaining translation
        const idx = original ? remaining.indexOf(original) : -1;
        if (idx !== -1) {
          const prefix = remaining.slice(0, idx);
          if (prefix) el.appendChild(document.createTextNode(prefix));
          // set child's text to the matched substring (keeps styling on the child)
          const matched = remaining.substr(idx, original.length);
          child.textContent = matched;
          el.appendChild(child);
          remaining = remaining.slice(idx + original.length);
        } else {
          // If we cannot match, fallback to preserving the child but not splitting precisely.
          // Append whatever is left so far, then append the child with its current text.
          if (remaining) {
            el.appendChild(document.createTextNode(remaining));
            remaining = '';
          }
          el.appendChild(child);
        }
      }

      // Append any trailing text
      if (remaining) el.appendChild(document.createTextNode(remaining));
    }

    // translate elements with data-key
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      const value = getTranslationValue(normalized, key);
      if (value === null || value === undefined) return;
      if (Array.isArray(value)) {
        el.innerHTML = value.map(i => `<li>${i}</li>`).join('');
      } else {
        setElementText(el, value);
      }
    });

    // translate common attributes via data-* keys
    document.querySelectorAll('[data-aria-key]').forEach(el => {
      const v = getTranslationValue(normalized, el.dataset.ariaKey);
      if (v !== null && v !== undefined) el.setAttribute('aria-label', v);
    });
    // translate alt attributes for meaningful images
    document.querySelectorAll('[data-alt-key]').forEach(el => {
      const v = getTranslationValue(normalized, el.dataset.altKey);
      if (v !== null && v !== undefined) el.setAttribute('alt', v);
    });
    document.querySelectorAll('[data-placeholder-key]').forEach(el => {
      const v = getTranslationValue(normalized, el.dataset.placeholderKey);
      if (v !== null && v !== undefined) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('[data-value-key]').forEach(el => {
      const v = getTranslationValue(normalized, el.dataset.valueKey);
      if (v !== null && v !== undefined) el.value = v;
    });

    // keep translation language key consistent (use 'ka' for Georgian)
    document.documentElement.setAttribute("lang", normalized);
    // persist chosen language
    try { localStorage.setItem('lang', normalized); } catch (e) {}
  }

  // Try to load translations.json to override defaults (optional)
  fetch('/translations.json')

    .then(r => r.ok ? r.json() : Promise.reject('no json'))
    .then(data => {
      // merge fetched translations with defaults so missing keys fall back
      translations = deepMerge(defaultTranslations, data);
      const saved = localStorage.getItem("lang") || "ka";
      // apply saved language now that we have translations
      switchLanguage(saved);
      const savedItem = document.querySelector(`#langMenu [data-lang="${saved}"]`);
      const langToggleBtn = document.getElementById('langToggle');
      if (savedItem && langToggleBtn) {
        langToggleBtn.innerHTML = savedItem.innerHTML + '<span class="arrow">▾</span>';
        savedItem.classList.add('active');
      }

      // Dev-only runtime check: report whether `heroText` came from fetched JSON or defaults
      (function(){
        try {
          const isDev = (window.location && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.search.indexOf('debug=translations') !== -1));
          if (!isDev) return;
          const normalized = (saved || '').split('-')[0];
          const fetchedHasHero = data && data[normalized] && data[normalized].heroText !== undefined;
          console.info(`[i18n] heroText source: ${fetchedHasHero ? 'fetched translations.json' : 'defaultTranslations (merged)'} — lang: ${normalized}`);
        } catch (e) { /* silent */ }
      })();
    })
    .catch(() => {
      // fallback to defaults
      translations = deepMerge(defaultTranslations, null);
      const saved = localStorage.getItem("lang") || "ka";
      switchLanguage(saved);

      // Dev-only: indicate fallback source
      (function(){
        try {
          const isDev = (window.location && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.search.indexOf('debug=translations') !== -1));
          if (!isDev) return;
          const normalized = (saved || '').split('-')[0];
          console.info(`[i18n] heroText source: defaultTranslations (fetch failed) — lang: ${normalized}`);
        } catch (e) { /* silent */ }
      })();
    });

  // Immediately apply saved language on page load (before translations.json resolves)
  // This makes the site appear translated faster using the built-in defaults.
  try {
    const initial = localStorage.getItem('lang') || 'ka';
    switchLanguage(initial);
  } catch (e) {}

  /* ================= SAFE PARTICLES ================= */

const particlesContainer = document.getElementById("particles-js");

if (particlesContainer && typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 65, density: { enable: true, value_area: 1200 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.9, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 250,
        color: "#ffffff",
        opacity: 0.3,
        width: 1
      },
      move: { enable: true, speed: 5, random: true, out_mode: "out" }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: ["grab", "repulse"] },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 180, line_linked: { opacity: 0.6 } },
        repulse: { distance: 160 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
}


  /* ================= MOBILE MENU ================= */

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      // update aria-expanded on the button for accessibility
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* ================= LANGUAGE SWITCH ================= */

  const langDropdown = document.querySelector(".lang-dropdown");
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");

  if (langDropdown && langToggle && langMenu) {

    // Toggle dropdown
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("open");
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!langDropdown.contains(e.target)) {
        langDropdown.classList.remove("open");
      }
    });

    // Language selection
    langMenu.querySelectorAll("[data-lang]").forEach(item => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();

        const lang = item.dataset.lang;

        switchLanguage(lang);

        

        // Update button label
        langToggle.innerHTML =
          item.innerHTML + '<span class="arrow">▾</span>';

        // Active state
        langMenu.querySelectorAll("[data-lang]")
          .forEach(el => el.classList.remove("active"));
        item.classList.add("active");

        localStorage.setItem("lang", lang);
        langDropdown.classList.remove("open");
      });
    });

    /* Restore saved language */
    const saved = localStorage.getItem("lang") || "ka";

    switchLanguage(saved);

    const savedItem = langMenu.querySelector(`[data-lang="${saved}"]`);
    if (savedItem) {
      langToggle.innerHTML =
        savedItem.innerHTML + '<span class="arrow">▾</span>';
      savedItem.classList.add("active");
    }
  }

  /* ================= ACTIVE NAV LINK ================= */
  function setActiveNav() {
    const links = document.querySelectorAll('.nav-links a');
    const currentFile = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    links.forEach(a => {
      const href = a.getAttribute('href') || '';
      const linkFile = (href.split('#')[0].split('?')[0] || 'index.html').toLowerCase();

      // Normalize empty linkFile to index.html
      const normalizedLink = (linkFile === '' ? 'index.html' : linkFile);

      if (normalizedLink === currentFile) {
        a.classList.add('active');
      } else if (currentFile === 'index.html' && href.includes('#') && window.location.hash) {
        const frag = href.split('#')[1];
        if (frag && frag === window.location.hash.replace('#','')) {
          a.classList.add('active');
        } else {
          a.classList.remove('active');
        }
      } else {
        a.classList.remove('active');
      }
    });
  }

  // Set on load and update on hashchange/navigation
  setActiveNav();
  window.addEventListener('hashchange', setActiveNav);
  window.addEventListener('popstate', setActiveNav);

  /* ================= PROJECT COST CALCULATOR ================= */
  const calcModal = document.getElementById('calcModal');
  const openCalcBtn = document.getElementById('openCalculator');
  const closeCalcBtn = document.getElementById('calcClose');
  const resetBtn = document.getElementById('calcReset');
  const priceEl = document.getElementById('calcPrice');
  const summaryList = document.getElementById('summaryItems');
  const websiteCategoriesWrap = document.getElementById('websiteCategoriesWrap');

  const PRICING = {
    website: {
      onepage: 300,
      info: 500,
      business: 900,
      ecommerce: 1500
    },
    // other single-item services (base prices)
    base: { logo: 150, uiux: 250, analytics: 120, social: 250 },
    sizeMultiplier: { small: 0.85, medium: 1.0, large: 1.45 },
    features: { seo: 300, multi: 300, custom: 500, admin: 600, booking: 400, payment: 700 }
  };

  let lastPrice = 0;

  function openCalculator() {
    if (!calcModal) return;
    calcModal.classList.add('open');
    calcModal.setAttribute('aria-hidden', 'false');
    // set initial defaults and recalc
    calculatePrice();
    // focus the first radio
    const first = calcModal.querySelector('input[name="projType"]');
    if (first) first.focus();
  }

  function closeCalculator() {
    if (!calcModal) return;
    calcModal.classList.remove('open');
    calcModal.setAttribute('aria-hidden', 'true');
  }

  function getSelectedValue(name) {
    const sel = document.querySelector(`input[name="${name}"]:checked`);
    return sel ? sel.value : null;
  }

  function calculatePrice() {
    const type = getSelectedValue('projType');
    const size = getSelectedValue('size') || 'medium';
    let total = 0;

    if (type === 'website') {
      const cat = getSelectedValue('websiteCategory') || 'onepage';
      total += PRICING.website[cat] || 0;
    } else if (type === 'logo') {
      total += PRICING.base.logo;
    } else if (type === 'social') {
      total += PRICING.base.social;
    } else if (type === 'uiux') {
      // UI/UX design as a single-service base price
      total += PRICING.base.uiux || 0;
    } else if (type === 'analytics') {
      // Google Analytics integration base price
      total += PRICING.base.analytics || 0;
    }

    // apply size multiplier
    const multiplier = PRICING.sizeMultiplier[size] || 1;
    total = Math.round(total * multiplier);

    // additional features
    document.querySelectorAll('[data-feature]').forEach(chk => {
      const input = chk.tagName === 'INPUT' ? chk : chk.querySelector('input');
      const feature = chk.dataset ? chk.dataset.feature : (input && input.dataset ? input.dataset.feature : null);
      let checked = false;
      if (chk.tagName === 'INPUT') checked = chk.checked;
      else if (input) checked = input.checked;
      if (feature && checked) {
        total += PRICING.features[feature] || 0;
      }
    });

    animatePrice(lastPrice, total);
    lastPrice = total;
    renderSummary(type, size);
  }

  function animatePrice(from, to) {
    const start = performance.now();
    const duration = 350;
    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      const v = Math.round(from + (to - from) * easeOutCubic(t));
      priceEl.textContent = formatCurrency(v);
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function easeOutCubic(t){ return 1 - Math.pow(1 - t, 3); }

  function formatCurrency(n){
    // show as GEL with currency symbol (adjust if you want other currency)
    return n.toLocaleString(undefined) + '₾';
  }

  function renderSummary(type, size) {
    const items = [];
    const lang = localStorage.getItem('lang') || 'ka';
    if (type) {
      const tlabel = getTranslationValue(lang, `calc.types.${type}`) || type;
      items.push(tlabel);
    }
    if (type === 'website') {
      const cat = getSelectedValue('websiteCategory') || 'onepage';
      const clabel = getTranslationValue(lang, `calc.websiteCategories.${cat}`) || cat;
      items.push(clabel);
    }
    if (size) {
      const slabel = getTranslationValue(lang, `calc.sizes.${size}`) || size;
      items.push(slabel);
    }

    // features
    document.querySelectorAll('[data-feature]').forEach(chk => {
      const input = chk.tagName === 'INPUT' ? chk : chk.querySelector('input');
      const feature = chk.dataset ? chk.dataset.feature : (input && input.dataset ? input.dataset.feature : null);
      let checked = false;
      if (chk.tagName === 'INPUT') checked = chk.checked;
      else if (input) checked = input.checked;
      if (feature && checked) {
        const flabel = getTranslationValue(lang, `calc.features.${feature}`) || feature;
        items.push(flabel);
      }
    });

    // render
    summaryList.innerHTML = items.map(s => `<li>${s}</li>`).join('');
  }

  // wire UI interactions
  if (openCalcBtn) openCalcBtn.addEventListener('click', () => { openCalculator(); });
  if (closeCalcBtn) closeCalcBtn.addEventListener('click', closeCalculator);
  if (resetBtn) resetBtn.addEventListener('click', () => {
    // reset inputs
    document.querySelectorAll('#calcModal input[type="radio"]').forEach(r => r.checked = false);
    document.querySelectorAll('#calcModal input[type="checkbox"]').forEach(c => c.checked = false);
    // default size medium
    const def = document.querySelector('#calcModal input[name="size"][value="medium"]');
    if (def) def.checked = true;
    websiteCategoriesWrap.style.display = 'none';
    calculatePrice();
  });

  // click handlers for options to manage active classes
  document.querySelectorAll('.option').forEach(label => {
    label.addEventListener('click', (e) => {
      const input = label.querySelector('input');
      if (input) {
        input.checked = true;
        // remove active for group
        const name = input.getAttribute('name');
        if (name) {
          document.querySelectorAll(`input[name="${name}"]`).forEach(i => {
            const p = i.closest('.option'); if (p) p.classList.remove('active');
          });
        }
        label.classList.add('active');
        // show/hide website categories
        if (input.name === 'projType') {
          if (input.value === 'website') websiteCategoriesWrap.style.display = '';
          else websiteCategoriesWrap.style.display = 'none';
        }
        calculatePrice();
      }
    });
  });

  // checkboxes
  document.querySelectorAll('[data-feature]').forEach(el => {
    const input = el.tagName === 'INPUT' ? el : el.querySelector('input');
    if (!input) return;
    input.addEventListener('change', () => { calculatePrice(); });
  });

  // close on backdrop click
  if (calcModal) {
    calcModal.addEventListener('click', (e) => { if (e.target === calcModal) closeCalculator(); });
  }

  // close on Esc
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCalculator(); });

});
document.addEventListener("DOMContentLoaded", function () {

  /* ================= FAQ TOGGLE ================= */

  document.querySelectorAll(".faq-item").forEach(item => {
    const question = item.querySelector(".faq-question");

    if (question) {
      question.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    }
  });


  /* ================= WHATSAPP WIDGET ================= */

  const popup = document.getElementById("waPopup");
  const floatBtn = document.getElementById("waFloat");
  const closeBtn = document.getElementById("waClose");

  if (floatBtn && popup) {
    floatBtn.addEventListener("click", function () {
      popup.style.display =
        popup.style.display === "block" ? "none" : "block";
    });
  }

  if (closeBtn && popup) {
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });
  }

});
