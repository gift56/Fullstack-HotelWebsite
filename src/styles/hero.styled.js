import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.darkColor};
`;

export const HeroArea = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    padding-top: 20px;
    padding-bottom: 50px;
  }
  @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const LeftSide = styled.div`
  position: relative;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
    padding-top: 20px;
  }
`;

export const LeftSideTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.whiteColor};

  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .heading {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      width: 50%;
      justify-content: flex-start;
      align-items: flex-start;
    }
    h1 {
      font-weight: 400;
      font-size: 63px;
      line-height: 97px;
      font-family: "miracle", sans-serif !important;
      color: ${({ theme }) => theme.whiteColor};
      span {
        color: ${({ theme }) => theme.spanText};
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        font-size: 90px;
        line-height: 146px;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.BigLap}) {
        font-size: 140px;
        line-height: 207px;
      }
    }
    p {
      font-family: "Open Sans", sans-serif !important;
      text-transform: uppercase;
      color: ${({ theme }) => theme.spanText};
      font-weight: 500;
      font-size: 11.2px;
      line-height: 14px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        content: "";
        position: absolute;
        bottom: -18px;
        left: 25%;
        width: 45%;
        border-bottom: 1px solid ${({ theme }) => theme.whiteColor};
        height: 2px;
        opacity: 0.12;
      }
      @media screen and (min-width: 503px) {
        font-size: 15px;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        &::before {
          content: "";
          display: none;
        }
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        font-size: 18px;
      }
    }
  }
  .details {
    margin: 10px 0;
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      width: 50%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      flex-direction: column;
      gap: 4rem;
      width: 45%;
    }
    .tabs {
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }
      @media screen and (max-width: 981px) {
        display: none;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        button {
          display: none;
        }
      }
    }
    .text {
      font-family: "Open Sans", sans-serif !important;
      font-weight: 400;
      font-size: 14px;
      line-height: 23px;
      color: ${({ theme }) => theme.whiteColor};
      opacity: 0.8;
      @media screen and (min-width: 503px) {
        font-size: 18px;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.phone}) {
        width: 70%;
        margin: 0 auto;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        margin: 0;
        text-align: left;
        width: 60%;
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
`;

export const BookForm = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    position: absolute;
    bottom: 105px;
    width: 100%;
    .formArea {
      display: flex;
      align-items: center;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 231px;
        height: 100px;
        background-color: ${({ theme }) => theme.spanText};
        color: ${({ theme }) => theme.darkColor2};
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        text-transform: uppercase;
        font-family: "Open Sans", sans-serif !important;
      }
      .form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 378px;
        height: 100px;
        background-color: rgba(49, 63, 56, 0.48);
        backdrop-filter: blur(20px);
        @media screen and (min-width: ${({ theme }) => theme.mobile.BigLap}) {
          width: 592px;
        }
        .input {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 25px;
          cursor: pointer;
        }
        .checkIn {
          border-right: 2px solid rgba(0, 0, 0, 0.2);
        }
        .checkIn,
        .checkOut {
          width: 50%;
          height: 35px;
          h4 {
            font-family: "Open Sans", sans-serif !important;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            text-transform: uppercase;
            color: ${({ theme }) => theme.whiteColor};
          }
        }
      }
    }
  }
`;

export const RightSide = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    padding-top: 20px;
  }
  .desktopImg {
    width: 100%;
    @media screen and (max-width: ${({ theme }) => theme.mobile.tab}) {
      display: none;
    }
    .image {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .mobileImg {
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
  .book {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 30px;
    width: 90%;
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      width: 100%;
      flex-direction: row-reverse;
    }
    p {
      font-family: "Open Sans", sans-serif !important;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.whiteColor};
      @media screen and (min-width: 503px) {
        font-size: 15px;
        line-height: 19px;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.phone}) {
        font-size: 16px;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        text-align: right;
        font-size: 23px;
        line-height: 31px;
      }
    }
    .contact {
      display: none;
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        display: block;
      }
      p {
        text-decoration: underline;
        &:first-child {
          color: ${({ theme }) => theme.spanText};
          text-align: left;
        }

        &:last-child {
          margin-top: 10px;
        }
      }
    }
  }
`;
