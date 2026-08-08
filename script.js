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

      heroTitle: "매일 먹는 밥도,<br>더 즐겁게.",
      heroBody: "국내산 야채로 만든<br>밥 위에 가볍게 뿌려주는 Veggie Topper",
      heroExplore: "제품 알아보기",
      heroShop: "구매하기",

      trustVegetables: "국내산 야채",
      trustMade: "Made in Korea",

      everydayTitle: "같은 밥도,<br>오늘은 조금 다르게.",
      everydayBody: "늘 먹는 밥에 다른 맛과 향, 식감을 더해보세요.<br>오늘은 고구마, 내일은 당근처럼 한 끼씩 다르게 챙겨줄 수 있습니다.",

      productsTitle: "오늘은 어떤 야채를 더할까요?",
      productsIntro: "고구마·당근·단호박을 각각 담았습니다. 오늘 챙겨주고 싶은 야채를 골라주세요.",
      sweetPotato: "고구마",
      sweetPotatoDesc: "고구마 특유의 은은한 맛과 향",
      carrot: "당근",
      carrotDesc: "당근 특유의 색과 향",
      kabocha: "단호박",
      kabochaDesc: "단호박 특유의 향과 풍미",
      broccoli: "브로콜리",
      broccoliDesc: "다음으로 준비 중인 야채 토퍼",
      comingSoon: "출시 예정",
      smartStore: "스마트스토어에서 보기",

      whyTitle: "골라주고, 섞어주고, 매일 조금 다르게.",
      whyMore: "재료와 만드는 이야기 보기",





      foodHeroTitle: "좋은 야채를 골라,<br>매일 챙겨주기 쉽게 준비합니다.",
      foodHeroBody: "PETSRO Veggie Topper는 국내산 고구마·당근·단호박으로 만듭니다.<br>야채마다 상태를 살펴 찌고 천천히 말려,<br>밥 위에 간편하게 더할 수 있도록 준비합니다.",

      foodCareTitle: "야채를 챙겨주고 싶어도,<br>매번 직접 준비하기는 쉽지 않으니까.",
      foodCareBody: "국내산 고구마·당근·단호박을 골라 씻고 손질하고 익힌 뒤 천천히 말려 담았습니다. 필요한 날 용기를 열어 밥 위에 가볍게 뿌려주세요.",
      foodCareBridge: "번거로운 야채 준비는 저희가 할게요.",

      foodIngredientFact1: "국내산 야채",
      foodIngredientFact1Body: "고구마 · 당근 · 단호박",
      foodIngredientFact2: "식이섬유",
      foodIngredientFact2Body: "야채의 식이섬유를 함께 담았습니다.",
      foodIngredientFact3: "보존료 무첨가",
      foodIngredientFact3Body: "보존료를 따로 넣지 않습니다.",

      foodSingleTitle: "하나씩 골라도,<br>좋아하는 조합으로 섞어도.",
      foodSingleBody: "고구마·당근·단호박을 각각 담았습니다. 한 가지씩 골라주거나 좋아하는 야채끼리 섞어줄 수 있습니다.",
      foodSweetPotato: "고구마",
      foodCarrot: "당근",
      foodKabocha: "단호박",

      foodMadeTitle: "야채 상태를 보며,<br>찌고 천천히 말립니다.",
      foodMadeBody: "원료를 고른 뒤 쪄서 익히고, 낮은 온도에서 천천히 말립니다. 마지막까지 꼼꼼하게 마무리해 밥 위에 뿌려주기 좋은 토퍼 형태로 완성합니다.",
      foodProcess1: "원료 선별",
      foodProcess2: "증숙",
      foodProcess3: "저온 열풍 건조",
      foodProcess4: "고온 열처리",
      foodProcess5: "토퍼 형태로 마무리",
      foodPatentLabel: "PATENT PENDING",
      foodPatentTitle: "PETSRO 야채 토퍼 제조방법 특허출원 중",
      foodPatentNumber: "대한민국 특허출원 제10-2025-0161849호",
      foodTextureTitle: "야채의 색과 식감이 자연스럽게 남도록.",
      foodTextureBody: "야채의 모양이 조금씩 남아 있어 어떤 야채인지 눈으로도 알 수 있습니다. 두 가지 이상을 함께 더하면 각각의 색과 식감도 자연스럽게 어우러집니다.",

      foodEverydayTitle: "필요할 때, 밥 위에 바로.",
      foodEverydayBody: "용기를 열어 필요한 만큼 뿌려주세요. 야채를 따로 손질할 필요가 없습니다.",

      foodPhilosophyTitle: "먹는 즐거움과 건강을<br>함께 담다.",
      foodPhilosophyBody: "PETSRO는 맛있게 잘 먹는 즐거움과 좋은 재료를 함께 생각합니다. 매일 부담 없이 챙겨줄 수 있는 먹거리를 만들고 싶습니다.",

      foodCtaProducts: "제품 보기",
      foodCtaShop: "구매하기",


      storyHeroTitle: "잘 먹고, 건강하게 지내고,<br>오래 함께했으면 합니다.",
      storyHeroBody: "PETSRO가 바라는 건 단순합니다.<br>반려동물이 매일 맛있게 먹고 건강하게 지내며,<br>보호자와 행복한 시간을 오래 이어가는 것.",
      storyOriginTitle: "매일 먹는 밥이니까,<br>즐거움도 좋은 재료도 놓치고 싶지 않았습니다.",
      storyOriginBody1: "반려동물이 밥을 맛있게 먹는 모습은 보호자에게도 큰 즐거움입니다. 그래서 한 끼를 챙길 때 맛뿐 아니라 어떤 재료로 만들었는지도 자연스럽게 살펴보게 됩니다.",
      storyOriginBody2: "PETSRO도 그 마음에서 시작했습니다. 잘 먹는 즐거움과 좋은 재료를 함께 챙길 수 있는 먹거리를 만들고 싶었습니다.",
      storyJourneyTitle: "간식으로 시작해,<br>매일 먹는 밥까지.",
      storyJourney1Title: "간식부터 시작했습니다.",
      storyJourney1Body: "반려동물 간식을 만들며 재료와 만드는 방법을 꾸준히 고민해왔습니다.",
      storyJourney2Title: "매일 먹는 밥도 고민했습니다.",
      storyJourney2Body: "간식뿐 아니라 매일 먹는 밥에도 새로운 맛과 재료를 더해주고 싶었습니다.",
      storyJourney3Title: "Veggie Topper를 만들었습니다.",
      storyJourney3Body: "국내산 고구마·당근·단호박을 밥 위에 간편하게 더할 수 있도록 준비했습니다.",
      storyNextTitle: "더 건강하고,<br>더 즐거운 먹는 시간을 위해.",
      storyNextBody: "PETSRO는 앞으로도 맛있게 먹는 즐거움과 좋은 재료를 함께 생각하겠습니다. 야채 토퍼에 머물지 않고, 반려동물의 먹는 시간을 더 즐겁게 해줄 새로운 먹거리도 계속 준비하겠습니다.",
      storyClosingSlogan: "먹는 즐거움과 건강을 함께 담다.",
      storyCtaTitle: "PETSRO를 더<br>둘러보세요.",
      storyCtaFood: "재료와 만드는 이야기",
      storyCtaProducts: "제품 보기",


      biz2HeroTitle: "먹는 즐거움과 건강을,<br>더 가까이.",
      biz2HeroBody: "더 많은 보호자와 반려동물이 PETSRO를 만날 수 있도록 다양한 유통과 협업의 제안을 기다립니다.",
      biz2HeroEmail: "비즈니스 문의",
      biz2HeroExplore: "입점·협업 안내",

      biz2StoreTitle: "매장에서 만나는 PETSRO",
      biz2StoreBody: "매장에 놓였을 때 제품이 한눈에 들어오도록, 야채별 색과 투명 용기, 패키지의 분위기까지 맞췄습니다.",

      biz2Strength1Title: "야채로 만든 식사 토퍼",
      biz2Strength1Body: "국내산 야채로 만들어 밥 위에 뿌려주는 식사 토퍼입니다.",
      biz2Strength2Title: "고구마·당근·단호박, 각각 따로",
      biz2Strength2Body: "여러 야채를 섞지 않고 한 가지씩 담아, 고객이 원하는 야채를 쉽게 고를 수 있습니다.",
      biz2Strength3Title: "내용물이 바로 보이는 투명 용기",
      biz2Strength3Body: "야채마다 다른 색과 모양이 보여 제품의 차이를 한눈에 알 수 있습니다.",

      biz2CollabTitle: "입점부터 브랜드 협업까지.",
      biz2CollabIntro: "매장 입점부터 팝업, 브랜드 협업까지 다양한 제안을 받고 있습니다.",
      biz2Collab1Title: "입점 · 유통",
      biz2Collab1Body: "펫 전문 매장, 편집숍, 라이프스타일숍, 온라인몰 등 다양한 판매 채널의 제안을 기다립니다.",
      biz2Collab2Title: "팝업 · 행사 · 브랜드 협업",
      biz2Collab2Body: "팝업과 행사, 콘텐츠와 프로모션 등 브랜드와 잘 맞는 협업 제안을 기다립니다.",
      biz2Collab3Title: "해외 유통",
      biz2Collab3Body: "PETSRO를 해외에 소개할 바이어와 유통 파트너의 문의도 받고 있습니다.",


      biz2ContactTitle: "PETSRO와 함께할 제안이 있다면,<br>편하게 연락 주세요.",
      biz2ContactBody: "아직 구체적이지 않아도 괜찮습니다.",

      discoverTitle: "PETSRO를 더 알고 싶다면.",
      discoverFood: "어떤 재료로, 어떻게 만드는지",
      discoverStory: "PETSRO는 어떻게 시작했는지",
      trustPreservatives: "보존료 무첨가",
      whyChoice: "골라주고, 섞어주고",
      whyChoiceBody: "한 가지씩 골라도 좋고, 좋아하는 야채끼리 함께 더해도 좋습니다.",
      whyFlavor: "야채마다 다른 맛과 식감",
      whyFlavorBody: "고구마·당근·단호박이 가진 맛과 향, 식감을 한 끼에 더해줍니다.",
      whyEasy: "밥 위에 바로",
      whyEasyBody: "용기를 열어 필요한 만큼 뿌려주세요. 야채를 따로 준비할 필요가 없습니다.",
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

      heroTitle: "Make every meal<br>a little more exciting.",
      heroBody: "Made with Korean-grown vegetables,<br>ready to sprinkle over your dog’s meal.",
      heroExplore: "Explore Products",
      heroShop: "Shop Now",

      trustVegetables: "Korean-Grown Vegetables",
      trustMade: "Made in Korea",

      everydayTitle: "Same bowl.<br>A little something different today.",
      everydayBody: "Bring a different flavor, aroma and texture to the same everyday meal.<br>Sweet Potato today, Carrot tomorrow—an easy way to change things up from bowl to bowl.",

      productsTitle: "Which vegetable today?",
      productsIntro: "Sweet Potato, Carrot and Kabocha are packed separately, so you can choose what to add today.",
      sweetPotato: "Current Variety",
      sweetPotatoDesc: "The gentle flavor and aroma of sweet potato",
      carrot: "Current Variety",
      carrotDesc: "Carrot’s natural color and aroma",
      kabocha: "Current Variety",
      kabochaDesc: "Kabocha’s naturally rich aroma and flavor",
      broccoli: "Upcoming Variety",
      broccoliDesc: "Our next vegetable topper, now in preparation",
      comingSoon: "COMING SOON",
      smartStore: "View in Smart Store",

      whyTitle: "Choose it, mix it, change it up.",
      whyMore: "See our ingredients and how we make them",





      foodHeroTitle: "Good vegetables,<br>made easy to add every day.",
      foodHeroBody: "PETSRO Veggie Topper is made with Korean-grown sweet potato, carrot and kabocha.<br>We steam and slowly dry each vegetable,<br>then prepare it for easy everyday topping.",

      foodCareTitle: "Fresh vegetables are worth serving.<br>Preparing them every time can be a lot.",
      foodCareBody: "We choose Korean-grown sweet potato, carrot and kabocha, then wash, prepare, cook and slowly dry them. When you need them, simply open the jar and sprinkle over the meal.",
      foodCareBridge: "We’ll take care of the vegetable prep.",

      foodIngredientFact1: "Korean-Grown Vegetables",
      foodIngredientFact1Body: "Sweet Potato · Carrot · Kabocha",
      foodIngredientFact2: "Fiber",
      foodIngredientFact2Body: "The vegetables bring their natural fiber along with them.",
      foodIngredientFact3: "No Preservatives Added",
      foodIngredientFact3Body: "No preservatives are added.",

      foodSingleTitle: "Serve one on its own,<br>or mix your favorites.",
      foodSingleBody: "Sweet Potato, Carrot and Kabocha are packed separately, so you can serve one at a time or mix your favorites.",
      foodSweetPotato: "Sweet Potato",
      foodCarrot: "Carrot",
      foodKabocha: "Kabocha",

      foodMadeTitle: "We watch each vegetable,<br>then steam and dry it slowly.",
      foodMadeBody: "After selecting the ingredients, we steam and slowly dry them at low temperature. We finish each batch carefully in a topper form that is easy to sprinkle over meals.",
      foodProcess1: "Ingredient Selection",
      foodProcess2: "Steaming",
      foodProcess3: "Low-Temperature Hot-Air Drying",
      foodProcess4: "Heat Treatment",
      foodProcess5: "Topper Finish",
      foodPatentLabel: "PATENT PENDING",
      foodPatentTitle: "PETSRO Veggie Topper Manufacturing Method — Patent Pending",
      foodPatentNumber: "Korean Patent Application No. 10-2025-0161849",
      foodTextureTitle: "Keeping the vegetable’s color and texture.",
      foodTextureBody: "Small pieces of the vegetable remain visible, so you can still tell what is in the bowl. Mix two or more varieties and their colors and textures come together naturally.",

      foodEverydayTitle: "Ready when you need it.",
      foodEverydayBody: "Open the jar and sprinkle the amount you need. No separate vegetable prep required.",

      foodPhilosophyTitle: "Joy in eating.<br>Care in every choice.",
      foodPhilosophyBody: "PETSRO thinks about both the joy of eating and good ingredients. We want thoughtful food to be easy enough to serve every day.",

      foodCtaProducts: "Explore Products",
      foodCtaShop: "Shop Now",


      storyHeroTitle: "Eat well. Stay healthy.<br>And stay together for a long time.",
      storyHeroBody: "What PETSRO hopes for is simple.<br>Pets enjoying their meals, staying healthy,<br>and sharing many happy years with the people who love them.",
      storyOriginTitle: "It is food they eat every day.<br>We want both joy and good ingredients in the bowl.",
      storyOriginBody1: "Seeing a pet enjoy a meal makes the person serving it happy too. It also makes us pay closer attention to the ingredients that go into each bowl.",
      storyOriginBody2: "PETSRO began with that same feeling. We wanted to make food that brings together the joy of eating and ingredients we feel good about serving.",
      storyJourneyTitle: "From treats<br>to everyday meals.",
      storyJourney1Title: "We started with treats.",
      storyJourney1Body: "Making pet treats taught us to keep thinking carefully about ingredients and preparation.",
      storyJourney2Title: "Then we thought about everyday meals.",
      storyJourney2Body: "We wanted to bring new flavors and ingredients not only to treats, but also to the food dogs eat every day.",
      storyJourney3Title: "We created Veggie Topper.",
      storyJourney3Body: "We prepared Korean-grown sweet potato, carrot and kabocha so they can be added easily to everyday meals.",
      storyNextTitle: "For healthier,<br>happier mealtimes.",
      storyNextBody: "PETSRO will keep thinking about both the joy of eating and good ingredients. Beyond Veggie Topper, we are preparing new foods that can make mealtime more enjoyable.",
      storyClosingSlogan: "More joy in eating. More care in every choice.",
      storyCtaTitle: "Explore more<br>of PETSRO.",
      storyCtaFood: "Our ingredients and process",
      storyCtaProducts: "View products",


      biz2HeroTitle: "Bringing better mealtimes<br>within easier reach.",
      biz2HeroBody: "We welcome retail, distribution, online, pop-up, brand collaboration and international partnership opportunities that can help more pet families discover PETSRO.",
      biz2HeroEmail: "Business Inquiry",
      biz2HeroExplore: "Retail & Collaboration",

      biz2StoreTitle: "PETSRO in retail",
      biz2StoreBody: "We use clear colors, transparent jars and warm packaging so the product is easy to notice and understand on the shelf.",

      biz2Strength1Title: "A vegetable meal topper",
      biz2Strength1Body: "A meal topper made with Korean-grown vegetables and designed to sprinkle easily over food.",
      biz2Strength2Title: "Sweet Potato, Carrot and Kabocha—separate varieties",
      biz2Strength2Body: "Each vegetable is packed separately, making it easy for customers to choose the ingredient they want.",
      biz2Strength3Title: "Transparent jars that show the product",
      biz2Strength3Body: "The different colors and pieces are visible at a glance, helping each variety stand apart.",

      biz2CollabTitle: "From retail to brand collaborations.",
      biz2CollabIntro: "We welcome ideas ranging from retail placement and pop-ups to brand collaborations.",
      biz2Collab1Title: "Retail & Distribution",
      biz2Collab1Body: "We welcome inquiries from pet stores, curated shops, lifestyle retailers, online channels and distribution partners.",
      biz2Collab2Title: "Pop-ups, Events & Brand Collaborations",
      biz2Collab2Body: "We welcome pop-ups, events, content and promotional collaborations that are a good fit for both brands.",
      biz2Collab3Title: "International Distribution",
      biz2Collab3Body: "We also welcome inquiries from overseas buyers and distribution partners interested in introducing PETSRO abroad.",


      biz2ContactTitle: "Have an idea for PETSRO?<br>We would be glad to hear it.",
      biz2ContactBody: "The idea does not have to be fully formed yet.",

      discoverTitle: "Explore more of PETSRO.",
      discoverFood: "What we use and how we make it",
      discoverStory: "How PETSRO began",
      trustPreservatives: "No Preservatives Added",
      whyChoice: "Choose or Mix",
      whyChoiceBody: "Serve one on its own, or combine the vegetables your dog enjoys.",
      whyFlavor: "Different Flavors & Textures",
      whyFlavorBody: "Sweet Potato, Carrot and Kabocha each bring their own flavor, aroma and texture.",
      whyEasy: "Straight onto the Bowl",
      whyEasyBody: "Open the jar and sprinkle the amount you need. No separate vegetable prep required.",
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
        description: "PETSRO는 반려동물의 먹는 즐거움을 고민하는 브랜드입니다. 대표 제품 Veggie Topper는 국내산 야채로 만들어 밥 위에 간편하게 더하는 반려견용 식사 토퍼입니다.",
        ogTitle: "PETSRO 페츠로 | Vegetable Meal Topper",
        ogDescription: "국내산 야채로 만들어 밥 위에 간편하게 더하는 PETSRO Veggie Topper."
      },
      en: {
        title: "PETSRO | Korean Vegetable Meal Topper for Dogs",
        description: "PETSRO makes meal toppers for dogs with Korean-grown vegetables, designed to bring more flavor, texture and variety to everyday meals.",
        ogTitle: "PETSRO | Korean Vegetable Meal Topper for Dogs",
        ogDescription: "Korean-grown vegetable meal toppers made to add flavor, texture and variety to everyday meals."
      }
    },
    ourFood: {
      ko: {
        title: "PETSRO Our Food | 좋은 재료와 정성을 담는 PETSRO의 음식 이야기",
        description: "국내산 고구마·당근·단호박을 골라 찌고 천천히 말려, 매일 밥 위에 간편하게 더할 수 있도록 준비하는 PETSRO의 음식 이야기를 소개합니다.",
        ogTitle: "PETSRO Our Food | 좋은 야채를 매일 챙겨주기 쉽게",
        ogDescription: "국내산 야채를 골라 찌고 천천히 말려, 매일 밥 위에 간편하게 더할 수 있도록 준비합니다."
      },
      en: {
        title: "PETSRO Our Food | Good Ingredients, Thoughtfully Prepared",
        description: "Discover how PETSRO prepares Korean-grown sweet potato, carrot and kabocha as easy everyday meal toppers for dogs.",
        ogTitle: "PETSRO Our Food | Good Ingredients, Thoughtfully Prepared",
        ogDescription: "Korean-grown vegetables, carefully prepared and easy to add to everyday meals."
      }
    },
    ourStory: {
      ko: {
        title: "PETSRO Our Story | 함께하는 시간에서 시작된 반려동물 식품 브랜드",
        description: "반려동물이 건강하고 행복하게 오래 함께할 수 있기를 바라는 마음에서 시작해, 간식과 Veggie Topper를 만들어온 PETSRO의 이야기를 소개합니다.",
        ogTitle: "PETSRO Our Story | 잘 먹고, 건강하게, 오래 함께",
        ogDescription: "잘 먹는 즐거움과 좋은 재료를 함께 생각하며 간식과 Veggie Topper를 만들어온 PETSRO의 이야기."
      },
      en: {
        title: "PETSRO Our Story | A Korean Pet Food Brand Shaped by Everyday Life with Pets",
        description: "PETSRO is a Korean pet food brand built around enjoyable meals, thoughtful ingredients and healthier, happier everyday life with pets.",
        ogTitle: "PETSRO Our Story | Shaped by Everyday Life with Pets",
        ogDescription: "PETSRO began with a simple hope: enjoyable meals, thoughtful ingredients and many happy years together."
      }
    },
    business: {
      ko: {
        title: "PETSRO Business | 입점·유통·브랜드 협업 문의",
        description: "PETSRO는 국내 펫 전문 매장·라이프스타일숍·유통 파트너와의 입점, 유통, 행사 및 브랜드 협업 제안을 기다립니다.",
        ogTitle: "PETSRO Business | 입점·유통·브랜드 협업",
        ogDescription: "PETSRO가 좋은 공간 안에서 자연스럽게 소개될 수 있도록, 입점·유통·행사·브랜드 협업 제안을 기다립니다."
      },
      en: {
        title: "PETSRO Business | Retail, Distribution & Collaboration",
        description: "Explore retail, distribution, event and brand collaboration opportunities with PETSRO, a Korean pet food brand.",
        ogTitle: "PETSRO Business | Retail & Collaboration",
        ogDescription: "Retail, distribution and collaboration opportunities with PETSRO."
      }
    }
  };

  const root = document.documentElement;
  const pageKey =
    document.body.classList.contains("our-food-page")
      ? "ourFood"
      : document.body.classList.contains("story-page")
        ? "ourStory"
        : document.body.classList.contains("business-page")
          ? "business"
          : "home";
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
