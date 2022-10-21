import styled from "styled-components";

export const HeroCon = styled.section`
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 443px;
  width: 100%;
`;

export const HeroArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  min-height: 430px;
  .rightSide {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    transform: translateY(50px);
    .image {
      width: 108px;
      img {
        width: 100%;
      }
    }
  }
`;
