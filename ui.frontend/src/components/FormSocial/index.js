import React, { useContext } from "react";
import { TabsContext } from "../../contexts/TabsProvider";
import Title from "../Title";
import Tabs from "../Tabs";
import Input from "../Input";
import Button from "../Buttons";
import { useForm } from "react-hook-form";
import {InputContainer, ContainerInputs, ContainerForm, ButtonContainer, ContainerButtons} from "./indexStyled";


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
  console.log(socialInput[0].required) 
  const onSubmit = () => {
    setSelectedTab(selectedTab+1)
  }                          
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
      <ContainerForm onSubmit = {handleSubmit(onSubmit)}>     
      <ContainerInputs>  
        {socialInput &&
          socialInput.map((item, index) => (
          
            <InputContainer key = {index}>
              <Input
                key={index}
                placeholder={item.placeholdertext}
                type={item.types}
                {...{ register: register(`${index}`, {required: item.required})}}
              >
                {item.labeltext}
              </Input>
              <p>
                {errors[index] && 
                  `${item.labeltext} is required`}
              </p>
            </InputContainer>            
          ))}
        </ContainerInputs>
        <ContainerButtons>
          {socialButton &&
            socialButton.map((item, index) => (
            <ButtonContainer>
               <Button
                key={index}
                buttons={item.buttons}
                text = {item.buttonlabel}
                bgcolor = {item.backgroundcolor}
                colortext = {item.buttonlabelcolor}
              >          
              </Button>
            </ButtonContainer>  
            ))}        
        </ContainerButtons>   
      </ContainerForm> 
    
    </>
  );
};
export default FormSocial;
