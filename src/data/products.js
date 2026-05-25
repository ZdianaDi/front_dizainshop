const products = [
  {
    id: 1,
    title: "Сумка Бабл",
    price: 5890,
    oldPrice: 11300,
    category: "Сумки",
    tags: ["Хит продаж", "Новинки"],
    images: ["/pc1.jpg", "/pc1.jpg", "/bag.png", "/bag.png"],
    options: [
      {
        name: "Фурнитура",
        values: ["Серебро", "Золото"],
      },
      {
        name: "Цвет",
        values: ["Шоколадный", "Черный", "Молочный"],
      },
    ],
    description: "Вязаная сумка ручной работы.",
  },

  {
    id: 2,
    title: "Серьги ручной работы",
    price: 2200,
    oldPrice: 3200,
    category: "Украшения",
    tags: ["Украшения"],
    images: ["/pc2.jpg"],
    options: [
      {
        name: "Фурнитура",
        values: ["Серебро", "Золото"],
      },
    ],
    description: "Украшение ручной работы.",
  },
  {
    id: 3,
    title: "Браслeт Лисенок",
    price: 2900,
    oldPrice: 3600,
    category: "Украшения",
    tags: ["Украшения"],
    images: ["/goldbr.jpg"],
    options: [
      {
        name: "Фурнитура",
        values: ["Серебро", "Золото"],
      },
    ],
    description: "Украшение ручной работы.",
  },
  {
    id: 4,
    title: "Колье красное",
    price: 7100,
    oldPrice: null,
    category: "Украшения",
    tags: ["Украшения"],
    images: ["/red_jew.jpg"],
    options: [
      {
        name: "Фурнитура",
        values: ["Серебро", "Золото"],
      },
    ],
    description: "Украшение ручной работы.",
  },
  {
    id: 5,
    title: "Комплект [Любовь]",
    price: 6900,
    oldPrice: 9000,
    category: "Украшения",
    tags: ["Украшения"],
    images: ["/comp2.jpg"],
    options: [
      {
        name: "Фурнитура",
        values: ["Серебро", "Золото"],
      },
      {
        name: "Размер",
        values: ["Станадрт", "L"],
      },
    ],
    description: "Украшение ручной работы.",
  },
  {
    id: 6,
    title: "Комплект [Гжель]",
    price: 6900,
    oldPrice: 9000,
    category: "Украшения",
    tags: ["Украшения"],
    images: ["/comp1.jpg"],
    options: [
      {
        name: "Фурнитура",
        values: ["Серебро", "Золото"],
      },
      {
        name: "Размер",
        values: ["Станадрт", "L"],
      },
    ],
    description: "Украшение ручной работы.",
  },
  {
    id: 7,
    title: "Комплект [Нежность]",
    price: 6900,
    oldPrice: 9000,
    category: "Украшения",
    tags: ["Украшения"],
    images: ["/comp3.jpg"],
    options: [
      {
        name: "Фурнитура",
        values: ["Серебро", "Золото"],
      },
      {
        name: "Размер",
        values: ["Станадрт", "L"],
      },
    ],
    description: "Украшение ручной работы.",
  },
  {
    id: 8,
    title: "Комплект [Сладость]",
    price: 6900,
    oldPrice: 9000,
    category: "Украшения",
    tags: ["Украшения"],
    images: ["/comp4.jpg"],
    options: [
      {
        name: "Фурнитура",
        values: ["Серебро", "Золото"],
      },
      {
        name: "Размер",
        values: ["Станадрт", "L"],
      },
    ],
    description: "Украшение ручной работы.",
  },
  {
    id: 9,
    title: "Сумка Макси",
    price: 8700,
    oldPrice: null,
    category: "Сумки",
    tags: ["Сумки"],
    images: ["/sred.jpg"],
    options: [
      {
        name: "Фурнитура",
        values: ["Серебро", "Золото"],
      },
      {
        name: "Цвет",
        values: ["Красный", "Шоколад"],
      },
    ],
    description: "Сумка ручной работы.",
  },
  {
    id: 10,
    title: "Сумка/Украшение на заказ",
    price: 2000,
    oldPrice: null,
    category: "НА ЗАКАЗ",
    tags: ["НА ЗАКАЗ"],
    images: ["/castom.jpg"],
  },
{
  id: "gift-certificate",
  title: "Подарочный сертификат",
  category: "Сертификат",
  price: 2000,
  images: ["/gift.png"],
  type: "certificate",
},
{
  id: 11,
  title: "Персональная консультация стилиста",
  price: 1000,
  category: "На заказ",
  categories: ["На заказ", "Украшения"],
  images: ["/style.png"],
  type: "stylist",
  isNew: true,
  description:
    "Персональная помощь в подборе украшений и аксессуаров под ваш образ, внешность, стиль жизни и повод. Депозит 1000₽ полностью учитывается в стоимости будущего заказа.",
}
];

export default products;