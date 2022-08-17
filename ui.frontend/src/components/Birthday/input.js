import { StyledInputContainer, StyledInputLabel, StyledInput } from "./style";

const Input = ({
    labelage,
    register,
    colorinput,
    fonts,
    colortitle,
  }) => {
    return (
      <StyledInputContainer>
        <StyledInputLabel fonts={fonts} colortitle={colortitle}>
          {labelage}
        </StyledInputLabel>
        <StyledInput
          fonts={fonts}
          {...register}
          readOnly
          colorinput={colorinput}
          labelage={labelage}
        />
      </StyledInputContainer>
    );
  };
  
  export default Input;
 