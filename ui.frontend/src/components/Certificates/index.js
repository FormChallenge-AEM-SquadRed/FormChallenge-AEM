import React, {useContext, useEffect, useState} from "react";

import {useForm} from "react-hook-form";
import {
    InputGlobal,
    Label,
    InputContainer,
    RemoveCertificate,
    AddCertificate,
    CertificatesContainer,
    CertificatesList,
    ErrorMessage,
    Message,
    ContainerErrorMessages,
} from "./style";

import Button from "../Buttons";
import {CertificatesContext} from "../../contexts/CertificatesProvider";

const Certificates = ({placeholder, children, id, fonts}) => {
    const [certificates, setCertificates] = useContext(CertificatesContext);
    const [errorCertificates, setErrorCertificates] = useState(false);
    const [invalidLink, setInvalidLink] = useState(false);
    const [showCertificates, setShowCertificates] = useState(false);

    const {
        getValues,
        register,
        handleSubmit,
        watch,
        formState: {errors},
        setValue,
    } = useForm();

    const addCertificate = (name) => {
        const certificate = getValues(name);
        if (
            certificate.match(
                /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
            )
        ) {
            setInvalidLink(false);
            if (certificates.length < 5) {
                setCertificates((lastValues) => [...lastValues, certificate]);
                setErrorCertificates(false);
            } else {
                setErrorCertificates(true);
            }
        } else {
            setInvalidLink(true);
        }
    };

    const removeCertificate = (index) => {
        setCertificates(
            certificates
                .slice(0, index)
                .concat(certificates.slice(index + 1, certificates.length)),
        );
    };
    return (
        <>
            <InputContainer>
                <Label fonts={fonts}>{children}</Label>
                <InputGlobal
                    type='text'
                    placeholder={placeholder}
                    {...register(`certificates${id}`)}
                    fonts={fonts}
                />
            </InputContainer>

            <CertificatesContainer>
                <CertificatesList>
                    <Button
                        buttons='certificates'
                        onClick={() => setShowCertificates(!showCertificates)}
                        fonts={fonts}
                    />
                    <RemoveCertificate>
                        {showCertificates &&
                            certificates.map((certificate, index) => (
                                <Button
                                    buttons='removeCertificate'
                                    key={index}
                                    onClick={() => removeCertificate(index)}
                                >
                                    {certificate}
                                </Button>
                            ))}
                    </RemoveCertificate>
                </CertificatesList>

                <AddCertificate>
                    <Button
                        buttons='more'
                        type='button'
                        onClick={() => addCertificate(`certificates${id}`)}
                        fonts={fonts}
                    />
                </AddCertificate>
            </CertificatesContainer>
            <ContainerErrorMessages>
                {errorCertificates && (
                    <ErrorMessage>
                        <Message>
                            Sorry, only 5 certificates are allowed.
                        </Message>
                        <Message>
                            You can remove one certificate instead.
                        </Message>
                    </ErrorMessage>
                )}

                {invalidLink && (
                    <ErrorMessage>
                        <Message>Empty certificate is not allowed.</Message>
                    </ErrorMessage>
                )}
            </ContainerErrorMessages>
        </>
    );
};

export default Certificates;
