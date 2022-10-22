import React from "react";
import MainImg from "../../assets/roomMainImg.png";
import LeftImg from "../../assets/leftImg.png";
import Label from "../../assets/label2.png";
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
          <OptionLeftArea>
            <div className="imageCon">
              <div className="label">
                <img src={Label} alt="label_img" />
              </div>
            </div>
          </OptionLeftArea>
          <OptionRightArea></OptionRightArea>
        </OptionArea>
      </Container>
    </OptionCon>
  );
};

export default RoomOptions;
