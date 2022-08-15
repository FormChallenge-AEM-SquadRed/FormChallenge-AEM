import React, { useContext } from "react";
import Button from "../Buttons";
import { TabsContext } from "../../contexts/TabsProvider";
import Title from "../Title";
import Tabs from "../Tabs";
import Input from "../Input";
import Checkbox from "../Checkbox";
import { useForm } from "react-hook-form";
import { ContainerInput } from "style.js";
import { ErrorMessage, ContainerCheckbox, ContainerButton } from "./style";

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
          <ContainerInput key={index}>
            <Input
              type={item.types}
              placeholder={item.placeholdertext}
              {...{
                register: register(`${index}`, {
                  required: `${item.required}`,
                }),
              }}
            >
              {item.labeltext}
            </Input>
            <ErrorMessage>
              {errors[index] && `${item.labeltext} is required`}
            </ErrorMessage>
          </ContainerInput>
        ))}

      {basicCheckbox &&
        basicCheckbox.map((item, index) => (
          <ContainerCheckbox key={index}>
            <Checkbox
              checkboxtext={item.checkboxtext}
              checkboxcolor={item.checkboxcolor}
              checkboxtextcolor={item.checkboxcolor}
              fonts={item.fonts}
              {...{
                register: register(`${index}`, {
                  required: `${item.required}`,
                }),
              }}
            />
            <ErrorMessage>
              {errors[index] && `Please confirm the terms`}
            </ErrorMessage>
          </ContainerCheckbox>
        ))}

      {basicButton &&
        basicButton.map((item, index) => (
          <ContainerButton key={index}>
          <Button
            text={item.buttonlabel}
            buttons={item.buttons}
            bgcolor={item.buttonbckgcolor}
            colortext={item.buttonlabelcolor}
          />
          </ContainerButton>
        ))}
    </>
  );
};

export default FormBasic;
