import React from "react";
import { Container } from "react-bootstrap";
import contact_ellips from "../assets/img/svg/contact_one.svg";
import contact_ellipstwo from "../assets/img/svg/contact_two.svg";

const ContactUs = () => {
  return (
    <div className=" position-relative pt_115 z-3">
      <div>
        <img
          className=" position-absolute z-n1 ellipsone"
          src={contact_ellips}
          alt="contact_ellips"
        />
        <img
          className=" position-absolute z-n1 ellipstwo"
          src={contact_ellipstwo}
          alt="contact_ellipstwo"
        />
      </div>
      <Container>
        <div className=" text-center">
          <h2 className=" ff_inter fw_500 fs_56 text-white">Contact Us</h2>
          <p className=" ff_inter fw_400 fs_18 about_para_clr mt-4">
            We are always open to discuss new value-adding partnerships. Do
            reach{" "}
            <span className=" d-md-block">
              out if you are an exchange or a project looking for liquidity; an
              algorithmic
            </span>{" "}
            <span className=" d-md-block ">
              trader or a software developer looking to improve the markets with
              us or
            </span>{" "}
            just have a great idea you can’t wait to share with us!
          </p>
          <button className=" mt_41 get_btn fs_19 fw_500 ff_inter text-white">
            Get in touch
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
