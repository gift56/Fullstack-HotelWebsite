import React from "react";
import MobileImg from "../../assets/resturant1.png";
import DesktopImg from "../../assets/resturant2.png";
import { Container } from "../../styles/Container/container.styled";
import {
  ResturantOfferArea,
  ResturantOfferCon,
  ResturantOfferLeftArea,
  ResturantOfferRightArea,
} from "../../styles/ResturantStyle/ResturantOffer.styled";

const ResturantOffer = () => {
  return (
    <ResturantOfferCon>
      <Container>
        <ResturantOfferArea>
          <ResturantOfferLeftArea></ResturantOfferLeftArea>
          <ResturantOfferRightArea></ResturantOfferRightArea>
        </ResturantOfferArea>
      </Container>
    </ResturantOfferCon>
  );
};

export default ResturantOffer;
