import React, {useContext} from "react";
import Button from "../Buttons";
import {TabsContext} from "../../contexts/TabsProvider";
import Title from "../Title";
import Tabs from "../Tabs";
import Input from "../Input";
import Birthday from "../Birthday";
import Checkbox from "../Checkbox";
import {useForm} from "react-hook-form";
import {
    ErrorMessage,
    ContainerCheckbox,
    ContainerButton,
    ContainerInput,
    Form,
    ContainerSmall,
    ErrorMessageCheckbox,
} from "./style.js";
import {UserDataContext} from "../../contexts/UserDataProvider";

const FormBasic = ({
    basicButton,
    basicTitle,
    basicInput,
    basicCheckbox,
    basicBirthday,
}) => {
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
        setUserData([...result, ...userData]);
        setSelectedTab(selectedTab + 1);
    };

    const regexp = {
        text: /^[a-zA-Zà-úÀ-Ú]+(?:\s[a-zA-Zà-úÀ-Ú]+)+$/,
        email: /^[a-z0-9._-]+(?:\.[a-z0-9._-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?.)+[a-z](?:[a-z]*[a-z]){1,}?$/,
        phone: /^[0-9]$/,
        link: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    };

    return (
        <>
            {selectedTab === 0 &&
                basicTitle &&
                basicTitle.map((item, index) => (
                    <Title
                        key={index}
                        color={item.titlecolor}
                        fonts={item.fonts}
                    >
                        {item.titletext}
                    </Title>
                ))}
            <Tabs />

            <Form onSubmit={handleSubmit(onSubmit)}>
                <ContainerInput>
                    {basicInput &&
                        basicInput.map((item, index) => (
                            <Input
                                key={index}
                                type={item.types}
                                placeholder={item.placeholdertext}
                                placeholdercolor={item.placeholdercolor}
                                labelcolor={item.labelcolor}
                                textcolor={item.textcolor}
                                fonts={item.fonts}
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
                </ContainerInput>

                {basicBirthday &&
                    basicBirthday.map((item, index) => (
                        <Birthday
                            key={index}
                            labeltitle={item.labeltitle}
                            colortitle={item.colortitle}
                            labelday={item.labelday}
                            labelmonth={item.labelmonth}
                            labelyear={item.labelyear}
                            labelage={item.labelage}
                            colorinput={item.colorinput}
                        />
                    ))}

                {basicCheckbox &&
                    basicCheckbox.map((item, index) => (
                        <ContainerCheckbox key={index}>
                            <Checkbox
                                checkboxtext={item.checkboxtext}
                                checkboxcolor={item.checkboxcolor}
                                checkboxtextcolor={item.checkboxtextcolor}
                                fonts={item.fonts}
                                {...{
                                    register: register(`Checkbox`, {
                                        required: `${item.required}`,
                                    }),
                                }}
                            />
                            <ErrorMessageCheckbox>
                                {errors?.Checkbox && "Please confirm the terms"}
                            </ErrorMessageCheckbox>
                        </ContainerCheckbox>
                    ))}

                {basicButton &&
                    basicButton.map((item, index) => (
                        <ContainerButton key={index}>
                            <ContainerSmall>
                                <Button
                                    text={item.buttonlabel}
                                    buttons={item.buttons}
                                    bgcolor={item.buttonbckgcolor}
                                    colortext={item.buttonlabelcolor}
                                />
                            </ContainerSmall>
                        </ContainerButton>
                    ))}
            </Form>
        </>
    );
};

export default FormBasic;
