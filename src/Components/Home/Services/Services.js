import React from "react";

import { Col, Row } from "react-bootstrap";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faShippingFast,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services p-md-5">
      <div className="d-flex justify-content-center align-items-center">
        <span className="before" />
        <h2 className="coffee">SERVICES</h2>
        <span className="after" />
      </div>
      <Row className="m-0">
        <Col
          className="d-flex flex-column justify-content-center align-items-center p-5"
          xs={12}
          md={6}
          lg={4}
        >
          <FontAwesomeIcon size="3x" icon={faCrown} />
          <h4 className="py-2">Exclusive Products</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            assumenda, amet
          </p>
        </Col>
        <Col
          className="d-flex flex-column justify-content-center align-items-center p-5"
          xs={12}
          md={6}
          lg={4}
        >
          <FontAwesomeIcon size="3x" icon={faShippingFast} />
          <h4 className="py-2">Fastest Delivery</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            tenetur veniam
          </p>
        </Col>
        <Col
          className="d-flex flex-column justify-content-center align-items-center p-5"
          xs={12}
          md={6}
          lg={4}
        >
          <FontAwesomeIcon size="3x" icon={faSmile} />
          <h4 className="py-2">Customer Satisfaction</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            commodi provident,
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
