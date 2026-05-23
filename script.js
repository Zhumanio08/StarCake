/* ============================================
   StarCake — Премиальная кондитерская
   JavaScript
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  // ---------- PRODUCT DATA ----------
  const products = [
    {
      title: "Galaxy Cake",
      category: "✦ Торт",
      desc: "Величественный Galaxy Cake — это бисквит ручной работы с нежным ванильным кремом и ягодным конфи, покрытый космическим зеркальным зеркальным покрытием. Каждая звезда на этом торте — съедобная.",
      composition:
        "Бисквит ванильный, крем сливочный, ягодное конфи (клубника, малина, черника), зеркальная глазурь (шоколад, желатин), съедобные звёзды из изомальта.",
      weight: "1.2 кг / Ø 20 см",
      price: "9 500 ₸",
      images: [
        "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&q=80",
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80",
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
      ],
    },
    {
      title: "Strawberry Dream",
      category: "✦ Торт",
      desc: "Нежный клубничный мусс на воздушном миндальном бисквите с прослойкой из ягодного желе и сливочного крема. Лёгкий, фруктовый и невероятно нежный десерт.",
      composition:
        "Миндальный бисквит, мусс из натуральной клубники, ягодное желе, сливочный крем, декор из свежих ягод.",
      weight: "1.0 кг / Ø 18 см",
      price: "8 900 ₸",
      images: [
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
        "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&q=80",
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
      ],
    },
    {
      title: "Cosmic Cheesecake",
      category: "✦ Чизкейк",
      desc: "Кремовый нью-йоркский чизкейк с голубой космической глазурью и карамельной начинкой внутри. Сочетание сливочной нежности и карамельной сладости.",
      composition:
        "Основа из песочного печенья, сливочный сыр, жирные сливки, яйца, карамель, голубая зеркальная глазурь.",
      weight: "1.0 кг / Ø 18 см",
      price: "7 500 ₸",
      images: [
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80",
        "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&q=80",
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80",
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80",
      ],
    },
    {
      title: "Nebula Macarons",
      category: "✦ Макаронс",
      desc: "Набор из 6 небесно-космических макарон. Фисташковые, малиновые и черничные — каждый вкус раскрывается как новая звёздная система.",
      composition:
        "Миндальная мука, яичные белки, сахарная пудра, фисташковая паста, малиновое конфи, черничный кули, натуральные красители.",
      weight: "180 г / 6 шт",
      price: "5 900 ₸",
      images: [
        "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400&q=80",
        "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&q=80",
        "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400&q=80",
        "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&q=80",
      ],
    },
    {
      title: "Milky Way Cupcakes",
      category: "✦ Капкейки",
      desc: "4 млечных капкейка с разными вкусами: ванильный с ягодным кремом, шоколадный с ганашем, фисташковый с муссом и карамельный с кремом.",
      composition:
        "Бисквит (ванильный, шоколадный, фисташковый, карамельный), кремы и начинки соответствующих вкусов, декор.",
      weight: "320 г / 4 шт × 80 г",
      price: "4 900 ₸",
      images: [
        "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=400&q=80",
        "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&q=80",
        "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=400&q=80",
        "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400&q=80",
      ],
    },
  ];

  // ---------- DOM REFERENCES ----------
  const header = document.getElementById("header");
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  const modalOverlay = document.getElementById("modalOverlay");
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modalClose");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalComposition = document.getElementById("modalComposition");
  const modalWeight = document.getElementById("modalWeight");
  const modalPrice = document.getElementById("modalPrice");
  const sliderTrack = document.getElementById("sliderTrack");
  const sliderDots = document.getElementById("sliderDots");
  const sliderPrev = document.getElementById("sliderPrev");
  const sliderNext = document.getElementById("sliderNext");
  const slideImg1 = document.getElementById("slideImg1");
  const slideImg2 = document.getElementById("slideImg2");
  const slideImg3 = document.getElementById("slideImg3");
  const slideImg4 = document.getElementById("slideImg4");
  const slideImgs = [slideImg1, slideImg2, slideImg3, slideImg4];

  let currentSlide = 0;
  let currentProduct = null;

  // ---------- BURGER MENU ----------
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.style.overflow = nav.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close nav on link click
  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      nav.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Close nav on click outside
  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("active") &&
      !nav.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      burger.classList.remove("active");
      nav.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // ---------- HEADER SCROLL EFFECT ----------
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      header.style.background = "rgba(254, 249, 242, 0.95)";
      header.style.boxShadow = "0 1px 20px rgba(15, 14, 46, 0.08)";
    } else {
      header.style.background = "rgba(254, 249, 242, 0.85)";
      header.style.boxShadow = "none";
    }
    lastScroll = currentScroll;
  });

  // ---------- MODAL OPEN ----------
  function openModal(productIndex) {
    const product = products[productIndex];
    currentProduct = productIndex;

    // Fill info
    modalCategory.textContent = product.category;
    modalTitle.textContent = product.title;
    modalDesc.textContent = product.desc;
    modalComposition.textContent = product.composition;
    modalWeight.textContent = product.weight;
    modalPrice.textContent = product.price;

    // Fill slides
    product.images.forEach((src, i) => {
      if (slideImgs[i]) {
        slideImgs[i].src = src;
        slideImgs[i].alt = `${product.title} — фото ${i + 1}`;
      }
    });

    // Reset slider
    currentSlide = 0;
    updateSlider();

    // Show modal
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    // Reset scroll position
    modal.scrollTop = 0;
  }

  // Open modal from catalog buttons & card clicks
  document.querySelectorAll("[data-product]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const idx = parseInt(el.dataset.product, 10);
      openModal(idx);
    });
  });

  // ---------- MODAL CLOSE ----------
  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    currentSlide = 0;
  }

  modalClose.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  // ---------- SLIDER ----------
  function updateSlider() {
    const slideWidth = 100;
    sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}%)`;

    // Update dots
    document.querySelectorAll("#sliderDots span").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  function createDots(count) {
    sliderDots.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => {
        currentSlide = i;
        updateSlider();
      });
      sliderDots.appendChild(dot);
    }
  }

  // Recreate dots when modal opens
  const originalOpen = openModal;
  openModal = function (productIndex) {
    const product = products[productIndex];
    createDots(product.images.length);
    originalOpen(productIndex);
  };

  sliderPrev.addEventListener("click", () => {
    if (currentProduct === null) return;
    const count = products[currentProduct].images.length;
    currentSlide = (currentSlide - 1 + count) % count;
    updateSlider();
  });

  sliderNext.addEventListener("click", () => {
    if (currentProduct === null) return;
    const count = products[currentProduct].images.length;
    currentSlide = (currentSlide + 1) % count;
    updateSlider();
  });

  // Touch support for slider
  let touchStartX = 0;
  let touchEndX = 0;

  sliderTrack.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  sliderTrack.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true },
  );

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50 && currentProduct !== null) {
      const count = products[currentProduct].images.length;
      if (diff > 0) {
        currentSlide = (currentSlide + 1) % count;
      } else {
        currentSlide = (currentSlide - 1 + count) % count;
      }
      updateSlider();
    }
  }

  // ---------- SMOOTH SCROLL FOR ANCHOR LINKS ----------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ---------- INTERSECTION OBSERVER FOR ANIMATIONS ----------
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections for reveal animations
  document
    .querySelectorAll(".catalog, .custom, .about, .footer")
    .forEach((section) => {
      section.classList.add("reveal");
      observer.observe(section);
    });

  // ---------- LAZY LOADING FOR IMAGES ----------
  if ("loading" in HTMLImageElement.prototype) {
    // Native lazy loading is already set in HTML
  } else {
    // Fallback: load all images
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.src = img.dataset.src || img.src;
    });
  }

  console.log(
    "🌟 StarCake — сайт загружен! Добро пожаловать в галактику вкуса.",
  );
});
