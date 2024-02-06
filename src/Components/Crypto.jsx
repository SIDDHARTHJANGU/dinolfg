import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Arrows } from "./Mysvg";
import lines from "../assets/img/svg/span_before.svg";
import project from "../assets/img/png/projects.webp";
import mobile from "../assets/img/png/mobile.webp";
import bithumb from "../assets/img/svg/bithumb.svg";
import bitstamp from "../assets/img/svg/bitstamp.svg";
import bitbank from "../assets/img/svg/bitbank.svg";
import binance from "../assets/img/svg/binance.svg";
import Coinbase from "../assets/img/svg/coinbase.svg";

const Crypto = () => {
  return (
    <div className="pt_129">
      <Container>
        <div className=" text-center">
          <h2 className=" ff_inter fs_56 fw_500  text-white">
            Crypto Market Making
          </h2>
          <p className=" ff_inter fs_20 fw_400 about_para_clr mt-4">
            We are a global crypto liquidity provider and algorithmic market
            <span className=" d-lg-block">
              {" "}
              maker. We trade digital assets listed on Centralized Exchanges in
            </span>
            over 15 countries worldwide.
          </p>
        </div>
        <Row className=" px-lg-5  justify-content-between align-items-center pt_122">
          <Col md={6}>
            <p className=" fw_400 fs_36 ff_inter text-white">
              Market Making for{" "}
              <span className=" d-lg-block"> Crypto Projects</span>
            </p>
            <p className=" fw_700 ff_inter fs_20 text-white mt-4">
              Accelerate your token’s journey by{" "}
              <span className=" d-lg-block">boosting its liquidity</span>
            </p>
            <p className=" fw_400 ff_inter fs_20 about_para_clr mt-3">
              We invest in building long-term,{" "}
              <span className=" d-lg-block">
                sustainable relationships and support our
              </span>{" "}
              <span className=" d-lg-block">
                projects in their growth journey with our
              </span>{" "}
              services, industry expertise and network.
            </p>
            <div className=" position-relative">
              <button className=" fw_400 ff_inter fs_18 text-white learn_btn">
                Learn more <Arrows />
              </button>
              <img
                className=" position-absolute bottom-0 start-0"
                src={lines}
                alt="lines"
              />
            </div>
          </Col>
          <Col md={6}>
            <div>
              <img className=" w-100" src={project} alt="project" />
            </div>
          </Col>
        </Row>
        <Row className=" px-lg-0  justify-content-between align-items-center pt_55">
          <Col md={6}>
            <div>
              <img className=" w-100" src={mobile} alt="mobile" />
            </div>
          </Col>
          <Col md={5}>
            <p className=" fw_400 fs_36 ff_inter text-white">
              Market Making for{" "}
              <span className=" d-lg-block"> Crypto Exchanges</span>
            </p>
            <p className=" fw_700 ff_inter fs_20 text-white mt-4">
              Accelerate your token’s journey by{" "}
              <span className=" d-lg-block">boosting its liquidity</span>
            </p>
            <p className=" fw_400 ff_inter fs_20 about_para_clr mt-3">
              We invest in building long-term,{" "}
              <span className=" d-lg-block">
                sustainable relationships and support our
              </span>{" "}
              <span className=" d-lg-block">
                projects in their growth journey with our
              </span>{" "}
              services, industry expertise and network.
            </p>
            <div className=" position-relative">
              <button className=" fw_400 ff_inter fs_18 text-white learn_btn">
                Learn more <Arrows />
              </button>
              <img
                className=" position-absolute bottom-0 start-0"
                src={lines}
                alt="lines"
              />
            </div>
          </Col>
        </Row>
        <Row className=" px-xl-5  justify-content-between align-items-center pt_122">
          <Col md={7}>
            <p className=" fw_500 fs_60 ff_inter text-white">
              Our Partners <span className=" d-lg-block"> & Friends</span>
            </p>
          </Col>
          <Col md={5} className="bitbank">
            <div className=" d-flex  gap_24  justify-lg-content-end justify-content-center">
              <div className="bitbank_bgclr text-center">
                <img className="  " src={bithumb} alt="bithumb" />
                <p className=" fs_11 ff_inter fw_400  bitbank_clr mt-2">
                  BITHUMB
                </p>
              </div>
              <div className="bitbank_bgclr text-center mt-3">
                <img className="  " src={bitstamp} alt="bitstamp" />
                <p className=" fs_11 ff_inter fw_400  bitbank_clr mt-2">
                  BITBANK
                </p>
              </div>
            </div>
            <div className=" d-flex  gap_24 justify-lg-content-end justify-content-center mt_24">
              <div className="bitbank_bgclr text-center">
                <img className="  " src={bitbank} alt="bitbank" />
                <p className=" fs_11 ff_inter fw_400  bitbank_clr mt-2">
                  BITHUMB
                </p>
              </div>
              <div className="bitbank_bgclr text-center mt-3">
                <img className="  " src={bitstamp} alt="bitstamp" />
                <p className=" fs_11 ff_inter fw_400  bitbank_clr mt-2">
                  BITBANK
                </p>
              </div>
            </div>
            <div className=" d-flex  gap_24 justify-lg-content-end justify-content-center mt_24">
              <div className="bitbank_bgclr text-center">
                <img className="  " src={binance} alt="binance" />
                <p className=" fs_11 ff_inter fw_400  bitbank_clr mt-2">
                  BINANCE
                </p>
              </div>
              <div className="bitbank_bgclr text-center mt-3">
                <img className="  " src={Coinbase} alt="Coinbase" />
                <p className=" fs_11 ff_inter fw_400  bitbank_clr mt-2">
                  COINBASE
                </p>
              </div>
            </div>
            <div className=" d-flex  gap_24 justify-lg-content-end justify-content-center mt_24">
              <div className="bitbank_bgclr text-center">
                <img className="  " src={bitbank} alt="bitbank" />
                <p className=" fs_11 ff_inter fw_400  bitbank_clr mt-2">
                  BITHUMB
                </p>
              </div>
              <div className="bitbank_bgclr text-center mt-3">
                <img className="  " src={bitstamp} alt="bitstamp" />
                <p className=" fs_11 ff_inter fw_400  bitbank_clr mt-2">
                  BITBANK
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Crypto;
