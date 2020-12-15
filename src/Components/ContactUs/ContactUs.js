import React from "react";

import "./ContactUs.css";
import logo from "../../assets/logo.png";

const ContactUs = () => {
  return (
    <div className="contact-us p-5 d-flex flex-column justify-content-center align-items-center">
      <img height="100px" src={logo} alt="" />
      <h3>
        <strong>Propiter: </strong> Azizur Rahman Atik
      </h3>
      <p className="m-0">
        <strong>Mobile: </strong>
        <a href="tel:+8801711181323">+8801711181323</a>
      </p>
      <p className="mb-0">
        <strong>Email: </strong>
        <a href="mailto:sayeedsayem@gmail.com">azizuratik@gmail.com</a>
      </p>
      <p>
        <strong>Location: </strong>
        Balichor, Barlekha, Moulvibazar
      </p>
    </div>
  );
};

export default ContactUs;
