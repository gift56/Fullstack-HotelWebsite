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
              <span>The team of the Safe Restaurant aims to exceed all</span>{" "}
              <span>expectations of our guests. Our chef worked hard to</span>{" "}
              <span>develop a unique menu that features the best meals of</span>{" "}
              <span>
                the European cuisine that will match the tastes of the
              </span>{" "}
              <span>
                most demanding clients. Friendly and attentive waiters
              </span>{" "}
              <span>will ensure that you will enjoy your time in our</span>{" "}
              <span>restaurant.</span>
            </p>
          </ResturantOfferLeftArea>
          <ResturantOfferRightArea>
            <div className="desktopImg image">
              <img src={DesktopImg} alt="resturant_image" />
            </div>
            <div className="mobileImg image">
              <img src={MobileImg} alt="resturant_image" />
            </div>
          </ResturantOfferRightArea>
        </ResturantOfferArea>
      </Container>
    </ResturantOfferCon>
  );
};

export default ResturantOffer;
