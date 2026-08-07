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

      foodHeroTitle: "좋은 재료를 고르고,<br>먹기 좋은 방법을 고민합니다.",
      foodHeroBody: "반려견에게 챙겨주는 음식이니까,<br>고구마·당근·단호박처럼 익숙한 국내산 야채에서 시작합니다.<br>원료마다 다른 맛과 향, 색과 식감을 살피며 매일 더하기 좋은 작은 입자로 만듭니다.",

      foodCareTitle: "좋은 것을 챙겨주고 싶은 마음.",
      foodCareBody: "신선한 야채를 고르고, 씻고, 손질하고, 익히는 일. 반려견의 건강을 생각하는 마음이 있기에 가능한 정성입니다. PETSRO는 그 마음을 존중하면서, 매일 이어가기 조금 더 쉬운 방법을 고민했습니다.",
      foodCareBridge: "매일 준비하는 정성을, 조금 더 간편하게.",

      foodIngredientsTitle: "이름을 알고,<br>눈으로 확인할 수 있는 재료.",
      foodIngredientsBody: "PETSRO는 고구마·당근·단호박처럼 보호자에게도 익숙한 국내산 야채를 사용합니다. 야채마다 다른 색과 향, 식감이 제품에도 자연스럽게 드러나며, 평소 식사에 식물성 식재료와 야채 원료가 가진 식이섬유를 더할 수 있습니다.",
      foodIngredientFact1: "국내산 야채",
      foodIngredientFact1Body: "익숙하고 이름을 아는 식재료에서 시작합니다.",
      foodIngredientFact2: "식물성 식재료",
      foodIngredientFact2Body: "평소 식사에 야채 원료와 식이섬유를 더합니다.",
      foodIngredientFact3: "보존료 무첨가",
      foodIngredientFact3Body: "원료와 공정에 집중해 간결하게 만들었습니다.",

      foodSingleTitle: "한 통에 하나의 야채,<br>선택은 더 분명하게.",
      foodSingleBody: "여러 야채를 한 번에 섞기보다 고구마·당근·단호박을 각각 만들었습니다. 오늘은 어떤 야채를 더할지 고를 수 있고, 무엇을 먹이는지도 한눈에 알 수 있습니다.",
      foodSweetPotato: "고구마",
      foodCarrot: "당근",
      foodKabocha: "단호박",

      foodMadeTitle: "좋은 재료일수록,<br>다루는 과정도 세심하게.",
      foodMadeBody: "원료를 고르고, 증숙하고, 낮은 온도에서 천천히 열풍 건조한 뒤 고온 열처리합니다. 단순히 잘게 갈아내는 데 그치지 않고, 야채의 색과 모양이 느껴지는 작은 입자로 마무리합니다.",
      foodProcess1: "원료 선별",
      foodProcess2: "증숙",
      foodProcess3: "저온 열풍 건조",
      foodProcess4: "고온 열처리",
      foodProcess5: "작은 입자화",
      foodTextureTitle: "뿌리기는 쉽고, 야채의 존재감은 남도록.",
      foodTextureBody: "고운 가루로만 만들기보다 크기가 다른 작은 입자가 자연스럽게 섞이도록 가공했습니다. 원료마다 다른 색과 입자가 보여, 어떤 야채를 더하는지 눈으로도 느낄 수 있습니다.",
      foodPatentTitle: "제품 관련 야채 토퍼 제조방법 특허출원 중",
      foodPatentNumber: "대한민국 특허출원 제10-2025-0161849호",

      foodEverydayTitle: "정성은 남기고,<br>준비는 가볍게.",
      foodEverydayBody: "매번 야채를 씻고 손질하고 익혀 보관하지 않아도 됩니다. 필요할 때 열고, 필요한 만큼 덜어, 평소 사료 위에 더하면 됩니다. 좋은 식재료를 챙기고 싶은 마음이 바쁜 일상에서도 이어질 수 있도록 만들었습니다.",
      foodStep1: "열고",
      foodStep1Body: "필요할 때 용기를 엽니다.",
      foodStep2: "덜고",
      foodStep2Body: "먹일 만큼 가볍게 덜어냅니다.",
      foodStep3: "더하고",
      foodStep3Body: "평소 사료 위에 간편하게 더합니다.",

      foodPhilosophyTitle: "먹는 즐거움과 건강을<br>함께 담다.",
      foodPhilosophyBody: "PETSRO는 반려견이 즐겁게 먹는 것과, 보호자가 무엇을 먹이는지 알고 선택하는 일을 함께 생각합니다. 좋은 재료, 정성스러운 과정, 매일 쓰기 쉬운 형태. 우리가 음식에 담고 싶은 기준입니다.",
      foodPhilosophyQuote: "좋은 재료에서 시작해, 매일의 식사까지.",

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

      foodHeroTitle: "Good ingredients deserve<br>thoughtful preparation.",
      foodHeroBody: "We start with familiar Korean-grown vegetables—<br>Sweet Potato, Carrot and Kabocha—then prepare each one with care<br>before turning it into an easy-to-sprinkle topper for everyday meals.",

      foodCareTitle: "Care begins before<br>it reaches the bowl.",
      foodCareBody: "Choosing fresh vegetables, washing, trimming and cooking them takes time. It is the kind of effort pet parents make because they care about what goes into the bowl. PETSRO was created to make that care easier to carry into everyday mealtimes.",
      foodCareBridge: "Keep the care. Make the everyday routine easier.",

      foodIngredientsTitle: "Ingredients you know<br>by name.",
      foodIngredientsBody: "PETSRO uses familiar Korean-grown vegetables such as Sweet Potato, Carrot and Kabocha. Each ingredient keeps its own character in color, aroma and texture, offering a simple way to add a plant-based ingredient and vegetable-derived fiber to the everyday bowl.",
      foodIngredientFact1: "Korean-Grown Vegetables",
      foodIngredientFact1Body: "We begin with familiar, recognizable ingredients.",
      foodIngredientFact2: "Plant-Based Ingredients",
      foodIngredientFact2Body: "An easy way to add vegetables and vegetable-derived fiber.",
      foodIngredientFact3: "No Added Preservatives",
      foodIngredientFact3Body: "A straightforward product built around ingredients and process.",

      foodSingleTitle: "One vegetable at a time.<br>A clearer choice.",
      foodSingleBody: "Instead of blending several vegetables into one product, PETSRO makes Sweet Potato, Carrot and Kabocha as individual varieties. Choose what you want to add—and know exactly what is going into the bowl.",
      foodSweetPotato: "Sweet Potato",
      foodCarrot: "Carrot",
      foodKabocha: "Kabocha",

      foodMadeTitle: "Good ingredients deserve<br>care at every step.",
      foodMadeBody: "We select the vegetables, steam them, dry them gently with low-temperature hot air, then apply heat treatment. The final step creates small, naturally varied pieces that still show the character of the vegetable.",
      foodProcess1: "Ingredient Selection",
      foodProcess2: "Steaming",
      foodProcess3: "Low-Temperature Hot-Air Drying",
      foodProcess4: "Heat Treatment",
      foodProcess5: "Small-Particle Processing",
      foodTextureTitle: "Easy to sprinkle. Still visibly vegetable.",
      foodTextureBody: "Rather than turning everything into a uniform fine powder, PETSRO keeps a naturally varied small-particle texture. Different vegetables retain visibly different colors and pieces, so the ingredient remains part of the experience.",
      foodPatentTitle: "Manufacturing Method Patent Pending in Korea",
      foodPatentNumber: "Korean Patent Application No. 10-2025-0161849",

      foodEverydayTitle: "Keep the care.<br>Make the routine easier.",
      foodEverydayBody: "With PETSRO, the routine is simple: open, portion and sprinkle over the regular meal. It is an easier way to keep thoughtful vegetable ingredients in everyday mealtimes without preparing them from scratch each time.",
      foodStep1: "Open",
      foodStep1Body: "Open the container when you need it.",
      foodStep2: "Portion",
      foodStep2Body: "Take out the amount you want to use.",
      foodStep3: "Sprinkle",
      foodStep3Body: "Add it over the regular dog food.",

      foodPhilosophyTitle: "Joy in eating.<br>Care in every choice.",
      foodPhilosophyBody: "PETSRO brings together the joy dogs find in mealtime and the thought pet parents put into choosing what goes into the bowl. Good ingredients, thoughtful preparation and easy everyday use—these are the standards behind our food.",
      foodPhilosophyQuote: "From good ingredients to everyday mealtimes.",

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
        title: "PETSRO Our Food | 좋은 재료와 정성을 담는 PETSRO의 음식 이야기",
        description: "국내산 고구마·당근·단호박에서 시작해, 원료를 고르고 증숙·저온 열풍 건조·고온 열처리를 거쳐 작은 입자의 야채 토퍼로 만드는 PETSRO의 음식 이야기를 소개합니다.",
        ogTitle: "PETSRO Our Food | 좋은 재료, 정성스러운 과정",
        ogDescription: "좋은 재료를 고르고, 정성스럽게 다루고, 매일 더하기 좋은 형태로 만드는 PETSRO의 기준을 소개합니다."
      },
      en: {
        title: "PETSRO Our Food | Good Ingredients, Thoughtfully Prepared",
        description: "Discover how PETSRO turns Korean-grown vegetables into everyday meal toppers through thoughtful preparation, distinctive texture and easy everyday use.",
        ogTitle: "PETSRO Our Food | Good Ingredients, Thoughtfully Prepared",
        ogDescription: "Good ingredients, thoughtful preparation and an easier way to bring vegetables into everyday mealtimes."
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
