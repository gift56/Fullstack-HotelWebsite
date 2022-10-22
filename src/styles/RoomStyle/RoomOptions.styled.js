import styled from "styled-components";

export const OptionCon = styled.section`
  background-color: ${({ theme }) => theme.whiteColor};
`;

export const OptionArea = styled.div`
  padding: 40px 0;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  button {
    border: 1px solid ${({ theme }) => theme.darkColor};
    border-radius: 99px;
    width: 171px;
    height: 50px;
    font-family: "Open Sans", sans-serif !important;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
    background: transparent;
  }
`;

export const OptionLeftArea = styled.div`
  width: 100%;
  .imageCon {
    display: none;
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      display: block;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      gap: 2rem;
      justify-content: space-between;
    }
    .textArea {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      gap: 1rem;
      h2 {
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
        color: ${({ theme }) => theme.darkColor2};
        letter-spacing: 0.03em;
        text-transform: capitalize;
        @media screen and (min-width: ${({ theme }) => theme.mobile.phone}) {
          font-size: 36px;
          line-height: 44px;
        }
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 23px;
        opacity: 0.8;
        color: ${({ theme }) => theme.darkColor2};
        font-family: "Open Sans", sans-serif !important;
        span {
          display: block;
          font-family: inherit;
          @media screen and (min-width: ${({ theme }) => theme.mobile.phone}) {
            display: inline;
          }
          @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
            display: block;
          }
        }
        @media screen and (min-width: ${({ theme }) => theme.mobile.phone}) {
          font-size: 16px;
        }
      }
    }
    button {
      display: none;
      @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
        display: block;
      }
    }
  }
`;

export const OptionRightArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  .Images {
    width: 98%;
    img {
      width: 100%;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    width: 100%;
    position: relative;
    .textArea {
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-end;
      justify-content: flex-end;
      .label {
        position: absolute;
        top: -41px;
        right: 0;
        @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
          display: none;
        }
      }
      p {
        font-weight: 400;
        font-family: "Open Sans", sans-serif !important;
        font-size: 15px;
        line-height: 23px;
        opacity: 0.8;
        color: ${({ theme }) => theme.darkColor2};
        width: 90%;
      }
    }
    .btn {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
        display: none;
      }
    }
  }
`;
