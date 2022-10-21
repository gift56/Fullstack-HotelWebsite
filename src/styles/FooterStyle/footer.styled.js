import styled from "styled-components";

export const FooterCon = styled.footer`
  background-color: ${({ theme }) => theme.whiteColor};
  border-top: 1px solid ${({ theme }) => theme.darkColor};
`;

export const FooterArea = styled.div`
  padding: 40px 0;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    padding: 70px 0;
  }
`;

export const FooterMobileFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Open Sans", sans-serif !important;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.darkColor};
    text-transform: uppercase;
  }
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    display: none;
  }
`;

export const FooterRows = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .rows {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      h3 {
        font-family: "Open Sans", sans-serif !important;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.darkColor};
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 23px;
        color: ${({ theme }) => theme.darkColor};
        opacity: 0.8;
        font-family: "Open Sans", sans-serif !important;
        span {
          font-family: "Open Sans", sans-serif !important;
          display: block;
        }
      }
      .copy {
        opacity: 0.24;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          font-family: "Open Sans", sans-serif !important;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: ${({ theme }) => theme.darkColor};
          text-transform: uppercase;
        }
      }
      .email {
        width: 100%;
        form {
          display: flex;
          width: 100%;
          height: 65px;
          gap: 1rem;
          align-items: center;
          border: 1px solid #313f38;
          backdrop-filter: blur(20px);
          padding: 0 10px;
          input {
            height: 100%;
            width: 88%;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            text-transform: uppercase;
            opacity: 0.48;
            padding-left: 12px;
            font-family: "Open Sans", sans-serif !important;
          }
          button {
            background-color: transparent;
            height: 100%;
            cursor: pointer;
          }
        }
      }
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
    h3 {
      font-size: 24px !important;
    }
    p,
    li {
      font-size: 18px !important;
    }
    ul {
      flex-direction: row !important;
    }
  }
`;
