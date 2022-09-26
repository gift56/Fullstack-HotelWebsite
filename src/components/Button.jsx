import React from "react";
import Star from "../assets/star.svg";
import { ButtonsStar } from "../styles/button.styled";

const Button = () => {
  return (
    <ButtonsStar color="#FFFCF6">
      <div>
        <img src={Star} alt="/" />
      </div>
      <span>since 1973</span>
    </ButtonsStar>
  );
};

export default Button;
