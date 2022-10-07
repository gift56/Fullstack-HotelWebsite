import styled from "styled-components";

export const GalleryCon = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.darkColor};
`;

export const GalleryArea = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const GalleryleftSide = styled.div`
  .artC {
    display: none;
    @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
      display: block;
    }
  }
`;

export const GalleryTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .image {
    transform: rotate(-45deg) translateY(20px);
  }
  h2 {
    color: ${({ theme }) => theme.spanText};
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
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
  }
`;

export const GalleryrightSide = styled.div`
  position: relative;
`;

export const GalleryRightSideMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  .images {
    &:first-child {
      transform: translateX(80px);
    }
    &:nth-child(2) {
      position: absolute;
      left: 0;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    display: none;
  }
`;

export const GalleryRightSideDesktop = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    display: block;
  }
`;
