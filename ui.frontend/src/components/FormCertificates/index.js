import {useContext, useEffect} from "react";
import {useForm} from "react-hook-form";
import {TabsContext} from "../../contexts/TabsProvider";
import Certificates from "../Certificates";
import Title from "../Title";
import Tabs from "../Tabs";
import Input from "../Input";
import Button from "../Buttons";

import {Form, ButtonContainer, Inputs, ErrorMessage} from "./style";
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
        const result = Object.entries(data).map(([label, value]) => {
            return {label, value};
        });
        setUserData([...userData, ...result]);
        setCertificates({
            label: certificatesBlock[0].labeltext,
            value: certificates,
        });
        setSelectedTab(selectedTab + 1);
        SetData();
    };
    const regexp = {
        text: /^[a-zA-Zà-úÀ-Ú]+(?:\s[a-zA-Zà-úÀ-Ú]+)+$/,
        email: /^[a-z0-9._-]+(?:\.[a-z0-9._-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?.)+[a-z](?:[a-z]*[a-z]){1,}?$/,
        phone: /^[0-9]$/,
        link: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    };
    const SetData = () => {
        localStorage.setItem("StorageCertificates", JSON.stringify(getValues()));
        localStorage.setItem("StorageLinksCertificates", JSON.stringify(certificates));
    };

    useEffect(() => {
        if (userData) {
            const keys = Object.keys(userData);
            keys.forEach((key) => {
                setValue(key, userData[key]);
            });
        }
    }, []);

    const GetData = () => {
        if (localStorage.getItem("StorageCertificates")) {
            const StorageData = JSON.parse(
                localStorage.getItem("StorageCertificates"),
            );

            const keys = Object.keys(StorageData);
            keys.forEach((key) => {
                setValue(key, StorageData[key]);
            });
        }
        if (localStorage.getItem("StorageLinksCertificates")) {
            const StorageData = JSON.parse(
                localStorage.getItem("StorageLinksCertificates"),
            );

            const keys = Object.keys(StorageData);
            keys.forEach((key) => {
                setValue(key, StorageData[key]);
            });
        }
    };

    useEffect(() => {
        GetData();
        window.addEventListener("beforeunload", SetData());
        return () => {
            window.removeEventListener("beforeunload", SetData());
        };
    }, []);

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
                            fonts={item.fonts}
                        >
                            {item.labeltext}
                        </Certificates>
                    ))}
                <Inputs>
                    {certificatesInput &&
                        certificatesInput.map((item, index) => (
                            <Input
                                key={index}
                                type={item.types}
                                placeholder={item.placeholdertext}
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
                </Inputs>

                {certificatesFinish &&
                    certificatesFinish.map((item, index) => (
                        <ButtonContainer key={index}>
                            <Button
                                text={item.buttonlabel}
                                buttons={item.buttons}
                                bgcolor={item.buttonbckgcolor}
                                colortext={item.buttonlabelcolor}
                                fonts={item.fonts}
                            />
                        </ButtonContainer>
                    ))}
            </Form>
        </>
    );
};

export default FormCertificates;
