import React from "react";
import MyNave from "./MyNave";
import { Container } from "react-bootstrap";

const MyHero = () => {
  return (
    <>
      <section className="bg_hero_img min_vh_100">
        <MyNave />
        <Container></Container>
      </section>
    </>
  );
};

export default MyHero;
