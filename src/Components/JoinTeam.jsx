import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ellips from "../assets/img/svg/joinus.svg";

const JoinTeam = () => {
  return (
    <div className=" pt_116 ">
      <Container>
        <Row className=" px-xl-5 d-flex justify-content-between position-relative z-3">
          <div>
            <img
              className=" position-absolute z-n1  ellips"
              src={ellips}
              alt="ellips"
            />
          </div>
          <Col md={5}>
            <h2 className="fs_53 ff_inter  fw_500 text-white">
              Join <span className=" d-block">Gravity Team</span>
            </h2>
          </Col>
          <Col md={6}>
            <p className=" fw_400  fs_19 ff_inter  about_para_clr">
              Join our community of innovators, problem solvers and{" "}
              <span className=" d-lg-block">
                owners who apply scientific discovery techniques to
              </span>{" "}
              make crypto markets a better place for everyone.
            </p>
            <p className=" fw_400  fs_19 ff_inter  about_para_clr mt-4">
              As we emphasize it in our name – Gravity Team, we are{" "}
              <span className=" d-lg-block">
                {" "}
                a team. A team of bright, talented people, each masters
              </span>{" "}
              <span className=" d-lg-block">
                of their specialty, curious about the world and eager to{" "}
              </span>{" "}
              <span className=" d-lg-block">
                solve the new exciting cryptocurrency market problems,
              </span>{" "}
              build cool stuff and have fun whilst doing so!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JoinTeam;
