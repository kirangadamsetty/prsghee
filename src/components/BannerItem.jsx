
import React from "react";

function BannerItem({ heading, description, buttonText, bgImage }) {
  return (
    <div className="banner-container">
      <img src={bgImage} alt={heading} className="banner-image" />
      <div className="banner-overlay"></div>
      <div className="banner-text">
        <h1>{heading}</h1>
        <p>{description}</p>
       {buttonText && <button className="banner-btn shadow">{buttonText}</button>}
      </div>
    </div>
  );
}

export default BannerItem;
