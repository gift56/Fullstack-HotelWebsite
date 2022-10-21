import React from "react";
import Arrow from "../../assets/arrow.svg";
import ConferenceImg from "../../assets/conferenceImg.svg";
import ConferenceImg2 from "../../assets/conferenceImg2.svg";

const FacilityRooms = () => {
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
    <div className="contentArea">
      {ConferenceData.map(({ img, title, number }, index) => (
        <div key={index} className="conferenceArea">
          <div className="img">
            <img src={img} alt={title} />
          </div>
          <div className="textside">
            <p>{number}</p>
            <h2>{title}</h2>
          </div>
          <img src={Arrow} alt="right_arrow" className="arrow" />
        </div>
      ))}
    </div>
  );
};

export default FacilityRooms;
