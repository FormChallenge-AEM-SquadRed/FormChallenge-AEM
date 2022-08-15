import styled from "styled-components";

export const Tab = styled.button`
    height: 4.4rem;
    flex: 1;
    background: #ffffff;
    font-size: 1.6rem;
    color: #111111;
    border: 0;
    border-bottom: 2px solid #aaaaaa;
    outline: 0;
    cursor: pointer;
    &.active {
        border-bottom: 3px solid #074ee8;
        color: #074ee8;
        opacity: 1;
    }
`;

export const TabGroup = styled.div`
    display: flex;
    width: 100%;
    align-self: center;
    &.none {
        display: none;
    }
`;
