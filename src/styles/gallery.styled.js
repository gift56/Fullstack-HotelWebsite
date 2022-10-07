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
    font-size: 15px;
    line-height: 23px;
    text-align: center;
    font-family: "Open Sans", sans-serif !important;
  }
`;

export const GalleryrightSide = styled.div``;

export const GalleryRightSideMobile = styled.div`
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
