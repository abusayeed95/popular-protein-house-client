import React from "react";

import { Col, Row } from "react-bootstrap";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner d-flex justify-content-center align-items-center">
      {/* <Row className="m-0 p-5 justify-content-center align-items-center">
        <Col className="justify-content-center align-items-center" xs={6}>
          <div className="pr-5 mr-5">
            <h1>
              <span className="font-weight-bold">Popular</span> <br />
              Protein House
            </h1>
            <p>
              It's shop of popular group which provide broiler chicken, broilers
              eggs, turkey, turkey eggs, medication for for farms, etc. the
              propiter of this shop is Azizur Rahman Atik. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Voluptatem, maiores! Lorem
              ipsum dolor sit amet.
            </p>
            <a href="tel:+8801786230995" className="secondary-btn">
              Call Now
            </a>
            <button className="primary-btn">Learn More</button>
          </div>
        </Col>
        <Col xs={6}>
          <div className="banner-img">
            <img
              className="img-fluid"
              src="https://assets.centralindex.com/W/48/790761a5e8457b07a287c87985ef90f3.jpg"
              alt="banner"
            />
          </div>
        </Col>
      </Row> */}
      <div className="banner-inner">
        <div>
          <h1>
            <span className="font-weight-bold">Popular</span> <br />
            Protein House
          </h1>
          <p>
            It's shop of popular group which provide broiler chicken, broilers
            eggs, turkey, turkey eggs, medication for for farms, etc. the
            propiter of this shop is Azizur Rahman Atik. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Voluptatem, maiores! Lorem ipsum
            dolor sit amet.
          </p>
          <a href="tel:+8801786230995" className="secondary-btn">
            Call Now
          </a>
          <button className="primary-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
