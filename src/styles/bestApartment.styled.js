import styled from "styled-components";

export const BestApartmentCon = styled.section`
  background-image: url(${({ bg }) => bg[1]});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 844px;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    background-image: url(${({ bg }) => bg[0]});
    min-height: 682px;
  }
`;

export const BestApartmentArea = styled.div`
  padding: 40px 0;
  width: 100%;
  height: 810px;
  @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
    height: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    height: 100vh;
  }
`;

export const BestApartmentTexts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
    justify-content: flex-start;
    gap: 2rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    justify-content: space-between;
  }
  h2 {
    color: ${({ theme }) => theme.spanText};
    font-weight: 400;
    font-size: 50px;
    line-height: 60px;
    text-transform: uppercase;
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      font-size: 80px;
      line-height: 80px;
    }
  }
  p {
    width: 209px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.spanText};
    transform: translateX(93px);
    @media screen and (min-width: 430px) {
      transform: translateX(0) translateY(-169px);
      background: #0006;
      padding: 1rem 7px;
      border-radius: 4px;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      transform: none;
    }
  }
`;
