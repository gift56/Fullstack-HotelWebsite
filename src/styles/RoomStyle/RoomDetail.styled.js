import styled from "styled-components";

export const DetailCon = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.darkColor};
  z-index: 1;
`;

export const DetailArea = styled.div`
  padding: 60px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3rem;
  .leftSide {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3rem;
    .detail {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 2rem;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 1px solid #fffcf6;
        border-radius: 99px;
        width: 175px;
        height: 50px;
        div {
          width: 35px;
          height: 35px;
          img {
            width: 100%;
          }
        }
        span {
          font-weight: 400;
          font-family: "Open Sans", sans-serif !important;
          font-size: 16px;
          line-height: 19px;
          text-transform: capitalize;
          color: #fffcf6;
        }
      }
    }
  }
`;

export const DetailLeftArea = styled.div``;

export const DetailRightArea = styled.div``;
