import React, {useContext, useEffect} from "react";
import {TabsContext} from "../../contexts/TabsProvider";
import Title from "../Title";
import Tabs from "../Tabs";
import Button from "../Buttons";
import {useForm} from "react-hook-form";
import {
    SuccessText,
    ContainerTexts,
    TextContainer,
    ContainerForm,
    ContainerButtons,
    ButtonContainer,
    StyledP,
    StyledDiv,
} from "./style";
import {UserDataContext} from "../../contexts/UserDataProvider";
import {CertificatesContext} from "../../contexts/CertificatesProvider";

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
        setSelectedTab((selectedTab = 0));
    };

    return (
        <>
            {selectedTab === 1 &&
                successTitle &&
                successTitle.map((item, index) => (
                    <Title key={index} color={item.titlecolor}>
                        {item.titletext}
                    </Title>
                ))}

            <Tabs />

            {Object.entries(userData).map(([key, data]) => (
                <StyledP key={key}>
                    <StyledDiv>{data.label}: </StyledDiv>
                    <StyledDiv>{data.value}</StyledDiv>
                </StyledP>
            ))}

            <StyledDiv>
                {certificates.label}:
                {certificates.value.map((item, index) => (
                    <StyledP key={index}>
                        <StyledDiv>{item}</StyledDiv>
                    </StyledP>
                ))}
            </StyledDiv>
        </>
    );
};
export default FormSucess;
