import styled from "styled-components";

export const ImageCon = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.darkColor};
  height: 427px;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    background-image: none;
    height: 785px;
  }
`;

export const ImageArea = styled.section`
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    height: 760px;
    transform: translateY(3.5%);
    object-fit: cover;
    background-image: url(${({ bg }) => bg});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
