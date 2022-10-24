import styled from "styled-components";

export const ResturantCon = styled.section`
  background-color: ${({ theme }) => theme.darkColor};
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top: 1px solid #3f5148;
`;

export const ResturantArea = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  justify-content: flex-start;
`;

export const ResturantLeftArea = styled.div``;

export const ResturantRightArea = styled.div``;
