import React from "react";
import { useContext } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { Card, Container } from "./style";
import Tabs from "../Tabs";
import Title from "../Title";
import { TabsContext } from "../../contexts/TabsProvider";
import FormBasic from "../FormBasic";
import FormSocial from "../FormSocial";
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
  certificatesTitle,
}) => {
  const [selectedTab, setSelectedTab] = useContext(TabsContext);

  return (
    <Container>
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
          ))}   

      </Card>
    </Container>
  );
};

export default MapTo("reactapp/components/multifield-card")(CardComponent);
