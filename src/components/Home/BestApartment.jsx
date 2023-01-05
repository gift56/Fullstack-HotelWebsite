import React from "react";
import DesktopBg from "../../assets/BSAbgDesk.svg";
import MobileBg from "../../assets/BSAbgMobile.png";
import {
  BestApartmentArea,
  BestApartmentCon,
  BestApartmentTexts,
} from "../../styles/HomeStyle/bestApartment.styled";
import { Container } from "../../styles/Container/container.styled";

const BestApartment = () => {
  const Bg = [DesktopBg, MobileBg];
  return (
    <BestApartmentCon bg={Bg}>
      <Container>
        <BestApartmentArea>
          <BestApartmentTexts>
            <h2>
              Best <br /> apartments
            </h2>
            <p>
              All room decoration was made with ecological certified and safe
              materials.
            </p>
          </BestApartmentTexts>
        </BestApartmentArea>
      </Container>
    </BestApartmentCon>
  );
};

export default BestApartment;
