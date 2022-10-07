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
`;

export const GetInTourchLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  overflow: hidden;
  p {
    font-family: "Open Sans", sans-serif !important;
    color: ${({ theme }) => theme.darkColor2};
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
  }
  .addressP {
    display: flex;
    justify-content: flex-end;
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
      }
    }
  }
`;

export const FormArea = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    display: flex;
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
    height: 200px;
    transform: translateY(-70px);
    @media screen and (min-width: 500px) {
      width: 50%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
