import React from "react";
import { Container } from "../../styles/Container/container.styled";
import {
  OptionArea,
  OptionCon,
  OptionLeftArea,
  OptionRightArea,
} from "../../styles/RoomStyle/RoomOptions.styled";

const RoomOptions = () => {
  return (
    <OptionCon>
      <Container>
        <OptionArea>
          <OptionLeftArea></OptionLeftArea>
          <OptionRightArea></OptionRightArea>
        </OptionArea>
      </Container>
    </OptionCon>
  );
};

export default RoomOptions;
