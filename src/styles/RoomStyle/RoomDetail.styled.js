import styled from "styled-components";

export const DetailCon = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.darkColor};
`;

export const DetailArea = styled.div`
  padding: 60px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3rem;
  @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
    padding: 120px 0;
    gap: 4rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
    padding: 100px 0;
  }
`;

export const DetailLeftArea = styled.div`
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  p {
    display: none;
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      display: block;
      font-weight: 400;
      font-size: 15px;
      line-height: 23px;
      color: ${({ theme }) => theme.whiteColor};
      opacity: 0.8;
      font-family: "Open Sans", sans-serif !important;
      width: 357px;
    }
  }
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
      @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
        flex-direction: column;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 1px solid #fffcf6;
        border-radius: 99px;
        width: 175px;
        height: 50px;
        @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
          width: 185px;
        }
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
          color: ${({ theme }) => theme.whiteColor};
        }
      }
      h3 {
        font-weight: 400;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: 0.03em;
        color: ${({ theme }) => theme.whiteColor};
        @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
          span {
            display: block;
            font-family: inherit;
          }
        }
        @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
          font-size: 40px;
          line-height: 40px;
        }
        @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
          font-size: 50px;
          line-height: 50px;
        }
      }
    }
    h4 {
      font-family: "Open Sans", sans-serif !important;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-transform: capitalize;
      color: ${({ theme }) => theme.spanText};
      position: absolute;
      bottom: 50px;
      left: 10px;
      @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
        left: 2%;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        left: 5%;
      }
    }
  }
`;

export const DetailRightArea = styled.div`
  width: 100%;
  padding-bottom: 60px;
  @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    color: ${({ theme }) => theme.whiteColor};
    opacity: 0.8;
    font-family: "Open Sans", sans-serif !important;
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      width: 357px;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      transform: translateX(40%);
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      display: none;
    }
  }
`;
