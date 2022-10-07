import styled from "styled-components";

export const GalleryCon = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.darkColor};
`;

export const GalleryArea = styled.div``;

export const GalleryleftSide = styled.div``;

export const GalleryTitle = styled.div``;

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
