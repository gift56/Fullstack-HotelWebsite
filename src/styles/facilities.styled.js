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
`;

export const FacilitiesLeftside = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
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
    .label {
      display: none;
    }
  }
  .textArea {
    display: flex;
    flex-direction: column;
    gap: 12rem;
    .textdetail {
      font-weight: 400;
      font-size: 13px;
      line-height: 23px;
      opacity: 0.8;
      font-family: "Open Sans", sans-serif !important;
      @media screen and (min-width: 405px) {
        font-size: 15px;
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
    }
  }
`;

export const FacilitiesRightside = styled.div``;
