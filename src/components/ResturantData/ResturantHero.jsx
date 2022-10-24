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
          <ResturantLeftArea></ResturantLeftArea>
          <ResturantRightArea></ResturantRightArea>
        </ResturantArea>
      </Container>
    </ResturantCon>
  );
};

export default ResturantHero;
