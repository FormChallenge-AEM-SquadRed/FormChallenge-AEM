import styled from "styled-components";

export const InputGlobal = styled.input`
  padding: 1.1rem 1.2rem;
  width: 100%;
  border: 2px solid #aaaaaa;
  border-radius: 4px;
  height: 4rem;
  font-size: 1.6rem;
  font-family: ${({ fonts }) => fonts || "Nunito"};
  color: ${({ textcolor }) => textcolor || "#111111"};

  ::placeholder {
    font-size: 1.6rem;
    color: ${({ placeholdercolor }) => placeholdercolor || "#767676"};
  }
`;

export const ContainerEmail = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

export const InputEmail = styled(InputGlobal)``;

export const ContainerTel = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

export const InputPhone = styled(InputGlobal)``;

export const Label = styled.label`
  font-size: 1.4rem;
  color: ${({ labelcolor }) => labelcolor || "#767676"};
  font-family: ${({ fonts }) => fonts || "Nunito"};
`;

export const Container = styled.div`
  width: 100%;
`;
