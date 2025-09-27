import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gheebox from "../assets/buffalogheefolder/gheebox.png"
import gheepacket from "../assets/buffalogheefolder/gheepacket.png"
import cowgheebox from "../assets/cowgheefolder/cowbox.png" 
import cowgheepacket from "../assets/cowgheefolder/cowpacket.png"
import "../styles/productoverview.css"
const ProductOverview = () => {
  return (
    <section className = "bg-body-secondary">
          <h2 className="bottom-banner-title pt-5 text-center">Our Ghee Varieties</h2>

    <div className="container ">
      <div className="row align-items-center flex-lg-row-reverse">
        <div className="col-lg-6 mb-lg-0 text-center">
          <img
              src={gheepacket}
              alt="Product 2"
              className="img-fluid product-overview-image d-none d-xxl-inline"
            />
            <img
              src={gheebox}
              alt="Product 2"
              className="img-fluid product-overview-image "
            />
            
        </div>
        <div className="col-lg-6">
          <h2 style={{ color: "#437459",fontWeight:"600" }}>Pure Cow Ghee light & Digestible</h2>
          <p>
Our Pure Cow Ghee is made from fresh, high-quality cow’s milk using traditional, time-honored methods that preserve its natural nutrients and authentic flavor. Light and easily digestible, it supports a healthy digestive system while adding a rich, aromatic taste to every meal. Whether used for cooking, drizzling over warm dishes, or in your daily diet, this ghee enhances flavors naturally without overpowering them. Packed with essential vitamins and healthy fats, it nourishes the body, promotes overall wellness, and is gentle enough for all ages. With every spoonful, enjoy the perfect blend of purity, taste, and nutrition, making it an indispensable part of a wholesome, balanced lifestyle.          </p>
          {/* <button className="btn shadow" style={{ backgroundColor: "#437459", color: "white" }}>
            Learn More
          </button> */}
        </div>
      </div>


      <div className="row align-items-center pb-4 ">
        <div className="col-lg-6 mb-lg-0 text-center">
           
            <img
              src={cowgheebox}
              alt="Product 1"
              className="img-fluid product-overview-image"
            />
            <img
              src={cowgheepacket}
              alt="Product 1"
              className="img-fluid product-overview-image cowpacket d-none d-xxl-inline"
            />
          </div>
        <div className="col-lg-6">
          <h2 style={{ color: "#437459",fontWeight:"600" }}>Rich Buffalo Ghee Thick & Flavorful</h2>
          <p>
Our Rich Buffalo Ghee is crafted from premium buffalo milk, resulting in a thick, creamy texture and a deeply satisfying flavor. Perfect for preparing sweets, festive dishes, or traditional recipes, it adds a luxurious richness to every meal. While indulgent in taste, it retains all the essential nutrients of pure ghee, making it both wholesome and delicious. Whether used for cooking, drizzling, or enhancing your favorite recipes, this ghee brings a bold, authentic flavor that elevates every dish while supporting a nourishing, healthy lifestyle.          </p>
          {/* <button className="btn shadow" style={{ backgroundColor: "#437459", color: "white" }}>
            Learn More
          </button> */}
        </div>
      </div>

    
    </div>
    </section>
  );
};

export default ProductOverview;
