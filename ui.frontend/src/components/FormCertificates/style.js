import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    height: 100%;

    @media (max-width: 768px) {
        gap: 1.5rem;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: max-content;
    height: 100%;
    place-self: flex-end;
    justify-content: flex-end;
    align-items: flex-end;
`;
