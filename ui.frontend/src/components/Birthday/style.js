import styled from "styled-components";

export const StyledBirthday = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
`;

export const StyledTitle = styled.p`
    width: 100%;
    font-size: 1.8rem;
    color: #767676;
    margin: 0px;
`;

export const StyledBirthdayContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
    }
`;

export const StyledBlock = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;

    @media (max-width: 768px) {
        gap: 45px;
    }
`;

export const StyledInput = styled.input`
    padding: 0 1.2rem;
    width: 100%;
    border: 2px solid #aaaaaa;
    border-radius: 4px;
    height: 4rem;
    font-size: 1.6rem;

    ::placeholder {
        font-size: 1.6rem;
    }
`;
export const StyledInputLabel = styled.label`
    font-size: 1.4rem;
    color: #767676;
`;
export const StyledInputContainer = styled.div``;

export const StyledSelect = styled.select`
    padding: 0 1.2rem;
    width: 100%;
    border: 2px solid #aaaaaa;
    border-radius: 4px;
    background-color: #ffffff;
    height: 4rem;
    font-size: 1.6rem;
`;
export const StyledSelectLabel = styled.label`
    font-size: 1.4rem;
    color: #767676;
`;
export const StyledSelectContainer = styled.div``;
