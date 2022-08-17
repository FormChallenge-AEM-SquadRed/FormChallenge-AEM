import React from "react";
import { useContext } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { Card, Container } from "./style";
import Tabs from "../Tabs";
import Title from "../Title";
import FormSocial from "../FormSocial";
import { TabsContext } from "../../contexts/TabsProvider";

const CardComponent = ({
  cardColor,
  socialTitle,
  certificatesTitle,
  socialInput,
  socialButton,
}) => {
  const [selectedTab, setSelectedTab] = useContext(TabsContext);

  return (
    <Container>
      <Card cardColor={cardColor}>
          {selectedTab === 1 && (
          <FormSocial
            socialTitle={socialTitle}
            socialInput={socialInput}
            socialButton={socialButton}
          />
          
        )}    
        {selectedTab === 2 &&
          certificatesTitle &&
          certificatesTitle.map((item, index) => (
            <Title key={index} color={item.titlecolor}>
              {item.titletext}
            </Title>
          ))}   
      </Card>
    </Container>
  );
};

export default MapTo("reactapp/components/multifield-card")(CardComponent);
