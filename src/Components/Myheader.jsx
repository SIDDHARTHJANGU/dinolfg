import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/svg/logo.svg";
import { Close, Open } from "./Mysvg";
import circle from "../assets/img/svg/button_before.svg";

const Myheader = () => {
  const [show, setShow] = useState(false);
  if (show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className=" min_vh_810 ">
      <nav>
        <Container>
          <div className=" d-flex align-items-center justify-content-between py_32">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <ul className={show ? "open" : ""}>
              <li>
                <a
                  href="#About Us"
                  className="ff_inter fs_15  fw_400 text-white line_hight_160 text-uppercase"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#Our Services"
                  className="ff_inter fs_15  fw_400 text-white line_hight_160 text-uppercase"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#Work with Us"
                  className="ff_inter fs_15  fw_400 text-white line_hight_160 text-uppercase"
                >
                  Work with Us
                </a>
              </li>
              <li>
                <a
                  href="#Blog"
                  className="ff_inter fs_15  fw_400 text-white line_hight_160 text-uppercase"
                >
                  Blog
                </a>
              </li>
              <div className=" d-flex align-items-center gap-2 d-sm-none  ">
                <img src={circle} alt="circle" />
                <a
                  href="#Get In Touch"
                  className="ff_inter fs_15  fw_400 text-white line_hight_160 text-uppercase"
                >
                  Get In Touch
                </a>
              </div>
            </ul>
            <div className=" d-flex align-items-center gap-2 d-none d-sm-block  ">
              <img src={circle} alt="circle" />
              <a
                href="#Get In Touch"
                className="ff_inter fs_15  fw_400 text-white line_hight_160 text-uppercase"
              >
                Get In Touch
              </a>
            </div>
            <button
              className="open d-lg-none navicon"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? <Close /> : <Open />}
            </button>
          </div>
        </Container>
      </nav>
      <div>
        <Container>
          <div className=" text-center mt_28">
            <h1 className="fs_76 fw_500 ff_inter text-white balancing_linehight">
              Balancing{" "}
              <span className=" d-block fs_74 mt-3">Crypto Markets</span>
            </h1>
            <p className=" pera_clr mt_31 fs_18 fw_400 ff_inter">
              Our fully automated proprietary quantitative trading software
              <span className=" d-lg-block ">
                {" "}
                provides 24/7 liquidity to 170+ crypto assets across 25+
              </span>
              centralized spot and derivative crypto exchanges.
            </p>
            <button className=" mt_41 get_btn fs_19 fw_500 ff_inter text-white">
              Get in touch
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Myheader;
