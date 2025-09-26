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
            Our Cow Ghee is made from the freshest cow’s milk, following traditional methods to preserve natural goodness. It is light, easy to digest, and rich in nutrients, making it perfect for everyday cooking, enhancing flavor, and promoting a healthy lifestyle.
          </p>
          <button className="btn shadow" style={{ backgroundColor: "#437459", color: "white" }}>
            Learn More
          </button>
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
            Buffalo Ghee is crafted from high-quality buffalo milk, giving it a thicker texture and a richer taste. Ideal for preparing sweets, special dishes, or traditional recipes, it delivers a bold flavor while retaining all the essential nutrients of pure ghee.
          </p>
          <button className="btn shadow" style={{ backgroundColor: "#437459", color: "white" }}>
            Learn More
          </button>
        </div>
      </div>

    
    </div>
    </section>
  );
};

export default ProductOverview;
