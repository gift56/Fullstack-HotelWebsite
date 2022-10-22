import styled from "styled-components";

export const DetailCon = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.darkColor};
  z-index: 1;
`;

export const DetailArea = styled.div`
  padding: 60px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3rem;
  .leftSide {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3rem;
    .detail {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
    }
  }
`;

export const DetailLeftArea = styled.div``;

export const DetailRightArea = styled.div``;
