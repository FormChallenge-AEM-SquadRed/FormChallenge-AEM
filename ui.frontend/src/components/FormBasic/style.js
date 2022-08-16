import styled from "styled-components";

export const Form = styled.form`
  display: flex;
`;

export const ContainerBasic = styled.div`
  flex-wrap: wrap;
  width: 100%;
`;

export const DivKey = styled.div`
  width: 100%;
`;

export const ContainerButton = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ContainerCheckbox = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.span`
  font-size: 1.4rem;
  color: red;
  position: absolute;
  top: 1px;

  &.checkbox {
    @media (max-width: 540px) {
      top: 2rem;
      right: 0px !important;
      left: 1px;
    }
  }
`;
