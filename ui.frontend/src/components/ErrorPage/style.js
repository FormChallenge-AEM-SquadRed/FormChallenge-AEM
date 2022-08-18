import styled from "styled-components";

export const Section404 = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    161deg,
    rgba(240, 240, 240, 1) 0%,
    rgba(240, 240, 240, 1) 95%
  );
`;

export const Displayed404 = styled.img`
  width: 70rem;
  height: 50rem;
  @media (max-width: 870px) {
    max-width: 100vw;
    max-height: 100vh;
  }
`;