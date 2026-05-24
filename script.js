/* ============================================
   StarCake — Премиальная кондитерская
   JavaScript
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  // ---------- PRODUCT DATA ----------
  const products = [
    {
      title: "Тирамису",
      category: "✦ Торт",
      desc: "Классический итальянский десерт с нежным маскарпоне, пропитанный кофе и украшенный какао.",
      composition:
        "Печенье савоярди, маскарпоне, кофе эспрессо, яйца, сахар, какао-порошок.",
      weight: "1.2 кг / Ø 20 см",
      price: "10 000 ₸",
      images: [
        "media/prod1.png",
        "media/prod1.png",
        "media/prod1.png",
        "media/prod1.png",
      ],
    },
    {
      title: "Карамельная Мадлен",
      category: "✦ Печенье",
      desc: "Шоколадное печенье с карамельной начинкой, покрыто молочным шоколадом и украшено золотым кандурином.",
      composition:
        "Мука, какао, сливочное масло, карамель, молочный шоколад, золотой кандурин.",
      weight: "200 г / 6 шт",
      price: "10 000 ₸",
      images: [
        "media/prod2.png",
        "media/prod2.png",
        "media/prod2.png",
        "media/prod2.png",
      ],
    },
    {
      title: "Лимонная Мадлен",
      category: "✦ Печенье",
      desc: "Лимонное печенье с нежным лимонным курдом внутри, покрыто белым шоколадом.",
      composition:
        "Мука, сливочное масло, лимон, яйца, сахар, лимонный курд, белый шоколад.",
      weight: "200 г / 6 шт",
      price: "7 500 ₸",
      images: [
        "media/prod3.png",
        "media/prod3.png",
        "media/prod3.png",
        "media/prod3.png",
      ],
    },
    {
      title: "Кокос-Миндаль",
      category: "✦ Печенье",
      desc: "Сливочное бисквитное печенье с начинкой из белого шоколада, кокоса и миндаля. Покрыто белым шоколадом.",
      composition:
        "Мука, сливочное масло, кокосовая стружка, миндаль, белый шоколад, сахар.",
      weight: "250 г / 6 шт",
      price: "5 900 ₸",
      images: [
        "media/prod4.png",
        "media/prod4.png",
        "media/prod4.png",
        "media/prod4.png",
      ],
    },
    {
      title: "Ягодная Мадлен",
      category: "✦ Печенье",
      desc: "Бисквитное печенье с ягодным конфитюром, покрыто белым шоколадом и малиной.",
      composition:
        "Мука, сливочное масло, ягодный конфитюр, белый шоколад, малина, сахар.",
      weight: "200 г / 6 шт",
      price: "4 900 ₸",
      images: [
        "media/prod5.png",
        "media/prod5.png",
        "media/prod5.png",
        "media/prod5.png",
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
