import React from "react";
import Carousel from "react-bootstrap/Carousel";
import BannerItem from "./BannerItem";


function HeroBanner({banners}) {
  return (
    <Carousel indicators={false} controls={false}>
      {banners && banners.map((banner, index) => (
        <Carousel.Item key={index} interval={1000}>
          <BannerItem
            heading={banner.heading}
            description={banner.description}
            buttonText={banner.buttonText}
            bgImage={banner.bgImage}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroBanner;
