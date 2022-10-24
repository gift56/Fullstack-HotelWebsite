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
  gap: 1rem;
`;

export const ResturantLeftArea = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  h2 {
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    color: ${({ theme }) => theme.spanText};
  }
`;

export const ResturantRightArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  h3 {
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;
    text-transform: capitalize;
  }
`;
