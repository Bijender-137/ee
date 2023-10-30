import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import a from "../assets/images/png/a.png";
import i from "../assets/images/svg/i.svg";
const Core = () => {
  return (
    <>
      <section className="bg_blue py-5 ff_cole">
        <Container>
          <h2 className="text-center ff_neue fs_46 fw-bold text-white mt-5 pt-5">
            Core Strategies
          </h2>
          <div className="d-flex justify-content-center align-items-center">
            <p className="text-center text-white opacity_80 mw_819 ff_raleway pt-3">
              Our initial strategies use powerful burgeoning trends like Real
              Yield, Rebase, and others to generate cutting-edged yield
              innovations. These yield strategies stretch beyond the drought in
              stable coins and set the value for our native protocol token
              $EEFI. Check them out!'
            </p>
          </div>
          <Row className="justify-content-lg-evenly justify-content-center py-4 align-items-lg-center">
            <Col lg={4} md={8} className="position-relative pb-3 pb-lg-0">
              <p className="positon-absolute vault_bg z-2 1text-center fs_132 opacity_10 text-white op_10 fw-bold ff_raleway">
                $AMPL
              </p>
              <div className="d-flex flex-column z-2  justify-content-center vault_card p-4 position-relative">
                <div>
                  <button className="text-white ff_raleway fs_14 my_btn fw-normal">
                    Innovation
                  </button>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img className="pt-4" src={a} alt="a" />
                </div>
                <div className="d-flex align-items-center justify-content-between pt-4">
                  <p className="text-white ff_raleway opacity_80 fw-normal fs_16">
                    Projected Yield (APY)
                  </p>
                  <p className="ff_inter color_blue fw-bold">7,777,777%</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="text-white ff_raleway fw-normal fs_16 opacity-50">
                    Current Deposits
                  </p>
                  <p className="ff_inter text-white fw-bold">0.00 AMPL</p>
                </div>
                <span className="line text-white d-flex"></span>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="text-white pt-3 opacity-50">Max Capacity</p>
                  <p className="text-white mb-0 ff_inter fw-bold">0.00 AMPL</p>
                </div>
              </div>
            </Col>
            <Col className="pt-5 pt-lg-0" lg={4}>
              <p className="ff_neue text-white fs_38 fw-normal text-start mb-0">
                Elastic Vault
              </p>
              <div className="d-flex align-items-center">
                <p className="ff_raleway fs_22 fw-medium text-white pt-4">
                  Deposit Token
                </p>
                <img className="pt-2 ps-1" src={i} alt="i" />
              </div>
              <p className="text-white ff_raleway opacity_80"> $AMPL</p>
              <p className="text-white ff_raleway fs_22 fw-medium">
                Flagship Hedging Strategy
              </p>
              <p className="ff_raleway text-white opacity_80 mb-0">
                This one-of-a-kind strategy combines the benefits of Rebase’s
                force multiplier effect and Real Yield’s sustainability.
              </p>
              <p className="text-white fw-normal fs_16 opacity_80">
                Helps users to protect against downtrends and amplify yield
                rewards during market up trends.
              </p>
              <p className="text-white fw-normal fs_16 opacity_80 d-lg-none">
                Those who choose to hedge with the Vault or participate in its
                economic cycles are the ones greatly rewarded when markets
                return to optimal conditions
              </p>
              <p className="text-white fw-normal fs_16 opacity_80 d-lg-none">
                1. Initially utilizes both OG rebase tokens $AMPL and $OHM. 
                <br />
                <span className="ps-3">
                  . Deposit $AMPL and receive $EEFI and $OHM rewards; 
                </span>
                <br />
                <span className="ps-3">
                  . Vault activities are determined by $AMPL’s rebase status;
                  when AMPL supply is expanding, $EEFI is automatically
                  purchased and burned daily; when AMPL supply is stable or
                  contracting, $EEFI is minted (learn more).
                </span>
              </p>
              <p className="text-white fw-normal fs_16 opacity_80 d-lg-none">
                2 . Potentially any token can be rebase-enabled and added to
                this strategy (subject to governance)
              </p>
              <p className="text-white fw-normal fs_16 opacity_80 d-lg-none">
                3 . Sub vaults can be created to add extra “yield” utility
                dimensions to $EEFI (and take advantage of sub-trends and viral
                movements within crypto)
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Core;
