import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width: ${({ theme }) => theme.mobile.minLap}) {
    width: 95%;
  }
`;
