document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    en: {
      brand: "Usman Tech Support",
      tagline: "High-impact digital branding for your business.",
      heroHeading: "Professional digital identity for your business.",
      heroText: "Brand systems, logo design, ready-to-use Canva templates, and print-ready marketing assets for businesses that want a modern, trusted presence.",
      heroButton: "Explore Packages",
      heroTrustHeading: "Trusted by many customers",
      heroTrustText: "We deliver polished digital identities for your shop or business with a strong visual system that builds trust and supports local sales growth.",
      feature1Heading: "Brand Identity",
      feature1Text: "Create a strong logo and visual style that makes your shop look professional and reliable.",
      feature2Heading: "Marketing Templates",
      feature2Text: "Custom Canva assets for launches, offers, tech updates and customer announcements.",
      feature3Heading: "Branding Kit",
      feature3Text: "Complete print and digital materials including business cards, bill books and promotional flyers.",
      templateHeading: "For every role on your team",
      templateText: "Supporting marketing, design, and sales with branded visuals and ready-to-use creative assets.",
      template1Heading: "Marketing",
      template1Text: "Create on-brand content at scale with our team, and use ad insights to reach more customers and grow faster.",
      template2Heading: "Creative and Design",
      template2Text: "Empower teams to design on brand with centralized assets and streamlined approval workflows.",
      template3Heading: "Sales",
      template3Text: "Create pitch decks and customer collateral faster with branded templates.",
      packagesHeading: "Service Packages",
      packagesText: "Choose the package that fits your shop: from logo refresh to full brand-ready marketing assets.",
      basicHeading: "Basic",
      basic1: "Professional logo design",
      basic2: "2 ready-to-use Canva templates",
      basic3: "Brand direction for your shop",
      standardHeading: "Standard",
      standard1: "Custom logo system",
      standard2: "4 Canva templates",
      standard3: "Brand kit: business card, bill book, flyer",
      standard4: "Service Add-on: custom logo and text for your shop",
      premiumHeading: "Premium",
      premium1: "Premium logo with 2 revisions",
      premium2: "6 premium Canva templates",
      premium3: "Full print and digital branding kit",
      premium4: "WhatsApp cover and social profile banner",
      featuredHeading: "Featured Work: Usman Mobile",
      featuredText: "Usman Mobile is our live proof of work. We transformed their visual identity with a modern logo, sales-ready marketing assets, and a consistent brand system that builds trust with local customers.",
      featuredButton: "Visit Usman Mobile",
      contactHeading: "Start Your Brand Upgrade",
      contactText: "Make your business look modern and dependable with a polished digital presence tailored for your brand.",
      callHeading: "Call Now",
      callButton: "Call Us",
      whatsappButton: "WhatsApp",
      whyHeading: "Why Choose Us",
      whyText: "We focus on simple, high-impact branding that helps businesses increase customer trust and boost local sales.",
      footerText: "Usman Tech Support — Digital branding for your business."
    },
    ur: {
      brand: "Usman Tech Support",
      tagline: "موبائل ریٹیلرز کے لئے اعلی معیار کی ڈیجیٹل برانڈنگ۔",
      heroHeading: "آپ کے کاروبار کے لیے پیشہ ورانہ ڈیجیٹل شناخت۔",
      heroText: "برانڈ سسٹمز، لوگو ڈیزائن، ریڈی ٹو یوز کینوا ٹیمپلیٹس، اور پرنٹ کے لئے تیار مارکیٹنگ اثاثے تاکہ آپ کا بزنس جدید اور قابل اعتماد نظر آئے۔",
      heroButton: "پیکجز دیکھیں",
      heroTrustHeading: "بہت سے گاہکوں کا اعتماد",
      heroTrustText: "ہم آپکی دکان یا کاروبار کے لئے شاندار ڈیجیٹل شناخت فراہم کرتے ہیں جو اعتماد بنائے اور مقامی فروخت کو سپورٹ کرے۔",
      feature1Heading: "برانڈ شناخت",
      feature1Text: "ایک مضبوط لوگو اور بصری انداز بنائیں جو آپکی دکان کو پیشہ ورانہ اور قابل اعتماد بنائے۔",
      feature2Heading: "مارکیٹنگ ٹیمپلیٹس",
      feature2Text: "لانچ، آفرز، ٹیک اپڈیٹس اور کسٹمر اعلانات کے لئے کسٹم کینوا ٹیمپلیٹس۔",
      feature3Heading: "برانڈنگ کٹ",
      feature3Text: "کاروباری کارڈز، بل بکس، اور پروموشنل فلائرز سمیت مکمل پرنٹ اور ڈیجیٹل مواد۔",
      templateHeading: "ہر ٹیم ممبر کے لئے",
      templateText: "مارکیٹنگ، ڈیزائن، اور سیلز کو برانڈیڈ ویژولز اور تیار شدہ تخلیقی اثاثوں کے ساتھ سپورٹ کریں۔",
      template1Heading: "مارکیٹنگ",
      template1Text: "ہماری ٹیم کے ساتھ برانڈیڈ مواد بڑے پیمانے پر بنائیں، اور زیادہ گاہکوں تک پہنچنے کے لیے اشتہاری بصیرت استعمال کریں۔",
      template2Heading: "کریئیٹو اور ڈیزائن",
      template2Text: "مرکزی اثاثوں اور آسان منظوری کے ورک فلو کے ساتھ ٹیموں کو برانڈ کے مطابق ڈیزائن کرنے کا اختیار دیں۔",
      template3Heading: "سیلز",
      template3Text: "برینڈڈ ٹیمپلیٹس کے ساتھ پِچ ڈیکس اور کسٹمر مواد تیزی سے بنائیں۔",
      packagesHeading: "سروس پیکجز",
      packagesText: "وہ پیکج منتخب کریں جو آپکی دکان کے لئے مناسب ہو: لوگو ریفریش سے مکمل برانڈ ریڈی مارکیٹنگ اثاثوں تک۔",
      basicHeading: "بیسک",
      basic1: "پیشہ ورانہ لوگو ڈیزائن",
      basic2: "2 ریڈی ٹو یوز کینوا ٹیمپلیٹس",
      basic3: "آپکی دکان کے لئے برانڈ ڈائریکشن",
      standardHeading: "اسٹینڈرڈ",
      standard1: "کسٹم لوگو سسٹم",
      standard2: "4 کینوا ٹیمپلیٹس",
      standard3: "برانڈ کٹ: بزنس کارڈ، بل بُک، فلائر",
      standard4: "سروس ایڈ آن: آپکی دکان کے لئے کسٹم لوگو اور ٹیکسٹ",
      premiumHeading: "پریمیم",
      premium1: "2 ریویژن کے ساتھ پریمیم لوگو",
      premium2: "6 پریمیم کینوا ٹیمپلیٹس",
      premium3: "مکمل پرنٹ اور ڈیجیٹل برانڈنگ کٹ",
      premium4: "WhatsApp کور اور سوشل پروفائل بینر",
      featuredHeading: "نمونہ کام: عثمان موبائل",
      featuredText: "عثمان موبائل ہمارا لائیو پروف آف ورک ہے۔ ہم نے ان کی بصری شناخت کو جدید لوگو، سیلز-ریڈی مارکیٹنگ اثاثوں، اور مستقل برانڈ سسٹم کے ساتھ تبدیل کیا جو مقامی گاہکوں کا اعتماد بناتا ہے۔",
      featuredButton: "عثمان موبائل دیکھیں",
      contactHeading: "اپنا برانڈ اپگریڈ شروع کریں",
      contactText: "اپنی دکان کو جدید اور قابل اعتماد بنائیں، موبائل ریٹیلرز کے لئے تیار شاندار ڈیجیٹل موجودگی کے ساتھ۔",
      callHeading: "اب کال کریں",
      callButton: "ہمیں کال کریں",
      whatsappButton: "WhatsApp",
      whyHeading: "ہمیں کیوں منتخب کریں",
      whyText: "ہم آسان، اثر دار برانڈنگ پر توجہ دیتے ہیں جو موبائل شاپس کو گاہکوں کا اعتماد بڑھانے اور مقامی فروخت بڑھانے میں مدد دیتی ہے۔",
      footerText: "Usman Tech Support — موبائل ریٹیلرز کے لئے ڈیجیٹل برانڈنگ۔"
    }
  };

  const translatable = document.querySelectorAll("[data-key]");
  const langToggle = document.getElementById("langToggle");
  const themeToggle = document.getElementById("themeToggle");

  let currentLang = "en";
  let currentTheme = "dark";

  function applyTranslations() {
    translatable.forEach((el) => {
      const key = el.dataset.key;
      const value = translations[currentLang][key];
      if (value) {
        el.textContent = value;
      }
    });
  }

  const planDetails = {
    en: {
      basic: {
        title: "Basic",
        price: "PKR 299",
        items: [
          "Professional logo design",
          "2 ready-to-use Canva templates",
          "Brand direction for your shop"
        ]
      },
      standard: {
        title: "Standard",
        price: "PKR 699",
        items: [
          "Custom logo system",
          "4 Canva templates",
          "Brand kit: business card, bill book, flyer",
          "Service Add-on: custom logo and text for your shop"
        ]
      },
      premium: {
        title: "Premium",
        price: "PKR 999",
        items: [
          "Premium logo with 2 revisions",
          "6 premium Canva templates",
          "Full print and digital branding kit",
          "WhatsApp cover and social profile banner"
        ]
      }
    },
    ur: {
      basic: {
        title: "بیسک",
        price: "PKR 299",
        items: [
          "پیشہ ورانہ لوگو ڈیزائن",
          "2 ریڈی ٹو یوز کینوا ٹیمپلیٹس",
          "آپکی دکان کے لئے برانڈ ڈائریکشن"
        ]
      },
      standard: {
        title: "اسٹینڈرڈ",
        price: "PKR 699",
        items: [
          "کسٹم لوگو سسٹم",
          "4 کینوا ٹیمپلیٹس",
          "برانڈ کٹ: بزنس کارڈ، بل بُک، فلائر",
          "سروس ایڈ آن: آپکی دکان کے لئے کسٹم لوگو اور ٹیکسٹ"
        ]
      },
      premium: {
        title: "پریمیم",
        price: "PKR 999",
        items: [
          "2 ریویژن کے ساتھ پریمیم لوگو",
          "6 پریمیم کینوا ٹیمپلیٹس",
          "مکمل پرنٹ اور ڈیجیٹل برانڈنگ کٹ",
          "WhatsApp کور اور سوشل پروفائل بینر"
        ]
      }
    }
  };

  function setTheme(theme) {
    currentTheme = theme;
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }

  langToggle.addEventListener("click", function () {
    currentLang = currentLang === "en" ? "ur" : "en";
    applyTranslations();
  });

  themeToggle.addEventListener("click", function () {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(currentTheme);
  });

  function playClickSound() {
    const audio = new AudioContext();
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = 520;
    gain.gain.value = 0.08;
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start();
    oscillator.stop(audio.currentTime + 0.08);
  }

  function buildWhatsappMessage(planId) {
    const plan = planDetails[currentLang][planId];
    const greeting = currentLang === "en"
      ? "Hello Usman Tech Support, I am interested in this plan. Please send details for the plan below:"
      : "ہیلو Usman Tech Support، مجھے یہ پلان چاہیے۔ براہ کرم درج ذیل پلان کی تفصیلات بھیجیں۔";

    const details = [
      `${plan.title} - ${plan.price}`,
      ...plan.items.map((item) => `- ${item}`)
    ].join("\n");

    return encodeURIComponent(`${greeting}\n\n${details}`);
  }

  document.querySelectorAll(".package-card").forEach((card) => {
    card.addEventListener("click", () => {
      const planId = card.dataset.plan;
      if (!planId) return;

      playClickSound();
      card.classList.add("active");
      window.setTimeout(() => card.classList.remove("active"), 250);

      const phone = "923211088723";
      const message = buildWhatsappMessage(planId);
      const url = `https://wa.me/${phone}?text=${message}`;
      window.open(url, "_blank");
    });
  });

  const scrollTop = document.getElementById("scrollTop");
  const scrollBottom = document.getElementById("scrollBottom");

  scrollTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  scrollBottom.addEventListener("click", function () {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });

  // Scroll animation observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  document.querySelectorAll("section, .features article, .template-card, .package-card").forEach((el) => {
    el.classList.add("animate-on-scroll");
    observer.observe(el);
  });

  // Trigger animations for elements already in view on page load
  setTimeout(() => {
    document.querySelectorAll("section, .features article, .template-card, .package-card").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      }
    });
  }, 100);

  // Mouse tracking effect for cards
  document.addEventListener("mousemove", function (e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    
    document.querySelectorAll(".template-card, .package-card").forEach((card) => {
      card.style.transform = "translateZ(0) rotateX(" + y + "deg) rotateY(" + x + "deg)";
    });
  });

  // Reset card perspective on mouse leave
  document.addEventListener("mouseleave", function () {
    document.querySelectorAll(".template-card, .package-card").forEach((card) => {
      card.style.transform = "translateZ(0) rotateX(0deg) rotateY(0deg)";
    });
  });

  applyTranslations();
  setTheme(currentTheme);

  // Trigger all animations on page load
  setTimeout(() => {
    // Add visible class to all animated elements
    document.querySelectorAll(".animate-on-scroll").forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 100);
    });

    // Force animation play state for all animated elements
    document.querySelectorAll("*").forEach((el) => {
      if (getComputedStyle(el).animationName !== 'none') {
        el.style.animationPlayState = 'running';
      }
    });
  }, 100);
});
