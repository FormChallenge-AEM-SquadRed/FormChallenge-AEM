import styled from "styled-components";

export const Card = styled.div`
    background-color: ${({cardcolor}) => cardcolor || "#FFFFFF"};
    width: 617px;
    height: 763px;
    border-radius: 20px;
    margin: 0px;
    padding: 0px;

    @media (max-width: 1210px) {
    width: 100vw;
    height: 800px;        
    border-radius: 0px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;