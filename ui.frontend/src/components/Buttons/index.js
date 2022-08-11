import React from "react";
import {MapTo} from "@adobe/aem-react-editable-components";
import {
    ButtonNextStyled,
    ButtonMoreStyled,
    ButtonFinishStyled,
    ButtonReturnStyled,
    ButtonCertificatesStyled,
    LinkCertificates,
    ButtonRemoveCertificates,
    ContainerRemoveCertificates,
    ContainerIcons,
} from "./style";
import {TbPlus} from "react-icons/tb";
import {MdNavigateNext} from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import {MdKeyboardArrowRight} from "react-icons/md";
import {HiCheck} from "react-icons/hi";
import {IoIosArrowDown} from "react-icons/io";

const Button = ({text, buttons, bgcolor, colortext, children}) => {
    console.log(buttons);
    if (buttons) {
        if (buttons === "next")
            return (
                <ButtonNextStyled
                    type={"submit"}
                    bgcolor={bgcolor}
                    colortext={colortext}
                >
                    {text ? text : "Next"}
                    <ContainerIcons>
                        <MdKeyboardArrowRight color={"white"} size={"3rem"} />
                    </ContainerIcons>
                </ButtonNextStyled>
            );

        if (buttons === "more")
            return (
                <ButtonMoreStyled
                    type={"button"}
                    bgcolor={bgcolor}
                    colortext={colortext}
                    onClick={() => console.log("buttonMore")}
                >
                    <ContainerIcons>
                        <TbPlus color={"white"} size={"2rem"} />
                    </ContainerIcons>
                    {text ? text : "More"}
                    <ContainerIcons>
                        <MdNavigateNext color='white' size='2.5rem' />
                    </ContainerIcons>
                </ButtonMoreStyled>
            );

        if (buttons === "finish")
            return (
                <ButtonFinishStyled
                    type={"submit"}
                    bgcolor={bgcolor}
                    colortext={colortext}
                >
                    <ContainerIcons>
                        <HiCheck color={"white"} size={"2rem"} />
                    </ContainerIcons>
                    {text ? text : "Finish"}
                </ButtonFinishStyled>
            );

        if (buttons === "return")
            return (
                <ButtonReturnStyled
                    type={"button"}
                    onClick={() => console.log("buttonReturn")}
                    bgcolor={bgcolor}
                    colortext={colortext}
                >
                    <ContainerIcons>
                        <HiCheck color={"white"} size={"2rem"} />
                    </ContainerIcons>
                    {text ? text : "Return"}
                </ButtonReturnStyled>
            );

        if (buttons === "certificates")
            return (
                <ButtonCertificatesStyled
                    type={"button"}
                    onClick={() => console.log("buttonCertificates")}
                    bgcolor={bgcolor}
                    colortext={colortext}
                >
                    {text ? text : "Certificates"}
                    <ContainerIcons>
                        <IoIosArrowDown color={"white"} size={"2rem"} />
                    </ContainerIcons>
                </ButtonCertificatesStyled>
            );

        if (buttons === "removeCertificate")
            return (
                <ContainerRemoveCertificates>
                    <LinkCertificates>{children}</LinkCertificates>
                    <ButtonRemoveCertificates
                        type={"button"}
                        onClick={() => console.log("buttonRemoveCertificate")}
                    >
                        <ContainerIcons>
                            <AiOutlineClose
                                color='white'
                                size='1.1rem'
                                style={{
                                    position: "absolute",
                                    top: "3%",
                                    right: "5%",
                                }}
                            />
                        </ContainerIcons>
                    </ButtonRemoveCertificates>
                </ContainerRemoveCertificates>
            );
    } else {
        return <h1>Button</h1>;
    }
};

export default MapTo("reactapp/components/buttons")(Button);
