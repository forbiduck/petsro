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
      heroBody: "국내산 야채를 먹기 좋게 잘게 만들어<br>밥 위에 가볍게 뿌려주는 Veggie Topper",
      heroExplore: "제품 알아보기",
      heroShop: "구매하기",
      heroBusiness: "비즈니스 문의",

      trustVegetables: "국내산 야채",
      trustMade: "Made in Korea",
      trustPatent: "제조방법 특허출원 중",

      everydayTitle: "같은 밥도,<br>오늘은 조금 다르게.",
      everydayBody: "고구마·당근·단호박 중 오늘 먹이고 싶은 야채를 골라 밥 위에 뿌려주세요.<br>한 가지만 골라도 좋고, 좋아하는 야채끼리 섞어도 좋습니다.",

      productsTitle: "오늘은 어떤 야채를 더할까요?",
      productsIntro: "오늘은 고구마, 내일은 당근. 세 가지를 각각 만들어 원하는 대로 골라주거나 함께 섞어줄 수 있습니다.",
      sweetPotato: "고구마",
      sweetPotatoDesc: "은은한 원물의 맛과 식감",
      carrot: "당근",
      carrotDesc: "선명한 원료의 색과 향",
      kabocha: "단호박",
      kabochaDesc: "단호박 특유의 향과 풍미",
      broccoli: "브로콜리",
      broccoliDesc: "다음으로 준비 중인 야채 토퍼",
      comingSoon: "출시 예정",
      smartStore: "스마트스토어에서 보기",

      whyTitle: "골라주고, 섞어주고, 매일 조금 다르게.",
      whyIntro: "고구마·당근·단호박을 각각 만들었습니다. 한 가지씩 골라주거나 좋아하는 야채끼리 섞어 밥에 새로운 맛과 식감을 더해보세요.",
      whyMore: "재료와 만드는 이야기 보기",
      whyOne: "한 가지씩 골라서",
      whyOneEn: "Choose One",
      whyTwo: "좋아하는 야채끼리 섞어서",
      whyTwoEn: "Mix Your Favorites",
      whyThree: "야채마다 다른 맛과 식감",
      whyThreeEn: "Different Flavors & Textures",
      whyFour: "밥 위에 바로 뿌리기",
      whyFourEn: "Open & Sprinkle",

      processTitle: "야채의 색과 식감이 느껴지도록",
      processBody: "야채의 모양이 조금씩 보이도록 먹기 좋게 잘게 만들어, 밥 위에 간편하게 뿌릴 수 있도록 준비했습니다.",
      processOne: "증숙",
      processTwo: "저온 열풍 건조",
      processThree: "고온 열처리",
      processFour: "잘게 부수기",
      patentLabel: "PATENT PENDING IN KOREA",
      patentTitle: "제품 관련 야채 토퍼 제조방법 특허출원 중",
      patentNumber: "대한민국 특허출원 제10-2025-0161849호",

      expandTitle: "새로운 야채도 하나씩 준비하고 있습니다.",
      expandBody: "고구마·당근·단호박에 이어 브로콜리를 준비하고 있습니다. 앞으로도 먹이고 싶은 야채를 하나씩 고를 수 있도록 새로운 제품을 만들어가겠습니다.",

      koreaTitle: "한국에서 시작한<br>Vegetable Meal Topper",
      koreaBody: "국내산 야채로 시작한 PETSRO Veggie Topper. 지금 제품을 잘 만들고, 다음 제품도 하나씩 준비하고 있습니다.",
      koreaQuote: "From Korean vegetables to more varied mealtimes.",

      businessTitle: "입점·유통·협업 제안을 기다립니다.",
      businessBody: "PETSRO와 함께할 제안이 있다면 편하게 연락 주세요.",
      businessEmail: "비즈니스 문의",
      businessCall: "전화 문의",
      businessPage: "BUSINESS →",

      foodHeroTitle: "좋은 야채를 골라,<br>먹이기 편하게 준비합니다.",
      foodHeroBody: "PETSRO Veggie Topper는 국내산 고구마·당근·단호박으로 만듭니다.<br>야채마다 상태를 살펴 찌고 천천히 말린 뒤,<br>밥 위에 뿌려 먹기 좋은 크기로 잘게 만듭니다.",

      foodCareTitle: "야채를 챙겨주고 싶어도,<br>매번 직접 준비하기는 쉽지 않으니까.",
      foodCareBody: "씻고, 손질하고, 익히고, 보관하는 일까지 미리 준비했습니다. 먹이고 싶은 날 용기를 열어 밥 위에 필요한 만큼 뿌려주면 됩니다.",
      foodCareBridge: "번거로운 야채 준비는 미리 해두었습니다.",

      foodIngredientsTitle: "국내산 고구마, 당근, 단호박으로<br>만듭니다.",
      foodIngredientsBody: "세 가지 야채를 각각 준비해 고유한 색과 향, 식감이 자연스럽게 남도록 만듭니다. 밥 위에 야채 원료와 야채 유래 식이섬유를 간편하게 더해줄 수 있습니다.",
      foodIngredientFact1: "국내산 야채",
      foodIngredientFact1Body: "고구마·당근·단호박 모두 국내산 원료를 사용합니다.",
      foodIngredientFact2: "야채 유래 식이섬유",
      foodIngredientFact2Body: "야채 원료와 함께 식이섬유도 더해줄 수 있습니다.",
      foodIngredientFact3: "보존료 무첨가",
      foodIngredientFact3Body: "보존료를 따로 넣지 않습니다.",

      foodSingleTitle: "하나씩 골라도,<br>좋아하는 조합으로 섞어도.",
      foodSingleBody: "고구마·당근·단호박을 한 통에 섞지 않고 각각 만들었습니다. 오늘은 한 가지만, 다른 날에는 두 가지를 함께. 좋아하는 야채와 조합을 찾아볼 수 있습니다.",
      foodSweetPotato: "고구마",
      foodCarrot: "당근",
      foodKabocha: "단호박",

      foodMadeTitle: "야채 상태를 보며,<br>찌고 천천히 말립니다.",
      foodMadeBody: "원료를 고른 뒤 쪄서 익히고, 낮은 온도에서 천천히 말립니다. 마지막에는 고온으로 한 번 더 마무리한 뒤, 야채의 색과 식감이 남도록 먹기 좋은 크기로 잘게 부숩니다.",
      foodProcess1: "원료 선별",
      foodProcess2: "증숙",
      foodProcess3: "저온 열풍 건조",
      foodProcess4: "고온 열처리",
      foodProcess5: "잘게 부수기",
      foodTextureTitle: "야채의 색과 식감이 느껴지도록.",
      foodTextureBody: "완전히 가루로 만들기보다 야채의 모양이 조금씩 보이도록 잘게 부쉈습니다. 밥 위에 뿌렸을 때 어떤 야채를 먹이는지 눈으로도 보이고, 여러 가지를 섞으면 각각의 색과 식감도 함께 즐길 수 있습니다.",
      foodPatentTitle: "제품 관련 야채 토퍼 제조방법 특허출원 중",
      foodPatentNumber: "대한민국 특허출원 제10-2025-0161849호",

      foodEverydayTitle: "먹이고 싶을 때,<br>밥 위에 바로.",
      foodEverydayBody: "야채를 매번 씻고 손질할 필요 없이 용기를 열어 필요한 만큼 뿌려주세요.",
      foodStep1: "열고",
      foodStep1Body: "필요할 때 용기를 엽니다.",
      foodStep2: "덜고",
      foodStep2Body: "먹일 만큼 가볍게 덜어냅니다.",
      foodStep3: "밥 위에 뿌려주세요",
      foodStep3Body: "밥 위에 가볍게 뿌려줍니다.",

      foodPhilosophyTitle: "먹는 즐거움과 건강을<br>함께 담다.",
      foodPhilosophyBody: "PETSRO는 맛있게 잘 먹는 즐거움과 좋은 재료를 챙겨주고 싶은 마음을 함께 생각합니다. 어렵지 않게 매일 챙길 수 있는 먹거리를 만들고 싶습니다.",
      foodPhilosophyQuote: "잘 먹는 즐거움도, 좋은 재료도.",

      foodCtaTitle: "PETSRO Veggie Topper를 만나보세요.",
      foodCtaProducts: "제품 보기",
      foodCtaShop: "구매하기",
      foodCtaBusiness: "비즈니스 문의 ↗",


      storyHeroTitle: "잘 먹고, 건강하게 지내고,<br>오래 함께했으면 합니다.",
      storyHeroBody: "PETSRO가 바라는 건 단순합니다.<br>반려동물이 매일 맛있게 먹고 건강하게 지내며,<br>보호자와 행복한 시간을 오래 이어가는 것.",
      storyOriginTitle: "매일 먹는 밥이니까,<br>즐거움도 좋은 재료도 놓치고 싶지 않았습니다.",
      storyOriginBody1: "반려동물과 함께 살다 보면 맛있게 잘 먹는 모습만 봐도 기분이 좋아집니다. 동시에 어떤 재료로 만든 음식인지, 좋은 걸 챙겨주고 있는지도 자연스럽게 생각하게 됩니다.",
      storyOriginBody2: "우리도 그랬습니다. 잘 먹는 즐거움은 살리면서 좋은 재료도 함께 챙길 수 있는 먹거리를 직접 만들어보고 싶었습니다.",
      storyOriginQuote: "잘 먹는 즐거움도, 좋은 재료도. 둘 다 놓치고 싶지 않았습니다.",
      storyThinkingTitle: "좋은 먹거리를 만들기 위해,<br>계속 고민하고 직접 해봅니다.",
      storyThinkingIntro: "아이디어가 생기면 직접 만들어보고 먹여봅니다.",
      storyThinkingBody: "맛과 향, 크기와 식감을 여러 가지로 시도해보고 반려견이 어떻게 먹는지 살펴봅니다. 전시회에서 만난 보호자들의 이야기도 귀담아듣습니다. 그렇게 쌓인 경험은 다음 제품을 고민할 때 하나씩 참고합니다.",
      storyJourneyTitle: "처음에는 간식을 만들었습니다.<br>그러다 매일 먹는 밥도 생각하게 됐습니다.",
      storyJourneyIntro: "직접 간식을 만들며 원료를 고르고 준비하는 일을 배웠고, 그 경험은 매일 먹는 밥에 새로운 즐거움을 더하는 Veggie Topper로 이어졌습니다.",
      storyJourney1Title: "간식부터 시작했습니다.",
      storyJourney1Body: "닭안심·오리안심·말고기 간식을 직접 만들며 원료를 고르고 손질하고 말리는 일을 배웠습니다.",
      storyJourney2Title: "매일 먹는 밥으로 눈을 돌렸습니다.",
      storyJourney2Body: "간식뿐 아니라 매일 먹는 밥에도 새로운 맛과 재료를 더해주면 좋겠다고 생각했습니다.",
      storyJourney3Title: "야채 토퍼를 만들었습니다.",
      storyJourney3Body: "국내산 고구마·당근·단호박을 밥 위에 간편하게 더할 수 있도록 Veggie Topper를 개발했습니다.",
      storyJourney4Title: "전시회에서 보호자를 만났습니다.",
      storyJourney4Body: "제품을 직접 보여드리고, 무엇을 궁금해하는지 듣고, 실제로 어떤 점을 좋아하는지도 가까이에서 볼 수 있었습니다.",
      storyJourney5Title: "지금도 다음 먹거리를 고민합니다.",
      storyJourney5Body: "야채 토퍼에 머물지 않고, 반려동물이 더 즐겁게 먹고 좋은 재료도 챙길 수 있는 새로운 제품을 준비하고 있습니다.",
      storyMethodTitle: "작은 관찰을,<br>실제 제품의 변화로.",
      storyMethod1Title: "가까이에서 살핍니다.",
      storyMethod1Body: "함께 지내며 밥을 먹는 모습과 작은 불편을 가까이에서 살핍니다.",
      storyMethod2Title: "생각을 제품으로 만듭니다.",
      storyMethod2Body: "생각에만 머물지 않고 원료와 모양을 직접 제품으로 만들어봅니다.",
      storyMethod3Title: "반응을 듣고 다시 다듬습니다.",
      storyMethod3Body: "직접 보고 들은 반응을 다음 제품과 설명에 반영하며 다시 손봅니다.",
      storyNextTitle: "더 건강하고,<br>더 즐거운 먹는 시간을 위해.",
      storyNextBody: "PETSRO는 앞으로도 맛있게 먹는 즐거움과 좋은 재료를 함께 생각하겠습니다. 반려동물과 오래 함께하는 평범한 일상에 기분 좋은 한 끼를 더할 수 있는 브랜드가 되고 싶습니다.",
      storyNext1: "Vegetable Meal Topper 라인 확대",
      storyNext2: "다양한 식물성 식재료 탐색",
      storyNext3: "매일 먹는 밥을 위한 새로운 제품 개발",
      storyNext4: "새로운 제품과 판매처 준비",
      storyClosingTitle: "함께하는 매일이,<br>PETSRO의 다음을 만듭니다.",
      storyClosingBody: "반려동물 곁에서 시작한 질문을 잊지 않고, 먹는 즐거움과 건강을 함께 생각하는 제품을 한 걸음씩 만들어가겠습니다.",
      storyClosingSlogan: "먹는 즐거움과 건강을 함께 담다.",
      storyCtaTitle: "PETSRO를 더<br>둘러보세요.",
      storyCtaFood: "재료와 만드는 이야기",
      storyCtaProducts: "제품 보기",
      storyCtaBusiness: "입점·협업 문의",


      biz2HeroTitle: "PETSRO가 잘 어울리는 곳을<br>만나고 싶습니다.",
      biz2HeroBody: "입점·유통, 팝업, 브랜드 협업 등 PETSRO와 함께하고 싶은 제안이 있다면 편하게 연락 주세요.",
      biz2HeroEmail: "비즈니스 문의",
      biz2HeroExplore: "입점·협업 안내",

      biz2StoreTitle: "매장에서 만나는 PETSRO",
      biz2StoreBody: "매장에 놓였을 때 제품이 한눈에 들어오도록, 야채별 색과 투명 용기, 패키지의 분위기까지 맞췄습니다.",
      biz2StoreNoteLabel: "매장에서 보이는 PETSRO",
      biz2StoreNote: "펫 전문 매장부터 취향 있는 라이프스타일 공간까지, 제품이 공간을 방해하기보다 자연스럽게 어우러지는 모습을 생각합니다.",

      biz2StrengthsTitle: "제품 자체에서<br>이야기가 시작됩니다.",
      biz2StrengthsIntro: "매장에서 길게 설명하지 않아도 제품의 재료와 쓰임, 서로 다른 라인업이 눈에 들어오도록 구성했습니다.",
      biz2Strength1Title: "야채로 만든 식사 토퍼",
      biz2Strength1Body: "국내산 야채를 먹기 좋게 잘게 만들어 밥 위에 뿌려주는 토퍼입니다.",
      biz2Strength2Title: "고구마·당근·단호박, 각각 따로",
      biz2Strength2Body: "여러 야채를 섞지 않고 한 가지씩 담아, 고객이 원하는 야채를 쉽게 고를 수 있습니다.",
      biz2Strength3Title: "내용물이 바로 보이는 투명 용기",
      biz2Strength3Body: "야채마다 다른 색과 모양이 보여 제품의 차이를 한눈에 알 수 있습니다.",
      biz2Strength4Title: "한 제품에서 끝나지 않는 라인업",
      biz2Strength4Body: "현재 고구마·당근·단호박에 이어 브로콜리 출시를 준비하고 있으며, 새로운 야채와 제품을 계속 고민하고 있습니다.",

      biz2CollabTitle: "입점부터 브랜드 협업까지.",
      biz2CollabIntro: "매장 입점부터 팝업, 브랜드 협업까지 다양한 제안을 받고 있습니다.",
      biz2Collab1Title: "입점 · 유통",
      biz2Collab1Body: "펫 전문 매장, 편집숍, 라이프스타일숍, 온라인몰 등 다양한 판매 채널의 제안을 기다립니다.",
      biz2Collab2Title: "팝업 · 행사 · 브랜드 협업",
      biz2Collab2Body: "팝업과 행사, 콘텐츠와 프로모션 등 브랜드와 잘 맞는 협업 제안을 기다립니다.",
      biz2Collab3Title: "해외 유통",
      biz2Collab3Body: "PETSRO를 해외에 소개할 바이어와 유통 파트너의 문의도 받고 있습니다.",
      biz2Collab4Title: "해외 유통",
      biz2Collab4Body: "PETSRO를 새로운 국가와 고객에게 소개할 해외 바이어 및 유통 파트너의 문의도 받고 있습니다.",

      biz2FitTitle: "제품이 놓이는 공간과,<br>그곳을 찾는 사람까지.",
      biz2FitBody: "PETSRO는 많은 곳에 들어가는 것보다, 제품과 공간이 잘 어울리고 그곳을 찾는 고객에게 자연스럽게 소개되는 관계를 더 중요하게 생각합니다.",
      biz2FitQuote: "PETSRO와 잘 어울리는 곳이라면, 먼저 편하게 이야기해 주세요.",

      biz2ContactTitle: "PETSRO와 함께할 제안이 있다면,<br>편하게 연락 주세요.",
      biz2ContactBody: "아직 구체적이지 않아도 괜찮습니다.",

      discoverTitle: "PETSRO를 더 알고 싶다면.",
      discoverFood: "어떤 재료로, 어떻게 만드는지",
      discoverStory: "PETSRO는 어떻게 시작했는지",
      storyThinkingIndex: "생각하고 → 만들어보고 → 살펴보고 → 다음을 고민합니다",
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
      heroBody: "Made with Korean-grown vegetables,<br>prepared to sprinkle easily over your dog’s meal.",
      heroExplore: "Explore Products",
      heroShop: "Shop Now",
      heroBusiness: "Business Inquiry",

      trustVegetables: "Korean-Grown Vegetables",
      trustMade: "Made in Korea",
      trustPatent: "Patent Pending in Korea",

      everydayTitle: "Same bowl.<br>A little something different today.",
      everydayBody: "Choose Sweet Potato, Carrot or Kabocha for today’s bowl.<br>Serve one on its own, or mix the vegetables your dog enjoys.",

      productsTitle: "Which vegetable today?",
      productsIntro: "Sweet Potato today, Carrot tomorrow—or mix them together. Each vegetable comes separately, so every bowl can be a little different.",
      sweetPotato: "Current Variety",
      sweetPotatoDesc: "A gentle whole-ingredient taste and texture",
      carrot: "Current Variety",
      carrotDesc: "Distinctive natural color and aroma",
      kabocha: "Current Variety",
      kabochaDesc: "Kabocha’s naturally rich aroma and flavor",
      broccoli: "Upcoming Variety",
      broccoliDesc: "Our next vegetable topper, now in preparation",
      comingSoon: "COMING SOON",
      smartStore: "View in Smart Store",

      whyTitle: "Choose it, mix it, change it up.",
      whyIntro: "Sweet Potato, Carrot and Kabocha are made separately, so you can serve one at a time or mix your favorites for a new flavor and texture.",
      whyMore: "See our ingredients and how we make them",
      whyOne: "Choose One",
      whyOneEn: "Choose One",
      whyTwo: "Mix Your Favorites",
      whyTwoEn: "Mix Your Favorites",
      whyThree: "Different Flavors & Textures",
      whyThreeEn: "Different Flavors & Textures",
      whyFour: "Open & Sprinkle",
      whyFourEn: "Open & Sprinkle",

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

      businessTitle: "Retail, distribution and collaboration inquiries are welcome.",
      businessBody: "If PETSRO feels right for what you are building, we would be glad to hear from you.",
      businessEmail: "Business Inquiry",
      businessCall: "Call Us",
      businessPage: "BUSINESS →",

      foodHeroTitle: "Good vegetables,<br>prepared for easy serving.",
      foodHeroBody: "PETSRO Veggie Topper is made with Korean-grown sweet potato, carrot and kabocha.<br>We steam and slowly dry each vegetable, then prepare it in easy-to-serve pieces for sprinkling over meals.",

      foodCareTitle: "Fresh vegetables are worth serving.<br>Preparing them every time can be a lot.",
      foodCareBody: "We take care of the washing, trimming, cooking and storing ahead of time. When you want to serve vegetables, simply open the jar and sprinkle the amount you need.",
      foodCareBridge: "The vegetable prep is already done.",

      foodIngredientsTitle: "Made with Korean-grown<br>sweet potato, carrot and kabocha.",
      foodIngredientsBody: "Each vegetable is prepared separately so its own color, aroma and texture can remain visible. It is an easy way to add vegetable ingredients and vegetable-derived fiber to the bowl.",
      foodIngredientFact1: "Korean-Grown Vegetables",
      foodIngredientFact1Body: "Sweet potato, carrot and kabocha are all sourced in Korea.",
      foodIngredientFact2: "Vegetable-Derived Fiber",
      foodIngredientFact2Body: "Adds vegetable ingredients along with vegetable-derived fiber.",
      foodIngredientFact3: "No Added Preservatives",
      foodIngredientFact3Body: "No preservatives are added.",

      foodSingleTitle: "Serve one on its own,<br>or mix your favorites.",
      foodSingleBody: "Sweet Potato, Carrot and Kabocha are made separately rather than mixed into one jar. Serve one today, two tomorrow, and find the combinations your dog enjoys.",
      foodSweetPotato: "Sweet Potato",
      foodCarrot: "Carrot",
      foodKabocha: "Kabocha",

      foodMadeTitle: "We watch each vegetable,<br>then steam and dry it slowly.",
      foodMadeBody: "After selecting the ingredients, we steam and slowly dry them at low temperature. We finish with a final high-heat step, then break the vegetables into easy-to-serve pieces while keeping some of their natural color and texture.",
      foodProcess1: "Ingredient Selection",
      foodProcess2: "Steaming",
      foodProcess3: "Low-Temperature Hot-Air Drying",
      foodProcess4: "Heat Treatment",
      foodProcess5: "Coarse Crumbling",
      foodTextureTitle: "So the vegetable still looks and feels like itself.",
      foodTextureBody: "Rather than turning everything into a completely fine powder, we leave small visible pieces. You can see which vegetable is in the bowl, and mixed varieties keep their own colors and textures.",
      foodPatentTitle: "Manufacturing Method Patent Pending in Korea",
      foodPatentNumber: "Korean Patent Application No. 10-2025-0161849",

      foodEverydayTitle: "Ready when you want it.<br>Straight onto the bowl.",
      foodEverydayBody: "No need to wash and trim vegetables each time. Open the jar and sprinkle the amount you need.",
      foodStep1: "Open",
      foodStep1Body: "Open the container when you need it.",
      foodStep2: "Portion",
      foodStep2Body: "Take out the amount you want to use.",
      foodStep3: "Sprinkle over the meal",
      foodStep3Body: "Add it over the regular dog food.",

      foodPhilosophyTitle: "Joy in eating.<br>Care in every choice.",
      foodPhilosophyBody: "PETSRO cares about both the joy of eating and the ingredients you want to serve. We want good food to be easy enough to enjoy every day.",
      foodPhilosophyQuote: "Enjoyable meals. Thoughtful ingredients.",

      foodCtaTitle: "Explore PETSRO Veggie Topper",
      foodCtaProducts: "Explore Products",
      foodCtaShop: "Shop Now",
      foodCtaBusiness: "Business Inquiry ↗",


      storyHeroTitle: "Eat well. Stay healthy.<br>And stay together for a long time.",
      storyHeroBody: "What PETSRO hopes for is simple.<br>Pets enjoying their meals, staying healthy,<br>and sharing many happy years with the people who love them.",
      storyOriginTitle: "It is food they eat every day.<br>We want both joy and good ingredients in the bowl.",
      storyOriginBody1: "Living with pets, it is hard not to smile when they enjoy their food. At the same time, you start paying closer attention to the ingredients you choose for them.",
      storyOriginBody2: "We felt the same. We wanted to make food that could bring together the pleasure of eating and ingredients we felt good about serving.",
      storyOriginQuote: "Enjoyable meals and good ingredients—we never wanted to choose between the two.",
      storyThinkingTitle: "We keep thinking,<br>testing and making things ourselves.",
      storyThinkingIntro: "When we have an idea, we make it and try it with our own pets.",
      storyThinkingBody: "We try different flavors, aromas, sizes and textures and watch how dogs eat them. We also listen closely to pet parents we meet at shows. What we learn becomes part of how we think about the next product.",
      storyJourneyTitle: "We started with treats.<br>Then we began thinking about everyday meals.",
      storyJourneyIntro: "Making treats taught us how to choose and prepare ingredients. That experience eventually led to Veggie Topper, made to bring something new to everyday meals.",
      storyJourney1Title: "We started with treats.",
      storyJourney1Body: "We made chicken tenderloin, duck tenderloin and horse meat treats ourselves, learning how to select, prepare and dry each ingredient.",
      storyJourney2Title: "Then we looked at everyday meals.",
      storyJourney2Body: "We wanted to bring new flavors and ingredients not only to treats, but also to the food dogs eat every day.",
      storyJourney3Title: "We made Veggie Topper.",
      storyJourney3Body: "We developed Veggie Topper with Korean-grown sweet potato, carrot and kabocha, prepared to sprinkle easily over meals.",
      storyJourney4Title: "We met pet parents at pet shows.",
      storyJourney4Body: "At pet shows, we could show the product in person, hear what pet parents wanted to know, and see what they responded to most.",
      storyJourney5Title: "We are still thinking about what comes next.",
      storyJourney5Body: "Veggie Topper is only one part of the story. We are preparing new products that can make mealtime more enjoyable while keeping thoughtful ingredients in mind.",
      storyMethodTitle: "Small observations.<br>Real product improvements.",
      storyMethod1Title: "We observe closely.",
      storyMethod1Body: "Living with pets keeps us close to the small frictions and changing needs around everyday meals.",
      storyMethod2Title: "We turn ideas into products.",
      storyMethod2Body: "We move beyond concepts and test ingredients, formats and ways of using them in real products.",
      storyMethod3Title: "We listen and refine.",
      storyMethod3Body: "What we see and hear becomes input for the next version of the product and the way we communicate it.",
      storyNextTitle: "For healthier,<br>happier mealtimes.",
      storyNextBody: "PETSRO will continue thinking about both the pleasure of eating and the ingredients that go into the bowl. We hope to add a small bit of joy to the everyday life pets and their people share.",
      storyNext1: "Expand the Vegetable Meal Topper line",
      storyNext2: "Explore a wider range of plant-based ingredients",
      storyNext3: "Develop new products for everyday mealtimes",
      storyNext4: "Build new connections with partners in Korea and abroad",
      storyClosingTitle: "Every day together<br>shapes what PETSRO makes next.",
      storyClosingBody: "We will keep the questions that began beside our pets close to us as we make products that consider both the joy of eating and thoughtful everyday choices.",
      storyClosingSlogan: "More joy in eating. More care in every choice.",
      storyCtaTitle: "Explore more<br>of PETSRO.",
      storyCtaFood: "Our ingredients and process",
      storyCtaProducts: "View products",
      storyCtaBusiness: "Retail & collaboration",


      biz2HeroTitle: "We would like to meet places<br>where PETSRO feels at home.",
      biz2HeroBody: "We welcome retail, distribution, pop-up and brand collaboration ideas that feel right for PETSRO.",
      biz2HeroEmail: "Business Inquiry",
      biz2HeroExplore: "Retail & Collaboration",

      biz2StoreTitle: "PETSRO in retail",
      biz2StoreBody: "We use clear colors, transparent jars and warm packaging so the product is easy to notice and understand on the shelf.",
      biz2StoreNoteLabel: "PETSRO in retail",
      biz2StoreNote: "From specialist pet stores to curated lifestyle spaces, we want the product to feel considered, easy to understand and at home in its surroundings.",

      biz2StrengthsTitle: "The product tells<br>its own story.",
      biz2StrengthsIntro: "The ingredient, use and differences between varieties are designed to be easy to notice without a long explanation.",
      biz2Strength1Title: "A vegetable meal topper",
      biz2Strength1Body: "A topper made with Korean-grown vegetables in small pieces that are easy to sprinkle over food.",
      biz2Strength2Title: "Sweet Potato, Carrot and Kabocha—separate varieties",
      biz2Strength2Body: "Each vegetable is packed separately, making it easy for customers to choose the ingredient they want.",
      biz2Strength3Title: "Transparent jars that show the product",
      biz2Strength3Body: "The different colors and pieces are visible at a glance, helping each variety stand apart.",
      biz2Strength4Title: "A line designed to keep growing",
      biz2Strength4Body: "Broccoli is being prepared as the next variety, with more vegetable ingredients and future product ideas under development.",

      biz2CollabTitle: "From retail to brand collaborations.",
      biz2CollabIntro: "We welcome ideas ranging from retail placement and pop-ups to brand collaborations.",
      biz2Collab1Title: "Retail & Distribution",
      biz2Collab1Body: "We welcome inquiries from pet stores, curated shops, lifestyle retailers, online channels and distribution partners.",
      biz2Collab2Title: "Pop-ups, Events & Brand Collaborations",
      biz2Collab2Body: "We welcome pop-ups, events, content and promotional collaborations that are a good fit for both brands.",
      biz2Collab3Title: "International Distribution",
      biz2Collab3Body: "We also welcome inquiries from overseas buyers and distribution partners interested in introducing PETSRO abroad.",
      biz2Collab4Title: "International Distribution",
      biz2Collab4Body: "We also welcome inquiries from overseas buyers and distribution partners interested in introducing PETSRO to new markets.",

      biz2FitTitle: "We think about the space,<br>and the people who walk into it.",
      biz2FitBody: "For us, a good retail relationship is not about being everywhere. It is about finding places where the product, the space and the customer make sense together.",
      biz2FitQuote: "If PETSRO feels right for your space, we would be glad to hear from you.",

      biz2ContactTitle: "Have an idea for PETSRO?<br>We would be glad to hear it.",
      biz2ContactBody: "The idea does not have to be fully formed yet.",

      discoverTitle: "Explore more of PETSRO.",
      discoverFood: "What we use and how we make it",
      discoverStory: "How PETSRO began",
      storyThinkingIndex: "THINK → MAKE → WATCH → KEEP EXPLORING",
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
        description: "PETSRO는 반려동물의 먹는 즐거움을 고민하는 브랜드입니다. 대표 제품 Veggie Topper는 국내산 야채를 먹기 좋게 잘게 만들어 밥 위에 간편하게 뿌려주는 반려견용 토퍼입니다.",
        ogTitle: "PETSRO 페츠로 | Vegetable Meal Topper",
        ogDescription: "국내산 야채를 먹기 좋게 잘게 만들어 밥 위에 간편하게 뿌려주는 PETSRO Veggie Topper."
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
        description: "국내산 고구마·당근·단호박을 골라 찌고 천천히 말린 뒤, 밥 위에 뿌려 먹기 좋게 준비하는 PETSRO의 음식 이야기를 소개합니다.",
        ogTitle: "PETSRO Our Food | 좋은 재료, 정성스러운 과정",
        ogDescription: "좋은 재료를 고르고, 정성스럽게 다루고, 매일 더하기 좋은 형태로 만드는 PETSRO의 기준을 소개합니다."
      },
      en: {
        title: "PETSRO Our Food | Good Ingredients, Thoughtfully Prepared",
        description: "Discover how PETSRO turns Korean-grown vegetables into everyday meal toppers through thoughtful preparation, distinctive texture and easy everyday use.",
        ogTitle: "PETSRO Our Food | Good Ingredients, Thoughtfully Prepared",
        ogDescription: "Good ingredients, thoughtful preparation and an easier way to bring vegetables into everyday mealtimes."
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
        description: "PETSRO is a Korean pet food brand shaped by everyday life with pets, hands-on product development and continuous refinement.",
        ogTitle: "PETSRO Our Story | Shaped by Everyday Life with Pets",
        ogDescription: "Everyday life with pets shaped the questions, products and standards behind PETSRO."
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
