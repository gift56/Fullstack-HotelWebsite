import styled from "styled-components";

export const BestApartmentCon = styled.section`
  background-image: url(${({ bg }) => bg[1]});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  @media screen and (min-width: ${({ theme }) => theme.mobile.tab}) {
    background-image: url(${({ bg }) => bg[0]});
  }
`;

export const BestApartmentArea = styled.div`
  padding: 40px 0;
  height: 98vh;
`;

export const BestApartmentTexts = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
