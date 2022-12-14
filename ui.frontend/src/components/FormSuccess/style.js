import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const Text = styled.div`
    font-size: 1.6rem;
    width: 100%;
`;
export const GitHubDiv = styled.div`
    flex-direction: column;
    width: 100%;
    display: flex;
    align-items: flex-start;
`;
export const GitHubP = styled.p`
    font-size: 1.6rem;
    width: 80%;
    height: 2rem;
    margin: 0;
    @media (max-width: 460px) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
export const LinkCertificate = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    height: 2rem;
    white-space: nowrap;
    margin: 0;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const ContainerButton = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const CertificatesContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-direction: column;

    @media (max-width: 768px) {
        gap: 0;
    }
`;

export const Certificates = styled.div`
    display: flex;
    gap: 0.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
    } ;
`;
