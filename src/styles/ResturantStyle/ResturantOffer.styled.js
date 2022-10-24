import styled from "styled-components";

export const ResturantOfferCon = styled.section`
  background-color: ${({ theme }) => theme.darkColor};
  border-bottom: 1px solid ${({ theme }) => theme.whiteColor};
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
  }
  p {
    color: ${({ theme }) => theme.whiteColor};
    font-family: "Open Sans", sans-serif !important;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    text-align: left;
  }
`;

export const ResturantOfferRightArea = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  .desktopImg {
    display: none;
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      display: flex;
      width: 70% !important;
    }
  }
  .mobileImg {
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      width: 50% !important;
    }
  }
  .image {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
