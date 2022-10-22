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
  button {
    border: 1px solid ${({ theme }) => theme.darkColor};
    border-radius: 99px;
    width: 171px;
    height: 50px;
    font-family: "Open Sans", sans-serif !important;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
    background: transparent;
  }
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
  gap: 4rem;
  width: 100%;
  .Images {
    width: 98%;
    img {
      width: 100%;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    width: 100%;
    position: relative;
    .textArea {
      display: flex;
      flex-direction: row-reverse;
      .label {
        position: absolute;
        top: -41px;
        right: 0;
      }
      p {
        font-weight: 400;
        font-family: "Open Sans", sans-serif !important;
        font-size: 15px;
        line-height: 23px;
        opacity: 0.8;
        color: ${({ theme }) => theme.darkColor2};
        width: 250px;
      }
    }
    .btn {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;
