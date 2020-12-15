import { Carousel } from "react-bootstrap";
import React from "react";
import Banner from "../Banner/Banner";
import "./BannerCarousel.css";
import Banner2 from "../Banner/Banner2";
import Banner3 from "../Banner/Banner3";

const BannerCarousel = () => {
  return (
    <Carousel controls={false} interval={3000} className="banner-carousel">
      <Carousel.Item>
        <Banner />
      </Carousel.Item>
      <Carousel.Item>
        <Banner2 />
      </Carousel.Item>
      <Carousel.Item>
        <Banner3 />
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerCarousel;
