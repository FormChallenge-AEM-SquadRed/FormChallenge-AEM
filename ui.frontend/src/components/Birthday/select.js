import {StyledSelectContainer, StyledSelectLabel, StyledSelect} from "./style";

const Select = ({ labelday, labelmonth, labelyear, children, register, colorinput, colortitle, fonts }) => {
    return (
      <StyledSelectContainer>
        <StyledSelectLabel colortitle={colortitle}>
          {labelday || labelmonth || labelyear}
        </StyledSelectLabel>
        <StyledSelect {...register} colorinput={colorinput} fonts={fonts}>{children}</StyledSelect>
      </StyledSelectContainer>
    );
  };
  
  export default Select;