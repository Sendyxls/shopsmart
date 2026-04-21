import { Product, Store, Price, Review } from '../models';

export const products: Product[] = [
  {
    id: '1',
    barcode: '4601234567890',
    name: JSON.stringify({
      ru: 'Конфеты "Птичье молоко"',
      en: 'Bird\'s Milk Candies',
      zh: '鸟乳糖果'
    }),
    description: JSON.stringify({
      ru: 'Знаменитые конфеты с нежной суфлейной начинкой и шоколадной глазурью',
      en: 'Famous candies with delicate souffle filling and chocolate glaze',
      zh: '著名的糖果，带有柔软的舒芙蕾馅料和巧克力糖衣'
    }),
    composition: JSON.stringify({
      ru: 'Сахар, масло сливочное, молоко сгущенное, шоколад, агар-агар',
      en: 'Sugar, butter, condensed milk, chocolate, agar-agar',
      zh: '糖，黄油，炼乳，巧克力，琼脂'
    }),
    image_url: 'https://avatars.mds.yandex.net/get-mpic/5233452/img_id5829819783315811841.jpeg/orig',
    average_rating: 4.8,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '2',
    barcode: '6901234567890',
    name: JSON.stringify({
      ru: 'Шоколад "Алёнка"',
      en: 'Alyonka Chocolate',
      zh: '阿廖卡巧克力'
    }),
    description: JSON.stringify({
      ru: 'Молочный шоколад с нежным вкусом. Классический российский бренд с 1965 года.',
      en: 'Milk chocolate with a delicate taste. Classic Russian brand since 1965.',
      zh: '口感细腻的牛奶巧克力。自1965年以来的经典俄罗斯品牌。'
    }),
    composition: JSON.stringify({
      ru: 'Сахар, какао-масло, молоко сухое, какао тертое, эмульгатор лецитин, ароматизатор',
      en: 'Sugar, cocoa butter, dry milk, cocoa mass, emulsifier lecithin, flavoring',
      zh: '糖，可可脂，奶粉，可可块，乳化剂卵磷脂，食用香料'
    }),
    image_url: 'https://s3.ibta.ru/goods/620783/956706000d0d193161b5c8c39a49bcab_xl.jpg',
    average_rating: 4.6,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '3',
    barcode: '6921234567890',
    name: JSON.stringify({
      ru: 'Форель "Русское море"',
      en: 'Russian Sea Trout',
      zh: '俄罗斯海鳟鱼'
    }),
    description: JSON.stringify({
      ru: 'Слабосоленая форель премиум качества. Идеально подходит для бутербродов и салатов.',
      en: 'Lightly salted premium quality trout. Perfect for sandwiches and salads.',
      zh: '淡盐优质鳟鱼。非常适合三明治和沙拉。'
    }),
    composition: JSON.stringify({
      ru: 'Форель, соль, сахар',
      en: 'Trout, salt, sugar',
      zh: '鳟鱼，盐，糖'
    }),
    image_url: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-62/324/257/261/317/14/100044471511b0.jpg',
    average_rating: 4.7,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '4',
    barcode: '6931234567890',
    name: JSON.stringify({
      ru: 'Конфеты "Коркунов"',
      en: 'Korkunov Candies',
      zh: '科尔库诺夫糖果'
    }),
    description: JSON.stringify({
      ru: 'Элитные шоколадные конфеты ассорти с орехами. Премиум качество для особых случаев.',
      en: 'Premium assorted chocolate candies with nuts. Premium quality for special occasions.',
      zh: '精选坚果巧克力糖果。特殊场合的优质品质。'
    }),
    composition: JSON.stringify({
      ru: 'Шоколад, сахар, орехи, какао-масло, молоко сухое, эмульгатор лецитин',
      en: 'Chocolate, sugar, nuts, cocoa butter, dry milk, emulsifier lecithin',
      zh: '巧克力，糖，坚果，可可脂，奶粉，乳化剂卵磷脂'
    }),
    image_url: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/102/550/957/925/165/9/100070952805b0.jpg',
    average_rating: 4.9,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '5',
    barcode: '6941234567890',
    name: JSON.stringify({
      ru: 'Мёд натуральный',
      en: 'Natural Honey',
      zh: '天然蜂蜜'
    }),
    description: JSON.stringify({
      ru: 'Натуральный липовый мед, собранный на Дальнем Востоке. Идеально подходит для чая и выпечки.',
      en: 'Natural linden honey collected in the Far East. Perfect for tea and baking.',
      zh: '在远东采集的天然椴树蜜。非常适合茶和烘焙。'
    }),
    composition: JSON.stringify({
      ru: '100% натуральный мед',
      en: '100% natural honey',
      zh: '100%天然蜂蜜'
    }),
    image_url: 'https://cdn1.ozone.ru/multimedia/1035710239.jpg',
    average_rating: 4.8,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '6',
    barcode: '6951234567890',
    name: JSON.stringify({
      ru: 'Хлеб "Бородинский"',
      en: 'Borodinsky Bread',
      zh: '鲍罗金诺面包'
    }),
    description: JSON.stringify({
      ru: 'Традиционный ржаной хлеб с кориандром. Имеет характерный аромат и слегка сладковатый вкус.',
      en: 'Traditional rye bread with coriander. Has a characteristic aroma and a slightly sweet taste.',
      zh: '传统的香菜黑麦面包。具有独特的香气和微甜的口感。'
    }),
    composition: JSON.stringify({
      ru: 'Мука ржаная, мука пшеничная, солод, кориандр, соль',
      en: 'Rye flour, wheat flour, malt, coriander, salt',
      zh: '黑麦粉，小麦粉，麦芽，香菜，盐'
    }),
    image_url: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/189/039/481/611/035/9/100063939676b0.jpg',
    average_rating: 4.5,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '7',
    barcode: '6961234567890',
    name: JSON.stringify({
      ru: 'Колбаса "Краковская"',
      en: 'Krakowska Sausage',
      zh: '克拉科夫香肠'
    }),
    description: JSON.stringify({
      ru: 'Полукопченая колбаса с насыщенным вкусом и ароматом. Изготовлена по традиционному рецепту.',
      en: 'Semi-smoked sausage with rich taste and aroma. Made according to a traditional recipe.',
      zh: '半熏香肠，味道浓郁芳香。按照传统配方制作。'
    }),
    composition: JSON.stringify({
      ru: 'Свинина, говядина, соль, специи, чеснок',
      en: 'Pork, beef, salt, spices, garlic',
      zh: '猪肉，牛肉，盐，香料，大蒜'
    }),
    image_url: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-16/437/111/761/123/235/3/100062509371b0.jpg',
    average_rating: 4.4,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '8',
    barcode: '6971234567890',
    name: JSON.stringify({
      ru: 'Зефир',
      en: 'Marshmallow',
      zh: '棉花糖'
    }),
    description: JSON.stringify({
      ru: 'Классический белый зефир с ванильным вкусом. Воздушная текстура и нежный вкус.',
      en: 'Classic white marshmallow with vanilla flavor. Airy texture and delicate taste.',
      zh: '经典香草味白色棉花糖。蓬松的质地和细腻的口感。'
    }),
    composition: JSON.stringify({
      ru: 'Сахар, патока, желатин, ароматизатор ванильный',
      en: 'Sugar, molasses, gelatin, vanilla flavoring',
      zh: '糖，糖浆，明胶，香草香料'
    }),
    image_url: 'https://avatars.mds.yandex.net/get-mpic/11771522/2a0000018aff3b6841c258d1164c292be889/orig',
    average_rating: 4.6,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '9',
    barcode: '6981234567890',
    name: JSON.stringify({
      ru: 'Напиток "Добрый"',
      en: 'Dobry Drink',
      zh: '多布瑞饮料'
    }),
    description: JSON.stringify({
      ru: 'Натуральный сокосодержащий напиток с ярким фруктовым вкусом. Без консервантов.',
      en: 'Natural juice-containing drink with a bright fruit taste. No preservatives.',
      zh: '天然果汁饮料，果味浓郁。不含防腐剂。'
    }),
    composition: JSON.stringify({
      ru: 'Вода, сахар, концентрированный сок, регулятор кислотности лимонная кислота',
      en: 'Water, sugar, concentrated juice, acidity regulator citric acid',
      zh: '水，糖，浓缩果汁，酸度调节剂柠檬酸'
    }),
    image_url: 'https://dobryanka-rus.ru/storage/goods/279336_a97Zv.jpg',
    average_rating: 4.3,
    created_at: new Date(),
    updated_at: new Date()
  }
];

