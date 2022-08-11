import React from "react";
import {InputGlobal, Label, Container} from "./style.js";

const Input = ({placeholder, register, children, type}) => {
    return (
        <Container>
            <Label>{children}</Label>
            <InputGlobal type={type} placeholder={placeholder} {...register} />
        </Container>
    );
};
export default Input;
