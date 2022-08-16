import React from "react";
import {
    CustomCheckbox,
    HiddenCheckbox,
    Checkmark,
    Terms,
} from './checkboxStyled';

const Checkbox = ({ checkboxtextcolor, checkboxtext, checkboxcolor, fonts, register }) => {
  return (
    <CustomCheckbox  checkboxcolor={checkboxcolor}>
      <HiddenCheckbox type='checkbox' {...register} />
      <Checkmark />
      <Terms fonts={fonts} checkboxtextcolor={checkboxtextcolor}>
        {checkboxtext ? checkboxtext : "I accept the terms and privacy"}
      </Terms>
    </CustomCheckbox>
  );
};

export default Checkbox;