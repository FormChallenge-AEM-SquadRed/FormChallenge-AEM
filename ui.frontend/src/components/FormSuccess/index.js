import React, { useContext } from "react";
import { TabsContext } from "../../contexts/TabsProvider";
import Title from "../Title";
import Tabs from "../Tabs";
import Button from "../Buttons";
import { useForm } from "react-hook-form";
import {SuccessText, ContainerTexts, TextContainer, ContainerForm, ContainerButtons, ButtonContainer} from "./indexStyled";


const FormSucess = ({successTitle, successText, successButton}) => {
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
        successTitle &&
        successTitle.map((item, index) => (
          <Title 
          key={index} 
          color={item.titlecolor}>
            {item.titletext}
          </Title>
        ))}
      <Tabs />
      <ContainerForm onSubmit = {handleSubmit(onSubmit)}>     
      <ContainerTexts>  
        {successText &&
          successText.map((item, index) => (
          
            <TextContainer key = {index}>
              <SuccessText
                key={index}
                color={item.resultcolor}
              >
                {item.resulttext}
              </SuccessText>
              <p>
                {errors[index] && 
                  `${item.labeltext} is required`}
              </p>
            </TextContainer>            
          ))}
        </ContainerTexts>
        <ContainerButtons>
          {successButton &&
            successButton.map((item, index) => (
            <ButtonContainer>
               <Button
                key={index}
                buttons={item.buttons}
                text = {item.resulttext}
                bgcolor = {item.buttonbckgcolor}
                colortext = {item.resultcolor}
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