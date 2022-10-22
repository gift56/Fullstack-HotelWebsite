import styled from "styled-components";

export const OptionCon = styled.section`
  background-color: ${({ theme }) => theme.whiteColor};
`;

export const OptionArea = styled.div`
  padding: 40px 0;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  .imageCon {
    display: none;
  }
`;

export const OptionLeftArea = styled.div``;

export const OptionRightArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  .Images {
    width: 98%;
    img {
      width: 100%;
    }
  }
`;
