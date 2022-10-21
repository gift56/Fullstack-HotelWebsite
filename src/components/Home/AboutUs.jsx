import React from "react";
import Label from "../../assets/Alabel.svg";
import Image1 from "../../assets/aboutMI.svg";
import Image2 from "../../assets/desktopAImg.svg";
import sideImg from "../../assets/sideImg.svg";
import BgLine from "../../assets/Bglines.svg";
import RamP from "../../assets/RAMP.svg";

import {
  AboutArea,
  AboutContainer,
  AboutLeft,
  AboutRight,
  AboutTitleArea,
} from "../../styles/HomeStyle/about.styled";
import { Container } from "../../styles/Container/container.styled";

const AboutUs = () => {
  return (
    <AboutContainer>
      <Container>
        <AboutArea bg={BgLine}>
          <AboutLeft>
            <AboutTitleArea>
              <h2>
                About <br /> <span>US</span>
              </h2>
            </AboutTitleArea>
          </AboutLeft>
          <AboutRight>
            <div className="mobileImage">
              <img src={Image1} alt="/" />
            </div>
            <div className="desktopImage">
              <img src={Image2} alt="/" />
            </div>
            <div className="text">
              <h3>High quality</h3>
              <p className="mobileP">
                <span>The hotel was reopened to visitors in 2016. The</span>{" "}
                <span>building was renovated and modernized to meet</span>{" "}
                <span>the expectations of the most demanding guests.</span>{" "}
                <span>We offer luxurious rooms, numerous facilities, and</span>{" "}
                <span>exceptional service. The hotel is located near the</span>{" "}
                <span>city center, which makes it the best option for</span>
                <span>those who travel for business and travel purposes.</span>
              </p>
              <p className="deskP">
                <span>The hotel was reopened to visitors in 2016.</span>{" "}
                <span>The building was renovated and</span>{" "}
                <span>modernized to meet the expectations of</span>{" "}
                <span>the most demanding guests. We offer</span>
                <span>luxurious rooms, numerous facilities, and</span>
                <span> exceptional service.</span>
              </p>
              <img src={Label} alt="/" />
            </div>
            <div className="tab">
              <div className="tabsideImg">
                <img src={sideImg} alt="/" />
              </div>
              <img src={Label} alt="/" className="labelImg" />
              <img src={RamP} alt="rooms" className="bookRoom" />
            </div>
          </AboutRight>
        </AboutArea>
      </Container>
    </AboutContainer>
  );
};

export default AboutUs;