export const stores: Store[] = [
  {
    id: '1',
    name: JSON.stringify({
      ru: 'Самбери',
      en: 'Sambury',
      zh: '桑伯里'
    }),
    address: 'ул. Калинина, 8',
    latitude: 55.7545,
    longitude: 37.6150,
    created_at: new Date()
  },
  {
    id: '2',
    name: JSON.stringify({
      ru: 'Самбери',
      en: 'Sambury',
      zh: '桑伯里'
    }),
    address: 'Черёмуховая ул., 15',
    latitude: 55.7600,
    longitude: 37.6300,
    created_at: new Date()
  },
  {
    id: '3',
    name: JSON.stringify({
      ru: 'Самбери',
      en: 'Sambury',
      zh: '桑伯里'
    }),
    address: 'Светланская ул., 29',
    latitude: 55.7532,
    longitude: 37.6225,
    created_at: new Date()
  }
];

export const prices: Price[] = [
  // Птичье молоко (id: 1)
  { id: '1', product_id: '1', store_id: '1', price: 799, updated_at: new Date() },
  { id: '2', product_id: '1', store_id: '2', price: 820, updated_at: new Date() },
  { id: '3', product_id: '1', store_id: '3', price: 790, updated_at: new Date() },
  // Алёнка (id: 2)
  { id: '4', product_id: '2', store_id: '1', price: 179, updated_at: new Date() },
  { id: '5', product_id: '2', store_id: '2', price: 190, updated_at: new Date() },
  { id: '6', product_id: '2', store_id: '3', price: 175, updated_at: new Date() },
  // Форель (id: 3)
  { id: '7', product_id: '3', store_id: '1', price: 513, updated_at: new Date() },
  { id: '8', product_id: '3', store_id: '2', price: 530, updated_at: new Date() },
  { id: '9', product_id: '3', store_id: '3', price: 499, updated_at: new Date() },
  // Коркунов (id: 4)
  { id: '10', product_id: '4', store_id: '1', price: 913, updated_at: new Date() },
  { id: '11', product_id: '4', store_id: '2', price: 930, updated_at: new Date() },
  { id: '12', product_id: '4', store_id: '3', price: 890, updated_at: new Date() },
  // Мёд (id: 5)
  { id: '13', product_id: '5', store_id: '1', price: 99, updated_at: new Date() },
  { id: '14', product_id: '5', store_id: '2', price: 110, updated_at: new Date() },
  { id: '15', product_id: '5', store_id: '3', price: 95, updated_at: new Date() },
  // Бородинский (id: 6)
  { id: '16', product_id: '6', store_id: '1', price: 89, updated_at: new Date() },
  { id: '17', product_id: '6', store_id: '2', price: 95, updated_at: new Date() },
  { id: '18', product_id: '6', store_id: '3', price: 85, updated_at: new Date() },
  // Краковская (id: 7)
  { id: '19', product_id: '7', store_id: '1', price: 199, updated_at: new Date() },
  { id: '20', product_id: '7', store_id: '2', price: 210, updated_at: new Date() },
  { id: '21', product_id: '7', store_id: '3', price: 195, updated_at: new Date() },
  // Зефир (id: 8)
  { id: '22', product_id: '8', store_id: '1', price: 80, updated_at: new Date() },
  { id: '23', product_id: '8', store_id: '2', price: 85, updated_at: new Date() },
  { id: '24', product_id: '8', store_id: '3', price: 78, updated_at: new Date() },
  // Добрый (id: 9)
  { id: '25', product_id: '9', store_id: '1', price: 169, updated_at: new Date() },
  { id: '26', product_id: '9', store_id: '2', price: 175, updated_at: new Date() },
  { id: '27', product_id: '9', store_id: '3', price: 165, updated_at: new Date() }
];

