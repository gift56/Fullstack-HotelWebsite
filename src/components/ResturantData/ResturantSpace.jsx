import React from "react";
import LeftImg from "../../assets/resturantspace2.png";
import RightImg from "../../assets/resturantspace1.png";
import {
  ResturantSpaceArea,
  ResturantSpaceCon,
  ResturantSpaceLeftArea,
  ResturantSpaceRightArea,
} from "../../styles/ResturantStyle/ResturantSpace.styled";
import { Container } from "../../styles/Container/container.styled";

const ResturantSpace = () => {
  return (
    <ResturantSpaceCon>
      <Container>
        <ResturantSpaceArea>
          <ResturantSpaceLeftArea>
            <div className="image">
              <img src={LeftImg} alt="resturant_minImage_space" />
            </div>
            <h3>
              <span>All room decoration</span> <span>was made with</span>{" "}
              <span>ecological certified</span> <span>and safe materials.</span>
            </h3>
          </ResturantSpaceLeftArea>
          <ResturantSpaceRightArea>
            <div className="titleArea">
              <h3>
                Once you try our cuisine and service, you shall never want to
                visit another restaurant.
              </h3>
            </div>
            <div className="imageCon">
              <div className="image">
                <img src={RightImg} alt="resturant_space_image" />
              </div>
            </div>
            <div className="detailCon">
              <div className="details">
                <h2>
                  Spend Your Time <br /> With Us
                </h2>
                <p>
                  The team of the Safe Restaurant aims to exceed all
                  expectations of our guests. Our chef worked hard to develop a
                  unique menu that features the best meals of the European
                  cuisine that will match the tastes of the most demanding
                  clients. Friendly and attentive waiters will ensure that you
                  will enjoy your time in our restaurant.
                </p>
              </div>
            </div>
          </ResturantSpaceRightArea>
        </ResturantSpaceArea>
      </Container>
    </ResturantSpaceCon>
  );
};

export default ResturantSpace;
