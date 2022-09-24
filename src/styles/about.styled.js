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
  background-position: 601% -7%;
  background-size: 229% 70%;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    padding-top: 20px;
    padding-bottom: 50px;
  }
`;

export const AboutLeft = styled.div`
  width: 100%;
`;

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

export const AboutTitleArea = styled.div`

`;
