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
    gap: 3rem;

    @media (max-width: 768px) {
        display: flex;
        height: calc(100vh - 0.35rem);
        border-radius: 0px;
        padding: 1.5rem;
        gap: 1.5rem;
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
