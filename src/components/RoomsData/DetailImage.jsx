import React from "react";
import DetailImg from "../../assets/detailBg.png";
import { Container } from "../../styles/Container/container.styled";
import { ImageArea, ImageCon } from "../../styles/RoomStyle/RoomImage.styled";

const DetailImage = () => {
  return (
    <ImageCon bg={DetailImg}>
      <Container>
        <ImageArea></ImageArea>
      </Container>
    </ImageCon>
  );
};

export default DetailImage;
