import styled from "styled-components";

export const ContainerTitle = styled.div`
    &.none {
        display: none;
    }
`;
export const TitleStyled = styled.h1`
    font-size: 1.8rem;
    color: ${({color}) => color || "#111111"};
`;
