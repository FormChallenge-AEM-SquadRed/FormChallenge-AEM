import styled from 'styled-components';

export const ContainerInputs = styled.div`
    display: flex;  
    width: 100%;  
    flex-direction: column;
`;

export const InputContainer = styled.div`
    width: 100%;  
    margin-top: 5px;
    margin-bottom: 25px;  
`;
export const ContainerButtons = styled.div`
    width: 100%;
`;
export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    margin-bottom: 10px;
    justify-content: flex-end;
    @media (max-width: 768px) {
        padding-bottom: 5%;
    }
`;
export const ContainerForm = styled.form`
    display: flex;
    height: 100%;  
    flex-direction: column;
    justify-content: space-between;
`;

