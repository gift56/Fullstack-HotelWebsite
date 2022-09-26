import React from "react";
import RightImge from "../assets/rmMain.svg";
import MiniRightImg from "../assets/dRM.svg";
import NextArrow from "../assets/nextBtn.svg";
import Button from "./Button";
import { Container } from "../styles/container.styled";
import {
  RoomArea,
  RoomContainer,
  RoomLeft,
  RoomRight,
} from "../styles/roomandapartment.styled";

const RoomandApartment = () => {
  return (
    <RoomContainer>
      <Container>
        <RoomArea>
          <RoomLeft></RoomLeft>
          <RoomRight></RoomRight>
        </RoomArea>
      </Container>
    </RoomContainer>
  );
};

export default RoomandApartment;
