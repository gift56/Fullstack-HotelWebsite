import styled from "styled-components";

export const RoomContainer = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.whiteColor};
`;

export const RoomArea = styled.div`
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const RoomLeft = styled.div``;

export const RoomRight = styled.div``;
