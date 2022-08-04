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

const Header = () => {
  const [selectedTab] = useContext(TabsContext);
  return (
    <ContainerHeader>
      <SmallTitleHeader>Forms</SmallTitleHeader>
      <BigestTitleHeader>{options[selectedTab]} Tab</BigestTitleHeader>
    </ContainerHeader>
  );
};

export default MapTo("reactapp/components/header")(Header);
