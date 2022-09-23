import React from "react";
import Star from "../assets/star.svg";
import DownArrow from "../assets/downdrop.svg";
import Mobilehero from "../assets/Hmobile.svg";
import Desktophero from "../assets/desktopH.svg";
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
                    <img src={DownArrow} alt="/" />
                  </div>
                </div>
                <h4 className="text">
                  The luxurious hotel in the most beautiful European city with
                  an exclusive restaurant, conference-hall, and art-bar.
                </h4>
              </div>
            </LeftSideTitle>
          </LeftSide>
          <RightSide>
            <div className="mobileImg">
              <img src={Mobilehero} alt="heroImg" />
            </div>
          </RightSide>
        </HeroArea>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
