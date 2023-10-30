import React from "react";
import { Container } from "react-bootstrap";
import cloud from "../assets/images/png/cloud.png";
const Amplify = () => {
  return (
    <>
      <section className="bg_amplify position-relative">
        <img className='w-100 cloud' src={cloud} alt="cloud" />
        <Container>
          <h2 className="text-center text-white ff_plus fw-bolder fs_52 mb-0 pt-4">
            Amplify and <span>STRETCH GAINS</span>
          </h2>
          <div className="d-flex justify-content-center align-items-center py-5 mt-5">
            <p className="text-center ff_raleway fs_14 text-white mw_554 py-5 py_300 fw-normal">
              We take a different balanced approach to finding and creating
              yield opportunities in the everchanging crypto market. Our yield
              strategies help users stay protected and hedged during bear
              markets and amplify yield during bull markets without resorting to
              leverage or other dangerous techniques.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Amplify;
