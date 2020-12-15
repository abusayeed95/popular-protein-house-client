import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{ height: "54vh" }}
      className="p-5 m-5 d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="text-danger font-weight-bolder display-3">
        404:Not Found
      </h1>
      <h4>
        Back to <Link to="/">Home</Link>
      </h4>
    </div>
  );
};

export default NotFound;
