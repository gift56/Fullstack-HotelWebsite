import React from "react";
import RightImge from "../assets/rmMain.svg";
import MiniRightImg from "../assets/dRM.svg";
import DesktopImg from "../assets/desktopPM.svg";
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
          <RoomLeft>
            <h2>
              Rooms <span>&amp; apartments</span>
            </h2>
            <p>
              <span>All room decoration </span>
              <span>was made with </span>
              <span>ecological certified</span>
              <span> and safe materials.</span>
            </p>
            <span className="rooms">70 rooms</span>
          </RoomLeft>
          <RoomRight>
            <div className="leftSide">
              <div className="arrowSide">
                <div className="minImg">
                  <img src={MiniRightImg} alt="/" />
                </div>
                <div className="arrow">
                  <img src={NextArrow} alt="icon" />
                </div>
              </div>
              <div className="text">
                <Button color="#1B3B36" />
                <div className="textArea">
                  <h2>Superior twin</h2>
                  <p className="desktopP">
                    The Superior twin is perfect for those who plan to stay
                    long. The spacious and bright room is equipped with deluxe
                    Italian furniture and has a beautiful view to the historical
                    part of the city. Stylish interior design and comfortable
                    beds will make your stay cozy and pleasant.
                  </p>
                  <p className="ratio">
                    1<span>/4</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mainImg">
              <img src={RightImge} alt="Roomsimage" />
            </div>
            <div className="deskImg">
              <img src={DesktopImg} alt="Roomsimage" />
            </div>
          </RoomRight>
        </RoomArea>
      </Container>
    </RoomContainer>
  );
};

export default RoomandApartment;
