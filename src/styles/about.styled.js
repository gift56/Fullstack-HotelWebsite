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
  background-position: 589% -26%;
  background-size: 159% 63%;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    padding-top: 20px;
    padding-bottom: 50px;
  }
`;

export const AboutLeft = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  h2 {
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    text-align: right;
    text-transform: uppercase;
    color: ${({ theme }) => theme.spanText};
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
  }
  .desktopImage {
    display: none;
    width: 100%;
    @media screen and (min-width: 983px) {
      display: block;
    }
  }
  .text {
    .mobileP {
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        display: none;
      }
    }
    .deskP {
      display: none;
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        display: block;
      }
    }
  }
  .tab {
    display: none;
    @media screen and (min-width: 983px) {
      display: block;
    }
  }
`;

export const AboutTitleArea = styled.div``;
