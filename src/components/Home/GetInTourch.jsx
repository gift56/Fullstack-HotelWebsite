import React from "react";
import BookNow from "../../assets/bookNow.svg";
import SubImg from "../../assets/subscribeImg.svg";
import Star from "../../assets/facilityStar.svg";
import Dropdown from "../../assets/dropdown.svg";
import Curve from "../../assets/curve.svg";
import { Container } from "../../styles/Container/container.styled";
import {
  FormArea,
  GetInTourchArea,
  GetInTourchCon,
  GetInTourchLeft,
  GetInTourchRight,
} from "../../styles/HomeStyle/getintourch.styled";

const GetInTourch = ({ getBg }) => {
  return (
    <GetInTourchCon>
      <Container>
        <GetInTourchArea>
          <GetInTourchLeft>
            <p className="FirstP">+38 032 297 50 20</p>
            <p className="addressP">
              8 Lystopadovoho <br /> Chynu,Lviv
            </p>
            <h2>
              <span>
                Get in <img src={Star} alt="star" />
              </span>
              <span>touch</span>
            </h2>
          </GetInTourchLeft>
          <img src={Curve} alt="arrow" className="curve" />
          <GetInTourchRight>
            <div className="bookImg">
              <img src={BookNow} alt="bookNow" className="book" />
              <FormArea>
                <h2>Find a room</h2>
                <div className="formArea">
                  <div className="form">
                    <div className="checkIn input">
                      <h4>Check in</h4>
                      <img src={Dropdown} alt="dropdown" />
                    </div>
                    <div className="checkOut input">
                      <h4>Check Out</h4>
                      <img src={Dropdown} alt="dropdown" />
                    </div>
                  </div>
                  <button className="btn">book room</button>
                </div>
              </FormArea>
            </div>
            <div className="mainImg">
              <img src={SubImg} alt="Get_in_tourch_image" />
            </div>
          </GetInTourchRight>
        </GetInTourchArea>
      </Container>
    </GetInTourchCon>
  );
};

export default GetInTourch;
