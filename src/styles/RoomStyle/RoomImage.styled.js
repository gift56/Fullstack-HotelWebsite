import styled from "styled-components";

export const ImageCon = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.darkColor};
  height: 427px;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ImageArea = styled.section``;
