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
          <ResturantSpaceLeftArea></ResturantSpaceLeftArea>
          <ResturantSpaceRightArea>
            <div className="titleArea">
              <h3></h3>
            </div>
          </ResturantSpaceRightArea>
        </ResturantSpaceArea>
      </Container>
    </ResturantSpaceCon>
  );
};

export default ResturantSpace;
