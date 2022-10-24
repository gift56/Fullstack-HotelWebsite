import styled from "styled-components";

export const ResturantOfferCon = styled.section`
  background-color: ${({ theme }) => theme.darkColor};
`;

export const ResturantOfferArea = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
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
`;

export const ResturantOfferRightArea = styled.div`
  .desktopImg {
    display: none;
  }
  .imgae {
    width: 372px;
    img {
      width: 100%;
    }
  }
`;
