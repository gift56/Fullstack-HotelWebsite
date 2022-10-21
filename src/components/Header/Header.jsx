import React, { useEffect, useState } from "react";
import { NavLink as Link } from "react-router-dom";
import Star from "../../assets/star.svg";
import Bar from "../../assets/openIcon.svg";
import Close from "../../assets/closeIcon.svg";
import { Container } from "../../styles/container.styled";
import { HeaderContainer, HeaderArea } from "../../styles/header.styled";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      text: "home",
      to: "/",
    },
    {
      text: "about",
      to: "/about",
    },
    {
      text: "rooms",
      to: "/rooms",
    },
    {
      text: "restaurant",
      to: "/restaurant",
    },
    {
      text: "conference hall",
      to: "/conferencehall",
    },
    {
      text: "contacts",
      to: "/contacts",
    },
  ];

  const SocialLinks = ["Facebook", "Instagram", "twitter"];

  useEffect(() => {
    const handleScroll = (e) => {
      const nav = document.querySelector("nav");
      if (e.currentTarget.scrollY > 50) {
        nav.classList.add("nav__scrolled");
      } else {
        nav.classList.remove("nav__scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer>
      <Container>
        <HeaderArea>
          <div>
            <h2>BankHotel</h2>
          </div>
          <ul className="desktopUl">
            {navLinks.map(({ text, to }) => (
              <li className={`li`} key={text}>
                <Link to={to}>
                  {text}
                  <div>
                    <img src={Star} alt="/" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={`mobileUl ${open ? "left" : ""}`}>
            {navLinks.map(({ text, to }) => (
              <li className={`li`} key={text}>
                <Link to={to}>
                  {text}
                  <div>
                    <img src={Star} alt="/" />
                  </div>
                </Link>
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
              <img src={Close} alt="icon" />
            ) : (
              <img src={Bar} alt="icon" />
            )}
          </button>
        </HeaderArea>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
