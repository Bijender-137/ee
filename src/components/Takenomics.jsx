import React from "react";
import dyeild from "../assets/images/png/d_veild.png";
import extravalue from "../assets/images/png/extra_value.png";
import smartindex from "../assets/images/png/smart_index.png";
import socialcordination from "../assets/images/png/social_cordinate.png";
import expansive from "../assets/images/png/expwnsive.png";
const Takenomics = () => {
  return (
    <>
      <section>
        <div className="d-flex flex-lg-row flex-column justify-content-between justify-content-lg-center ">
          <div className="bg-white w_50 ms-xl-5 ps-lg-5 ps-3  my-5 py_100">
            <div className="d-flex flex-column align-items-start ps-lg-5 pe-lg-5  pe-xl-0 ms-xl-5 ">
              <h4 className="ff_neue fw-bold text-black fs_46 mb-0">
                EEFI Tokenomics
              </h4>
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
          <div className="bg_sky  px-lg-5 col-lg-6 py_100 ">
            <div className="d-flex align-items-center pt-5">
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
            <div className="d-flex align-items-center pt-4">
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
            <div className="d-flex align-items-center pt-4">
              <img src={smartindex} alt="dyeild" />
              <div>
                <h5 className="text-white ff_neue fs_24 fw-bold mb-0">
                  Smart Index
                </h5>
                <p className="text-white text-start ff_raleway fs_16 opacity_80 mb-0 pt-1 mw_413">
                  Token can be viewed as an index of all strategy performance on
                  the protocol
                </p>{" "}
              </div>
            </div>
            <div className="d-flex align-items-center pt-4">
              <img src={socialcordination} alt="dyeild" />
              <div>
                <h5 className="text-white ff_neue fs_24 fw-bold mb-0">
                  Social Coordination (E,E)
                </h5>
                <p className="text-white text-start ff_raleway fs_16 opacity_80 mb-0 pt-1 mw_413">
                  Promotes hyper social coordination around all strategies on
                  the protocol (E,E) (makes hedging fun and working together
                  produces more benefits to all vault users)
                </p>{" "}
              </div>
            </div>
            <div className="d-flex align-items-center pt-4">
              <img src={expansive} alt="dyeild" />
              <div>
                <h5 className="text-white ff_neue fs_24 fw-bold mb-0">
                  Expansive Utility Dimensions
                </h5>
                <p className="text-white text-start ff_raleway fs_16 opacity_80 mb-0 pt-1 mw_391">
                  EEFI’s utility will expand as more strategies are added to the
                  protocol.
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
