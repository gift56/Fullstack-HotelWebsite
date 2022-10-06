import React from "react";
import { Container } from "../styles/container.styled";
import {
  FacilitiesArea,
  FacilitiesCon,
  FacilitiesLeftside,
  FacilitiesRightside,
} from "../styles/facilities.styled";

const Facilities = () => {
  return (
    <FacilitiesCon>
      <Container>
        <FacilitiesArea>
          <FacilitiesLeftside></FacilitiesLeftside>
          <FacilitiesRightside></FacilitiesRightside>
        </FacilitiesArea>
      </Container>
    </FacilitiesCon>
  );
};

export default Facilities;
