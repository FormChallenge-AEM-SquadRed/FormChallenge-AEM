import React, { useContext } from "react";
import { TabsContext } from "../../contexts/TabsProvider";
import Title from "../Title";
import Tabs from "../Tabs";
import Input from "../Input";
import Button from "../Buttons";
import { useForm } from "react-hook-form";


const FormSocial = ({ socialTitle, socialInput, socialButton }) => {
  const [selectedTab, setSelectedTab] = useContext(TabsContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
    setValue,
    getValues,
  } = useForm();                            
  return (
    <>
      {selectedTab === 1 &&
        socialTitle &&
        socialTitle.map((item, index) => (
          <Title 
          key={index} 
          color={item.titlecolor}>
            {item.titletext}
          </Title>
        ))}
      <Tabs />
      {socialInput &&
        socialInput.map((item, index) => (
          <Input
            key={index}
            placeholder={item.placeholdertext}
            type={item.types}
            {...{ register: register(`${index}`)}}
          >
            {item.labeltext}
          </Input>
        ))}
        {socialButton &&
        socialButton.map((item, index) => (
          <Button
            key={index}
            buttons={item.buttons}
            text = {item.buttonlabel}
            bgcolor = {item.backgroundcolor}
            colortext = {item.buttonlabelcolor}
          >
            
          </Button>
        ))}
    </>
  );
};
export default FormSocial;
