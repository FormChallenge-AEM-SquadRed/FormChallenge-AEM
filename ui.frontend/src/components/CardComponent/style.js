import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${({cardColor}) => cardColor || "#FFFFFF"};
    width: 61.7rem;
    height: 76.3rem;
    border-radius: 2rem;
    margin: 0px;
    padding: 5rem;

    @media (max-width: 768px) {
        display: flex;
        width: 100vw;
        height: calc(100vh - 0.35rem);
        border-radius: 0px;
        padding: 1.5rem;
    }
`;
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;
    @media (max-width: 768px) {
        margin-bottom: 0rem;
    }
`;
