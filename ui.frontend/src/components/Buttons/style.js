import styled from "styled-components";

export const ContainerTextButtons = styled.div`
    width: max-content;
`;

export const ContainerIcons = styled.span`
    width: max-content;
    display: flex;
`;

export const ButtonNextStyled = styled.button`
    min-width: 8.1rem;
    height: 4rem;
    background: ${({bgcolor}) => bgcolor || "#074ee8"};
    border-radius: 0.4rem;
    font-size: 1.6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    color: ${({colortext}) => colortext || "#FFFFFF"};
    padding: 1.1rem 1.6rem 1.1rem 1.2rem;

    &:hover {
        cursor: pointer;
        background-color: rgba(157, 172, 209, 0.6);
    }
`;

export const ButtonMoreStyled = styled.button`
    min-width: 10.9rem;
    height: 4rem;
    background: ${({bgcolor}) => bgcolor || "#074ee8"};
    border-radius: 0.4rem;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: ${({colortext}) => colortext || "#FFFFFF"};
    border: none;

    &:hover {
        cursor: pointer;
        background-color: rgba(157, 172, 209, 0.6);
    }
`;

export const ButtonFinishStyled = styled.button`
    min-width: 9.1rem;
    height: 4rem;
    background: ${({bgcolor}) => bgcolor || "#074ee8"};
    border-radius: 0.4rem;
    font-size: 1.6rem;
    font-weight: 5;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: ${({colortext}) => colortext || "#FFFFFF"};
    border: none;

    &:hover {
        cursor: pointer;
        background-color: rgba(157, 172, 209, 0.6);
    }
`;

export const ButtonReturnStyled = styled(ButtonFinishStyled)`
    min-width: 9.7rem;
`;

export const ButtonCertificatesStyled = styled(ButtonMoreStyled)`
    min-width: 18.7rem;

    @media (max-width: 350px) {
        min-width: 9.35rem;
        padding-left: 1rem;
        background-position: 7.35em;
    }
`;

export const ContainerRemoveCertificates = styled.div`
    height: 3.6rem;
    background: ${({bgcolor}) => bgcolor || "transparent"};
    display: flex;
    align-items: center;
    padding: 1.4rem 0.9rem 0.9rem 0.5rem;
    justify-content: space-between;
    margin-top: -0.8rem;
`;

export const LinkCertificates = styled.p`
    font-size: 1.1rem;
    line-height: 1.8rem;
    color: ${({colortext}) => colortext || "#FFFFFF"};
    overflow: hidden;
    text-overflow: ellipsis;
    height: 2rem;
    width: 14.9rem;
`;

export const ButtonRemoveCertificates = styled.button`
    min-width: 1.4rem;
    height: 1.3rem;
    border: none;
    background: ${({bgcolor}) => bgcolor || "rgba(7, 78, 232, 0)"};
    display: inline-flex;
    align-items: center;
    justify-content: space-around;

    :hover {
        cursor: pointer;
    }
`;
