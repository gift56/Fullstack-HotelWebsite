import React from "react";
import { Container } from "../styles/container.styled";
import { HeroArea, HeroContainer } from "../styles/hero.styled";

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroArea>Hello world</HeroArea>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
