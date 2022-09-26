import styled from "styled-components";

export const RoomContainer = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.whiteColor};
`;

export const RoomArea = styled.div`
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

export const RoomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  padding-top: 30px;

  h2 {
    font-weight: 400;
    font-size: 50px;
    line-height: 60px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.darkColor2};
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.darkColor2};
    span {
      font-family: "Open Sans", sans-serif !important;
      display: block;
    }
  }
  .rooms {
    position: absolute;
    top: -10px;
    right: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    font-family: "Open Sans", sans-serif !important;
    text-transform: capitalize;
  }
`;

export const RoomRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .arrowSide {
    .minImg {
      display: none;
    }
  }
  .text {
    button {
      display: none;
    }
  }
  .mainImg {
    width: 294px;

    img {
      width: 100%;
    }
  }
`;
