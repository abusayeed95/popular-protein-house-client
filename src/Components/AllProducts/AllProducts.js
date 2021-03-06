import React, { useContext } from "react";
import { Form, Modal, Row } from "react-bootstrap";
import { AllContext } from "../../App";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./AllProducts.css";
import Products from "./Products";

const AllProducts = () => {
  const [show, setShow] = React.useState(false);
  const [products] = useContext(AllContext);

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
        <Row className="m-0 justify-content-center">
          {products.map((product) => (
            <Products
              xs={4}
              key={product.id}
              product={product}
              handleBuyNow={handleBuyNow}
            />
          ))}
        </Row>
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

export default AllProducts;
