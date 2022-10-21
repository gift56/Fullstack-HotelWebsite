import styled from "styled-components";

export const HeroCon = styled.section`
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 473px;
  width: 100%;
`;

export const HeroArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
