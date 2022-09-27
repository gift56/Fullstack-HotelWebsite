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
    @media screen and (min-width: 583px) {
      font-size: 15px;
      line-height: 20px;
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
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .leftSide {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding-top: 90px;
    padding-bottom: 40px;
  }
  .arrowSide {
    @media screen and (min-width: 583px) {
      width: 100%;
    }
    .minImg {
      display: none;
    }
    .arrow {
      width: 60px;
      img {
        width: 100%;
      }
    }
  }
  .text {
    button {
      display: none;
    }
    .textArea {
      h2 {
        position: absolute;
        top: 29px;
        left: 0;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
        text-transform: capitalize;
        color: ${({ theme }) => theme.darkColor2};
      }
      .ratio {
        position: absolute;
        top: 0;
        right: 0;
        font-family: "Open Sans", sans-serif !important;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 15px;
        span {
          color: #1b3b3699;
        }
      }
      .desktopP {
        font-family: "Open Sans", sans-serif !important;
        font-weight: 400;
        font-size: 13px;
        color: ${({ theme }) => theme.darkColor2};
        line-height: 23px;
        opacity: 0.8;
        @media screen and (min-width: 583px) {
          font-size: 15px;
          text-align: justify;
        }
      }
    }
  }
  .mainImg {
    width: 285px;
    @media screen and (min-width: 583px) {
      width: 90%;
    }
    @media screen and (max-width: 313px) {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
`;
