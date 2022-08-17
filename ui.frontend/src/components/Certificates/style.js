import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`;

export const Label = styled.label`
    font-size: 1.4rem;
    color: #767676;
`;

export const InputGlobal = styled.input`
    padding: 1.1rem 1.2rem;
    width: 100%;
    border: 2px solid #aaaaaa;
    border-radius: 4px;
    height: 4rem;
    font-size: 1.6rem;

    ::placeholder {
        font-size: 1.6rem;
    }
`;

export const CertificatesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const CertificatesList = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;
export const RemoveCertificate = styled.div`
    width: 100%;
    position: absolute;
    z-index: 1;
    top: 4rem;
    background: rgba(7, 78, 232, 0.8);
    border-radius: 4px;
    margin-top: -0.3rem;
`;
export const AddCertificate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ContainerErrorMessages = styled.div`
    height: 1rem;
    @media (max-width: 768px) {
        height: 3rem;
    }
`;

export const ErrorMessage = styled.div`
    max-height: 4.7rem;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
`;
export const Message = styled.span`
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: #ff0000;
`;
