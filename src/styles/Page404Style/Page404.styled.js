import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 70px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-weight: 700;
    font-size: 90px;
    font-family: "miracle", sans-serif !important;
    color: ${({ theme }) => theme.spanText};
    letter-spacing: 2rem;
    text-align: center;
  }
  h2 {
    font-weight: 500;
    font-size: 38px;
    line-height: 37px;
    font-family: "Open Sans", sans-serif !important;
    color: ${({ theme }) => theme.darkColor2};
  }
  p {
    font-weight: 500;
    font-size: 38px;
    line-height: 37px;
    font-family: "Open Sans", sans-serif !important;
    color: ${({ theme }) => theme.whiteColor};
  }
`;

export const MyArea = styled.div`
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 88.5vh;
`;
