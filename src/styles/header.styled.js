import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.darkColor};
  .left {
    left: 0 !important;
  }
`;

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.whiteColor};
  padding: 20px 0;

  div {
    h2 {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-transform: capitalize;
    }
  }
  .mobileUl {
    position: absolute;
    top: 65px;
    /* left: -100vw;
     */
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: ${({ theme }) => theme.darkColor};
    display: flex;
    flex-direction: column;
    transition: all 500ms ease;
    border-bottom: 1px solid gray;
    padding: 1rem 1.8rem;
    gap: 2rem;
    @media screen and (min-width: 1181px) {
      display: none;
    }
    @media screen and (max-width: ${({ theme }) => theme.mobile.phone}) {
      padding: 1rem;
    }
    .li {
      font-weight: 400;
      font-size: 25px;
      line-height: 30px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      transition: all 500ms ease;
      cursor: pointer;
      &:hover {
        div {
          opacity: 1;
        }
      }
      div {
        width: 30px;
        height: 30px;
        opacity: 0;
        transition: all 500ms ease;
        img {
          width: 100%;
        }
      }
    }
    .MobilecontactNumber {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 10px;
      justify-content: center;
      align-items: center;
      p{
        text-transform: uppercase;
      }
      div {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .desktopUl {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    @media screen and (max-width: ${({ theme }) => theme.mobile.minLap}) {
      gap: 0.5rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.mobile.minLap}) {
      display: none;
    }
    .li {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      transition: all 500ms ease;
      cursor: pointer;
      &:hover {
        div {
          opacity: 1;
        }
      }
      div {
        width: 30px;
        height: 30px;
        opacity: 0;
        transition: all 500ms ease;
        img {
          width: 100%;
        }
      }
    }
  }
  .contactNumber {
    @media screen and (max-width: ${({ theme }) => theme.mobile.minLap}) {
      display: none;
    }
  }
  .Toggle {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 500ms ease;
    @media screen and (min-width: 1181px) {
      display: none;
    }
  }
`;
