import React from "react";
import Star from "../assets/star.svg";
import { Container } from "../styles/container.styled";
import {
  HeroArea,
  HeroContainer,
  LeftSide,
  LeftSideTitle,
  RightSide,
} from "../styles/hero.styled";

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroArea>
          <LeftSide>
            <LeftSideTitle>
              <div className="heading">
                <h1>BankHotel</h1>
                <p>rooms // restaurant // congress hall // wine bar</p>
              </div>
              <div className="details">
                <button></button>
              </div>
            </LeftSideTitle>
          </LeftSide>
          <RightSide></RightSide>
        </HeroArea>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
