import React from "react";
import Polygon from "../../assets/bookNow.svg";
import { HeroArea, HeroCon } from "../../styles/RoomStyle/RoomHero.styled";
import { Container } from "../../styles/Container/container.styled";

const RoomHero = () => {
  return (
    <HeroCon>
      <Container>
        <HeroArea>
          <div className="leftSide">
            <h2>Superior twin</h2>
            <p>
              All room decoration was made with ecological certified and safe
              materials.
            </p>
          </div>
          <div className="rightSide">
            <div className="image">
              <img src={Polygon} alt="book_now_img" />
            </div>
          </div>
        </HeroArea>
      </Container>
    </HeroCon>
  );
};

export default RoomHero;
