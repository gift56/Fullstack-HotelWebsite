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
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    gap: 5rem;
    padding: 80px 0;
  }
`;

export const RoomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  padding-top: 30px;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  h2 {
    font-weight: 400;
    font-size: 50px;
    line-height: 60px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.darkColor2};
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      font-size: 90px;
      line-height: 80px;
      span {
        display: block;
      }
    }
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
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      font-size: 16px;
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
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      display: none;
    }
  }
`;

export const RoomRight = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    flex-direction: row;
  }
  .leftSide {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding-top: 90px;
    padding-bottom: 40px;
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      padding: 0;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      flex: 1;
    }
  }
  .arrowSide {
    cursor: pointer;
    @media screen and (min-width: 583px) {
      width: 100%;
    }

    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 71%;
      gap: 11rem;
    }
    .minImg {
      display: none;
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        display: block;
      }
    }
    .arrow {
      width: 60px;
      @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
        width: 105px;
      }
      img {
        width: 100%;
      }
    }
  }
  .text {
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 11rem;
    }
    button {
      display: none;
    }
    .textArea {
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 70%;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        width: 85%;
      }
      h2 {
        position: absolute;
        top: 29px;
        left: 0;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
        text-transform: capitalize;
        color: ${({ theme }) => theme.darkColor2};
        @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
          position: relative;
          top: 0;
          font-size: 36px;
          line-height: 44px;
          letter-spacing: 0.03em;
        }
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
        @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
          position: relative;
          top: 0;
          margin-top: 3rem;
        }
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
        @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
          text-align: left;
        }
      }
    }
  }
  .mainImg {
    width: 285px;
    @media screen and (min-width: 583px) {
      width: 90%;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      height: 377px;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      display: none;
    }
    @media screen and (max-width: 313px) {
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .deskImg {
    display: none;
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      display: block;
      width: 40%;
      img {
        width: 100%;
      }
    }
    @media screen and (min-width: 1300px) {
      width: 30%;
    }
  }
`;
