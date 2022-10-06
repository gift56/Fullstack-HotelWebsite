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
            <div className="textArea">
              <FacilitiesLeftsideTitle>
                <h2>
                  Our faci{" "}
                  <span>
                    <img src={FacilityStar} alt="/" />
                  </span>{" "}
                  lities
                </h2>
              </FacilitiesLeftsideTitle>
            </div>
          </FacilitiesLeftside>
          <FacilitiesRightside></FacilitiesRightside>
        </FacilitiesArea>
      </Container>
    </FacilitiesCon>
  );
};

export default Facilities;
