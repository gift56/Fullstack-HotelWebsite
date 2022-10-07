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
