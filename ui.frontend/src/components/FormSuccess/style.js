import styled from "styled-components";

export const ResultMessage = styled.p`
    font-family: ${({fonts}) => fonts || "Nunito"};
    font-size: 1.6rem;
    color: ${({color}) => color || "#000000"};
`;

export const StyledResults = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const DataBlock = styled.div`
    display: flex;
    gap: 0.5rem;
    @media (max-width: 350px) {
        font-size: 1.2rem;
    }
`;

export const StyledP = styled.p`
    font-size: 1.6rem;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
`;
