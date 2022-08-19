import React, {useContext, useEffect} from "react";
import {TabsContext} from "../../contexts/TabsProvider";
import Title from "../Title";
import Button from "../Buttons";
import {useForm} from "react-hook-form";
import {
    Text,
    Certificates,
    ContainerButton,
    MainContainer,
    CertificatesContainer,
    LinkCertificate,
} from "./style";
import {UserDataContext} from "../../contexts/UserDataProvider";
import {CertificatesContext} from "../../contexts/CertificatesProvider";
import {LinkCertificates} from "../Buttons/style";

const FormSucess = ({successTitle, successText, successButton}) => {
    const [selectedTab, setSelectedTab] = useContext(TabsContext);
    const [userData, setUserData] = useContext(UserDataContext);
    const [certificates, setCertificates] = useContext(CertificatesContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        setValue,
        getValues,
    } = useForm();

    const onSubmit = () => {
        setSelectedTab(0);
    };

    return (
        <MainContainer>
            {selectedTab === 3 &&
                successTitle &&
                successTitle.map((item, index) => (
                    <Title key={index} color={item.titlecolor}>
                        {item.titletext}
                    </Title>
                ))}

            {successText &&
                successText.map((item, index) => (
                    <Text
                        key={index}
                        color={item.resultcolor}
                        fonts={item.fonts}
                    >
                        {item.resulttext
                            ? item.resulttext
                            : "Your data has been sent successfully!"}
                    </Text>
                ))}

            {Object.entries(userData).map(([key, data]) => (
                <Certificates key={key}>
                    <LinkCertificate>{data.label + ":"} </LinkCertificate>
                    <LinkCertificate>{data.value}</LinkCertificate>
                </Certificates>
            ))}

            <CertificatesContainer>
                {certificates.label + ":"}
                {certificates.value.map((item, index) => (
                    <Certificates key={index}>
                        <LinkCertificate>{item}</LinkCertificate>
                    </Certificates>
                ))}
            </CertificatesContainer>

            {successButton &&
                successButton.map((item, index) => (
                    <ContainerButton key={index}>
                        <Button
                            text={item.resulttext}
                            buttons={item.buttons}
                            bgcolor={item.buttonbckgcolor}
                            colortext={item.resultcolor}
                            fonts={item.fonts}
                            onClick={() => onSubmit()}
                        />
                    </ContainerButton>
                ))}
        </MainContainer>
    );
};
export default FormSucess;
