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
    desc: "Pure and organic milk from trusted farms.",
    price: "₹12200 - 15kg",
    quantity : [{"5kg": 3400}, {"15kg" : 12200}],
    img: buffalocan
  },

  {
    id: 2,
    name: "Buffalo Ghee Jar",
    desc: "Soft and fresh paneer, perfect for cooking.",
    price: "₹350 - 500ml",
    quantity: [{"500ml" : 350}, {"200ml": 170}],
    img: buffalobox
  },

  {
    id: 3,
    name: "Buffalo Ghee Pouch",
    desc: "Traditional clarified butter with rich aroma.",
    price: "₹650 - 1 Liter ",
    quantity : [{"1 liter" : 650}, {"500ml" : 320}],
    img: buffalopacket
  },

  {
    id: 4,
    name: "Cow Ghee Can",
    desc: "Creamy curd made from farm fresh milk.",
    price: "₹12000 - 15kg",
    quantity : [{"5kg": 3200}, {"15kg" : 12000}],
    img: cowcan
  },

  {
    id: 5,
    name: "ButtCow Ghee Jar",
    desc: "Rich and smooth butter for daily use.",
    price: "₹350 - 500ml",
    quantity: [{"500ml" : 350}, {"200ml": 170}],
    img: cowgheebox
  },
  
  {
    id: 6,
    name: "Cow Ghee Pouch",
    desc: "Delicious cheese for sandwiches & pizzas.",
    price: "₹650 - 1 Liter",
     quantity : [{"1 liter" : 650}, {"500ml" : 320}],
    img: cowpacket
  },
  {
    id: 7,
    name: "Panner",
    desc: "Delicious cheese for sandwiches & pizzas.",
    price: "₹650 - 1 Liter",
     quantity : [{"1kg" : 400}, {"500gm" : 200}],
    img: panner
  }
];



