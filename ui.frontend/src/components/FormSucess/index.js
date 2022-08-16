import React, { useContext } from "react";
import { TabsContext } from "../../contexts/TabsProvider";
import Title from "../Title";
import Tabs from "../Tabs";
import Button from "../Buttons";
import { useForm } from "react-hook-form";
import {SucessText, ContainerTexts, TextContainer, ContainerForm, ContainerButtons, ButtonContainer} from "./indexStyled";


const FormSucess = ({ sucessTitle, sucessText, socialButton }) => {
  const [selectedTab, setSelectedTab] = useContext(TabsContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
    setValue,
    getValues,
  } = useForm(); 
  const onSubmit = () => {
    setSelectedTab(selectedTab+1)
  }                          
  return (
  
    <>
    
      {selectedTab === 1 &&
        sucessTitle &&
        sucessTitle.map((item, index) => (
          <Title 
          key={index} 
          color={item.titlecolor}>
            {item.titletext}
          </Title>
        ))}
      <Tabs />
      <ContainerForm onSubmit = {handleSubmit(onSubmit)}>     
      <ContainerTexts>  
        {sucessText &&
          sucessText.map((item, index) => (
          
            <TextContainer key = {index}>
              <SucessText
                key={index}
              >
                {item.resulttext}
              </SucessText>
              <p>
                {errors[index] && 
                  `${item.labeltext} is required`}
              </p>
            </TextContainer>            
          ))}
        </ContainerTexts>
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
export default FormSucess;