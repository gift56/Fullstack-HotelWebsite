import styled from "styled-components";

export const ResturantOfferCon = styled.section`
  background-color: ${({ theme }) => theme.darkColor};
  border-bottom: 1px solid ${({ theme }) => theme.whiteColor};
  @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
    border: none !important;
  }
`;

export const ResturantOfferArea = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 30px 0;
  padding-bottom: 50px !important;
  @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
    gap: 5rem;
  }
`;

export const ResturantOfferLeftArea = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  h2 {
    font-weight: 400;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 0.03em;
    text-transform: capitalize;
    color: ${({ theme }) => theme.whiteColor};
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      font-size: 36px;
      line-height: 44px;
    }
  }
  p {
    color: ${({ theme }) => theme.whiteColor};
    font-family: "Open Sans", sans-serif !important;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    text-align: left;
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      font-size: 18px;
      line-height: 28px;
    }
    span {
      font-family: inherit;
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        display: block;
      }
    }
  }
`;

export const ResturantOfferRightArea = styled.div`
  width: inherit;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  .desktopImg {
    display: none;
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      display: flex;
      width: 70% !important;
      height: 450px;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      height: 580px;
    }
  }
  .mobileImg {
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      width: 50% !important;
      height: 356px;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      width: 356px !important;
    }
  }
  .image {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
