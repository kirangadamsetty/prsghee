import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/bannerImages.css";


function HeroBanner2({banners}) {
    
  return (
    <Carousel indicators={false} controls={false}>
      {banners && banners.map((banner, index) => (
        <Carousel.Item key={index} interval={1000}>
          <div className="banner-container" style = {{height:"400px", backgroundPosition:"center center"}}>
      <img src={banner.bgImage} alt={banner.heading} className="banner-image" />
      <div className="banner-overlay"></div>
      <div className="banner-text">
        <h1>{banner.heading}</h1>
        <p>{banner.description}</p>
       {banner.buttonText && <button className="banner-btn shadow">{banner.buttonText}</button>}
      </div>
    </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroBanner2;
