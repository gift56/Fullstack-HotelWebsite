import styled from "styled-components";

export const FacilitiesCon = styled.section`
  border-top: 1px solid #313f388f;
  position: relative;
`;

export const FacilitiesArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 40px 0;
`;

export const FacilitiesLeftside = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  .image {
    position: absolute;
  }
  .textArea {
    display: flex;
    flex-direction: column;
    gap: 12rem;
  }
`;

export const FacilitiesLeftsideTitle = styled.div``;

export const FacilitiesRightside = styled.div``;
