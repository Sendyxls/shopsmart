export interface Product {
  id: string;
  barcode: string;
  name: Record<string, string>;
  price: number;
  rating: number;
  description: Record<string, string>;
  composition: Record<string, string>;
  image: string;
  alternatives: Alternative[];
  reviews: Review[];
  scan_count: number;
}

export interface Alternative {
  storeName: Record<string, string>;
  address: string;
  price: number;
  distance: string;
}

export interface Review {
  author: string;
  date: string;
  text: Record<string, string>;
  rating: number;
}

// Единые альтернативы для всех товаров
const commonAlternatives: Alternative[] = [
  {
    storeName: {
      ru: 'Самбери',
      en: 'Sambury',
      zh: '桑伯里'
    },
    address: 'ул. Калинина, 8',
    price: 950,
    distance: '200 м'
  },
  {
    storeName: {
      ru: 'Самбери',
      en: 'Sambury',
      zh: '桑伯里'
    },
    address: 'Черёмуховая ул., 15',
    price: 820,
    distance: '1.2 км'
  },
  {
    storeName: {
      ru: 'Самбери',
      en: 'Sambury',
      zh: '桑伯里'
    },
    address: 'Светланская ул., 29',
    price: 790,
    distance: '800 м'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    barcode: '4601234567890',
    name: {
      ru: 'Конфеты "Птичье молоко"',
      en: 'Bird\'s Milk Candies',
      zh: '鸟乳糖果'
    },
    price: 799,
    rating: 4.8,
    description: {
      ru: 'Знаменитые конфеты с нежной суфлейной начинкой и шоколадной глазурью',
      en: 'Famous candies with delicate souffle filling and chocolate glaze',
      zh: '著名的糖果，带有柔软的舒芙蕾馅料和巧克力糖衣'
    },
    composition: {
      ru: 'Сахар, масло сливочное, молоко сгущенное, шоколад, агар-агар',
      en: 'Sugar, butter, condensed milk, chocolate, agar-agar',
      zh: '糖，黄油，炼乳，巧克力，琼脂'
    },
    image: 'https://avatars.mds.yandex.net/get-mpic/5233452/img_id5829819783315811841.jpeg/orig',
    scan_count: 1250,
    alternatives: commonAlternatives,
    reviews: [
      {
        author: '张丽',
        date: '2024-03-15',
        text: {
          ru: 'Восхитительный вкус! Лучшие конфеты',
          en: 'Delicious taste! The best candies',
          zh: '美味极了！最好的糖果'
        },
        rating: 5
      },
      {
        author: '王强',
        date: '2024-03-10',
        text: {
          ru: 'Классика! Всегда покупаю эти конфеты',
          en: 'Classic! I always buy these candies',
          zh: '经典！我总是买这些糖果'
        },
        rating: 5
      },
      {
        author: '刘洋',
        date: '2024-03-05',
        text: {
          ru: 'Нежнейшее суфле, тает во рту!',
          en: 'The most delicate souffle, melts in your mouth!',
          zh: '最柔软的舒芙蕾，入口即化！'
        },
        rating: 5
      }
    ]
  },
  {
    id: '2',
    barcode: '6901234567890',
    name: {
      ru: 'Шоколад "Алёнка"',
      en: 'Alyonka Chocolate',
      zh: '阿廖卡巧克力'
    },
    price: 179,
    rating: 4.6,
    description: {
      ru: 'Молочный шоколад с нежным вкусом. Классический российский бренд с 1965 года.',
      en: 'Milk chocolate with a delicate taste. Classic Russian brand since 1965.',
      zh: '口感细腻的牛奶巧克力。自1965年以来的经典俄罗斯品牌。'
    },
    composition: {
      ru: 'Сахар, какао-масло, молоко сухое, какао тертое, эмульгатор лецитин, ароматизатор',
      en: 'Sugar, cocoa butter, dry milk, cocoa mass, emulsifier lecithin, flavoring',
      zh: '糖，可可脂，奶粉，可可块，乳化剂卵磷脂，食用香料'
    },
    image: 'https://s3.ibta.ru/goods/620783/956706000d0d193161b5c8c39a49bcab_xl.jpg',
    scan_count: 980,
    alternatives: commonAlternatives,
    reviews: [
      {
        author: '张丽',
        date: '2024-03-14',
        text: {
          ru: 'Любимый шоколад! Нежный и вкусный',
          en: 'Favorite chocolate! Tender and delicious',
          zh: '最喜欢的巧克力！细腻美味'
        },
        rating: 5
      },
      {
        author: '王强',
        date: '2024-03-09',
        text: {
          ru: 'Хороший молочный шоколад за свою цену',
          en: 'Good milk chocolate for its price',
          zh: '价格合理的优质牛奶巧克力'
        },
        rating: 4
      },
      {
        author: '刘洋',
        date: '2024-03-03',
        text: {
          ru: 'Классический вкус Алёнки! Всегда беру',
          en: 'Classic Alyonka taste! I always take it',
          zh: '经典的阿廖卡口味！我总是买'
        },
        rating: 5
      }
    ]
  },
  {
    id: '3',
    barcode: '6921234567890',
    name: {
      ru: 'Форель "Русское море"',
      en: 'Russian Sea Trout',
      zh: '俄罗斯海鳟鱼'
    },
    price: 513,
    rating: 4.7,
    description: {
      ru: 'Слабосоленая форель премиум качества. Идеально подходит для бутербродов и салатов.',
      en: 'Lightly salted premium quality trout. Perfect for sandwiches and salads.',
      zh: '淡盐优质鳟鱼。非常适合三明治和沙拉。'
    },
    composition: {
      ru: 'Форель, соль, сахар',
      en: 'Trout, salt, sugar',
      zh: '鳟鱼，盐，糖'
    },
    image: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-62/324/257/261/317/14/100044471511b0.jpg',
    scan_count: 720,
    alternatives: commonAlternatives,
    reviews: [
      {
        author: '王强',
        date: '2024-03-13',
        text: {
          ru: 'Отличное качество! Форель свежая и нежная',
          en: 'Excellent quality! Fresh and tender trout',
          zh: '品质优良！鳟鱼新鲜嫩滑'
        },
        rating: 5
      },
      {
        author: '刘静',
        date: '2024-03-08',
        text: {
          ru: 'Очень вкусная, но цена высоковата',
          en: 'Very tasty, but the price is high',
          zh: '很好吃，但价格偏高'
        },
        rating: 4
      },
      {
        author: '张丽',
        date: '2024-03-02',
        text: {
          ru: 'Премиум качество! Лучшая форель в городе',
          en: 'Premium quality! The best trout in the city',
          zh: '优质品质！城里最好的鳟鱼'
        },
        rating: 5
      }
    ]
  },
  {
    id: '4',
    barcode: '6931234567890',
    name: {
      ru: 'Конфеты "Коркунов"',
      en: 'Korkunov Candies',
      zh: '科尔库诺夫糖果'
    },
    price: 913,
    rating: 4.9,
    description: {
      ru: 'Элитные шоколадные конфеты ассорти с орехами. Премиум качество для особых случаев.',
      en: 'Premium assorted chocolate candies with nuts. Premium quality for special occasions.',
      zh: '精选坚果巧克力糖果。特殊场合的优质品质。'
    },
    composition: {
      ru: 'Шоколад, сахар, орехи, какао-масло, молоко сухое, эмульгатор лецитин',
      en: 'Chocolate, sugar, nuts, cocoa butter, dry milk, emulsifier lecithin',
      zh: '巧克力，糖，坚果，可可脂，奶粉，乳化剂卵磷脂'
    },
    image: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/102/550/957/925/165/9/100070952805b0.jpg',
    scan_count: 1100,
    alternatives: commonAlternatives,
    reviews: [
      {
        author: '李娜',
        date: '2024-03-12',
        text: {
          ru: 'Превосходные конфеты! Идеальный подарок',
          en: 'Excellent candies! Perfect gift',
          zh: '极好的糖果！完美的礼物'
        },
        rating: 5
      },
      {
        author: '王强',
        date: '2024-03-07',
        text: {
          ru: 'Лучшие конфеты на рынке! Всегда покупаю к празднику',
          en: 'The best candies on the market! I always buy for the holiday',
          zh: '市场上最好的糖果！过节总是买'
        },
        rating: 5
      },
      {
        author: '张丽',
        date: '2024-03-01',
        text: {
          ru: 'Вкусные, но дороговато',
          en: 'Delicious, but a bit expensive',
          zh: '好吃，但有点贵'
        },
        rating: 4
      }
    ]
  },
  {
    id: '5',
    barcode: '6941234567890',
    name: {
      ru: 'Мёд натуральный',
      en: 'Natural Honey',
      zh: '天然蜂蜜'
    },
    price: 99,
    rating: 4.8,
    description: {
      ru: 'Натуральный липовый мед, собранный на Дальнем Востоке. Идеально подходит для чая и выпечки.',
      en: 'Natural linden honey collected in the Far East. Perfect for tea and baking.',
      zh: '在远东采集的天然椴树蜜。非常适合茶和烘焙。'
    },
    composition: {
      ru: '100% натуральный мед',
      en: '100% natural honey',
      zh: '100%天然蜂蜜'
    },
    image: 'https://cdn1.ozone.ru/multimedia/1035710239.jpg',
    scan_count: 850,
    alternatives: commonAlternatives,
    reviews: [
      {
        author: '王芳',
        date: '2024-03-11',
        text: {
          ru: 'Отличный мед! Натуральный и очень вкусный',
          en: 'Excellent honey! Natural and very tasty',
          zh: '极好的蜂蜜！天然美味'
        },
        rating: 5
      },
      {
        author: '李伟',
        date: '2024-03-06',
        text: {
          ru: 'Хороший продукт, рекомендую',
          en: 'Good product, I recommend',
          zh: '好产品，推荐'
        },
        rating: 4
      },
      {
        author: '张丽',
        date: '2024-02-28',
        text: {
          ru: 'Покупаю уже третий раз, качество неизменно высокое!',
          en: 'I buy it for the third time, the quality is consistently high!',
          zh: '第三次购买了，质量一直很好！'
        },
        rating: 5
      }
    ]
  },
  {
    id: '6',
    barcode: '6951234567890',
    name: {
      ru: 'Хлеб "Бородинский"',
      en: 'Borodinsky Bread',
      zh: '鲍罗金诺面包'
    },
    price: 89,
    rating: 4.5,
    description: {
      ru: 'Традиционный ржаной хлеб с кориандром. Имеет характерный аромат и слегка сладковатый вкус.',
      en: 'Traditional rye bread with coriander. Has a characteristic aroma and a slightly sweet taste.',
      zh: '传统的香菜黑麦面包。具有独特的香气和微甜的口感。'
    },
    composition: {
      ru: 'Мука ржаная, мука пшеничная, солод, кориандр, соль',
      en: 'Rye flour, wheat flour, malt, coriander, salt',
      zh: '黑麦粉，小麦粉，麦芽，香菜，盐'
    },
    image: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/189/039/481/611/035/9/100063939676b0.jpg',
    scan_count: 620,
    alternatives: commonAlternatives,
    reviews: [
      {
        author: '李娜',
        date: '2024-03-10',
        text: {
          ru: 'Настоящий бородинский! Очень ароматный',
          en: 'Real Borodinsky! Very aromatic',
          zh: '真正的鲍罗金诺！非常香'
        },
        rating: 5
      },
      {
        author: '王强',
        date: '2024-03-05',
        text: {
          ru: 'Хороший ржаной хлеб, но кориандр чувствуется слишком сильно',
          en: 'Good rye bread, but the coriander is too strong',
          zh: '黑麦面包不错，但香菜味道太重'
        },
        rating: 4
      },
      {
        author: '刘静',
        date: '2024-02-29',
        text: {
          ru: 'Люблю этот хлеб! Покупаю постоянно',
          en: 'I love this bread! I buy it regularly',
          zh: '我喜欢这个面包！经常买'
        },
        rating: 5
      }
    ]
  },
  {
    id: '7',
    barcode: '6961234567890',
    name: {
      ru: 'Колбаса "Краковская"',
      en: 'Krakowska Sausage',
      zh: '克拉科夫香肠'
    },
    price: 199,
    rating: 4.4,
    description: {
      ru: 'Полукопченая колбаса с насыщенным вкусом и ароматом. Изготовлена по традиционному рецепту.',
      en: 'Semi-smoked sausage with rich taste and aroma. Made according to a traditional recipe.',
      zh: '半熏香肠，味道浓郁芳香。按照传统配方制作。'
    },
    composition: {
      ru: 'Свинина, говядина, соль, специи, чеснок',
      en: 'Pork, beef, salt, spices, garlic',
      zh: '猪肉，牛肉，盐，香料，大蒜'
    },
    image: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-16/437/111/761/123/235/3/100062509371b0.jpg',
    scan_count: 540,
    alternatives: commonAlternatives,
    reviews: [
      {
        author: '张明',
        date: '2024-03-09',
        text: {
          ru: 'Вкусная колбаса',
          en: 'Tasty sausage',
          zh: '美味的香肠'
        },
        rating: 4
      },
      {
        author: '王芳',
        date: '2024-03-04',
        text: {
          ru: 'Хорошая колбаса, но немного соленая',
          en: 'Good sausage, but a bit salty',
          zh: '香肠不错，但有点咸'
        },
        rating: 4
      },
      {
        author: '刘洋',
        date: '2024-02-27',
        text: {
          ru: 'Отличный вкус и аромат! Рекомендую',
          en: 'Excellent taste and aroma! I recommend',
          zh: '味道和香气都很棒！推荐'
        },
        rating: 5
      }
    ]
  },
  {
    id: '8',
    barcode: '6971234567890',
    name: {
      ru: 'Зефир',
      en: 'Marshmallow',
      zh: '棉花糖'
    },
    price: 80,
    rating: 4.6,
    description: {
      ru: 'Классический белый зефир с ванильным вкусом. Воздушная текстура и нежный вкус.',
      en: 'Classic white marshmallow with vanilla flavor. Airy texture and delicate taste.',
      zh: '经典香草味白色棉花糖。蓬松的质地和细腻的口感。'
    },
    composition: {
      ru: 'Сахар, патока, желатин, ароматизатор ванильный',
      en: 'Sugar, molasses, gelatin, vanilla flavoring',
      zh: '糖，糖浆，明胶，香草香料'
    },
    image: 'https://avatars.mds.yandex.net/get-mpic/11771522/2a0000018aff3b6841c258d1164c292be889/orig',
    scan_count: 680,
    alternatives: commonAlternatives,
    reviews: [
      {
        author: '李娜',
        date: '2024-03-08',
        text: {
          ru: 'Нежный зефир, но немного сладковат',
          en: 'Delicate marshmallow, but a bit too sweet',
          zh: '棉花糖细腻，但有点太甜'
        },
        rating: 4
      },
      {
        author: '陈杰',
        date: '2024-03-03',
        text: {
          ru: 'Классический зефир, очень вкусный',
          en: 'Classic marshmallow, very tasty',
          zh: '经典棉花糖，非常好吃'
        },
        rating: 5
      },
      {
        author: '刘静',
        date: '2024-02-26',
        text: {
          ru: 'Воздушный и вкусный, детям очень понравился',
          en: 'Airy and tasty, the children really liked it',
          zh: '蓬松美味，孩子们非常喜欢'
        },
        rating: 5
      }
    ]
  },
  {
    id: '9',
    barcode: '6981234567890',
    name: {
      ru: 'Напиток "Добрый"',
      en: 'Dobry Drink',
      zh: '多布瑞饮料'
    },
    price: 169,
    rating: 4.3,
    description: {
      ru: 'Натуральный сокосодержащий напиток с ярким фруктовым вкусом. Без консервантов.',
      en: 'Natural juice-containing drink with a bright fruit taste. No preservatives.',
      zh: '天然果汁饮料，果味浓郁。不含防腐剂。'
    },
    composition: {
      ru: 'Вода, сахар, концентрированный сок, регулятор кислотности лимонная кислота',
      en: 'Water, sugar, concentrated juice, acidity regulator citric acid',
      zh: '水，糖，浓缩果汁，酸度调节剂柠檬酸'
    },
    image: 'https://dobryanka-rus.ru/storage/goods/279336_a97Zv.jpg',
    scan_count: 490,
    alternatives: commonAlternatives,
    reviews: [
      {
        author: '李娜',
        date: '2024-03-07',
        text: {
          ru: 'Освежающий напиток, приятный вкус',
          en: 'Refreshing drink, pleasant taste',
          zh: '清爽饮料，口感宜人'
        },
        rating: 4
      },
      {
        author: '张明',
        date: '2024-03-02',
        text: {
          ru: 'Покупаю постоянно, вся семья любит!',
          en: 'I buy it regularly, the whole family loves it!',
          zh: '经常买，全家都爱！'
        },
        rating: 5
      },
      {
        author: '王芳',
        date: '2024-02-25',
        text: {
          ru: 'Хороший сок, натуральный вкус',
          en: 'Good juice, natural taste',
          zh: '好果汁，天然味道'
        },
        rating: 4
      }
    ]
  }
];
