import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 100%;
  flex: 1;

  @media (max-width: 768px) {
    gap: 1.5rem;
    height: 100vh;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const DivKey = styled.div`
  width: 100%;
`;

export const ContainerBirthday = styled.div``;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
`;

export const ContainerSmall = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ContainerCheckbox = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  color: red;
`;

export const ErrorMessageCheckbox = styled.p`
  top: 27px;
  left: 0;
  position: absolute;
  color: red;

  @media (max-width: 300px) {
    font-size: 1.4rem;
    top: 17px;
  }
`;
