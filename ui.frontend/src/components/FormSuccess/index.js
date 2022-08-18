import React, {useContext, useEffect} from "react";
import {TabsContext} from "../../contexts/TabsProvider";
import Title from "../Title";
import Button from "../Buttons";
import {useForm} from "react-hook-form";
import {
    DataBlock,
    StyledResults,
    StyledP,
    ResultMessage,
    ButtonContainer,
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
        setSelectedTab(0);
    };

    return (
        <>
            {selectedTab === 3 &&
                successTitle &&
                successTitle.map((item, index) => (
                    <Title key={index} color={item.titlecolor}>
                        {item.titletext}
                    </Title>
                ))}
            <StyledResults>
                {successText &&
                    successText.map((item, index) => (
                        <ResultMessage
                            key={index}
                            color={item.resultcolor}
                            fonts={item.fonts}
                        >
                            {item.resulttext
                                ? item.resulttext
                                : "Your data has been sent successfully!"}
                        </ResultMessage>
                    ))}

                {Object.entries(userData).map(([key, data]) => (
                    <DataBlock key={key}>
                        <StyledP>{data.label}: </StyledP>
                        <StyledP>{data.value}</StyledP>
                    </DataBlock>
                ))}

                <div>
                    {certificates.label}:
                    {certificates.value.map((item, index) => (
                        <DataBlock key={index}>
                            <StyledP>{item}</StyledP>
                        </DataBlock>
                    ))}
                </div>
            </StyledResults>
            {successButton &&
                successButton.map((item, index) => (
                    <ButtonContainer key={index}>
                        <Button
                            text={item.resulttext}
                            buttons={item.buttons}
                            bgcolor={item.buttonbckgcolor}
                            colortext={item.resultcolor}
                            fonts={item.fonts}
                            onClick={() => onSubmit()}
                        />
                    </ButtonContainer>
                ))}
        </>
    );
};
export default FormSucess;
