import React from "react";
import DesktopBg from "../assets/BSAbgDesk.svg";
import MobileBg from "../assets/BSAbgMobile.svg";
import {
  BestApartmentArea,
  BestApartmentCon,
  BestApartmentTexts,
} from "../styles/bestApartment.styled";
import { Container } from "../styles/container.styled";

const BestApartment = () => {
  const Bg = [
    {
      deskImg: DesktopBg,
      mobileImg: MobileBg,
    },
  ];
  return (
    <BestApartmentCon>
      <Container>
        <BestApartmentArea>
          <BestApartmentTexts>Hello world</BestApartmentTexts>
        </BestApartmentArea>
      </Container>
    </BestApartmentCon>
  );
};

export default BestApartment;
