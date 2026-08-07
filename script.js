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

      heroTitle: "야채를 더해,<br>식사는 더 다채롭게.",
      heroBody: "국내산 야채를 작은 입자로 만들어<br>평소 사료 위에 간편하게 더하는 야채 토퍼",
      heroExplore: "제품 알아보기",
      heroShop: "구매하기",
      heroBusiness: "비즈니스 문의",

      trustVegetables: "국내산 야채",
      trustMade: "Made in Korea",
      trustPatent: "제조방법 특허출원 중",

      everydayTitle: "늘 먹는 한 끼에,<br>오늘은 다른 야채를.",
      everydayBody: "고구마·당근·단호박 중 원하는 야채를 골라 필요한 만큼 더해보세요.<br>매번 야채를 손질하지 않아도, 일상의 식사에 새로운 맛과 식감을 간편하게 더할 수 있습니다.",

      productsTitle: "오늘은 어떤 야채를 더할까요?",
      productsIntro: "고구마·당근·단호박을 각각 담아, 원하는 야채를 골라 필요한 만큼 더할 수 있습니다.",
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

      whyTitle: "재료는 분명하게, 사용은 간편하게.",
      whyIntro: "매일의 식사에 야채를 부담 없이 더할 수 있도록, 제품의 기본을 단순하게 잡았습니다.",
      whyMore: "재료와 만드는 과정 자세히 보기",
      whyOne: "국내산 야채",
      whyOneEn: "Korean-Grown Vegetables",
      whyTwo: "한 통에 하나의 야채",
      whyTwoEn: "One Vegetable at a Time",
      whyThree: "야채가 보이는 작은 입자",
      whyThreeEn: "Visible Small-Particle Texture",
      whyFour: "필요한 만큼 간편하게",
      whyFourEn: "Easy Everyday Topping",

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

      businessTitle: "입점·유통·협업 제안을 기다립니다.",
      businessBody: "PETSRO와 함께할 제안이 있다면 편하게 연락 주세요.",
      businessEmail: "비즈니스 문의",
      businessCall: "전화 문의",
      businessPage: "BUSINESS →",

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
      foodIngredientFact3Body: "보존료를 따로 넣지 않고 원료와 공정에 집중했습니다.",

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
      foodEverydayBody: "매번 야채를 씻고 손질하고 익혀 보관하지 않아도 됩니다. 필요한 만큼 덜어 평소 식사 위에 간편하게 더하세요.",
      foodStep1: "열고",
      foodStep1Body: "필요할 때 용기를 엽니다.",
      foodStep2: "덜고",
      foodStep2Body: "먹일 만큼 가볍게 덜어냅니다.",
      foodStep3: "식사 위에 더하세요",
      foodStep3Body: "평소 사료 위에 간편하게 더합니다.",

      foodPhilosophyTitle: "먹는 즐거움과 건강을<br>함께 담다.",
      foodPhilosophyBody: "좋은 재료를 고르고, 세심하게 다루고, 매일 쓰기 좋은 형태로 만드는 것. PETSRO가 음식에 담는 기준입니다.",
      foodPhilosophyQuote: "좋은 재료에서 시작해, 매일의 식사까지.",

      foodCtaTitle: "PETSRO Veggie Topper를 만나보세요.",
      foodCtaProducts: "제품 보기",
      foodCtaShop: "구매하기",
      foodCtaBusiness: "비즈니스 문의 ↗",


      storyHeroTitle: "함께한 시간이,<br>우리가 만드는 것의 기준이 되었습니다.",
      storyHeroBody: "매일 밥을 챙기고, 잘 먹는지 살피고,<br>무엇을 먹일지 한 번 더 생각하는 시간.<br>PETSRO는 그렇게 함께 살아가는 평범한 일상에서 시작했습니다.",
      storyOriginTitle: "잘 먹는 모습이 좋았습니다.<br>그래서 무엇을 먹이는지도 더 생각하게 됐습니다.",
      storyOriginBody1: "사료를 챙기고, 간식을 고르고, 밥그릇 앞의 반응을 살피는 일은 반려동물과 사는 사람에게 아주 평범한 하루입니다.",
      storyOriginBody2: "하지만 그 하루가 쌓일수록 기준도 조금씩 달라졌습니다. 잘 먹는 즐거움만큼 무엇을 먹이고 있는지 알고 선택하는 일도 중요해졌고, 그 고민이 PETSRO가 제품을 만들기 시작한 이유가 되었습니다.",
      storyOriginQuote: "거창한 아이디어보다, 매일 곁에서 생긴 작은 질문에서 시작했습니다.",
      storyThinkingTitle: "만들고, 살피고, 듣고,<br>다시 다듬습니다.",
      storyThinkingIntro: "좋은 제품은 한 번의 아이디어로 끝나지 않는다고 생각합니다.",
      storyThinkingBody: "어떤 제품이 필요할지 생각하고, 직접 만들어보고, 반려견의 식사와 반응을 살핍니다. 보호자들이 무엇을 궁금해하는지 듣고, 제품과 설명에서 더 나아질 부분을 다시 고칩니다. 이 반복이 PETSRO가 제품을 만들어가는 방식입니다.",
      storyJourneyTitle: "간식에서 시작한 질문은,<br>매일의 식사로 이어졌습니다.",
      storyJourneyIntro: "간식에서 시작한 고민은 야채 토퍼로 이어졌고, 지금도 다음 제품을 고민하고 있습니다.",
      storyJourney1Title: "간식을 만들며 시작했습니다.",
      storyJourney1Body: "작은 간식 하나도 원료를 고르고 만드는 과정에 따라 달라진다는 것을 배워갔습니다.",
      storyJourney2Title: "질문이 식사로 넓어졌습니다.",
      storyJourney2Body: "간식에서 시작한 고민은 매일 먹는 식사에 어떤 새로운 선택을 더할 수 있을지로 이어졌습니다.",
      storyJourney3Title: "새로운 식사 토퍼를 만들었습니다.",
      storyJourney3Body: "국내산 야채를 활용한 Veggie Topper를 개발하며 PETSRO가 제안하는 식사 경험을 구체적인 제품으로 만들었습니다.",
      storyJourney4Title: "보호자를 직접 만났습니다.",
      storyJourney4Body: "제품을 시장에 소개하고 질문과 반응을 들으며, 더 잘 설명해야 할 것과 더 다듬어야 할 것을 배웠습니다.",
      storyJourney5Title: "다음 제품을 계속 고민합니다.",
      storyJourney5Body: "한 제품에 머물지 않고 새로운 원료와 더 나은 사용 경험을 살피며 PETSRO의 다음을 준비하고 있습니다.",
      storyMethodTitle: "작은 관찰을,<br>실제 제품의 변화로.",
      storyMethod1Title: "가까이에서 살핍니다.",
      storyMethod1Body: "함께 생활하며 식사와 일상 속 작은 불편, 새로운 필요를 놓치지 않으려 합니다.",
      storyMethod2Title: "생각을 제품으로 만듭니다.",
      storyMethod2Body: "좋은 아이디어에 머물지 않고 원료, 형태, 사용 방법을 실제 제품으로 만들어봅니다.",
      storyMethod3Title: "반응을 듣고 다시 다듬습니다.",
      storyMethod3Body: "직접 보고 들은 반응을 다음 제품과 커뮤니케이션에 반영하며 기준을 조금씩 높여갑니다.",
      storyNextTitle: "다음 제품도,<br>같은 마음으로.",
      storyNextBody: "간식에서 시작한 고민은 야채 토퍼로 이어졌고, 지금도 새로운 원료와 제품을 살피고 있습니다. 반려동물과 함께하는 일상에서 생긴 질문을 놓치지 않고 PETSRO다운 다음 제품을 만들어가겠습니다.",
      storyNext1: "Vegetable Meal Topper 라인 확대",
      storyNext2: "다양한 식물성 식재료 탐색",
      storyNext3: "일상 식사를 위한 새로운 제품 개발",
      storyNext4: "국내외 파트너와의 새로운 접점 확대",
      storyClosingTitle: "함께하는 매일이,<br>PETSRO의 다음을 만듭니다.",
      storyClosingBody: "반려동물 곁에서 시작한 질문을 잊지 않고, 먹는 즐거움과 건강을 함께 생각하는 제품을 한 걸음씩 만들어가겠습니다.",
      storyClosingSlogan: "먹는 즐거움과 건강을 함께 담다.",
      storyCtaTitle: "PETSRO를 조금 더<br>알아보세요.",
      storyCtaFood: "우리의 음식 이야기",
      storyCtaProducts: "제품 만나보기",
      storyCtaBusiness: "비즈니스 문의",


      biz2HeroTitle: "PETSRO가 잘 어울리는 곳을<br>만나고 싶습니다.",
      biz2HeroBody: "입점·유통부터 팝업과 브랜드 협업까지, PETSRO와 잘 맞는 제안이라면 편하게 연락 주세요.",
      biz2HeroEmail: "비즈니스 문의",
      biz2HeroExplore: "함께할 수 있는 일",

      biz2StoreTitle: "매장에서 만나는 PETSRO",
      biz2StoreBody: "제품이 놓였을 때도 재료와 라인업의 차이가 자연스럽게 보이도록 패키지와 구성까지 함께 고민했습니다.",
      biz2StoreNoteLabel: "매장에서 보이는 PETSRO",
      biz2StoreNote: "펫 전문 매장부터 취향 있는 라이프스타일 공간까지, 제품이 공간을 방해하기보다 자연스럽게 어우러지는 모습을 생각합니다.",

      biz2StrengthsTitle: "제품 자체에서<br>이야기가 시작됩니다.",
      biz2StrengthsIntro: "매장에서 길게 설명하지 않아도 제품의 재료와 쓰임, 서로 다른 라인업이 눈에 들어오도록 구성했습니다.",
      biz2Strength1Title: "야채로 만든 식사 토퍼",
      biz2Strength1Body: "국내산 야채를 작은 입자로 만들어 일상의 식사 위에 간편하게 더하는 제품입니다.",
      biz2Strength2Title: "고구마·당근·단호박, 각각의 선택",
      biz2Strength2Body: "야채를 섞지 않고 각각 담아 원하는 원료를 보고 고를 수 있습니다.",
      biz2Strength3Title: "내용물이 보이는 제품",
      biz2Strength3Body: "투명 용기 안으로 야채마다 다른 색과 작은 입자가 보여 제품의 차이를 한눈에 확인할 수 있습니다.",
      biz2Strength4Title: "한 제품에서 끝나지 않는 라인업",
      biz2Strength4Body: "현재 고구마·당근·단호박에 이어 브로콜리 출시를 준비하고 있으며, 새로운 야채와 제품을 계속 고민하고 있습니다.",

      biz2CollabTitle: "PETSRO와 함께할 수 있는 일.",
      biz2CollabIntro: "정해진 형식보다, 서로 잘 맞는 방법부터 이야기하고 싶습니다.",
      biz2Collab1Title: "입점 · 유통",
      biz2Collab1Body: "펫 전문 매장, 편집숍, 라이프스타일숍, 온라인몰 등 다양한 판매 채널의 제안을 기다립니다.",
      biz2Collab2Title: "팝업 · 행사 · 브랜드 협업",
      biz2Collab2Body: "고객과 직접 만나는 행사부터 콘텐츠·프로모션까지, 방향이 잘 맞는 협업을 열어두고 있습니다.",
      biz2Collab3Title: "해외 유통",
      biz2Collab3Body: "PETSRO를 새로운 시장에 소개할 해외 바이어와 유통 파트너의 문의도 받고 있습니다.",
      biz2Collab4Title: "해외 유통",
      biz2Collab4Body: "PETSRO를 새로운 국가와 고객에게 소개할 해외 바이어 및 유통 파트너의 문의도 받고 있습니다.",

      biz2FitTitle: "제품이 놓이는 공간과,<br>그곳을 찾는 사람까지.",
      biz2FitBody: "PETSRO는 많은 곳에 들어가는 것보다, 제품과 공간이 잘 어울리고 그곳을 찾는 고객에게 자연스럽게 소개되는 관계를 더 중요하게 생각합니다.",
      biz2FitQuote: "PETSRO와 잘 어울리는 곳이라면, 먼저 편하게 이야기해 주세요.",

      biz2ContactTitle: "PETSRO와 함께할 제안이 있다면,<br>편하게 연락 주세요.",
      biz2ContactBody: "아직 구체적이지 않은 아이디어도 괜찮습니다.",

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

      heroTitle: "More vegetables.<br>More variety at mealtime.",
      heroBody: "Made with Korean-grown vegetables and designed<br>to sprinkle easily over your dog’s everyday meal.",
      heroExplore: "Explore Products",
      heroShop: "Shop Now",
      heroBusiness: "Business Inquiry",

      trustVegetables: "Korean-Grown Vegetables",
      trustMade: "Made in Korea",
      trustPatent: "Patent Pending in Korea",

      everydayTitle: "A familiar meal,<br>with a different vegetable today.",
      everydayBody: "Choose Sweet Potato, Carrot or Kabocha and add just what you need.<br>No separate vegetable prep—just an easy way to bring a different flavor and texture to everyday meals.",

      productsTitle: "Choose Your Vegetable",
      productsIntro: "Sweet Potato, Carrot and Kabocha are offered separately, so you can choose a vegetable and add just what you need.",
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

      whyTitle: "Clear ingredients. Simple everyday use.",
      whyIntro: "We keep the basics simple, so vegetables are easy to add to everyday meals.",
      whyMore: "See our ingredients and process",
      whyOne: "Korean-Grown Vegetables",
      whyOneEn: "Korean-Grown Vegetables",
      whyTwo: "One Vegetable at a Time",
      whyTwoEn: "One Vegetable at a Time",
      whyThree: "Visible Small-Particle Texture",
      whyThreeEn: "Visible Small-Particle Texture",
      whyFour: "Easy Everyday Topping",
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
      foodIngredientFact3Body: "No added preservatives—our focus stays on the ingredients and how we prepare them.",

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
      foodEverydayBody: "No need to wash, cut, cook and store vegetables every time. Take what you need and add it over the everyday meal.",
      foodStep1: "Open",
      foodStep1Body: "Open the container when you need it.",
      foodStep2: "Portion",
      foodStep2Body: "Take out the amount you want to use.",
      foodStep3: "Add to the meal",
      foodStep3Body: "Add it over the regular dog food.",

      foodPhilosophyTitle: "Joy in eating.<br>Care in every choice.",
      foodPhilosophyBody: "Good ingredients, thoughtful preparation and an easy everyday format—these are the standards PETSRO brings to food.",
      foodPhilosophyQuote: "From good ingredients to everyday mealtimes.",

      foodCtaTitle: "Explore PETSRO Veggie Topper",
      foodCtaProducts: "Explore Products",
      foodCtaShop: "Shop Now",
      foodCtaBusiness: "Business Inquiry ↗",


      storyHeroTitle: "The time we share shaped<br>the standards behind what we make.",
      storyHeroBody: "Feeding them every day, watching what they enjoy,<br>and thinking a little harder about what goes into the bowl.<br>PETSRO began in those ordinary moments of living together.",
      storyOriginTitle: "The more we cared about how they ate,<br>the more we cared about what they ate.",
      storyOriginBody1: "Filling the bowl, choosing treats and noticing small changes at mealtime are ordinary parts of living with pets.",
      storyOriginBody2: "Over time, those everyday moments changed our standards. Enjoying food still mattered, but so did knowing what we were choosing. That question became the starting point for PETSRO.",
      storyOriginQuote: "It began with small questions from everyday life, not a grand idea.",
      storyThinkingTitle: "Make. Observe. Listen.<br>Refine.",
      storyThinkingIntro: "We do not expect a good product to be finished in a single idea.",
      storyThinkingBody: "We ask what could be useful, turn the idea into a real product, observe how it fits into everyday dog mealtimes, and listen to the questions pet parents ask. Then we refine the product and the way we explain it. That cycle is how PETSRO keeps moving forward.",
      storyJourneyTitle: "A question that began with treats<br>grew into everyday mealtimes.",
      storyJourneyIntro: "Questions that started with treats led to Veggie Topper, and we are still thinking about what comes next.",
      storyJourney1Title: "We started by making treats.",
      storyJourney1Body: "We learned that even a small treat changes with the ingredients we choose and the way we prepare it.",
      storyJourney2Title: "The question grew beyond treats.",
      storyJourney2Body: "Our focus expanded toward everyday meals and what new choices could be added to them.",
      storyJourney3Title: "We developed a new kind of meal topper.",
      storyJourney3Body: "PETSRO turned Korean-grown vegetables into Veggie Toppers and began shaping a more distinctive approach to everyday mealtime variety.",
      storyJourney4Title: "We met pet parents in person.",
      storyJourney4Body: "Bringing our products into the market gave us direct questions, reactions and clearer ideas about what to explain and what to improve.",
      storyJourney5Title: "We keep working on what comes next.",
      storyJourney5Body: "New ingredients, better usability and the next product idea keep the PETSRO story moving.",
      storyMethodTitle: "Small observations.<br>Real product improvements.",
      storyMethod1Title: "We observe closely.",
      storyMethod1Body: "Living with pets keeps us close to the small frictions and changing needs around everyday meals.",
      storyMethod2Title: "We turn ideas into products.",
      storyMethod2Body: "We move beyond concepts and test ingredients, formats and ways of using them in real products.",
      storyMethod3Title: "We listen and refine.",
      storyMethod3Body: "What we see and hear becomes input for the next version of the product and the way we communicate it.",
      storyNextTitle: "The next product,<br>with the same care.",
      storyNextBody: "Questions that started with treats led to Veggie Topper, and we are still exploring new ingredients and products. We will keep building what comes next from the everyday life we share with pets.",
      storyNext1: "Expand the Vegetable Meal Topper line",
      storyNext2: "Explore a wider range of plant-based ingredients",
      storyNext3: "Develop new products for everyday mealtimes",
      storyNext4: "Build new connections with partners in Korea and abroad",
      storyClosingTitle: "Every day together<br>shapes what PETSRO makes next.",
      storyClosingBody: "We will keep the questions that began beside our pets close to us as we make products that consider both the joy of eating and thoughtful everyday choices.",
      storyClosingSlogan: "More joy in eating. More care in every choice.",
      storyCtaTitle: "Discover more<br>about PETSRO.",
      storyCtaFood: "How we think about food",
      storyCtaProducts: "Explore our products",
      storyCtaBusiness: "Business inquiry",


      biz2HeroTitle: "We would like to meet places<br>where PETSRO feels at home.",
      biz2HeroBody: "From retail and distribution to pop-ups and brand collaborations, we welcome ideas that feel like a natural fit for PETSRO.",
      biz2HeroEmail: "Business Inquiry",
      biz2HeroExplore: "Ways to Work Together",

      biz2StoreTitle: "PETSRO in retail",
      biz2StoreBody: "We consider the packaging and product line together, so the ingredients and differences between varieties remain easy to see in store.",
      biz2StoreNoteLabel: "PETSRO in retail",
      biz2StoreNote: "From specialist pet stores to curated lifestyle spaces, we want the product to feel considered, easy to understand and at home in its surroundings.",

      biz2StrengthsTitle: "The product tells<br>its own story.",
      biz2StrengthsIntro: "The ingredient, use and differences between varieties are designed to be easy to notice without a long explanation.",
      biz2Strength1Title: "A vegetable meal topper",
      biz2Strength1Body: "Korean-grown vegetables are prepared as small-particle toppers made for easy everyday use.",
      biz2Strength2Title: "Sweet Potato, Carrot and Kabocha—separate choices",
      biz2Strength2Body: "Each vegetable is offered separately, so customers can see and choose the ingredient they want.",
      biz2Strength3Title: "A product you can see",
      biz2Strength3Body: "Transparent containers show the different colors and small particles of each vegetable at a glance.",
      biz2Strength4Title: "A line designed to keep growing",
      biz2Strength4Body: "Broccoli is being prepared as the next variety, with more vegetable ingredients and future product ideas under development.",

      biz2CollabTitle: "Ways to work with PETSRO.",
      biz2CollabIntro: "Rather than forcing every partnership into the same format, we prefer to start with what fits.",
      biz2Collab1Title: "Retail & Distribution",
      biz2Collab1Body: "We welcome inquiries from pet stores, curated shops, lifestyle retailers, online channels and distribution partners.",
      biz2Collab2Title: "Pop-ups, Events & Brand Collaborations",
      biz2Collab2Body: "From customer-facing events to content and promotions, we are open to collaborations that make sense for both brands.",
      biz2Collab3Title: "International Distribution",
      biz2Collab3Body: "We also welcome inquiries from buyers and distribution partners interested in introducing PETSRO to new markets.",
      biz2Collab4Title: "International Distribution",
      biz2Collab4Body: "We also welcome inquiries from overseas buyers and distribution partners interested in introducing PETSRO to new markets.",

      biz2FitTitle: "We think about the space,<br>and the people who walk into it.",
      biz2FitBody: "For us, a good retail relationship is not about being everywhere. It is about finding places where the product, the space and the customer make sense together.",
      biz2FitQuote: "If PETSRO feels right for your space, we would be glad to hear from you.",

      biz2ContactTitle: "Have an idea for PETSRO?<br>We would be glad to hear it.",
      biz2ContactBody: "It is fine if the idea is still taking shape.",

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
        description: "PETSRO는 국내산 야채를 작은 입자로 만들어 일상의 식사 위에 간편하게 더하는 반려견용 Vegetable Meal Topper 브랜드입니다.",
        ogTitle: "PETSRO 페츠로 | Vegetable Meal Topper",
        ogDescription: "국내산 야채를 작은 입자로 만들어 일상의 식사 위에 간편하게 더하는 PETSRO Vegetable Meal Topper."
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
        description: "PETSRO는 반려동물과 함께하는 일상에서 시작해, 직접 만들고 살피고 듣고 다시 다듬으며 성장하는 한국의 반려동물 식품 브랜드입니다.",
        ogTitle: "PETSRO Our Story | 함께한 시간이 우리의 기준이 되었습니다",
        ogDescription: "반려동물과 함께하는 일상에서 시작해, 제품을 직접 고민하고 만들고 개선하며 성장하는 PETSRO의 이야기."
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
