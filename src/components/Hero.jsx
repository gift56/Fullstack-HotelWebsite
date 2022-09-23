import React from "react";
import Star from "../assets/star.svg";
import DowArrow from "../assets/downdrop.svg";
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
                <div className="tabs">
                  <button>
                    <div>
                      <img src={Star} alt="/" />
                    </div>
                    <span>since 1973</span>
                  </button>
                  <div className="dowdrop">

                  </div>
                </div>
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
