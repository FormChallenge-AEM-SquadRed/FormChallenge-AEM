import React from "react";
import { ContainerTitle, TitleStyled } from "./style";

const Title = ({ children, color, fonts }) => {
  return (
    <ContainerTitle>
      <TitleStyled color={color} fonts={fonts}>
        {children || "Team Sign Up"}
      </TitleStyled>
    </ContainerTitle>
  );
};

export default Title;
