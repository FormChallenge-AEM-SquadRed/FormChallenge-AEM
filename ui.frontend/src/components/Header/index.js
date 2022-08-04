import React from "react";
import {
  ContainerHeader,
  SmallTitleHeader,
  BigestTitleHeader,
} from "./style.js";
import { MapTo } from "@adobe/aem-react-editable-components";
import { useContext } from "react";
import { TabsContext } from "../../contexts/TabsProvider";

const options = ["First", "Second", "Third", "Success"];

const Header = (textTitle, text) => {
  const [selectedTab] = useContext(TabsContext);
  return (
    <ContainerHeader>
      <SmallTitleHeader>{textTitle ? textTitle : "Forms"}</SmallTitleHeader>
      <BigestTitleHeader>{text ? text : options[selectedTab] + " Tab"}</BigestTitleHeader>
    </ContainerHeader>
  );
};

export default MapTo("reactapp/components/header")(Header);

