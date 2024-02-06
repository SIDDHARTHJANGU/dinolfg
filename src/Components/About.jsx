import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className=" pb_65">
      <Container>
        <div className=" text-center">
          <h2 className=" fs_56 fw_500  ff_inter text-white about_linehight">
            About Gravity Team
          </h2>
          <p className="fs_20 ff_inter  fw_400 about_para_clr mt_24 ">
            At Gravity Team, we are on the mission to balance the supply{" "}
            <span className=" d-lg-block">
              and demand across crypto markets worldwide. We are a crypto
            </span>{" "}
            <span className=" d-lg-block">
              native market maker founded by traders, developers, and
            </span>{" "}
            <span className=" d-lg-block">
              {" "}
              innovators who are strong believers and supporters of the future
            </span>{" "}
            of decentralization and digital assets.
          </p>
        </div>
        <Row className=" px-5 pt_65 ">
          <Col lg={3} md={4} sm={6}>
            <div className=" text-center bg_grident">
              <p className="fs_32  fw_500 ff_inter text-white">~$100 billion</p>
              <p className=" ff_inter fs_18 fw_400 about_para_clr">
                cumulative trading{" "}
                <span className=" d-block">volume to date</span>
              </p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <div className=" text-center bg_grident">
              <p className="fs_32  fw_500 ff_inter text-white">0.8%</p>
              <p className=" ff_inter fs_18 fw_400 about_para_clr">
                of the global crypto{" "}
                <span className=" d-block">spot trading volume</span>
              </p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <div className=" text-center bg_grident">
              <p className="fs_32  fw_500 ff_inter text-white">~30</p>
              <p className=" ff_inter fs_18 fw_400 about_para_clr">
                Gravity Teammates <span className=" d-block">(& growing)</span>
              </p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <div className=" text-center bg_grident ">
              <p className="fs_32  fw_500 ff_inter text-white">25+</p>
              <p className=" ff_inter fs_18 fw_400 about_para_clr">
                leading global and{" "}
                <span className=" d-block">local crypto exchanges</span>
              </p>
            </div>
          </Col>
        </Row>
        <Row className=" px-5 pb_ 65  under_line">
          <Col lg={3} md={4} sm={6} className=" ">
            <div className=" text-center bg_grident">
              <p className="fs_32  fw_500 ff_inter text-white">2017</p>
              <p className=" ff_inter fs_18 fw_400 about_para_clr">
                start, crypto-natives
              </p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <div className=" text-center bg_grident">
              <p className="fs_32  fw_500 ff_inter text-white">1,200+</p>
              <p className=" ff_inter fs_18 fw_400 about_para_clr">
                crypto-asset pairs
              </p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <div className=" text-center bg_grident">
              <p className="fs_32  fw_500 ff_inter text-white">24/7</p>
              <p className=" ff_inter fs_18 fw_400 about_para_clr">liquidity</p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <div className=" text-center bg_grident">
              <p className="fs_32  fw_500 ff_inter text-white">5 billion+</p>
              <p className=" ff_inter fs_18 fw_400 about_para_clr">
                trades done to date
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
