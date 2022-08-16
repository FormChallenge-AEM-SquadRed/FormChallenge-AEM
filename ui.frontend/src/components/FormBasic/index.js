import React, { useContext } from "react";
import Button from "../Buttons";
import { TabsContext } from "../../contexts/TabsProvider";
import Title from "../Title";
import Tabs from "../Tabs";
import Input from "../Input";
import Birthday from "../Birthday";
import Checkbox from "../Checkbox";
import { useForm } from "react-hook-form";
import {
  ErrorMessage,
  ContainerCheckbox,
  ContainerButton,
  ContainerInput,
  ContainerBirthday,
  Form,
  DivKey,
} from "./style.js";

const FormBasic = ({
  basicButton,
  basicTitle,
  basicInput,
  basicCheckbox,
  basicBirthday,
}) => {
  const [selectedTab, setSelectedTab] = useContext(TabsContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  console.log(basicBirthday.colortitle);
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

      <Form>
        {basicInput && <ContainerInput>
          {basicInput &&
            basicInput.map((item, index) => (
              <DivKey key={index}>
                <Input
                  type={item.types}
                  placeholder={item.placeholdertext}
                  placeholdercolor={item.placeholdercolor}
                  labelcolor={item.labelcolor}
                  textcolor={item.textcolor}
                  fonts={item.fonts}
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
              </DivKey>
            ))}
        </ContainerInput>}

        {basicBirthday &&
          basicBirthday.map((item, index) => (
            <Birthday
              key={index}
              labeltitle={item.labeltitle}
              colortitle={item.colortitle}
              labelday={item.labelday}
              labelmonth={item.labelmonth}
              labelyear={item.labelyear}
              labelage={item.labelage}
              colorinput={item.colorinput}
            />
          ))}

        {basicCheckbox &&
          basicCheckbox.map((item, index) => (
            <ContainerCheckbox key={index}>
              <Checkbox
                checkboxtext={item.checkboxtext}
                checkboxcolor={item.checkboxcolor}
                checkboxtextcolor={item.checkboxtextcolor}
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
      </Form>
    </>
  );
};

export default FormBasic;
