import React, { useContext } from "react";
import Button from "../Buttons";
import { TabsContext } from "../../contexts/TabsProvider";
import Title from "../Title";
import Tabs from "../Tabs";
import Input from "../Input";
import Checkbox from "../Checkbox";
import { useForm } from "react-hook-form";

const FormBasic = ({ basicButton, basicTitle, basicInput, basicCheckbox }) => {
  const [selectedTab, setSelectedTab] = useContext(TabsContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  return (
    <>
      {selectedTab === 0 &&
        basicTitle &&
        basicTitle.map((item, index) => (
          <Title key={index} color={item.titlecolor}>
            {item.titletext}
          </Title>
        ))}
      <Tabs />
      {basicInput &&
        basicInput.map((item, index) => (
          <Input
            key={index}
            type={item.types}
            placeholder={item.placeholdertext}
            {...{ register: register(`${index}`) }}
          >
            {item.labeltext}
          </Input>
        ))}

      {basicCheckbox &&
        basicCheckbox.map((item, index) => (
          <Checkbox
            key={index}
            checkboxtext={item.checkboxtext}
            checkboxcolor={item.checkboxcolor}
            fonts={item.fonts}
            {...{ register: register(`${index}`) }}
          />
        ))}
        
      {basicButton &&
        basicButton.map((item, index) => (
          <Button
            key={index}
            text={item.buttonlabel}
            buttons={item.buttons}
            bgcolor={item.buttonbckgcolor}
            colortext={item.buttonlabelcolor}
          />
        ))}
    </>
  );
};

export default FormBasic;
