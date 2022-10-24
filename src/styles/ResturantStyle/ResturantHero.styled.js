import styled from "styled-components";

export const ResturantCon = styled.section`
  background-color: ${({ theme }) => theme.darkColor};
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top: 1px solid #3f5148;
`;

export const ResturantArea = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  justify-content: flex-start;
  gap: 2rem;
`;

export const ResturantLeftArea = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  h2 {
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    color: ${({ theme }) => theme.spanText};
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      font-size: 80px;
      line-height: 80px;
    }
  }
`;

export const ResturantRightArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  }
  h3 {
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.whiteColor};
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      width: 100%;
      font-size: 30px;
    }
  }
  .details {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      align-items: center;
    }
    .labelCon {
      @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
        width: 90%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        width: 76%;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
    .label {
      transform: rotate(-48deg) translateY(4px) translateX(-17px);
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        transform: rotate(-90deg) translateY(-40px) translateX(-30px);
      }
    }
    p {
      font-family: "Open Sans", sans-serif !important;
      color: ${({ theme }) => theme.whiteColor};
      font-weight: 400;
      font-size: 13px;
      line-height: 23px;
      margin-top: 10px !important;
      @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
        font-size: 18px;
        line-height: 28px;
      }
      span {
        display: block;
        font-family: inherit;
      }
    }
  }
`;
