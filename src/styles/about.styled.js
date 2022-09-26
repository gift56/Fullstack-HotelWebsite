import styled from "styled-components";

export const AboutContainer = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.darkColor};
`;

export const AboutArea = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  align-items: flex-start;
  background-image: url(${({ bg }) => bg});
  background-position: 598% -25%;
  background-size: 159% 63%;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    padding-top: 20px;
    padding-bottom: 50px;
    background-position: 366% -2%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const AboutLeft = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  h2 {
    font-weight: 400;
    font-size: 53px;
    line-height: 60px;
    text-align: right;
    text-transform: uppercase;
    color: ${({ theme }) => theme.spanText};
    margin-top: 60px;
    @media screen and (max-width: 313px) {
      font-size: 20px;
    }
    @media screen and (min-width: 363px) {
      margin-top: 0px;
      font-size: 60px;
    }
    @media screen and (min-width: 983px) {
      position: absolute;
      top: 126px;
      left: 263px;
      z-index: 10;
      font-size: 80px;
      line-height: 80px;
      span {
        color: ${({ theme }) => theme.whiteColor};
      }
    }
  }
`;
// font-family: "Open Sans", sans-serif !important;
export const AboutRight = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.darkColor};
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    background-color: transparent;
    flex-direction: row;
  }
  .mobileImage {
    width: 294px;
    img {
      width: 100%;
    }
    @media screen and (min-width: 983px) {
      display: none;
    }
    @media screen and (min-width: 583px) {
      width: 90%;
    }
    @media screen and (max-width: 313px) {
      width: 100%;
    }
  }
  .desktopImage {
    display: none;
    width: 100%;
    @media screen and (min-width: 983px) {
      display: block;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      bottom: -167px;
      right: -73px;
    }
    h3 {
      color: ${({ theme }) => theme.whiteColor};
      font-weight: 400;
      font-size: 30px;
      line-height: 30px;
      text-transform: capitalize;
    }
    p {
      span {
        font-family: "Open Sans", sans-serif !important;
      }
      font-family: "Open Sans", sans-serif !important;
      color: ${({ theme }) => theme.whiteColor};
      opacity: 0.8;
      font-weight: 400;
      font-size: 12px;
      line-height: 23px;
      width: 100%;
      @media screen and (min-width: 350px) {
        font-size: 14px;
        text-align: justify;
      }
      @media screen and (min-width: 330px) {
        width: 90%;
      }
    }
    img {
      position: absolute;
      top: -5px;
      right: 0;
      width: 72px;
      transform: rotate(-17deg);
      @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
        width: 82px;
        top: -2px;
        right: 21px;
        transform: rotate(-10deg);
      }
      @media screen and (max-width: 313px) {
        display: none;
      }
      @media screen and (min-width: 983px) {
        display: none;
      }
    }
    .mobileP {
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        display: none;
      }
    }
    .deskP {
      display: none;
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        display: block;
        span {
          display: block;
        }
      }
    }
  }
  .tab {
    display: none;
    @media screen and (min-width: 983px) {
      display: block;
      position: relative;
      top: -105px;
      .tabsideImg {
        transform: translateY(-20px);
      }
      .labelImg {
        position: absolute;
        top: -85px;
        left: -70px;
        transform: rotate(-98deg);
      }
    }
    .bookRoom {
      display: none;
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        display: block;
      }
    }
  }
`;

export const AboutTitleArea = styled.div``;