export const reviews: Review[] = [
  // Птичье молоко
  {
    id: '1',
    product_id: '1',
    author: '张丽',
    text: JSON.stringify({
      ru: 'Восхитительный вкус! Лучшие конфеты',
      en: 'Delicious taste! The best candies',
      zh: '美味极了！最好的糖果'
    }),
    rating: 5,
    date: new Date('2024-03-15')
  },
  {
    id: '2',
    product_id: '1',
    author: '王强',
    text: JSON.stringify({
      ru: 'Классика! Всегда покупаю эти конфеты',
      en: 'Classic! I always buy these candies',
      zh: '经典！我总是买这些糖果'
    }),
    rating: 5,
    date: new Date('2024-03-10')
  },
  {
    id: '3',
    product_id: '1',
    author: '刘洋',
    text: JSON.stringify({
      ru: 'Нежнейшее суфле, тает во рту!',
      en: 'The most delicate souffle, melts in your mouth!',
      zh: '最柔软的舒芙蕾，入口即化！'
    }),
    rating: 5,
    date: new Date('2024-03-05')
  },
  // Алёнка
  {
    id: '4',
    product_id: '2',
    author: '张丽',
    text: JSON.stringify({
      ru: 'Любимый шоколад! Нежный и вкусный',
      en: 'Favorite chocolate! Tender and delicious',
      zh: '最喜欢的巧克力！细腻美味'
    }),
    rating: 5,
    date: new Date('2024-03-14')
  },
  {
    id: '5',
    product_id: '2',
    author: '王强',
    text: JSON.stringify({
      ru: 'Хороший молочный шоколад за свою цену',
      en: 'Good milk chocolate for its price',
      zh: '价格合理的优质牛奶巧克力'
    }),
    rating: 4,
    date: new Date('2024-03-09')
  },
  {
    id: '6',
    product_id: '2',
    author: '刘洋',
    text: JSON.stringify({
      ru: 'Классический вкус Алёнки! Всегда беру',
      en: 'Classic Alyonka taste! I always take it',
      zh: '经典的阿廖卡口味！我总是买'
    }),
    rating: 5,
    date: new Date('2024-03-03')
  },
  // Форель
  {
    id: '7',
    product_id: '3',
    author: '王强',
    text: JSON.stringify({
      ru: 'Отличное качество! Форель свежая и нежная',
      en: 'Excellent quality! Fresh and tender trout',
      zh: '品质优良！鳟鱼新鲜嫩滑'
    }),
    rating: 5,
    date: new Date('2024-03-13')
  },
  {
    id: '8',
    product_id: '3',
    author: '刘静',
    text: JSON.stringify({
      ru: 'Очень вкусная, но цена высоковата',
      en: 'Very tasty, but the price is high',
      zh: '很好吃，但价格偏高'
    }),
    rating: 4,
    date: new Date('2024-03-08')
  },
  {
    id: '9',
    product_id: '3',
    author: '张丽',
    text: JSON.stringify({
      ru: 'Премиум качество! Лучшая форель в городе',
      en: 'Premium quality! The best trout in the city',
      zh: '优质品质！城里最好的鳟鱼'
    }),
    rating: 5,
    date: new Date('2024-03-02')
  },
  // Коркунов
  {
    id: '10',
    product_id: '4',
    author: '李娜',
    text: JSON.stringify({
      ru: 'Превосходные конфеты! Идеальный подарок',
      en: 'Excellent candies! Perfect gift',
      zh: '极好的糖果！完美的礼物'
    }),
    rating: 5,
    date: new Date('2024-03-12')
  },
  {
    id: '11',
    product_id: '4',
    author: '王强',
    text: JSON.stringify({
      ru: 'Лучшие конфеты на рынке! Всегда покупаю к празднику',
      en: 'The best candies on the market! I always buy for the holiday',
      zh: '市场上最好的糖果！过节总是买'
    }),
    rating: 5,
    date: new Date('2024-03-07')
  },
  {
    id: '12',
    product_id: '4',
    author: '张丽',
    text: JSON.stringify({
      ru: 'Вкусные, но дороговато',
      en: 'Delicious, but a bit expensive',
      zh: '好吃，但有点贵'
    }),
    rating: 4,
    date: new Date('2024-03-01')
  },
  // Мёд
  {
    id: '13',
    product_id: '5',
    author: '王芳',
    text: JSON.stringify({
      ru: 'Отличный мед! Натуральный и очень вкусный',
      en: 'Excellent honey! Natural and very tasty',
      zh: '极好的蜂蜜！天然美味'
    }),
    rating: 5,
    date: new Date('2024-03-11')
  },
  {
    id: '14',
    product_id: '5',
    author: '李伟',
    text: JSON.stringify({
      ru: 'Хороший продукт, рекомендую',
      en: 'Good product, I recommend',
      zh: '好产品，推荐'
    }),
    rating: 4,
    date: new Date('2024-03-06')
  },
  {
    id: '15',
    product_id: '5',
    author: '张丽',
    text: JSON.stringify({
      ru: 'Покупаю уже третий раз, качество неизменно высокое!',
      en: 'I buy it for the third time, the quality is consistently high!',
      zh: '第三次购买了，质量一直很好！'
    }),
    rating: 5,
    date: new Date('2024-02-28')
  },
  // Бородинский
  {
    id: '16',
    product_id: '6',
    author: '李娜',
    text: JSON.stringify({
      ru: 'Настоящий бородинский! Очень ароматный',
      en: 'Real Borodinsky! Very aromatic',
      zh: '真正的鲍罗金诺！非常香'
    }),
    rating: 5,
    date: new Date('2024-03-10')
  },
  {
    id: '17',
    product_id: '6',
    author: '王强',
    text: JSON.stringify({
      ru: 'Хороший ржаной хлеб, но кориандр чувствуется слишком сильно',
      en: 'Good rye bread, but the coriander is too strong',
      zh: '黑麦面包不错，但香菜味道太重'
    }),
    rating: 4,
    date: new Date('2024-03-05')
  },
  {
    id: '18',
    product_id: '6',
    author: '刘静',
    text: JSON.stringify({
      ru: 'Люблю этот хлеб! Покупаю постоянно',
      en: 'I love this bread! I buy it regularly',
      zh: '我喜欢这个面包！经常买'
    }),
    rating: 5,
    date: new Date('2024-02-29')
  },
  // Краковская
  {
    id: '19',
    product_id: '7',
    author: '张明',
    text: JSON.stringify({
      ru: 'Вкусная колбаса',
      en: 'Tasty sausage',
      zh: '美味的香肠'
    }),
    rating: 4,
    date: new Date('2024-03-09')
  },
  {
    id: '20',
    product_id: '7',
    author: '王芳',
    text: JSON.stringify({
      ru: 'Хорошая колбаса, но немного соленая',
      en: 'Good sausage, but a bit salty',
      zh: '香肠不错，但有点咸'
    }),
    rating: 4,
    date: new Date('2024-03-04')
  },
  {
    id: '21',
    product_id: '7',
    author: '刘洋',
    text: JSON.stringify({
      ru: 'Отличный вкус и аромат! Рекомендую',
      en: 'Excellent taste and aroma! I recommend',
      zh: '味道和香气都很棒！推荐'
    }),
    rating: 5,
    date: new Date('2024-02-27')
  },
  // Зефир
  {
    id: '22',
    product_id: '8',
    author: '李娜',
    text: JSON.stringify({
      ru: 'Нежный зефир, но немного сладковат',
      en: 'Delicate marshmallow, but a bit too sweet',
      zh: '棉花糖细腻，但有点太甜'
    }),
    rating: 4,
    date: new Date('2024-03-08')
  },
  {
    id: '23',
    product_id: '8',
    author: '陈杰',
    text: JSON.stringify({
      ru: 'Классический зефир, очень вкусный',
      en: 'Classic marshmallow, very tasty',
      zh: '经典棉花糖，非常好吃'
    }),
    rating: 5,
    date: new Date('2024-03-03')
  },
  {
    id: '24',
    product_id: '8',
    author: '刘静',
    text: JSON.stringify({
      ru: 'Воздушный и вкусный, детям очень понравился',
      en: 'Airy and tasty, the children really liked it',
      zh: '蓬松美味，孩子们非常喜欢'
    }),
    rating: 5,
    date: new Date('2024-02-26')
  },
  // Добрый
  {
    id: '25',
    product_id: '9',
    author: '李娜',
    text: JSON.stringify({
      ru: 'Освежающий напиток, приятный вкус',
      en: 'Refreshing drink, pleasant taste',
      zh: '清爽饮料，口感宜人'
    }),
    rating: 4,
    date: new Date('2024-03-07')
  },
  {
    id: '26',
    product_id: '9',
    author: '张明',
    text: JSON.stringify({
      ru: 'Покупаю постоянно, вся семья любит!',
      en: 'I buy it regularly, the whole family loves it!',
      zh: '经常买，全家都爱！'
    }),
    rating: 5,
    date: new Date('2024-03-02')
  },
  {
    id: '27',
    product_id: '9',
    author: '王芳',
    text: JSON.stringify({
      ru: 'Хороший сок, натуральный вкус',
      en: 'Good juice, natural taste',
      zh: '好果汁，天然味道'
    }),
    rating: 4,
    date: new Date('2024-02-25')
  }
];
