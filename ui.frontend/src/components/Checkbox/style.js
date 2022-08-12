import styled from 'styled-components';

export const Checkmark = styled.span`
    width: 2rem;
    height: 2rem;
    border: 2px solid #a5a5a5;
    display: inline-block;
    border-radius: 2px;

    background: #ffffff
        url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png)
        center/1250% no-repeat;
`;

export const CustomCheckbox = styled.label`
    display: flex;
    width: fit-content;
    align-items: center;
    cursor: pointer;
    position: relative;

    input:checked + ${Checkmark} {
        background-color: #074ee8;
        border-color: #074ee8;
        background-size: 60%;
    }
`;

export const HiddenCheckbox = styled.input`
    display: none;
`;

export const Terms = styled.span`
    margin-left: 0.8rem;
    display: inline-block;
    @media (max-width: 300px) {
        font-size: 1.4rem;
    }
`;
