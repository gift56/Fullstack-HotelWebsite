import styled from "styled-components";

export const ResturantSpaceCon = styled.section`
  background-color: ${({ theme }) => theme.darkColor};
`;

export const ResturantSpaceArea = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ResturantSpaceLeftArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  width: inherit;
  @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
    width: 40%;
  }
  @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
    width: 60%;
  }
  .image {
    width: 186px;
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      width: 258px;
      height: 362px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h3 {
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    text-transform: uppercase;
    font-family: "Open Sans", sans-serif !important;
    color: ${({ theme }) => theme.spanText};
    span {
      display: block;
      font-family: inherit;
    }
  }
`;

export const ResturantSpaceRightArea = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  .titleArea {
    width: 100%;
    display: inherit;
    align-items: flex-end;
    justify-content: flex-end;
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      justify-content: flex-start;
    }
    h3 {
      color: ${({ theme }) => theme.whiteColor};
      font-weight: 400;
      font-size: 30px;
      line-height: 30px;
      letter-spacing: 0.03em;
      width: 79%;
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        width: 690px;
        font-size: 40px;
        line-height: 50px;
      }
    }
  }
  .imageCon {
    width: 100%;
    display: inherit;
    align-items: flex-start;
    justify-content: flex-start;
    @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
      justify-content: flex-end;
    }
    .image {
      width: 256px;
      height: 224px;
      @media screen and (min-width: ${({ theme }) => theme.mobile.phone2}) {
        width: 90%;
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        width: 100%;
        height: 448px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .detailCon {
    width: 100%;
    display: inherit;
    align-items: flex-end;
    justify-content: flex-end;
    .details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 79%;
      h2,
      p {
        color: ${({ theme }) => theme.whiteColor};
      }
      h2 {
        font-weight: 400;
        font-size: 29px;
        line-height: 37px;
        letter-spacing: 0.03em;
        text-transform: capitalize;
      }
      p {
        font-weight: 400;
        font-size: 13px;
        line-height: 23px;
        font-family: "Open Sans", sans-serif !important;
      }
    }
  }
`;
