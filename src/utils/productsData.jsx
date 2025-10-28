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
    name: "Buffalo Ghee Tin",
    desc: "Rich and aromatic buffalo ghee packed in a large can, perfect for bulk use in homes and functions.",
    price: "₹9600 - 15kg",
    quantity: [{ "5kg": 3400 }, { "15kg": 9600 }],
    img: buffalocan,
  },

  {
    id: 2,
    name: "Buffalo Ghee Jar",
    desc: "Pure buffalo ghee stored in a handy jar, ideal for daily cooking, frying, or adding authentic taste to food.",
    price: "₹400 - 500ml",
    quantity: [{ "500ml": 400 }, { "200ml": 160 }],
    img: buffalobox,
  },

  {
    id: 3,
    name: "Buffalo Ghee Pouch",
    desc: "Fresh buffalo ghee in a convenient pouch, easy to use and perfect for households looking for freshness daily.",
    price: "₹700 - 1 Liter ",
    quantity: [{ "1 liter": 700 }, { "500ml": 350 }],
    img: buffalopacket,
  },

  {
    id: 4,
    name: "Cow Ghee Tin",
    desc: "Premium cow ghee in a large-size can, wholesome and nutritious, ideal for families and festive cooking.",
    price: "₹9400 - 15kg",
    quantity: [{ "5kg": 3200 }, { "15kg": 9400 }],
    img: cowcan,
  },

  {
    id: 5,
    name: "Cow Ghee Jar",
    desc: "Delicious and healthy cow ghee packed in a compact jar, perfect for everyday cooking and flavoring dishes.",
    price: "₹400 - 500ml",
    quantity: [{ "500ml": 400 }, { "200ml": 160 }],
    img: cowgheebox,
  },

  {
    id: 6,
    name: "Cow Ghee Pouch",
    desc: "Pure cow ghee in a lightweight pouch, easy to store and use, making your meals rich and flavorful anytime.",
    price: "₹700 - 1 Liter",
    quantity: [{ "1 liter": 700 }, { "500ml": 400 }],
    img: cowpacket,
  },

  {
    id: 7,
    name: "Paneer",
    desc: "Soft and fresh paneer made from pure milk, perfect for curries, snacks, and a variety of traditional recipes.",
    price: "₹500 - 1kg",
    quantity: [{ "1kg": 500 }, { "500gm": 250 }],
    img: panner,
  },
];
