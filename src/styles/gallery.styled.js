import styled, { keyframes } from "styled-components";

export const GalleryCon = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.darkColor};
  overflow: hidden;
  z-index: 2;
`;

export const GalleryArea = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  overflow: hidden;
`;

export const GalleryleftSide = styled.div`
  width: 100%;
  position: relative;
  .artC {
    display: none;
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      display: block;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.whiteColor};
      font-family: "Open Sans", sans-serif !important;
      position: absolute;
    }
  }
`;

export const GalleryTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  .image {
    transform: rotate(-45deg) translateY(20px);
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      transform: rotate(-45deg) translateY(0);
    }
  }
  h2 {
    color: ${({ theme }) => theme.spanText};
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      font-size: 80px;
      line-height: 80px;
    }
  }
  p {
    color: ${({ theme }) => theme.whiteColor};
    font-style: normal;
    font-weight: 400;
    font-size: 12.5px;
    line-height: 23px;
    text-align: center;
    font-family: "Open Sans", sans-serif !important;
    opacity: 0.8;
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      font-size: 14px;
      width: 350px;
    }
  }
`;

export const GalleryrightSide = styled.div`
  position: relative;
  width: 100%;
  .details {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    h3 {
      color: ${({ theme }) => theme.whiteColor};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      font-family: "Open Sans", sans-serif !important;
      opacity: 0.8;
    }
  }
`;

export const GalleryRightSideMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  .details {
    @media screen and (min-width: 510px) {
      transform: translateY(20px);
    }
  }
  .images {
    &:first-child {
      position: relative;
      z-index: 10;
      transform: translateX(99px) translateY(-31px);
      @media screen and (min-width: 510px) {
        width: 35%;
      }
    }
    &:nth-child(2) {
      position: absolute;
      top: 50px;
      left: 0;
      @media screen and (min-width: 510px) {
        width: 35%;
      }
    }
    &:nth-child(3) {
      position: relative;
      z-index: 10;
      @media screen and (min-width: 510px) {
        width: 50%;
      }
    }
    &:nth-child(4) {
      position: absolute;
      top: 50px;
      right: -48px;
      @media screen and (min-width: 510px) {
        width: 50%;
      }
    }
    &:nth-child(5) {
      position: absolute;
      bottom: 43px;
      left: -29px;
      @media screen and (min-width: 510px) {
        width: 35%;
      }
    }
    img {
      width: 100%;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    display: none;
  }
`;

export const GalleryRightSideDesktop = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
    .details {
      justify-content: center;
      transform: translateX(-100px) translateY(-50px);
    }
    .images {
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        position: absolute;
      }
      &:nth-child(2) {
        top: -50px;
        right: 0;
      }
      &:nth-child(3) {
        top: -90px;
        left: 0;
      }
      &:nth-child(4) {
        bottom: 0;
        left: 0;
      }
      &:nth-child(5) {
        bottom: 0;
        right: 0;
        width: 190px;
        height: 204px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const moving = keyframes`
0%{
  transform: translate(0, 0);
}
100%{
  transform: translate(-100%,0);
}
`;

export const GalleryAnimationArea = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    display: flex;
  }
  .movement {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .repeat {
      display: flex;
      align-items: center;
      justify-content: space-between;
      transform: translateX(8%);
      /* animation: ${moving} 18s linear infinite; */
      .page4 {
        animation-duration: 39s;
      }
    }
    .firstP,
    .secondP {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      font-weight: 400;
      font-size: 100px;
      line-height: 120px;
      white-space: nowrap;
      overflow: hidden;
    }
    .secondP {
      animation-duration: 20s;
    }
  }
`;
