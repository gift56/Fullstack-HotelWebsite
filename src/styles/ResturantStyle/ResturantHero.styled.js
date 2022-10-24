import styled from "styled-components";

export const ResturantCon = styled.section`
  background-color: ${({ theme }) => theme.darkColor};
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top: 1px solid #3f5148;
`;

export const ResturantArea = styled.div``;

export const ResturantLeftArea = styled.div``;

export const ResturantRightArea = styled.div``;
