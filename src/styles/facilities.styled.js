import styled from "styled-components";

export const FacilitiesCon = styled.section`
  border-top: 1px solid #313f388f;
  position: relative;
`;

export const FacilitiesArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 40px 0;
  @media screen and (min-width: 983px) {
    padding: 60px 0;
  }
`;

export const FacilitiesLeftside = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  @media screen and (min-width: 983px) {
    flex-direction: row;
    justify-content: space-between;
  }
  .image {
    position: absolute;
    top: 208px;
    @media screen and (min-width: 375px) {
      width: 253px;
      top: 200px;
      img {
        width: 100%;
      }
    }
    @media screen and (min-width: 983px) {
      position: relative;
      top: 0;
    }
    @media screen and (min-width: 1203px) {
      width: 300px;
    }
    .label {
      display: none;
      @media screen and (min-width: 983px) {
        display: block;
        position: absolute;
        top: -32px;
        right: -32px;
        width: 80px;
      }
      @media screen and (min-width: 1203px) {
        display: none;
      }
    }
  }
  .textArea {
    display: flex;
    flex-direction: column;
    gap: 12rem;
    width: 100%;
    @media screen and (min-width: 983px) {
      gap: 4rem;
      width: 65%;
    }
    .textdetail {
      font-weight: 400;
      font-size: 13px;
      line-height: 23px;
      opacity: 0.8;
      font-family: "Open Sans", sans-serif !important;
      @media screen and (min-width: 405px) {
        font-size: 15px;
      }
      @media screen and (min-width: 607px) {
        margin-top: 30px;
        width: 90%;
      }
      @media screen and (min-width: 983px) {
        margin-top: 0;
        width: 250px;
      }
    }
  }
`;

export const FacilitiesLeftsideTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 375px) {
    justify-content: space-between;
    align-items: flex-end;
  }
  h2 {
    font-weight: 400;
    font-size: 53px;
    line-height: 60px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.darkColor2};
    span {
      display: flex;
      gap: 0.5rem;
      @media screen and (min-width: 983px) {
        transform: translateX(119px);
      }
      @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
        transform: translateX(100px);
      }
      @media screen and (min-width: 1203px) {
        transform: translateX(110px);
      }
    }

    @media screen and (min-width: 983px) {
      font-size: 90px;
      line-height: 80px;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      font-size: 85px;
    }
    @media screen and (min-width: 1203px) {
      font-size: 90px;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    text-transform: capitalize;
    font-family: "Open Sans", sans-serif !important;
    color: ${({ theme }) => theme.darkColor2};
    span {
      display: block;
      font-family: "Open Sans", sans-serif !important;
    }
    @media screen and (min-width: 983px) {
      font-size: 18px;
    }
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      position: absolute;
      top: 0;
      left: 0;
      width: 125px;
      text-align: left;
      span {
        display: inline;
      }
    }
  }
  .img {
    display: none;
    @media screen and (min-width: ${({ theme }) => theme.mobile.minLap}) {
      display: block;
      width: 282px;
      img {
        width: 100%;
      }
    }
  }
`;

export const FacilitiesRightside = styled.div``;
