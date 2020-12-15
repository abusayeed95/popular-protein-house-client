import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Form, Modal, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AllContext } from "../../../App";
import "./ExclusiveProducts.css";
import ExProduct from "./ExProduct";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const ExclusiveProducts = () => {
  const [products, setProducts] = useContext(AllContext);
  const exclusive = products.slice(0, 3);
  const history = useHistory();

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBuyNow = () => {
    handleShow();
  };

  if (products.length > 0) {
    return (
      <React.Fragment>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please Give us Some Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleClose}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Phone Number" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email (if have)"
                />
              </Form.Group>
              <button className="secondary-btn" onClick={handleClose}>
                Close
              </button>
              <button type="submit" className="primary-btn">
                Submit
              </button>
            </Form>
          </Modal.Body>
        </Modal>
        <div className="exclusive-products p-md-5">
          <div className="d-flex justify-content-center align-items-center pb-md-5">
            <span className="before" />
            <h2 className="coffee">Exclusive Products</h2>
            <span className="after" />
          </div>
          <Row className="m-0 justify-content-center">
            {exclusive.map((product) => (
              <ExProduct
                xs={4}
                key={product.id}
                product={product}
                handleBuyNow={handleBuyNow}
              />
            ))}
          </Row>
          <br /> <br />
          <div className="d-flex justify-content-end">
            <button
              onClick={() => history.push("/products")}
              className="see-all-btn"
            >
              see all products <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <div className="loader-area d-flex justify-content-center align-items-center">
        <Loader type="Bars" color="#680000" height={80} width={80} />
      </div>
    );
  }
};

export default ExclusiveProducts;
