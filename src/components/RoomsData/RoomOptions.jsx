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
              <div className="leftImg">
                <img src={LeftImg} alt="leftImg" />
              </div>
            </div>
            <div className="text">
              <div className="textArea">
                <h2>Superior twin</h2>
                <p>
                  <span>All rooms in Bank Hotel have a special</span>{" "}
                  <span>charm achieved through a combination of</span>{" "}
                  <span>modern functional design and original 20th</span>{" "}
                  <span>century layout.</span>
                </p>
              </div>
              <button>Book room</button>
            </div>
          </OptionLeftArea>
          <OptionRightArea>
            <div className="leftImg">
              <img src={LeftImg} alt="leftImg" />
            </div>
            <div className="text">
              <div className="textArea">
                <div className="label">
                  <img src={MainImg} alt="room_img" />
                </div>
                <p>
                  The Superior twin includes two functional zones: a living room
                  with the best Italian furniture, and an isolated cozy bedroom
                  with a large bed. Here, you will find space both for work and
                  comfortable rest. Hotel offers supreme comfort and outstanding
                  24-hour room service to make sure that the time you spend here
                  is enjoyable and pleasant.
                </p>
              </div>
              <button>Book room</button>
            </div>
          </OptionRightArea>
        </OptionArea>
      </Container>
    </OptionCon>
  );
};

export default RoomOptions;
