import {
    InputGlobal,
    Label,
    Container,
    ContainerEmail,
    ContainerTel,
    InputPhone,
    InputEmail,
} from "./style.js";

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
                />
            </ContainerTel>
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
