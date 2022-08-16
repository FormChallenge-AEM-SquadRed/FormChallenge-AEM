import React from "react";
import { useContext } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { Card, Container } from "./style";
import Tabs from "../Tabs";
import Title from "../Title";
import { TabsContext } from "../../contexts/TabsProvider";
import FormBasic from "../FormBasic";

const CardComponent = ({
  cardColor,
  basicTitle,
  socialTitle,
  certificatesTitle,
  basicButton,
  basicInput,
  basicCheckbox,
  basicBirthday
}) => {
  const [selectedTab, setSelectedTab] = useContext(TabsContext);

  return (
    <Container>
      <Card cardColor={cardColor}>
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
        {selectedTab === 0 && (
          <FormBasic
            basicButton={basicButton}
            basicTitle={basicTitle}
            basicInput={basicInput}
            basicBirthday={basicBirthday}
            basicCheckbox={basicCheckbox}
          />
        )}
      </Card>
    </Container>
  );
};

export default MapTo("reactapp/components/multifield-card")(CardComponent);
