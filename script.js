(() => {
  "use strict";

  const translations = {
    ko: {
      skip: "본문 바로가기",
      mainNav: "주요 메뉴",
      mobileNav: "모바일 주요 메뉴",
      menuOpen: "메뉴 열기",
      menuClose: "메뉴 닫기",
      navProducts: "PRODUCTS",
      navFood: "OUR FOOD",
      navStory: "OUR STORY",
      navBusiness: "BUSINESS",
      navBuy: "BUY",
      shopNow: "구매하기",

      heroTitle: "사료는 그대로,<br>식사는 더 다채롭게.",
      heroBody: "국내산 야채를 작은 입자로 만들어<br>평소 사료 위에 간편하게 더하는 야채 토퍼",
      heroExplore: "제품 알아보기",
      heroShop: "구매하기",
      heroBusiness: "비즈니스 문의",

      trustVegetables: "국내산 야채",
      trustMade: "Made in Korea",
      trustPatent: "제조방법 특허출원 중",

      everydayTitle: "매일 먹는 사료를 바꾸지 않고도<br>식사는 달라질 수 있습니다.",
      everydayBody: "평소 먹는 사료 위에 원하는 야채를 조금 더해보세요.<br>PETSRO는 번거로운 야채 준비 대신, 실제 야채 식재료와 맛·향·식감의 변화를 일상 식사에 간편하게 더하는 방법을 제안합니다.",

      productsTitle: "오늘은 어떤 야채를 더할까요?",
      productsIntro: "단일 야채를 각각 선택해 평소 식사에 필요한 만큼 간편하게 더할 수 있습니다.",
      sweetPotato: "고구마",
      sweetPotatoDesc: "은은한 원물의 맛과 식감",
      carrot: "당근",
      carrotDesc: "선명한 원료의 색과 향",
      kabocha: "단호박",
      kabochaDesc: "단호박 특유의 풍미와 입자감",
      broccoli: "브로콜리",
      broccoliDesc: "새로운 Vegetable Meal Topper 라인업",
      comingSoon: "출시 예정",
      smartStore: "스마트스토어에서 보기",

      whyTitle: "야채를 더하는 방식까지 생각했습니다.",
      whyOne: "국내산 단일 야채",
      whyOneEn: "Korean-Grown Single Vegetables",
      whyTwo: "증숙·저온 열풍 건조",
      whyTwoEn: "Steaming & Low-Temperature Hot-Air Drying",
      whyThree: "고온 열처리",
      whyThreeEn: "Heat Treatment",
      whyFour: "작은 입자형 제형",
      whyFourEn: "Distinctive Small-Particle Texture",

      processTitle: "고운 파우더가 아닌,<br>실제 야채의 존재감을 살린 작은 입자",
      processBody: "크기가 다른 작은 입자가 자연스럽게 섞인 형태로 가공해, 실제 야채 원료의 모습을 확인하면서 사료 위에는 간편하게 뿌릴 수 있도록 만들었습니다.",
      processOne: "증숙",
      processTwo: "저온 열풍 건조",
      processThree: "고온 열처리",
      processFour: "작은 입자화",
      patentLabel: "PATENT PENDING IN KOREA",
      patentTitle: "제품 관련 야채 토퍼 제조방법 특허출원 중",
      patentNumber: "대한민국 특허출원 제10-2025-0161849호",

      expandTitle: "야채 선택의 폭을 넓혀갑니다.",
      expandBody: "고구마·당근·단호박에서 시작한 PETSRO Veggie Topper는 브로콜리 제품 출시를 준비하고 있습니다. 단일 야채를 각각 선택하는 제품 구조를 기반으로 앞으로도 다양한 야채 원료로 Vegetable Meal Topper 라인업을 확장해갑니다.",

      koreaTitle: "한국에서 시작한<br>Vegetable Meal Topper",
      koreaBody: "다양한 식재료로 한 끼의 즐거움을 넓혀가는 한국의 식문화처럼, PETSRO는 반려견의 평소 식사에도 새로운 야채 선택지를 더하고자 합니다. 국내산 야채와 제품 개발 경험을 바탕으로 한국에서 시작해 더 넓은 시장으로 Vegetable Meal Topper 라인을 확장해갑니다.",
      koreaQuote: "From Korean vegetables to more varied mealtimes.",

      businessTitle: "PETSRO와 새로운 식사 경험을 함께 만들어보세요.",
      businessBody: "입점, 유통, 수출 및 비즈니스 파트너십 문의를 환영합니다.",
      businessEmail: "비즈니스 문의",
      businessCall: "전화 문의",


      foodHeroTitle: "좋은 토퍼는<br>주식을 대신하지 않습니다.",
      foodHeroBody: "평소 먹는 사료는 그대로.<br>PETSRO는 실제 야채 식재료와 맛·향·식감의 변화를<br>매일의 식사에 간편하게 더하는 방법을 고민합니다.",

      foodRoleTitle: "사료의 부족함을 채우는 것이 아니라,<br>한 끼의 선택지를 넓히는 것.",
      foodRoleBody1: "영양적으로 완전하고 균형 잡힌 사료를 정상적으로 먹고 있다면 토퍼가 주식을 대신할 필요는 없습니다.",
      foodRoleBody2: "PETSRO가 생각하는 토퍼는 평소 식사를 유지하면서 원하는 식재료와 새로운 맛·향·식감을 소량 더할 수 있는 하나의 식사 방식입니다.",
      foodRoleBody3: "야채를 직접 세척하고 손질하고 익혀 보관하는 과정 없이, 필요한 만큼 사료 위에 더할 수 있도록 만들었습니다.",

      foodCareTitle: "좋은 식재료를<br>직접 챙겨주고 싶은 마음.",
      foodCareBody: "반려견의 건강을 생각해 신선한 야채를 고르고, 씻고, 손질하고, 익히는 일에는 보호자의 정성이 들어갑니다. 하지만 매일 같은 과정을 반복하기는 쉽지 않습니다.",
      foodCareBridge: "PETSRO는 그 정성을 매일 더 간편하게 이어갈 방법을 고민했습니다.",

      foodPrinciplesTitle: "우리가 토퍼를 만드는 네 가지 원칙",
      foodPrinciple1Title: "주식은 그대로",
      foodPrinciple1Body: "PETSRO 토퍼는 주식을 대신하기 위한 제품이 아닙니다. 평소 먹는 사료를 유지하면서 식사에 작은 변화를 더합니다.",
      foodPrinciple2Title: "이해할 수 있는 실제 식재료에서 시작",
      foodPrinciple2Body: "고구마·당근·단호박처럼 보호자가 눈으로 알고 선택할 수 있는 국내산 야채 원료를 사용합니다.",
      foodPrinciple3Title: "원료마다 필요한 과정을 고민",
      foodPrinciple3Body: "야채를 선별하고 증숙한 뒤 저온 열풍 건조와 고온 열처리 과정을 거쳐 일상 급여에 적합한 형태로 가공합니다.",
      foodPrinciple4Title: "보이고, 뿌리기 쉽게",
      foodPrinciple4Body: "완전히 고운 파우더가 아니라 크기가 다른 작은 입자가 자연스럽게 섞인 형태로 만들어, 실제 야채 원료의 존재감을 확인하면서 사료 위에는 간편하게 더할 수 있도록 합니다.",

      foodSingleTitle: "섞기보다,<br>원하는 야채를 선택할 수 있도록.",
      foodSingleBody: "PETSRO Veggie Topper는 여러 야채를 하나로 혼합한 제품이 아니라 고구마·당근·단호박을 각각 선택할 수 있는 구조입니다. 보호자는 원하는 식재료를 직접 선택할 수 있고, 제품마다 어떤 야채가 들어있는지도 명확하게 확인할 수 있습니다.",
      foodCurrent: "현재 제품",
      foodUpcoming: "출시 예정",
      foodUpcomingVariety: "Upcoming Variety",

      foodProcessTitle: "작은 입자 하나에도<br>만드는 이유가 있습니다.",
      foodProcessBody: "국내산 야채를 선별하고 각 원료에 맞는 과정을 거쳐, 일반적인 고운 야채 파우더가 아니라 사료 위에 뿌리기 쉽고 야채 원료의 모습을 확인할 수 있는 작은 입자형 제형을 목표로 합니다.",
      foodProcess1: "원료 선별",
      foodProcess2: "증숙",
      foodProcess3: "저온 열풍 건조",
      foodProcess4: "고온 열처리",
      foodProcess5: "작은 입자화",
      foodPatentTitle: "제품 관련 야채 토퍼 제조방법 특허출원 중",
      foodPatentNumber: "대한민국 특허출원 제10-2025-0161849호",

      foodEverydayTitle: "매일 더하는 제품이라서,<br>간단해야 합니다.",
      foodEverydayBody: "PETSRO의 역할은 복잡한 식단을 새로 만드는 것이 아니라, 일상의 한 끼에 새로운 식재료와 식사 경험을 간편하게 더하는 것입니다.",
      foodStep1: "열고",
      foodStep1Body: "필요할 때 용기를 엽니다.",
      foodStep2: "덜고",
      foodStep2Body: "필요한 만큼 소량 덜어냅니다.",
      foodStep3: "더합니다",
      foodStep3Body: "평소 사료 위에 간편하게 더합니다.",

      foodCtaTitle: "PETSRO Veggie Topper를 만나보세요.",
      foodCtaProducts: "제품 보기",
      foodCtaShop: "구매하기",
      foodCtaBusiness: "비즈니스 문의 ↗",

      footerSlogan: "먹는 즐거움과 건강을 함께 담다.",
      footerCompany: "회사",
      footerCompanyName: "루비트리 / RUBYTREE",
      footerFollow: "채널",
      footerBusiness: "반려동물 식품 제조 · 대한민국"
    },

    en: {
      skip: "Skip to main content",
      mainNav: "Main navigation",
      mobileNav: "Mobile navigation",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      navProducts: "PRODUCTS",
      navFood: "OUR FOOD",
      navStory: "OUR STORY",
      navBusiness: "BUSINESS",
      navBuy: "BUY",
      shopNow: "Shop Now",

      heroTitle: "Keep the regular food.<br>Add more variety to mealtime.",
      heroBody: "Made with Korean-grown vegetables and designed<br>to sprinkle easily over your dog’s everyday meal.",
      heroExplore: "Explore Products",
      heroShop: "Shop Now",
      heroBusiness: "Business Inquiry",

      trustVegetables: "Korean-Grown Vegetables",
      trustMade: "Made in Korea",
      trustPatent: "Patent Pending in Korea",

      everydayTitle: "Keep the regular food.<br>Make mealtime a little different.",
      everydayBody: "Choose a vegetable and simply sprinkle it over the everyday meal.<br>PETSRO makes it easy to add real vegetable ingredients, texture and variety without changing the staple food.",

      productsTitle: "Choose Your Vegetable",
      productsIntro: "Choose a single vegetable variety and add just the amount you want to the everyday meal.",
      sweetPotato: "Current Variety",
      sweetPotatoDesc: "A gentle whole-ingredient taste and texture",
      carrot: "Current Variety",
      carrotDesc: "Distinctive natural color and aroma",
      kabocha: "Current Variety",
      kabochaDesc: "Characteristic kabocha flavor and texture",
      broccoli: "Upcoming Variety",
      broccoliDesc: "The next addition to our Vegetable Meal Topper line",
      comingSoon: "COMING SOON",
      smartStore: "View in Smart Store",

      whyTitle: "Designed Beyond the Ingredient.",
      whyOne: "Korean-Grown Single Vegetables",
      whyOneEn: "Clearly selected single-vegetable varieties",
      whyTwo: "Steaming & Low-Temperature Hot-Air Drying",
      whyTwoEn: "A process tailored to the vegetable ingredient",
      whyThree: "Heat Treatment",
      whyThreeEn: "Part of our manufacturing process",
      whyFour: "Distinctive Small-Particle Texture",
      whyFourEn: "Designed to sprinkle easily over regular dog food",

      processTitle: "Not a Fine Powder.<br>Visible Vegetable Texture.",
      processBody: "PETSRO keeps a naturally varied small-particle texture, making the vegetable ingredient visually recognizable while remaining easy to sprinkle over regular dog food.",
      processOne: "Steaming",
      processTwo: "Low-Temperature Hot-Air Drying",
      processThree: "Heat Treatment",
      processFour: "Small-Particle Processing",
      patentLabel: "PATENT PENDING IN KOREA",
      patentTitle: "Manufacturing Method Patent Pending in Korea",
      patentNumber: "Korean Patent Application No. 10-2025-0161849",

      expandTitle: "An Expandable Vegetable Meal Topper Line",
      expandBody: "Starting with Sweet Potato, Carrot and Kabocha, PETSRO is preparing Broccoli as its next variety. Built around a single-vegetable concept, the line is designed to expand into additional vegetable options.",

      koreaTitle: "A Korean Approach to<br>Everyday Meal Variety",
      koreaBody: "Inspired by Korea’s culture of enjoying a variety of ingredients at the table, PETSRO brings more vegetable choices to a dog’s everyday meal. Built with Korean-grown vegetables and product development experience, we aim to expand the Vegetable Meal Topper line from Korea to wider markets.",
      koreaQuote: "From Korean vegetables to more varied mealtimes.",

      businessTitle: "Looking for a Pet Food Partner from Korea?",
      businessBody: "PETSRO welcomes inquiries from retailers, distributors, importers and business partners.",
      businessEmail: "Business Inquiry",
      businessCall: "Call Us",


      foodHeroTitle: "A Good Topper<br>Doesn’t Replace the Main Meal.",
      foodHeroBody: "Keep the regular food.<br>PETSRO is designed to add real vegetable ingredients,<br>texture and variety to everyday mealtimes.",

      foodRoleTitle: "Not to complete the meal,<br>but to add another choice to it.",
      foodRoleBody1: "When a dog is eating a complete and balanced staple diet, a topper does not need to replace it.",
      foodRoleBody2: "PETSRO sees a topper as a simple way to add a chosen ingredient, new texture and mealtime variety while keeping the regular food.",
      foodRoleBody3: "It is designed to make adding vegetables easier without the repeated work of washing, cutting, cooking and storing them separately.",

      foodCareTitle: "The care behind<br>every ingredient.",
      foodCareBody: "Choosing, washing, preparing and cooking fresh vegetables takes time and care when you want to make thoughtful choices for your dog. Doing the same preparation every day, however, is not always easy.",
      foodCareBridge: "PETSRO started with a simple question: how can that care become easier to continue every day?",

      foodPrinciplesTitle: "Four Principles Behind Our Toppers",
      foodPrinciple1Title: "Keep the Main Meal",
      foodPrinciple1Body: "Our toppers are designed to complement everyday feeding, not replace the staple diet.",
      foodPrinciple2Title: "Start with Real Ingredients",
      foodPrinciple2Body: "We begin with recognizable Korean-grown vegetables such as Sweet Potato, Carrot and Kabocha.",
      foodPrinciple3Title: "Respect the Ingredient",
      foodPrinciple3Body: "Vegetables are selected, steamed, low-temperature hot-air dried and heat-treated before being processed for everyday topping.",
      foodPrinciple4Title: "Visible Ingredient. Easy to Sprinkle.",
      foodPrinciple4Body: "Instead of turning vegetables into a completely fine powder, PETSRO keeps a naturally varied small-particle texture that remains easy to sprinkle.",

      foodSingleTitle: "One Vegetable.<br>A Clearer Choice.",
      foodSingleBody: "Rather than combining multiple vegetables into one formula, PETSRO offers individual vegetable varieties. Pet owners can choose the ingredient they want and clearly see what they are adding to the meal.",
      foodCurrent: "Current Variety",
      foodUpcoming: "COMING SOON",
      foodUpcomingVariety: "Upcoming Variety",

      foodProcessTitle: "A Purpose<br>Behind Every Particle.",
      foodProcessBody: "We select Korean-grown vegetables and process each ingredient with the goal of creating a distinctive small-particle texture that is visually recognizable and easy to sprinkle over regular dog food.",
      foodProcess1: "Ingredient Selection",
      foodProcess2: "Steaming",
      foodProcess3: "Low-Temperature Hot-Air Drying",
      foodProcess4: "Heat Treatment",
      foodProcess5: "Small-Particle Processing",
      foodPatentTitle: "Manufacturing Method Patent Pending in Korea",
      foodPatentNumber: "Korean Patent Application No. 10-2025-0161849",

      foodEverydayTitle: "Made to Be Simple<br>for Everyday Mealtimes.",
      foodEverydayBody: "PETSRO is not about rebuilding the whole diet. It is about making it easier to add another ingredient and a little more variety to the everyday meal.",
      foodStep1: "Open",
      foodStep1Body: "Open the container when you need it.",
      foodStep2: "Portion",
      foodStep2Body: "Take out a small amount as needed.",
      foodStep3: "Sprinkle",
      foodStep3Body: "Add it over the regular dog food.",

      foodCtaTitle: "Explore PETSRO Veggie Topper",
      foodCtaProducts: "Explore Products",
      foodCtaShop: "Shop Now",
      foodCtaBusiness: "Business Inquiry ↗",

      footerSlogan: "More joy and thoughtful choices for everyday mealtimes.",
      footerCompany: "Company",
      footerCompanyName: "RUBYTREE",
      footerFollow: "Channels",
      footerBusiness: "Pet Food Manufacturer · Republic of Korea"
    }
  };

  const seo = {
    home: {
      ko: {
        title: "PETSRO 페츠로 | 국내산 야채로 만든 반려견 Vegetable Meal Topper",
        description: "PETSRO는 국내산 야채를 작은 입자로 가공해 평소 사료 위에 간편하게 더하는 반려견용 Vegetable Meal Topper 브랜드입니다.",
        ogTitle: "PETSRO 페츠로 | Vegetable Meal Topper",
        ogDescription: "국내산 야채를 작은 입자로 가공해 평소 사료 위에 간편하게 더하는 PETSRO Vegetable Meal Topper."
      },
      en: {
        title: "PETSRO | Korean Vegetable Meal Topper for Dogs",
        description: "PETSRO develops Vegetable Meal Toppers for dogs using Korean-grown vegetables, a distinctive small-particle texture and an easy sprinkle-over format.",
        ogTitle: "PETSRO | Korean Vegetable Meal Topper for Dogs",
        ogDescription: "Vegetable Meal Toppers made with Korean-grown vegetables and designed for easy everyday topping."
      }
    },
    ourFood: {
      ko: {
        title: "PETSRO Our Food | 야채 토퍼를 만드는 PETSRO의 식사 원칙",
        description: "PETSRO가 생각하는 반려견 토퍼의 역할과 국내산 야채 원료, 증숙·저온 열풍 건조, 작은 입자형 제형의 제조 원칙을 소개합니다.",
        ogTitle: "PETSRO Our Food | PETSRO의 식사 원칙",
        ogDescription: "주식은 그대로 두고 실제 야채 식재료와 식사 경험의 다양성을 간편하게 더하는 PETSRO의 원칙을 소개합니다."
      },
      en: {
        title: "PETSRO Our Food | Our Vegetable Meal Topper Principles",
        description: "Learn how PETSRO approaches everyday meal toppers with Korean-grown vegetables, thoughtful processing and a distinctive small-particle texture.",
        ogTitle: "PETSRO Our Food | Vegetable Meal Topper Principles",
        ogDescription: "Discover PETSRO's approach to Korean-grown vegetables, thoughtful processing and everyday meal variety."
      }
    }
  };

  const root = document.documentElement;
  const pageKey = document.body.classList.contains("our-food-page") ? "ourFood" : "home";
  const langButtons = Array.from(document.querySelectorAll(".home-lang-btn"));
  const menuToggle = document.querySelector(".home-menu-toggle");
  const mobileNav = document.querySelector(".home-mobile-nav");
  const phoneDisplay = document.querySelector(".home-business-contact");

  const textNodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const htmlNodes = Array.from(document.querySelectorAll("[data-i18n-html]"));
  const ariaNodes = Array.from(document.querySelectorAll("[data-i18n-aria]"));
  const localizedImages = Array.from(document.querySelectorAll("[data-alt-ko][data-alt-en]"));

  function updateMeta(lang) {
    const current = seo[pageKey][lang];
    document.title = current.title;

    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    if (description) description.setAttribute("content", current.description);
    if (ogTitle) ogTitle.setAttribute("content", current.ogTitle);
    if (ogDescription) ogDescription.setAttribute("content", current.ogDescription);
    if (twitterTitle) twitterTitle.setAttribute("content", current.ogTitle);
    if (twitterDescription) twitterDescription.setAttribute("content", current.ogDescription);
  }

  function setLanguage(lang, persist = true) {
    const chosen = translations[lang] ? lang : "ko";
    const dictionary = translations[chosen];

    root.lang = chosen;

    textNodes.forEach((element) => {
      const key = element.dataset.i18n;
      if (dictionary[key] !== undefined) element.textContent = dictionary[key];
    });

    htmlNodes.forEach((element) => {
      const key = element.dataset.i18nHtml;
      if (dictionary[key] !== undefined) element.innerHTML = dictionary[key];
    });

    ariaNodes.forEach((element) => {
      const key = element.dataset.i18nAria;
      if (dictionary[key] !== undefined) element.setAttribute("aria-label", dictionary[key]);
    });

    localizedImages.forEach((image) => {
      image.alt = chosen === "en" ? image.dataset.altEn : image.dataset.altKo;
    });

    langButtons.forEach((button) => {
      const active = button.dataset.lang === chosen;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    if (phoneDisplay) {
      phoneDisplay.textContent =
        chosen === "en" ? phoneDisplay.dataset.phoneIntl : phoneDisplay.dataset.phoneLocal;
    }

    if (menuToggle) {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute(
        "aria-label",
        expanded ? dictionary.menuClose : dictionary.menuOpen
      );
    }

    updateMeta(chosen);

    if (persist) {
      try {
        localStorage.setItem("petsro-language", chosen);
      } catch (_) {
        // Ignore storage errors.
      }
    }
  }

  function getInitialLanguage() {
    try {
      const saved = localStorage.getItem("petsro-language");
      if (saved === "ko" || saved === "en") return saved;
    } catch (_) {
      // Ignore storage errors.
    }

    const browserLanguage = (navigator.language || "").toLowerCase();
    return browserLanguage.startsWith("en") ? "en" : "ko";
  }

  function closeMobileMenu() {
    if (!menuToggle || !mobileNav) return;
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.classList.remove("is-open");

    const currentLang = root.lang === "en" ? "en" : "ko";
    menuToggle.setAttribute("aria-label", translations[currentLang].menuOpen);
  }

  function openMobileMenu() {
    if (!menuToggle || !mobileNav) return;
    mobileNav.hidden = false;
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.classList.add("is-open");

    const currentLang = root.lang === "en" ? "en" : "ko";
    menuToggle.setAttribute("aria-label", translations[currentLang].menuClose);
  }

  langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      expanded ? closeMobileMenu() : openMobileMenu();
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMobileMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) closeMobileMenu();
    });
  }

  const year = document.querySelector("#home-current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  setLanguage(getInitialLanguage(), false);
})();
