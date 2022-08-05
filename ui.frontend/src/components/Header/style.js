import styled from "styled-components";

export const ContainerHeader = styled.header`
  height: 13rem;
  background: ${({ containerColor }) => containerColor || "#E5E5E5"};
  padding: 2rem 0 2rem 11.8rem;
  border-bottom: 0.1px solid #aaaaaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 1.5rem;
    height: 0.35rem;
    margin-bottom: 0;
  }
`;

export const SmallTitleHeader = styled.h3`
  font-family: "Inter";
  font-size: 1.8rem;
  color: ${({ colorText }) => colorText || "#111111"};
  margin: 0;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const BigestTitleHeader = styled.h1`
  font-family: "Inter";
  font-weight: 700;
  font-size: 4rem;
  color: ${({ colorTitle }) => colorTitle || "#074ee8"};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
