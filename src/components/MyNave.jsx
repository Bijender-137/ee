import React from "react";
import { Container } from "react-bootstrap";
import Nav_logo from "../assets/images/png/nav-logo.png";
import Down_Arrow from "../assets/images/png/down_arrow_nav.png";
const MyNave = () => {
  return (
    <>
      <section>
        <nav className="py-1">
          <Container>
            <div className="d-flex align-items-center justify-content-between">
              <a href="#">
                <img width={68} height={75} src={Nav_logo} alt="Nav_logo" />
              </a>
              <ul className="p-0 m-0 d-flex align-items-center gap-5">
                <li>
                  <a href="#" className="fs_16 fw-medium text-white ff_raleway">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="fs_16 fw-medium text-white ff_raleway">
                    IBO Event
                  </a>
                </li>
                <li>
                  <a href="#" className="fs_16 fw-medium text-white ff_raleway">
                    EEFI Tokenomics
                  </a>
                </li>
                <li>
                  <a href="#" className="fs_16 fw-medium text-white ff_raleway">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="fs_16 fw-medium text-white ff_raleway">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="fs_16 fw-medium text-white ff_raleway">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href="#" className="fs_16 fw-medium text-white ff_raleway">
                    More
                    <span>
                      <img
                        width={15}
                        className=" align-items-center ps-1"
                        src={Down_Arrow}
                        alt="Down_Arrow"
                      />
                    </span>
                  </a>
                </li>
                <li className="ms-5">
                  <button className="ff_raleway fs_16 clr_blue nav_btn_border ms-4">Enter App</button>
                </li>
              </ul>
            </div>
          </Container>
        </nav>
      </section>
    </>
  );
};

export default MyNave;
