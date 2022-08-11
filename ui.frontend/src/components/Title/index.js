import React from "react";
import {ContainerTitle, TitleStyled} from "./style";

const Title = ({children, color}) => {
    return (
        <ContainerTitle>
            <TitleStyled color={color}>
                {children || "Default value"}
            </TitleStyled>
        </ContainerTitle>
    );
};

export default Title;
