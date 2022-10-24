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
              <div className="labelCon">
                <div className="label">
                  <img src={Label} alt="label" />
                </div>
              </div>
              <p>
                <span>Bank Hotel proudly welcomes you to the</span>{" "}
                <span>Safe Restaurant, a place where you will</span>
                {` `}
                <span>wish you could dine every day. The</span>
                <span>restaurant offers a unique menu developed</span>
                <span>by the team of professionals led by chef</span>
                <span>Mary-Ann Jones, the wine list with more</span>
                <span>than 250 items, the outstanding service,</span>
                <span>and the unforgettable atmosphere.</span>
              </p>
            </div>
          </ResturantRightArea>
        </ResturantArea>
      </Container>
    </ResturantCon>
  );
};

export default ResturantHero;
