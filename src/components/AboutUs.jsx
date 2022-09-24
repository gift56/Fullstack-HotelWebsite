import React from "react";
import Label from "../assets/Alabel.svg";
import Image1 from "../assets/aboutMI.svg";
import Image2 from "../assets/desktopAImg.svg";
import RamP from "../assets/RAMP.svg";

import {
  AboutArea,
  AboutContainer,
  AboutLeft,
  AboutRight,
  AboutTitleArea,
} from "../styles/about.styled";
import { Container } from "../styles/container.styled";

const AboutUs = () => {
  return (
    <AboutContainer>
      <Container>
        <AboutArea>
          <AboutLeft>
            <AboutTitleArea>
              <h2>About US</h2>
            </AboutTitleArea>
          </AboutLeft>
          <AboutRight>
            <div className="Image"></div>
          </AboutRight>
        </AboutArea>
      </Container>
    </AboutContainer>
  );
};

export default AboutUs;
