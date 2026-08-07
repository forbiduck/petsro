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
      heroBody: "국내산 야채를 작은 입자로 만들어<br>밥 위에 가볍게 뿌려주는 Veggie Topper",
      heroExplore: "제품 알아보기",
      heroShop: "구매하기",
      heroBusiness: "비즈니스 문의",

      trustVegetables: "국내산 야채",
      trustMade: "Made in Korea",
      trustPatent: "제조방법 특허출원 중",

      everydayTitle: "같은 밥도,<br>오늘은 조금 다르게.",
      everydayBody: "고구마·당근·단호박 중 원하는 야채를 골라 밥 위에 필요한 만큼 뿌려주세요.<br>매번 야채를 손질할 필요 없이 맛과 향, 식감에 작은 변화를 더해보세요.",

      productsTitle: "오늘은 어떤 야채를 더할까요?",
      productsIntro: "고구마·당근·단호박을 한 가지씩 담았습니다. 오늘 먹이고 싶은 야채를 골라 필요한 만큼 뿌려주세요.",
      sweetPotato: "고구마",
      sweetPotatoDesc: "은은한 원물의 맛과 식감",
      carrot: "당근",
      carrotDesc: "선명한 원료의 색과 향",
      kabocha: "단호박",
      kabochaDesc: "단호박 특유의 풍미와 입자감",
      broccoli: "브로콜리",
      broccoliDesc: "다음으로 준비 중인 야채 토퍼",
      comingSoon: "출시 예정",
      smartStore: "스마트스토어에서 보기",

      whyTitle: "한 통에 한 가지 야채, 필요한 만큼만.",
      whyIntro: "국내산 야채를 고운 가루가 아닌 작은 입자로 만들어, 밥 위에 뿌리기 쉽게 담았습니다.",
      whyMore: "재료와 만드는 과정 보기",
      whyOne: "국내산 야채",
      whyOneEn: "Korean-Grown Vegetables",
      whyTwo: "한 통에 한 가지 야채",
      whyTwoEn: "One Vegetable at a Time",
      whyThree: "야채가 보이는 작은 입자",
      whyThreeEn: "Visible Small-Particle Texture",
      whyFour: "필요한 만큼만",
      whyFourEn: "Easy Everyday Topping",

      processTitle: "고운 가루가 아닌,<br>야채가 보이는 작은 입자",
      processBody: "크기가 다른 작은 입자가 자연스럽게 섞인 형태로 가공해, 실제 야채 원료의 모습을 확인하면서 사료 위에는 간편하게 뿌릴 수 있도록 만들었습니다.",
      processOne: "증숙",
      processTwo: "저온 열풍 건조",
      processThree: "고온 열처리",
      processFour: "작은 입자화",
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

      foodHeroTitle: "좋은 재료를 고르고,<br>먹기 좋게 만듭니다.",
      foodHeroBody: "반려견에게 먹이는 음식이니까,<br>고구마·당근·단호박처럼 익숙한 국내산 야채부터 골랐습니다.<br>야채마다 다른 맛과 향, 색과 식감을 살피며 작은 입자로 만듭니다.",

      foodCareTitle: "좋은 걸 챙겨주고 싶어도,<br>매일 직접 준비하기는 쉽지 않습니다.",
      foodCareBody: "야채를 고르고, 씻고, 손질하고, 익히는 일은 생각보다 손이 많이 갑니다. PETSRO는 먹이고 싶은 야채를 필요한 만큼 바로 꺼내 쓸 수 있게 만들었습니다.",
      foodCareBridge: "매일 준비하는 수고는 조금 덜었습니다.",

      foodIngredientsTitle: "고구마, 당근, 단호박.<br>익숙한 야채로 만듭니다.",
      foodIngredientsBody: "PETSRO는 국내산 야채를 사용합니다. 야채마다 다른 색과 향, 식감이 제품에도 그대로 드러납니다. 밥 위에 야채 원료와 야채 유래 식이섬유를 간편하게 더해줍니다.",
      foodIngredientFact1: "국내산 야채",
      foodIngredientFact1Body: "고구마·당근·단호박 모두 국내산 원료를 사용합니다.",
      foodIngredientFact2: "식물성 식재료",
      foodIngredientFact2Body: "밥 위에 야채 원료와 야채 유래 식이섬유를 더합니다.",
      foodIngredientFact3: "보존료 무첨가",
      foodIngredientFact3Body: "보존료를 따로 넣지 않습니다.",

      foodSingleTitle: "한 통에는,<br>한 가지 야채만.",
      foodSingleBody: "여러 야채를 한꺼번에 섞지 않았습니다. 고구마·당근·단호박을 각각 만들어, 오늘 먹이고 싶은 야채를 골라줄 수 있습니다.",
      foodSweetPotato: "고구마",
      foodCarrot: "당근",
      foodKabocha: "단호박",

      foodMadeTitle: "야채마다 상태를 살피며<br>찌고, 말리고, 열처리합니다.",
      foodMadeBody: "원료를 고른 뒤 증숙하고, 낮은 온도에서 천천히 열풍 건조한 다음 고온으로 열처리합니다. 마지막에는 너무 곱게 갈지 않고 야채의 색과 모양이 보이는 작은 입자로 만듭니다.",
      foodProcess1: "원료 선별",
      foodProcess2: "증숙",
      foodProcess3: "저온 열풍 건조",
      foodProcess4: "고온 열처리",
      foodProcess5: "작은 입자화",
      foodTextureTitle: "고운 가루가 아니라, 야채가 보이는 작은 입자로.",
      foodTextureBody: "크기가 조금씩 다른 입자가 자연스럽게 섞여 있습니다. 밥 위에 뿌리기 쉽고, 어떤 야채인지 눈으로도 보입니다.",
      foodPatentTitle: "제품 관련 야채 토퍼 제조방법 특허출원 중",
      foodPatentNumber: "대한민국 특허출원 제10-2025-0161849호",

      foodEverydayTitle: "정성은 남기고,<br>준비는 가볍게.",
      foodEverydayBody: "매번 야채를 씻고 손질하고 익힐 필요 없이, 먹일 만큼 덜어 밥 위에 뿌려주세요.",
      foodStep1: "열고",
      foodStep1Body: "필요할 때 용기를 엽니다.",
      foodStep2: "덜고",
      foodStep2Body: "먹일 만큼 가볍게 덜어냅니다.",
      foodStep3: "밥 위에 뿌려주세요",
      foodStep3Body: "밥 위에 가볍게 뿌려줍니다.",

      foodPhilosophyTitle: "먹는 즐거움과 건강을<br>함께 담다.",
      foodPhilosophyBody: "잘 먹는 즐거움도, 좋은 재료를 챙겨주고 싶은 마음도 놓치고 싶지 않았습니다. 그래서 재료를 고르는 일부터 밥 위에 뿌리기 쉬운 형태까지 하나씩 챙겼습니다.",
      foodPhilosophyQuote: "좋은 재료로, 매일 챙겨주기 쉽게.",

      foodCtaTitle: "PETSRO Veggie Topper를 만나보세요.",
      foodCtaProducts: "제품 보기",
      foodCtaShop: "구매하기",
      foodCtaBusiness: "비즈니스 문의 ↗",


      storyHeroTitle: "매일 밥을 챙기다 보니,<br>먹는 것도 더 많이 고민하게 됐습니다.",
      storyHeroBody: "잘 먹는지 보고, 어떤 걸 좋아하는지 살피고,<br>무엇을 먹이면 좋을지 생각하는 일.<br>PETSRO는 반려동물과 함께 지내는 평범한 하루에서 시작했습니다.",
      storyOriginTitle: "잘 먹는 모습이 좋았습니다.<br>그래서 무엇을 먹이는지도 더 많이 생각했습니다.",
      storyOriginBody1: "밥을 챙기고, 간식을 고르고, 잘 먹는지 보는 건 반려동물과 사는 사람에게 익숙한 일입니다.",
      storyOriginBody2: "그렇게 매일 챙기다 보니 ‘잘 먹는 것’만큼 ‘무엇을 먹는지’도 중요해졌습니다. 직접 먹거리를 만들기 시작한 이유도 거기에 있습니다.",
      storyOriginQuote: "처음부터 거창한 계획이 있었던 건 아닙니다. 매일 챙겨 먹이다 보니 자연스럽게 시작됐습니다.",
      storyThinkingTitle: "직접 만들어보고,<br>반응을 보며 고칩니다.",
      storyThinkingIntro: "제품은 한 번에 완성되지 않았습니다.",
      storyThinkingBody: "생각만 하지 않고 직접 만들어봅니다. 반려견의 반응을 보고, 보호자에게 들은 이야기도 기록합니다. 바꿀 게 보이면 제품도 설명도 다시 손봅니다.",
      storyJourneyTitle: "간식에서 시작해,<br>매일 먹는 밥까지.",
      storyJourneyIntro: "간식을 만들며 원료와 공정을 배웠고, 그다음에는 매일 먹는 밥에 무엇을 더하면 좋을지 고민했습니다. 그렇게 Veggie Topper가 나왔습니다.",
      storyJourney1Title: "간식부터 직접 만들었습니다.",
      storyJourney1Body: "원료를 고르고 손질하고 건조하면서, 작은 간식 하나도 어떻게 만드느냐에 따라 달라진다는 걸 배웠습니다.",
      storyJourney2Title: "매일 먹는 밥도 보기 시작했습니다.",
      storyJourney2Body: "간식뿐 아니라 매일 먹는 밥에도 맛과 재료를 다양하게 더할 수 있으면 좋겠다고 생각했습니다.",
      storyJourney3Title: "야채 토퍼를 만들었습니다.",
      storyJourney3Body: "국내산 고구마·당근·단호박을 작은 입자로 만들어 밥 위에 뿌려주는 Veggie Topper를 개발했습니다.",
      storyJourney4Title: "전시회에서 보호자를 만났습니다.",
      storyJourney4Body: "직접 제품을 보여드리고, 어떤 점을 궁금해하는지 듣고, 예상하지 못했던 반응도 배웠습니다.",
      storyJourney5Title: "지금도 다음 제품을 준비합니다.",
      storyJourney5Body: "야채 토퍼에서 끝내지 않고, 먹는 시간을 더 즐겁게 만들 새로운 재료와 제품을 계속 고민하고 있습니다.",
      storyMethodTitle: "작은 관찰을,<br>실제 제품의 변화로.",
      storyMethod1Title: "가까이에서 살핍니다.",
      storyMethod1Body: "함께 지내며 밥을 먹는 모습과 작은 불편을 가까이에서 살핍니다.",
      storyMethod2Title: "생각을 제품으로 만듭니다.",
      storyMethod2Body: "생각에만 머물지 않고 원료와 모양을 직접 제품으로 만들어봅니다.",
      storyMethod3Title: "반응을 듣고 다시 다듬습니다.",
      storyMethod3Body: "직접 보고 들은 반응을 다음 제품과 설명에 반영하며 다시 손봅니다.",
      storyNextTitle: "지금도 다음 제품을<br>준비하고 있습니다.",
      storyNextBody: "지금 제품을 더 다듬는 일도, 새로운 제품을 준비하는 일도 계속하고 있습니다. 잘 먹는 즐거움과 좋은 재료를 함께 생각하며 PETSRO다운 먹거리를 하나씩 만들어가겠습니다.",
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
      biz2Strength1Body: "국내산 야채를 작은 입자로 만들어 밥 위에 뿌려주는 토퍼입니다.",
      biz2Strength2Title: "고구마·당근·단호박, 각각 따로",
      biz2Strength2Body: "여러 야채를 섞지 않고 한 가지씩 담아, 고객이 원하는 야채를 쉽게 고를 수 있습니다.",
      biz2Strength3Title: "내용물이 바로 보이는 투명 용기",
      biz2Strength3Body: "야채마다 다른 색과 입자가 보여 제품의 차이를 한눈에 알 수 있습니다.",
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
      storyThinkingIndex: "직접 만들고 → 보고 → 듣고 → 고칩니다",
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
      heroBody: "Our Veggie Topper is made with Korean-grown vegetables<br>in small pieces that are easy to sprinkle over your dog’s food.",
      heroExplore: "Explore Products",
      heroShop: "Shop Now",
      heroBusiness: "Business Inquiry",

      trustVegetables: "Korean-Grown Vegetables",
      trustMade: "Made in Korea",
      trustPatent: "Patent Pending in Korea",

      everydayTitle: "Same bowl.<br>A little something different today.",
      everydayBody: "Choose Sweet Potato, Carrot or Kabocha and sprinkle just what you need over the meal.<br>No chopping or cooking—just an easy way to add a new flavor, aroma and texture.",

      productsTitle: "Which vegetable today?",
      productsIntro: "Each variety is made with one vegetable, so you can choose Sweet Potato, Carrot or Kabocha and sprinkle just what you need.",
      sweetPotato: "Current Variety",
      sweetPotatoDesc: "A gentle whole-ingredient taste and texture",
      carrot: "Current Variety",
      carrotDesc: "Distinctive natural color and aroma",
      kabocha: "Current Variety",
      kabochaDesc: "Characteristic kabocha flavor and texture",
      broccoli: "Upcoming Variety",
      broccoliDesc: "Our next vegetable topper, now in preparation",
      comingSoon: "COMING SOON",
      smartStore: "View in Smart Store",

      whyTitle: "One vegetable at a time. Just what you need.",
      whyIntro: "Korean-grown vegetables are made into small, visible pieces that are easy to sprinkle over food.",
      whyMore: "See our ingredients and how we make it",
      whyOne: "Korean-Grown Vegetables",
      whyOneEn: "Korean-Grown Vegetables",
      whyTwo: "One Vegetable per Jar",
      whyTwoEn: "One Vegetable at a Time",
      whyThree: "Visible Small-Particle Texture",
      whyThreeEn: "Visible Small-Particle Texture",
      whyFour: "Sprinkle Just What You Need",
      whyFourEn: "Easy Everyday Topping",

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

      foodHeroTitle: "We choose good ingredients<br>and make them easy to serve.",
      foodHeroBody: "Because it is food for dogs, we start with familiar Korean-grown vegetables such as sweet potato, carrot and kabocha.<br>We pay attention to each ingredient’s flavor, aroma, color and texture, then turn it into small sprinkle-ready pieces.",

      foodCareTitle: "Good food takes time.<br>Preparing it every day does too.",
      foodCareBody: "Choosing, washing, trimming and cooking vegetables takes time. PETSRO makes it easier to reach for the vegetable you want and serve just the amount you need.",
      foodCareBridge: "Less prep, while keeping the care.",

      foodIngredientsTitle: "Sweet potato, carrot, kabocha.<br>Familiar vegetables, simply made.",
      foodIngredientsBody: "PETSRO uses Korean-grown vegetables. Each vegetable keeps its own color, aroma and texture in the finished product, bringing vegetable ingredients and vegetable-derived fiber to the bowl.",
      foodIngredientFact1: "Korean-Grown Vegetables",
      foodIngredientFact1Body: "Sweet potato, carrot and kabocha are all sourced in Korea.",
      foodIngredientFact2: "Plant-Based Ingredients",
      foodIngredientFact2Body: "Adds vegetable ingredients and vegetable-derived fiber to the meal.",
      foodIngredientFact3: "No Added Preservatives",
      foodIngredientFact3Body: "No preservatives are added.",

      foodSingleTitle: "One vegetable<br>in each jar.",
      foodSingleBody: "We keep the vegetables separate rather than mixing them together, so you can choose Sweet Potato, Carrot or Kabocha for the day.",
      foodSweetPotato: "Sweet Potato",
      foodCarrot: "Carrot",
      foodKabocha: "Kabocha",

      foodMadeTitle: "We steam, dry and heat-treat<br>each vegetable with care.",
      foodMadeBody: "After selecting the ingredients, we steam them, dry them slowly with low-temperature hot air, and apply heat treatment. We finish with small pieces rather than grinding everything into a fine powder.",
      foodProcess1: "Ingredient Selection",
      foodProcess2: "Steaming",
      foodProcess3: "Low-Temperature Hot-Air Drying",
      foodProcess4: "Heat Treatment",
      foodProcess5: "Small-Particle Processing",
      foodTextureTitle: "Not a fine powder—small pieces you can still see.",
      foodTextureBody: "The pieces naturally vary a little in size. They are easy to sprinkle over food, while the vegetable remains visible.",
      foodPatentTitle: "Manufacturing Method Patent Pending in Korea",
      foodPatentNumber: "Korean Patent Application No. 10-2025-0161849",

      foodEverydayTitle: "Keep the care.<br>Make the routine easier.",
      foodEverydayBody: "No need to wash, trim and cook vegetables every time. Scoop out what you need and sprinkle it over the meal.",
      foodStep1: "Open",
      foodStep1Body: "Open the container when you need it.",
      foodStep2: "Portion",
      foodStep2Body: "Take out the amount you want to use.",
      foodStep3: "Sprinkle over the meal",
      foodStep3Body: "Add it over the regular dog food.",

      foodPhilosophyTitle: "Joy in eating.<br>Care in every choice.",
      foodPhilosophyBody: "We care about both the joy of eating and the ingredients you choose to serve. That is why we pay attention to everything from ingredient selection to a form that is easy to use every day.",
      foodPhilosophyQuote: "Good ingredients, made easier to serve.",

      foodCtaTitle: "Explore PETSRO Veggie Topper",
      foodCtaProducts: "Explore Products",
      foodCtaShop: "Shop Now",
      foodCtaBusiness: "Business Inquiry ↗",


      storyHeroTitle: "Caring for every meal<br>made us think harder about what goes into it.",
      storyHeroBody: "Watching what they enjoy, noticing how they eat, and thinking about what to serve next.<br>PETSRO began in the ordinary routines of living with pets.",
      storyOriginTitle: "We loved seeing them enjoy their food.<br>So we started thinking more about what we were feeding them.",
      storyOriginBody1: "Serving meals, choosing treats and watching how they eat are familiar parts of life with pets.",
      storyOriginBody2: "Over time, what they ate began to matter just as much as how well they ate. That is what led us to start making pet food ourselves.",
      storyOriginQuote: "There was no grand plan at the beginning. It grew naturally from caring for their meals every day.",
      storyThinkingTitle: "We make it,<br>watch the response, and refine it.",
      storyThinkingIntro: "Products do not come together all at once.",
      storyThinkingBody: "We make ideas real, watch how pets respond, and listen to what pet parents tell us. When something can be better, we go back and work on both the product and the way we explain it.",
      storyJourneyTitle: "From treats<br>to everyday meals.",
      storyJourneyIntro: "Making treats taught us about ingredients and process. Then we began thinking about what else could make everyday meals more interesting. That led to Veggie Topper.",
      storyJourney1Title: "We started by making treats.",
      storyJourney1Body: "Selecting, preparing and drying ingredients taught us how much even a small treat can change depending on how it is made.",
      storyJourney2Title: "Then we looked at everyday meals.",
      storyJourney2Body: "We wanted to bring more variety in flavor and ingredients to the food dogs eat every day.",
      storyJourney3Title: "We made Veggie Topper.",
      storyJourney3Body: "We developed Veggie Topper using Korean-grown sweet potato, carrot and kabocha in small pieces made to sprinkle over food.",
      storyJourney4Title: "We met pet parents at pet shows.",
      storyJourney4Body: "We showed the product in person, heard what people wanted to know, and learned from reactions we had not expected.",
      storyJourney5Title: "We are already working on what comes next.",
      storyJourney5Body: "Veggie Topper is not the end. We continue exploring new ingredients and products that can make mealtime more enjoyable.",
      storyMethodTitle: "Small observations.<br>Real product improvements.",
      storyMethod1Title: "We observe closely.",
      storyMethod1Body: "Living with pets keeps us close to the small frictions and changing needs around everyday meals.",
      storyMethod2Title: "We turn ideas into products.",
      storyMethod2Body: "We move beyond concepts and test ingredients, formats and ways of using them in real products.",
      storyMethod3Title: "We listen and refine.",
      storyMethod3Body: "What we see and hear becomes input for the next version of the product and the way we communicate it.",
      storyNextTitle: "We are already preparing<br>what comes next.",
      storyNextBody: "We keep refining the products we have while developing new ones. PETSRO will continue making pet food with enjoyable mealtimes and thoughtful ingredients in mind.",
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
      storyThinkingIndex: "MAKE → WATCH → LISTEN → IMPROVE",
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
        description: "PETSRO는 반려동물의 먹는 즐거움을 고민하는 브랜드입니다. 대표 제품 Veggie Topper는 국내산 야채를 작은 입자로 만들어 밥 위에 간편하게 뿌려주는 반려견용 토퍼입니다.",
        ogTitle: "PETSRO 페츠로 | Vegetable Meal Topper",
        ogDescription: "국내산 야채를 작은 입자로 만들어 밥 위에 간편하게 뿌려주는 PETSRO Veggie Topper."
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
    },
    ourStory: {
      ko: {
        title: "PETSRO Our Story | 함께하는 시간에서 시작된 반려동물 식품 브랜드",
        description: "반려동물과 함께 살며 먹거리를 고민하고, 간식부터 야채 토퍼까지 직접 만들고 다듬어온 PETSRO의 이야기를 소개합니다.",
        ogTitle: "PETSRO Our Story | 매일 밥을 챙기며 시작된 이야기",
        ogDescription: "매일 밥을 챙기며 시작된 고민이 간식과 야채 토퍼로 이어진 PETSRO의 이야기."
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
