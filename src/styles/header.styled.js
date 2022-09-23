import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.darkColor};
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
    @media screen and (min-width: 1181px) {
      display: none;
    }
  }
`;
