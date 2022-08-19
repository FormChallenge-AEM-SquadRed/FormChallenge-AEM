import {
    InputGlobal,
    Label,
    Container,
    ContainerEmail,
    ContainerTel,
    InputPhone,
    InputEmail,
} from "./style.js";

import phoneMask from "../../utils/phoneMask.js";

const Input = ({
    placeholder,
    register,
    children,
    type,
    labelcolor,
    placeholdercolor,
    textcolor,
    fonts,
}) => {
    if (type === "email")
        return (
            <ContainerEmail>
                <Label fonts={fonts} labelcolor={labelcolor}>
                    {children}
                </Label>
                <InputEmail
                    fonts={fonts}
                    textcolor={textcolor}
                    type={type}
                    placeholder={placeholder}
                    placeholdercolor={placeholdercolor}
                    {...register}
                />
            </ContainerEmail>
        );
    if (type === "tel")
        return (
            <ContainerTel>
                <Label fonts={fonts} labelcolor={labelcolor}>
                    {children}
                </Label>
                <InputPhone
                    fonts={fonts}
                    textcolor={textcolor}
                    type={type}
                    placeholder={placeholder}
                    placeholdercolor={placeholdercolor}
                    {...register}
                    onChangeCapture={(e) => phoneMask(e)}
                />
            </ContainerTel>
        );
    if (type === "link")
        return (
            <Container>
                <Label fonts={fonts} labelcolor={labelcolor}>
                    {children}
                </Label>
                <InputGlobal
                    fonts={fonts}
                    textcolor={textcolor}
                    type='text'
                    placeholder={placeholder}
                    placeholdercolor={placeholdercolor}
                    {...register}
                />
            </Container>
        );
    else
        return (
            <Container>
                <Label fonts={fonts} labelcolor={labelcolor}>
                    {children}
                </Label>
                <InputGlobal
                    fonts={fonts}
                    textcolor={textcolor}
                    type={type}
                    placeholder={placeholder}
                    placeholdercolor={placeholdercolor}
                    {...register}
                />
            </Container>
        );
};

export default Input;
