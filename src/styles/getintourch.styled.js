import styled from "styled-components";

export const GetInTourchCon = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.whiteColor};
`;

export const GetInTourchArea = styled.div`
  padding: 50px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  overflow: hidden;
  .curve {
    position: absolute;
    position: absolute;
    top: 21%;
    width: 100%;
    z-index: 10;
  }
`;

export const GetInTourchLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  p {
    font-family: "Open Sans", sans-serif !important;
    color: ${({ theme }) => theme.darkColor2};
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      font-size: 26px;
      line-height: 36px;
    }
  }
  .addressP {
    display: flex;
    justify-content: flex-end;
  }
  .FirstP {
    text-decoration: underline;
  }
  h2 {
    font-weight: 400;
    font-size: 70px;
    text-transform: uppercase;
    position: relative;
    z-index: 10;
    transform: translateY(20px);
    @media screen and (min-width: 600px) {
      font-size: 80px;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      font-size: 130px;
      line-height: 150px;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      font-size: 200px;
      line-height: 250px;
    }
    span {
      display: block;
      &:first-child {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.darkColor2};
      }
      &:last-child {
        transform: translateX(60px);
        color: ${({ theme }) => theme.spanText};
        @media screen and (min-width: 600px) {
          transform: translateX(160px);
        }
        @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;

export const FormArea = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    h2 {
      font-family: "Open Sans", sans-serif !important;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.darkColor2};
    }
    .formArea {
      display: flex;
      align-items: center;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 231px;
        height: 100px;
        background-color: ${({ theme }) => theme.darkColor};
        color: ${({ theme }) => theme.whiteColor};
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
        border: 1px solid ${({ theme }) => theme.darkColor};
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
            color: ${({ theme }) => theme.darkColor2};
          }
        }
      }
    }
  }
`;

export const GetInTourchRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .bookImg {
    .book {
      width: 100px;
      @media screen and (min-width: 500px) {
        width: 100%;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        display: none;
      }
    }
  }
  .mainImg {
    width: 150px;
    transform: translateY(-70px);
    @media screen and (min-width: 500px) {
      width: 50%;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      transform: translateY(-370px);
      width: 231px;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.BigLap}) {
      transform: translateY(-500px);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
