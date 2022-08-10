import styled from "styled-components";

export const ContainerTitle = styled.div`
    @media (max-width: 600px) {
        margin-bottom: 0.1rem;
    }
    &.none {
        display: none;
    }
`;
export const TitleStyled = styled.h1`
    font-size: 1.8rem;
    color: ${({color}) => color || "#111111"};

    @media (max-width: 600px) {
        font-size: 1.8rem;
        margin-bottom: 10px;
    }
`;
