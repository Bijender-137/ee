import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const Supply = () => {
  return (
    <>
      <section className="bg_supply py-5">
        <Container>
          <h2 className="text-center ff_plus ff_plus fs_52 text-white fw-bold mt-lg-5">
            170k Total Starting Supply
          </h2>
          <p className="text-white text-center ff_raleway pt-1">
            Initial BONDing Offering (IBO)* Phases
          </p>
          <div className="d-flex flex-column mb-5">
            <div className="d-flex justify-content-between border_bottomblue  mt-5 pt-4">
              <p className="ff_raleway fs_18 text-white fw-normal text-capitalize supply_words">
                ROUND 1
              </p>
              <p className="ff_raleway fs_20 text-white fw-normal text-capitalize fw-medium supply_words">
                10,000 EEFI Bonds
              </p>
              <p className="supply_words text-white ff_raleway fw">
                @ <span className="fs_36 ff_raleway text-white"> $12 </span>
              </p>
            </div>
            <p className="ff_plus text-white fs_16 text-end fst-italic pt-1">
              Vested (locked) for 1 Year
            </p>
            <div className="d-flex justify-content-between border_bottomblue  mt-5 pt-4">
              <p className="ff_raleway fs_18 text-white fw-normal text-capitalize supply_words">
                ROUND 2
              </p>
              <p className="ff_raleway fs_20 text-white fw-normal text-capitalize fw-medium supply_words">
                12,777 EEFI Bonds
              </p>
              <p className="supply_words text-white ff_raleway fw">
                @ <span className="fs_36 ff_raleway text-white"> $18 </span>
              </p>
            </div>
            <p className="ff_plus text-white fs_16 text-end fst-italic pt-1">
              Vested (locked) for six months
            </p>
            <div className="d-flex justify-content-between border_bottomblue  mt-5 pt-4">
              <p className="ff_raleway fs_18 text-white fw-normal text-capitalize supply_words">
                ROUND 3
              </p>
              <p className="ff_raleway fs_20 text-white fw-normal text-capitalize fw-medium supply_words">
                25,000 EEFI Bonds
              </p>
              <p className="supply_words text-white ff_raleway fw">
                @ <span className="fs_36 ff_raleway text-white">$26 </span>
              </p>
            </div>
            <p className="ff_plus text-white fs_16 text-end fst-italic pt-1">
              No vesting or lock up periods. Available at launch.
            </p>
          </div>
          <p className="text-center text-white ff_raleway fs_20 mb-0 text_decorationwhite underline_white mb-1">
            (47,777 or around{" "}
            <span className="fs_36 text-uppercase fv_numeric px-2">28%</span> of
            total starting supply is up for IBO)
          </p>
          <div className="d-flex align-items-center justify-content-center">
            <p className="text-center text-white ff_raleway fs_14 opacity_80 mw_521">
              Individuals who hold $EEFI will also receive an airdrop of the
              protocol's governance token $EFT{" "}
              <span className="fs_12"> ...learn more</span>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Supply;
