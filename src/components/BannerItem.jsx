
import React from "react";
import "../styles/bannerImages.css";

function BannerItem({ heading, description, buttonText, bgImage }) {
  return (
    <div className="banner-container">
      <img src={bgImage} alt={heading} className="banner-image" />
      <div className="banner-overlay"></div>
      <div className="banner-text">
        <h1>{heading}</h1>
        <p>{description}</p>
        <button className="banner-btn shadow">{buttonText}</button>
      </div>
    </div>
  );
}

export default BannerItem;
