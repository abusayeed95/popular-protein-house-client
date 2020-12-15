import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import "./Admin.css";

const Admin = () => {
  // const handleAddAll = () => {
  //   fetch("https://secure-gorge-46592.herokuapp.com/products", {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //   }).then((res) => {
  //     if (res.statusCode === 200) {
  //       alert("done");
  //     } else {
  //       alert("error");
  //     }
  //   });
  // };
  return (
    <Tab.Container className="administration" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav className="flex-column align-items-center">
            <Nav.Item>
              <Nav.Link eventKey="first">Add Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">All Product</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">All Customer</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">hellow</Tab.Pane>
            <Tab.Pane eventKey="second">kellow</Tab.Pane>
            <Tab.Pane eventKey="third">jellow</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Admin;
