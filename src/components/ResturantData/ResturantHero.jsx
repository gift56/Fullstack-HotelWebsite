import React from "react";
import Label from "../../assets/Alabel.svg";
import BgLine from "../../assets/Bglines.svg";
import {
  ResturantArea,
  ResturantCon,
  ResturantLeftArea,
  ResturantRightArea,
} from "../../styles/ResturantStyle/ResturantHero.styled";
import { Container } from "../../styles/Container/container.styled";

const ResturantHero = () => {
  return (
    <ResturantCon bg={BgLine}>
      <Container>
        <ResturantArea>
          <ResturantLeftArea>
            <h2>“Safe” restaurant</h2>
          </ResturantLeftArea>
          <ResturantRightArea>
            <h3>One of a Kind</h3>
            <div className="details">
              <p>
                <span>Bank Hotel proudly welcomes you to the</span> Safe Restaurant, a place
                where you will wish you could dine every day. The restaurant
                offers a unique menu developed by the team of professionals led
                by chef Mary-Ann Jones, the wine list with more than 250 items,
                the outstanding service, and the unforgettable atmosphere.
              </p>
            </div>
          </ResturantRightArea>
        </ResturantArea>
      </Container>
    </ResturantCon>
  );
};

export default ResturantHero;
