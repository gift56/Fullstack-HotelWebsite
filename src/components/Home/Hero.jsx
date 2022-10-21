import React from "react";
import DownArrow from "../../assets/downdrop.svg";
import Dropdown from "../../assets/dropdown.svg";
import Mobilehero from "../../assets/Hmobile.svg";
import Desktophero from "../../assets/desktopH.svg";
import { Container } from "../styles/container.styled";
import {
  BookForm,
  HeroArea,
  HeroContainer,
  LeftSide,
  LeftSideTitle,
  RightSide,
} from "../styles/hero.styled";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroArea>
          <LeftSide>
            <LeftSideTitle>
              <div className="heading">
                <h1>
                  Bank<span>Hotel</span>
                </h1>
                <p>rooms // restaurant // congress hall // wine bar</p>
              </div>
              <div className="details">
                <div className="tabs">
                  <Button color="#FFFCF6" />
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
            <div className="desktopImg">
              <div className="image">
                <img src={Desktophero} alt="heroImg" />
              </div>
              <BookForm>
                <div className="formArea">
                  <div className="form">
                    <div className="checkIn input">
                      <h4>Check in</h4>
                      <img src={Dropdown} alt="dropdown" />
                    </div>
                    <div className="checkOut input">
                      <h4>Check Out</h4>
                      <img src={Dropdown} alt="dropdown" />
                    </div>
                  </div>
                  <button className="btn">book room</button>
                </div>
              </BookForm>
            </div>
            <div className="book">
              <p>
                Art &amp; Congress <br /> hall
              </p>
              <div className="contact">
                <p>+38 032 297 50 20</p>
                <p className="address">8 Lystopadovoho Chynu,Lviv</p>
              </div>
            </div>
          </RightSide>
        </HeroArea>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
