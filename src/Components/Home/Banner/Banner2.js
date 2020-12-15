import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Banner2 = () => {
  return (
    <div className="banner-2 d-flex justify-content-center align-items-center">
      <div>
        <h3>What we provide?</h3>
        <p>
          <FontAwesomeIcon icon={faAngleDoubleRight} /> Broiler Chicken
        </p>
        <p>
          <FontAwesomeIcon icon={faAngleDoubleRight} /> Broiler Eggs
        </p>
        <p>
          <FontAwesomeIcon icon={faAngleDoubleRight} /> Broiler Eggs
        </p>
        <p>
          <FontAwesomeIcon icon={faAngleDoubleRight} /> Broiler Eggs
        </p>
        <p>
          <FontAwesomeIcon icon={faAngleDoubleRight} /> Broiler Eggs
        </p>
      </div>
      <div>
        <img
          className="img-fluid p-5 m-5 rounded-circle"
          src="https://zootecnicainternational.com/wp-content/uploads/2020/02/chicks_and_ampule3-New-696x464.jpg"
          alt="fake provide"
        />
      </div>
    </div>
  );
};

export default Banner2;
