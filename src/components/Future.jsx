import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { futurecards } from "./Helper";
const Future = () => {
  return (
    <>
      <section className="bg_future py_100">
        <Container>
          <h2 className="text-center color_blue fs_46 ff_neue fw-bold">
            Future Use Cases (Strategies)
          </h2>
          <p className="mx-auto text-center mw_882 pt-1">
            Elastic Protocol will continue to pioneer an expanding ecosystem of
            yield strategies that will cater to DeFi users across a range of
            blockchains, communities, and interests. Each will help in
            generating sustainable yield and expanding the utility of the native
            utility token $EEFI. Here is some of what we are planning and
            looking into:
          </p>
          <Row className="mt-5 pt-4">
            {futurecards.map((future) => {
              return (
                <Col lg={4} md={6}>
                  <div
                    className="d-flex bg_shadow my-3 flex-column justify-content-between"
                    key={future.id}
                  >
                    <div className="position-relative">
                      <a className="nft text-white " href="">
                        NFT
                      </a>
                      <img
                        className="w-100"
                        src={future.cardpic}
                        alt="cardpic"
                      />{" "}
                    </div>
                  </div>
                </Col>
              );
            })}
            <div className="d-flex flex-column"></div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Future;
