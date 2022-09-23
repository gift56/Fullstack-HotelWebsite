import React, { useState } from "react";
import Star from "../assets/star.svg";
import Bar from "../assets/openIcon.svg";
import Close from "../assets/closeIcon.svg";
import { Container } from "../styles/container.styled";
import { HeaderContainer, HeaderArea } from "../styles/header.styled";
import "../index.css";

const Header = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const selectProduct = (index) => {
    setActive(index);
  };

  const Links = [
    "home",
    "about",
    "rooms",
    "restaurant",
    "conference hall",
    "contacts",
  ];

  const SocialLinks = ["Facebook", "Instagram", "twitter"];
  return (
    <HeaderContainer>
      <Container>
        <HeaderArea>
          <div>
            <h2>BankHotel</h2>
          </div>
          <ul className="desktopUl">
            {Links.map((link, index) => (
              <li
                className={`li ${active === index ? "active" : ""}`}
                onClick={() => selectProduct(index)}
                key={index}
              >
                {link}{" "}
                <div>
                  <img src={Star} alt="/" />
                </div>
              </li>
            ))}
          </ul>
          <ul className="mobileUl">
            {Links.map((link, index) => (
              <li
                className={`li ${active === index ? "active" : ""}`}
                onClick={() => selectProduct(index)}
                key={index}
              >
                {link}{" "}
                <div>
                  <img src={Star} alt="/" />
                </div>
              </li>
            ))}
            <div className="MobilecontactNumber">
              <p>+234 803 4559 3477</p>
              <p>8 Lystopadovoho Chynu,Lviv</p>
              <div>
                {SocialLinks.map((link) => (
                  <p key={link}>{link}</p>
                ))}
              </div>
            </div>
          </ul>
          <div className="contactNumber">
            <p>+234 803 4559 3477</p>
          </div>
          <button className="Toggle" onClick={() => setOpen((prev) => !prev)}>
            {open ? (
              <img src={Bar} alt="icon" />
            ) : (
              <img src={Close} alt="icon" />
            )}
          </button>
        </HeaderArea>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
