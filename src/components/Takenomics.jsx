import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import eefi from "../assets/images/svg/eefi.svg";
import dyeild from "../assets/images/png/d_veild.png";
import extravalue from "../assets/images/png/extra_value.png"
const Takenomics = () => {
  return (
    <>
      <section>
        <div className="d-flex justify-content-center">
          <div className="bg-white py-5 w-50 ms-5 ps-5">
            <div className="d-flex flex-column align-items-start  ">
              <img src={eefi} alt="takenomics" />
              <p className="text-black text-start ff_raleway fs_16 fw-normal pt-3 mw_448">
                EEFI is the special rewards token of the protocol that is minted
                and distributed in a decentralized fashion. It produces
                amplified yield during uptrends and protects from downside
                action during downtrends.
              </p>

              <button className="ff_raleway rounded-0 my-4 text-white my_btn">
                View Contract Address
              </button>
              <p className="text-black text-start ff_neue fs_24 fw-bold mt-4">
                IBO TOKENOMICS
              </p>
              <p className="text-black text-start ff_raleway fs_18 fw-bold ">
                IBO Round 1 Price
              </p>
              <p className="ff_raleway color_blue fw-semibold fs_16 mb-4">
                1 EEFI = $12
              </p>
              <p className="text-black text-start ff_raleway fs_18 fw-bold ">
                IBO Round 2 Price
              </p>
              <p className="ff_raleway color_blue fw-semibold fs_16 mb-4">
                1 EEFI = $12
              </p>
              <p className="text-black text-start ff_raleway fs_18 fw-bold ">
                IBO Round 3 Price
              </p>
              <p className="ff_raleway color_blue fw-semibold fs_16 mb-4">
                1 EEFI = $26
              </p>
              <p className="text-black text-start ff_raleway fs_18 fw-bold ">
                TOTAL SUPPLY
              </p>
              <p className="ff_raleway text-black fw-semibold fs_16 mb-4">
                170,000
              </p>
            </div>
          </div>
          <div className="bg_sky py-5 w-50">
            <div className="d-flex align-items-center">
              <img src={dyeild} alt="dyeild" />
              <div>
                <h5 className="text-white ff_neue fs_24 fw-bold mb-0">
                  Decentralized Yield
                </h5>
                <p className="text-white text-start ff_raleway fs_16 opacity_80 mb-0 pt-1">
                  Protocol’s native utility | rewards token
                </p>{" "}
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src={extravalue} alt="dyeild" />
              <div>
                <h5 className="text-white ff_neue fs_24 fw-bold mb-0">
                  Extra Value
                </h5>
                <p className="text-white text-start ff_raleway fs_16 opacity_80 mb-0 pt-1">
                  Can be highly deflationary during market uptrends
                </p>{" "}
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src={dyeild} alt="dyeild" />
              <div>
                <h5 className="text-white ff_neue fs_24 fw-bold mb-0">
                  Decentralized Yield
                </h5>
                <p className="text-white text-start ff_raleway fs_16 opacity_80 mb-0 pt-1">
                  Protocol’s native utility | rewards token
                </p>{" "}
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src={dyeild} alt="dyeild" />
              <div>
                <h5 className="text-white ff_neue fs_24 fw-bold mb-0">
                  Decentralized Yield
                </h5>
                <p className="text-white text-start ff_raleway fs_16 opacity_80 mb-0 pt-1">
                  Protocol’s native utility | rewards token
                </p>{" "}
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src={dyeild} alt="dyeild" />
              <div>
                <h5 className="text-white ff_neue fs_24 fw-bold mb-0">
                  Decentralized Yield
                </h5>
                <p className="text-white text-start ff_raleway fs_16 opacity_80 mb-0 pt-1">
                  Protocol’s native utility | rewards token
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Takenomics;
