import React from "react";
import {useContext} from "react";
import {MapTo} from "@adobe/aem-react-editable-components";
import {Card, Container} from "./style";
import {TabsContext} from "../../contexts/TabsProvider";
import {UserDataContext} from "../../contexts/UserDataProvider";
import FormBasic from "../FormBasic";
import FormSocial from "../FormSocial";
import FormCertificates from "../FormCertificates";

const CardComponent = ({
    cardColor,
    basicTitle,
    basicInput,
    basicButton,
    basicBirthday,
    basicCheckbox,
    socialTitle,
    socialInput,
    socialButton,
    certificatesBlock,
    certificatesInput,
    certificatesTitle,
    certificatesFinish,
    
}) => {
    const [selectedTab, setSelectedTab] = useContext(TabsContext);
    const [userData] = useContext(UserDataContext);

    return (
        <Container cardColor={cardColor}>
            <Card cardColor={cardColor}>
                {selectedTab === 0 && (
                    <FormBasic
                        basicButton={basicButton}
                        basicTitle={basicTitle}
                        basicInput={basicInput}
                        basicBirthday={basicBirthday}
                        basicCheckbox={basicCheckbox}
                    />
                )}
                {selectedTab === 1 && (
                    <FormSocial
                        socialTitle={socialTitle}
                        socialInput={socialInput}
                        socialButton={socialButton}
                    />
                )}

                {selectedTab === 2 && (
                    <FormCertificates
                        certificatesBlock={certificatesBlock}
                        certificatesInput={certificatesInput}
                        certificatesTitle={certificatesTitle}
                        certificatesFinish={certificatesFinish}
                    />
                )}

                {selectedTab === 3 && console.log(userData)}
            </Card>
        </Container>
    );
};

export default MapTo("reactapp/components/multifield-card")(CardComponent);
