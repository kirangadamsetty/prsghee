import React  from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/bannerImages.css";
import {useNavigate} from "react-router-dom"
function HeroBanner({banners}) {  
   const navigate = useNavigate() 
   
  const handleNavClick = (path, sectionId) => {
  if (sectionId) {
    // If already on home page, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setExpanded(false);
      return;
    }
    // If not on home page, navigate first, then scroll after render
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100); // small delay to ensure the component is mounted
  } else {
    navigate(path);
    setExpanded(false);
  }
};


  return (
    <Carousel indicators={false} controls={false}>
      {banners && banners.map((banner, index) => (
        <Carousel.Item key={index} interval={1000}>
          <div className="banner-container" >
      <img src={banner.bgImage} alt={banner.heading} className="banner-image" style = {{marginTop:"100px"}}/>
      <div className="banner-overlay"></div>
      <div className="banner-text">
        <h1>{banner.heading}</h1>
        <p>{banner.description}</p>
       {banner.buttonText && <button onClick = {()=>handleNavClick("/", "products")} className="banner-btn shadow">{banner.buttonText}</button>}
      </div>
    </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroBanner;
