import React from "react";
import BannerCarousel from "../Carousel/BannerCarousel";
import ExclusiveProducts from "../ExclusiveProducts/ExclusiveProducts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <React.Fragment>
      <BannerCarousel />
      <ExclusiveProducts />
      <Services />
    </React.Fragment>
  );
};

export default Home;
