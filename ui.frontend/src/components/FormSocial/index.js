import React, {useContext} from "react";
import {TabsContext} from "../../contexts/TabsProvider";
import Title from "../Title";
import Tabs from "../Tabs";
import Input from "../Input";
import Button from "../Buttons";
import {useForm} from "react-hook-form";
import {
    InputContainer,
    ContainerInputs,
    ContainerForm,
    ButtonContainer,
    ContainerButtons,
    ErrorMessage,
} from "./style";
import {UserDataContext} from "../../contexts/UserDataProvider";

const FormSocial = ({socialTitle, socialInput, socialButton}) => {
    const [selectedTab, setSelectedTab] = useContext(TabsContext);
    const [userData, setUserData] = useContext(UserDataContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        setValue,
        getValues,
    } = useForm();

    const onSubmit = (data) => {
        const result = Object.entries(data).map(([label, value]) => {
            return {label, value};
        });
        setUserData([...userData, ...result]);
        setSelectedTab(selectedTab + 1);
    };

    const regexp = {
        text: /^[a-zA-Zà-úÀ-Ú]+(?:\s[a-zA-Zà-úÀ-Ú]+)+$/,
        email: /^[a-z0-9._-]+(?:\.[a-z0-9._-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?.)+[a-z](?:[a-z]*[a-z]){1,}?$/,
        phone: /^[0-9]$/,
        link: /^^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    };
    return (
        <>
            {selectedTab === 1 &&
                socialTitle &&
                socialTitle.map((item, index) => (
                    <Title key={index} color={item.titlecolor}>
                        {item.titletext}
                    </Title>
                ))}

            <Tabs />

            <ContainerForm onSubmit={handleSubmit(onSubmit)}>
                <ContainerInputs>
                    {socialInput &&
                        socialInput.map((item, index) => (
                            <Input
                                key={index}
                                placeholder={item.placeholdertext}
                                type={item.types}
                                {...{
                                    register: register(`${item.labeltext}`, {
                                        required: item.required,
                                        pattern: regexp[item.types] ?? "",
                                    }),
                                }}
                            >
                                {item.labeltext}
                                {errors[item.labeltext] && (
                                    <ErrorMessage>is required</ErrorMessage>
                                )}
                            </Input>
                        ))}
                </ContainerInputs>

                {socialButton &&
                    socialButton.map((item, index) => (
                        <ButtonContainer key={index}>
                            <Button
                                key={index}
                                buttons={item.buttons}
                                text={item.buttonlabel}
                                bgcolor={item.backgroundcolor}
                                colortext={item.buttonlabelcolor}
                            ></Button>
                        </ButtonContainer>
                    ))}
            </ContainerForm>
        </>
    );
};
export default FormSocial;
