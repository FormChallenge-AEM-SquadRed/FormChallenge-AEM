import React from "react";
import {useContext} from "react";
import {MapTo} from "@adobe/aem-react-editable-components";
import {Card, Container} from "./style";
import Tabs from "../Tabs";
import Title from "../Title";
import {TabsContext} from "../../contexts/TabsProvider";

const CardComponent = ({
    cardColor,
    basicTitle,
    socialTitle,
    certificatesTitle,
}) => {
    const [selectedTab, setSelectedTab] = useContext(TabsContext);

    return (
        <Container>
            <Card cardColor={cardColor}>
                {selectedTab === 0 &&
                    basicTitle &&
                    basicTitle.map((item, index) => (
                        <Title key={index} color={item.titlecolor}>
                            {item.titletext}
                        </Title>
                    ))}
                {selectedTab === 1 &&
                    socialTitle &&
                    socialTitle.map((item, index) => (
                        <Title key={index} color={item.titlecolor}>
                            {item.titletext}
                        </Title>
                    ))}
                {selectedTab === 2 &&
                    certificatesTitle &&
                    certificatesTitle.map((item, index) => (
                        <Title key={index} color={item.titlecolor}>
                            {item.titletext}
                        </Title>
                    ))}
                <Tabs />
            </Card>
        </Container>
    );
};

export default MapTo("reactapp/components/multifield-card")(CardComponent);
