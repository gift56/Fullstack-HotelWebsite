import styled from "styled-components";

export const ButtonsStar = styled.button`
  @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
    background-color: transparent;
    border: 1px solid ${({ color }) => color};
    border-radius: 99px;
    padding: 7px 24px;
    display: flex !important;
    align-items: center;
    gap: 1rem;
    div {
      width: 35px;
      height: 35px;
      img {
        width: 100%;
      }
    }
    span {
      font-family: "Open Sans", sans-serif !important;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      text-transform: capitalize;
      color: ${({ color }) => color};
    }
  }
`;
