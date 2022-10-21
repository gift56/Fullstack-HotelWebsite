import React from "react";
import Arrow from "../../assets/arrow.svg";
import { Container } from "../../styles/Container/container.styled";
import {
  FooterArea,
  FooterCon,
  FooterMobileFooter,
  FooterRows,
} from "../../styles/FooterStyle/footer.styled";

const Footer = () => {
  const SocialLinks = [
    {
      link: "Facebook",
      to: "",
    },
    {
      link: "Instagram",
      to: "",
    },
    {
      link: "twitter",
      to: "",
    },
  ];
  return (
    <FooterCon>
      <Container>
        <FooterArea>
          <FooterMobileFooter>
            <p>&copy; 2021 All rights reserved. BankHotel</p>
          </FooterMobileFooter>
          <FooterRows>
            <div className="rows">
              <h3>About us</h3>
              <p>
                <span>The five-star hotel in a beautiful</span>
                <span> European city with a modern</span>
                <span>restaurant, conference-hall, and art-bar.</span>
              </p>
              <p className="copy">&copy; 2021 All rights reserved. BankHotel</p>
            </div>
            <div className="rows">
              <h3>New</h3>
              <p>
                <span>Sign up to our newsletter not to miss</span>
                <span>exclusive offers and information about</span>
                <span>the upcoming events.</span>
              </p>
              <div className="email">
                <form>
                  <input type="email" placeholder="Email" />
                  <button>
                    <img src={Arrow} alt="submit" />
                  </button>
                </form>
              </div>
            </div>
            <div className="rows">
              <h3>Social</h3>
              <ul>
                {SocialLinks.map(({ link }, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          </FooterRows>
        </FooterArea>
      </Container>
    </FooterCon>
  );
};

export default Footer;
