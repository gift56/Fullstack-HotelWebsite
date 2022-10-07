import React from "react";
import FacilityImg from "../assets/facilityH.svg";
import FacilitySmallImg from "../assets/facilitySmI.svg";
import FacilityStar from "../assets/facilityStar.svg";
import FacilityLabel from "../assets/facilityLabel.svg";
import FacilityDesImg from "../assets/facilityDesImg.svg";
import NextArrow from "../assets/nextBtn.svg";
import Arrow from "../assets/arrow.svg";
import ConferenceImg from "../assets/conferenceImg.svg";
import ConferenceImg2 from "../assets/conferenceImg2.svg";
import { Container } from "../styles/container.styled";
import {
  FacilitiesArea,
  FacilitiesCon,
  FacilitiesLeftside,
  FacilitiesLeftsideTitle,
  FacilitiesRightside,
} from "../styles/facilities.styled";

const Facilities = () => {
  const ConferenceData = [
    {
      img: ConferenceImg,
      number: "02",
      title: "conference hall",
    },
    {
      img: ConferenceImg2,
      number: "03",
      title: "Wine bar “reserve”",
    },
  ];
  return (
    <FacilitiesCon>
      <Container>
        <FacilitiesArea>
          <FacilitiesLeftside>
            <div className="image">
              <img src={FacilitySmallImg} alt="minImg" />
              <img src={FacilityLabel} alt="label" className="label" />
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
                <p>
                  Art &amp; Congress <span>halls</span>
                </p>
                <div className="img">
                  <img src={FacilityDesImg} alt="facilitiesImg" />
                </div>
              </FacilitiesLeftsideTitle>
              <p className="textdetail">
                Bank Hotel offers you a wide range of additional services and
                facilities. Visit our restaurant to try exclusive meals, book a
                conference hall to organize a business meeting, or relax in the
                art-bar.
              </p>
            </div>
          </FacilitiesLeftside>
          <FacilitiesRightside>
            <div className="firstSide">
              <div className="leftside">
                <div className="textArea">
                  <div className="arrowSide">
                    <img src={NextArrow} alt="arrow" />
                  </div>
                  <div className="text">
                    <div>
                      <h2>
                        Ice <br /> restaurant
                      </h2>
                      <p className="desktopP">
                        The hotel’s exclusive infrastructure is complemented by
                        the unique atmosphere of the Safe Restaurant. Author’s
                        menu, extensive wine card, and live music will set you
                        for the correct mood.
                      </p>
                    </div>
                    <p className="ratio">01</p>
                  </div>
                </div>
              </div>
              <div className="mainImg">
                <img src={FacilityImg} alt="facilities_image" />
              </div>
            </div>
            <div className="secondSide">
              <div className="contentArea">
                {ConferenceData.map(({ img, title, number }, index) => (
                  <div key={index} className="conferenceArea">
                    <div className="img">
                      <img src={img} alt={title} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FacilitiesRightside>
        </FacilitiesArea>
      </Container>
    </FacilitiesCon>
  );
};

export default Facilities;
