import React from "react";
import DetailImg from "../../assets/detailBg.png";
import Curve from "../../assets/curve.svg";
import {
  DetailArea,
  DetailCon,
  DetailLeftArea,
  DetailRightArea,
} from "../../styles/RoomStyle/RoomDetail.styled";
import Button from "../Button/Button";
import { Container } from "../../styles/Container/container.styled";

const RoomDetail = () => {
  return (
    <DetailCon>
      <Container>
        <DetailArea>
          <DetailLeftArea></DetailLeftArea>
          <DetailRightArea></DetailRightArea>
        </DetailArea>
      </Container>
    </DetailCon>
  );
};

export default RoomDetail;
