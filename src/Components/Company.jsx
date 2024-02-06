import React from "react";
import { Container } from "react-bootstrap";
import slider_arrowone from "../assets/img/svg/slider_arrow.svg";

const Company = () => {
  return (
    <div>
      <Container>
        <div className=" text-center">
          <h1 className=" fs_57 ff_inter fw_500 text-white">
            We are in a good company
          </h1>
          <p className=" ff_inter fs_20 fw_400 text-white mt-4">
            Our partnerships have delivered great value to our projects and
            <span className=" d-md-block">
              {" "}
              we’re happy to share some of their feedback below
            </span>
          </p>
          <div className=" d-flex  justify-content-center gap_32">
            <img
              className="slider_arrow"
              src={slider_arrowone}
              alt="slider_arrowone"
            />
            <img src={slider_arrowone} alt="slider_arrowone" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Company;
