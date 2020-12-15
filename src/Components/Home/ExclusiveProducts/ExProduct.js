import React from "react";
import { Col } from "react-bootstrap";

const ExProduct = (props) => {
  const product = props.product;
  const handleBuyNow = props.handleBuyNow;
  return (
    <React.Fragment>
      <Col xs={12} md={6} lg={4}>
        <div className="product">
          <div className="img-box">
            <img className="img-fluid" src={product.img} alt={product.name} />
          </div>
          <h4 className="text-center my-2">{product.name}</h4>
          <p className="text-center">
            <strong>Price:</strong> {product.price} tk{" "}
            {product.availability ? `(in stock)` : "(out of stock)"}
          </p>
          <p className="text-center m-2">{product.description}</p>
          <div className="d-flex justify-content-center">
            <button onClick={handleBuyNow} className="secondary-btn">
              Buy Now
            </button>
          </div>
        </div>
        {/* <div className="exclusive-carousel d-flex justify-content-center">
        <div className="img">
          <img className="img-fluid" src={product.img} alt={product.name} />
        </div>
      </div> */}
      </Col>
    </React.Fragment>
  );
};

export default ExProduct;
