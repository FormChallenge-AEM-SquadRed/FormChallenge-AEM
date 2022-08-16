import react, {useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {TabsContext} from "../../contexts/TabsProvider";
import Certificates from "../Certificates";
import Title from "../Title";
import Tabs from "../Tabs";
import Input from "../Input";
import Button from "../Buttons";
import {Form, ButtonContainer} from "./style";
import {CertificatesContext} from "../../contexts/CertificatesProvider";
import {UserDataContext} from "../../contexts/UserDataProvider";

const FormCertificates = ({
    certificatesBlock,
    certificatesInput,
    certificatesTitle,
    certificatesFinish,
}) => {
    const [selectedTab, setSelectedTab] = useContext(TabsContext);
    const [certificates, setCertificates] = useContext(CertificatesContext);
    const [userData, setUserData] = useContext(UserDataContext);

    const {
        getValues,
        register,
        handleSubmit,
        watch,
        formState: {errors},
        setValue,
    } = useForm();

    const onSubmit = (data) => {
        setUserData({...userData, ...data, certificates: {...certificates}});
        setSelectedTab(selectedTab + 1);
    };
    const regexp = {
        text: /^[a-zA-Zà-úÀ-Ú]+(?:\s[a-zA-Zà-úÀ-Ú]+)+$/,
        email: /^[a-z0-9._-]+(?:\.[a-z0-9._-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?.)+[a-z](?:[a-z]*[a-z]){1,}?$/,
    };

    return (
        <>
            {selectedTab === 2 &&
                certificatesTitle &&
                certificatesTitle.map((item, index) => (
                    <Title key={index} color={item.titlecolor}>
                        {item.titletext}
                    </Title>
                ))}
            <Tabs />
            <Form onSubmit={handleSubmit(onSubmit)}>
                {certificatesBlock &&
                    certificatesBlock.map((item, index) => (
                        <Certificates
                            key={index}
                            placeholder={item.placeholdertext}
                            id={index}
                        >
                            {item.labeltext}
                        </Certificates>
                    ))}
                {certificatesInput &&
                    certificatesInput.map((item, index) => (
                        <div key={index}>
                            <Input
                                type={item.types}
                                placeholder={item.placeholdertext}
                                {...{
                                    register: register(`${item.labeltext}`, {
                                        required: item.required,
                                        pattern: regexp[item.types] ?? "",
                                    }),
                                }}
                            >
                                {item.labeltext}
                            </Input>
                            <p>{errors[item.labeltext] && "Teste"}</p>
                        </div>
                    ))}
                {certificatesFinish &&
                    certificatesFinish.map((item, index) => (
                        <ButtonContainer key={index}>
                            <Button
                                text={item.buttonlabel}
                                buttons={item.buttons}
                                bgcolor={item.buttonbckgcolor}
                                colortext={item.buttonlabelcolor}
                            />
                        </ButtonContainer>
                    ))}
            </Form>
        </>
    );
};

export default FormCertificates;
