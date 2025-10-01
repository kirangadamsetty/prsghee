import "../styles/bottomBanner.css";
import {useNavigate} from "react-router-dom"
import freegheeimage from "../assets/freegheeimage.png"
function BottomBanner() {
    const navigate = useNavigate()
  return (
    <section className="bottom-banner" >
      <h2 className="bottom-banner-title mb-5" data-aos="fade-up">Our Commitment to Quality</h2>

      <div className="bottom-banner-content">
        <div className="bottom-banner-image ">
          <img src={freegheeimage} alt="Dairy farm" />
        </div>
        <div className="bottom-banner-text">
          <h4 className="small-heading">Trusted for Generations</h4>
          <h1 className="main-heading">Delivering Pure & Authentic Taste</h1>
          <p className="description">
            We believe that true quality comes from purity and care. From sourcing the finest milk to following traditional methods, every step of our process is designed to preserve the natural goodness of ghee. With a perfect balance of taste, nutrition, and authenticity, we ensure that every product you receive carries the richness of tradition and the trust of our brand.
          </p>
          <button onClick = {()=>navigate("/about")} className="banner-btn shadow">Explore More</button>
        </div>
      </div>
    </section>
  );
}

export default BottomBanner;
