import React from "react";
import FacilityImg from "../assets/facilityH.svg";
import FacilitySmallImg from "../assets/facilitySmI.svg";
import FacilityStar from "../assets/facilityStar.svg";
import FacilityDesImg from "../assets/facilityDesImg.svg";
import { Container } from "../styles/container.styled";
import {
  FacilitiesArea,
  FacilitiesCon,
  FacilitiesLeftside,
  FacilitiesLeftsideTitle,
  FacilitiesRightside,
} from "../styles/facilities.styled";

const Facilities = () => {
  return (
    <FacilitiesCon>
      <Container>
        <FacilitiesArea>
          <FacilitiesLeftside>
            <div className="image">
              <img src={FacilitySmallImg} alt="minImg" />
            </div>
            <div className="textArea">
              <FacilitiesLeftsideTitle>
                <h2>
                  Our <br /> faci
                  <span>
                    <img src={FacilityStar} alt="/" />
                    lities
                  </span>
                </h2>
                <p>Art & Congress halls</p>
              </FacilitiesLeftsideTitle>
              <p className="textdetail">
                Bank Hotel offers you a wide range of additional services and
                facilities. Visit our restaurant to try exclusive meals, book a
                conference hall to organize a business meeting, or relax in the
                art-bar.
              </p>
            </div>
          </FacilitiesLeftside>
          <FacilitiesRightside></FacilitiesRightside>
        </FacilitiesArea>
      </Container>
    </FacilitiesCon>
  );
};

export default Facilities;
