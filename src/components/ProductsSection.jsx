import React from "react";
import buffalocan from "../assets/productimages/buffalo-can.png"
import buffalopacket from "../assets/productimages/buffalo-packet.png"
import buffalobox from "../assets/productimages/buffalo-box.png"
import cowcan from "../assets/productimages/cow-can.png"
import cowgheebox from "../assets/productimages/cow-box.png"
import cowpacket from "../assets/productimages/cow-packet.png"
import "../styles/productssection.css"
const products = [
  {
    id: 1,
    name: "Buffalo Ghee",
    desc: "Pure and organic milk from trusted farms.",
    price: "₹12500 (15kg)",
    img: buffalocan
  },

  {
    id: 2,
    name: "Buffalo Ghee",
    desc: "Soft and fresh paneer, perfect for cooking.",
    price: "₹250 / kg",
    img: buffalobox
  },

  {
    id: 3,
    name: "Buffalo Ghee",
    desc: "Traditional clarified butter with rich aroma.",
    price: "₹415 (500ml)",
    img: buffalopacket
  },

  {
    id: 4,
    name: "Cow Ghee",
    desc: "Creamy curd made from farm fresh milk.",
    price: "₹12000 (15kg)",
    img: cowcan
  },

  {
    id: 5,
    name: "ButtCow Gheeer",
    desc: "Rich and smooth butter for daily use.",
    price: "₹12000 (15kg)",
    img: cowgheebox
  },
  
  {
    id: 6,
    name: "Cow Ghee",
    desc: "Delicious cheese for sandwiches & pizzas.",
    price: "₹415 (500ml)",
    img: cowpacket
  }
];

function ProductsSection() {
  return (
    <section className="container my-5 ">
      <h2 className="text-center mb-4" style={{ color: "#437459", fontWeight:"bold" }}>
        Our Products
      </h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 border-0">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body ">
                <h5 className="card-title" style={{ color: "#437459" }}>
                  {product.name}
                </h5>
                <p className="card-text">{product.desc}</p>
                <p className="fw-bold">{product.price}</p>
                <button className="btn shadow" style={{ background: "#437459", color: "white" }}>
            Add to Cart
          </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
