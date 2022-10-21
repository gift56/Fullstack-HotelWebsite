import styled from "styled-components";

export const HeroCon = styled.section`
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 443px;
  width: 100%;
`;

export const HeroArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  min-height: 430px;
  padding: 30px 0;
  .leftSide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      min-height: inherit;
    }
    h2 {
      font-weight: 400;
      font-size: 70px;
      line-height: 60px;
      color: ${({ theme }) => theme.spanText};
      @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
        font-size: 100px;
        line-height: 100px;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        font-size: 150px;
        line-height: 150px;
      }
    }
    p {
      display: none;
      @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
        display: block;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.spanText};
        transform: translateY(90px);
        font-family: "Open Sans", sans-serif !important;
      }
    }
  }
  .rightSide {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    transform: translateY(80px);
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      transform: none;
    }
    .image {
      width: 108px;
      @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
        width: 175px;
      }
      img {
        width: 100%;
      }
    }
  }
`;
