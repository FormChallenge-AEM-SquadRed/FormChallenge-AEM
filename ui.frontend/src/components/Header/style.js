import styled from "styled-components";

export const ContainerHeader = styled.header`
    height: 130px;
    background: #e5e5e5;
    padding: 20px 0 20px 118px;
    border-bottom: 1px solid #aaaaaa;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 15px;
        height: 3.5px;
    }
`;
export const SmallTitleHeader = styled.h3`
  font-family: "Inter";
  font-size: 18px;
  color: #111111;
  margin: 0;
  margin-right: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const BigestTitleHeader = styled.h1`
  font-family: "Inter";
  font-weight: 700;
  font-size: 40px;
  color: #074ee8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;