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
`;

export const ResturantSpaceLeftArea = styled.div``;

export const ResturantSpaceRightArea = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  .imageCon {
    width: 100%;
    display: inherit;
    align-items: flex-start;
    justify-content: flex-start;
    .image {
      width: 256px;
      height: 224px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
