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
    <DetailCon bg={Curve}>
      <Container>
        <DetailArea>
          <DetailLeftArea>
            <div className="leftSide">
              <div className="detail">
                <Button color="#FFFCF6" />
                <h3>
                  All suites have a unique design because we want our every
                  guest to feel special.
                </h3>
              </div>
              <h4>Premier Standard</h4>
            </div>
          </DetailLeftArea>
          <DetailRightArea>
            <p>
              The Superior twin would perfectly match the needs of those who
              plan to stay long. The bright and airy room is equipped with
              superior soft Italian furniture. Large windows open a beautiful
              view to the historical part of the city. Contemporary interior
              design and comfortable beds will make your stay cozy and
              delightful.
            </p>
          </DetailRightArea>
        </DetailArea>
      </Container>
    </DetailCon>
  );
};

export default RoomDetail;
