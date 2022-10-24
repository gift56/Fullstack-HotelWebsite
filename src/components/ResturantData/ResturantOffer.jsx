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
          <ResturantOfferLeftArea>
            <h2>at your service</h2>
            <p>
              The team of the Safe Restaurant aims to exceed all expectations of
              our guests. Our chef worked hard to develop a unique menu that
              features the best meals of the European cuisine that will match
              the tastes of the most demanding clients. Friendly and attentive
              waiters will ensure that you will enjoy your time in our
              restaurant.
            </p>
          </ResturantOfferLeftArea>
          <ResturantOfferRightArea></ResturantOfferRightArea>
        </ResturantOfferArea>
      </Container>
    </ResturantOfferCon>
  );
};

export default ResturantOffer;
