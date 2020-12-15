import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";

import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts p-md-5">
      <div className="d-flex justify-content-center align-items-center">
        <span className="before" />
        <h2 className="coffee">Contacts</h2>
        <span className="after" />
      </div>
      <Row className="m-0 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <div className="p-md-5 d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon size="3x" icon={faPhone} />
            <p className="pt-md-2 mb-0">
              <strong>Azizur Rahman Atik</strong>
            </p>
            <p>
              <strong>Mobile:</strong>
              <a href="tel:+8801711181323">+8801711181323</a>
            </p>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="p-md-5 d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon size="3x" icon={faMapMarkerAlt} />
            <p className="pt-md-2 mb-0">
              <strong>Balichor, Barlekha, Moulvibazar</strong>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contacts;
