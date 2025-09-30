import buffalocan from "../assets/productimages/buffalo-can.png"
import buffalopacket from "../assets/productimages/buffalo-packet.png"
import buffalobox from "../assets/productimages/buffalo-box.png"
import cowcan from "../assets/productimages/cow-can.png"
import cowgheebox from "../assets/productimages/cow-box.png"
import cowpacket from "../assets/productimages/cow-packet.png"
import panner from "../assets/productimages/panner_pic.png"

export const productsData = [
  {
    id: 1,
    name: "Buffalo Ghee Can",
    desc: "Rich and aromatic buffalo ghee packed in a large can, perfect for bulk use in homes and functions.",
    price: "₹12200 - 15kg",
    quantity: [{ "5kg": 3400 }, { "15kg": 12200 }],
    img: buffalocan,
  },

  {
    id: 2,
    name: "Buffalo Ghee Jar",
    desc: "Pure buffalo ghee stored in a handy jar, ideal for daily cooking, frying, or adding authentic taste to food.",
    price: "₹350 - 500ml",
    quantity: [{ "500ml": 350 }, { "200ml": 170 }],
    img: buffalobox,
  },

  {
    id: 3,
    name: "Buffalo Ghee Pouch",
    desc: "Fresh buffalo ghee in a convenient pouch, easy to use and perfect for households looking for freshness daily.",
    price: "₹650 - 1 Liter ",
    quantity: [{ "1 liter": 650 }, { "500ml": 320 }],
    img: buffalopacket,
  },

  {
    id: 4,
    name: "Cow Ghee Can",
    desc: "Premium cow ghee in a large-size can, wholesome and nutritious, ideal for families and festive cooking.",
    price: "₹12000 - 15kg",
    quantity: [{ "5kg": 3200 }, { "15kg": 12000 }],
    img: cowcan,
  },

  {
    id: 5,
    name: "Cow Ghee Jar",
    desc: "Delicious and healthy cow ghee packed in a compact jar, perfect for everyday cooking and flavoring dishes.",
    price: "₹350 - 500ml",
    quantity: [{ "500ml": 350 }, { "200ml": 170 }],
    img: cowgheebox,
  },

  {
    id: 6,
    name: "Cow Ghee Pouch",
    desc: "Pure cow ghee in a lightweight pouch, easy to store and use, making your meals rich and flavorful anytime.",
    price: "₹650 - 1 Liter",
    quantity: [{ "1 liter": 650 }, { "500ml": 320 }],
    img: cowpacket,
  },

  {
    id: 7,
    name: "Paneer",
    desc: "Soft and fresh paneer made from pure milk, perfect for curries, snacks, and a variety of traditional recipes.",
    price: "₹400 - 1kg",
    quantity: [{ "1kg": 400 }, { "500gm": 200 }],
    img: panner,
  },
];
