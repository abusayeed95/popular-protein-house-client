import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../../assets/logo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer yellow">
      <Row className="m-0 justify-content-center align-items-center">
        <Col xs={6} md={3}>
          <div>
            <img className="img-fluid" src={logo} alt="logo" />
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="p-md-3 d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon size="2x" icon={faPhone} />
            <p className="pt-md-2 mb-0">Azizur Rahman Atik</p>
            <p>
              Mobile:
              <a href="tel:+8801711181323">+8801711181323</a>
            </p>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="p-md-3 d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon size="2x" icon={faMapMarkerAlt} />
            <p className="pt-md-2 mb-0">Balichor, Barlekha </p>
            <p> Moulvibazar, Sylhet</p>
          </div>
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center"
          xs={6}
          md={3}
        >
          <ul>
            <li>
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://youtube.com">
                <FontAwesomeIcon icon={faYoutube} /> YouTube
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <div className="text-center text-muted">
        <small>
          &#169; All rights reserved. Designed and Developed By{" "}
          <a className="text-muted" href="http://facebook.com/abusayeed95">
            Sayeed Sayem
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
