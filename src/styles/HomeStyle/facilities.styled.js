import styled from "styled-components";

export const FacilitiesCon = styled.section`
  border-top: 1px solid #313f388f;
  position: relative;
  background-color: ${({ theme }) => theme.whiteColor};
`;

export const FacilitiesArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 40px 0;
  @media screen and (min-width: 983px) {
    padding: 60px 0;
    gap: 4rem;
  }
`;

export const FacilitiesLeftside = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  @media screen and (min-width: 983px) {
    flex-direction: row;
    justify-content: space-between;
  }
  .image {
    position: absolute;
    top: 208px;
    @media screen and (min-width: 375px) {
      width: 253px;
      top: 200px;
      img {
        width: 100%;
      }
    }
    @media screen and (min-width: 983px) {
      position: relative;
      top: 0;
    }
    @media screen and (min-width: 1203px) {
      top: 150px;
      width: 300px;
    }
    .label {
      display: none;
      @media screen and (min-width: 983px) {
        display: block;
        position: absolute;
        top: -32px;
        right: -32px;
        width: 80px;
      }
      @media screen and (min-width: 1203px) {
        display: none;
      }
    }
  }
  .textArea {
    display: flex;
    flex-direction: column;
    gap: 12rem;
    width: 100%;
    @media screen and (min-width: 983px) {
      gap: 4rem;
      width: 65%;
    }
    @media screen and (min-width: 1203px) {
      gap: 6rem;
    }
    .textdetail {
      font-weight: 400;
      font-size: 13px;
      line-height: 23px;
      opacity: 0.8;
      font-family: "Open Sans", sans-serif !important;
      @media screen and (min-width: 405px) {
        font-size: 15px;
      }
      @media screen and (min-width: 607px) {
        margin-top: 30px;
        width: 90%;
      }
      @media screen and (min-width: 983px) {
        margin-top: 0;
        width: 250px;
      }
    }
  }
`;

export const FacilitiesLeftsideTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 375px) {
    justify-content: space-between;
  }
  @media screen and (min-width: 1203px) {
    align-items: flex-end;
  }
  h2 {
    font-weight: 400;
    font-size: 53px;
    line-height: 60px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.darkColor2};
    span {
      display: flex;
      gap: 0.5rem;
      @media screen and (min-width: 983px) {
        transform: translateX(119px);
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        transform: translateX(100px);
      }
      @media screen and (min-width: 1203px) {
        transform: translateX(110px);
      }
    }

    @media screen and (min-width: 983px) {
      font-size: 90px;
      line-height: 80px;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      font-size: 85px;
    }
    @media screen and (min-width: 1203px) {
      font-size: 90px;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    text-transform: capitalize;
    font-family: "Open Sans", sans-serif !important;
    color: ${({ theme }) => theme.darkColor2};
    span {
      display: block;
      font-family: "Open Sans", sans-serif !important;
    }
    @media screen and (min-width: 983px) {
      font-size: 18px;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      position: absolute;
      top: 0;
      left: 0;
      width: 125px;
      text-align: left;
      span {
        display: inline;
      }
    }
  }
  .img {
    display: none;
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      display: block;
      width: 282px;
      img {
        width: 100%;
      }
    }
  }
`;

export const FacilitiesRightside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    gap: 4rem;
  }
  .firstSide {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      flex-direction: row;
    }
    .leftside {
      position: relative;
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        padding: 0;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        flex: 1;
      }
      .textArea {
        display: flex;
        align-items: center;
        gap: 1rem;
        @media screen and (min-width: 500px) {
          justify-content: space-between;
        }
        .arrowSide {
          width: 25%;
          transform: rotate(90deg);
          cursor: pointer;
          @media screen and (min-width: 450px) {
            width: 87px;
            margin-top: 40px;
          }
          @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
            width: 105px;
          }
          img {
            width: 100%;
          }
        }
        .text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          width: 70%;
          @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
            flex-direction: column-reverse;
            gap: 4rem;
          }
          @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
            gap: 13rem;
          }
          div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
              gap: 2rem;
            }
          }
          h2 {
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
            @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
              width: 250px;
            }
          }
          .ratio {
            position: absolute;
            top: 0;
            left: 0;
            font-weight: 400;
            font-size: 30px;
            line-height: 30px;
            color: ${({ theme }) => theme.darkColor2};
            @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
              position: relative;
              top: 0;
              margin-top: 3rem;
            }
            span {
              color: #1b3b3699;
            }
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
        width: 80%;
        height: 474px;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        width: 378px;
        height: 503.74px;
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
  }
  .secondSide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .contentArea {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      .conferenceArea {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 1rem;
        border-bottom: 1px solid #313f388f;
        position: relative;
        padding: 20px 0;
        @media screen and (min-width: 983px) {
          flex-direction: row;
          justify-content: space-between;
        }
        &:last-child {
          border-bottom: none;
          @media screen and (min-width: 983px) {
            border-bottom: 1px solid #313f388f;
          }
        }
        .img {
          @media screen and (min-width: ${({ theme }) => theme.mobile.phone}) {
            width: 50%;
          }
          @media screen and (min-width: 983px) {
            width: 189.51px;
          }
          img {
            width: 100%;
          }
        }
        .textside {
          @media screen and (min-width: 983px) {
            display: flex;
            align-items: center;
            gap: 8rem;
            width: 50%;
          }
          p {
            font-weight: 400;
            font-size: 30px;
            line-height: 30px;
            text-transform: uppercase;
            color: ${({ theme }) => theme.darkColor2};
            position: absolute;
            top: 0;
            right: 0;
            @media screen and (min-width: 983px) {
              position: initial;
              font-size: 36px;
              line-height: 44px;
            }
          }
          h2 {
            font-weight: 400;
            font-size: 24px;
            line-height: 20px;
            text-align: center;
            text-transform: capitalize;
            color: ${({ theme }) => theme.darkColor2};
            @media screen and (min-width: 983px) {
              font-size: 36px;
              line-height: 44px;
            }
          }
        }
        .arrow {
          display: none;
          cursor: pointer;
          @media screen and (min-width: 983px) {
            display: block;
          }
        }
      }
    }
  }
`;
