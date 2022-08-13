import React from "react";
import { CustomCheckbox, HiddenCheckbox, Checkmark, Terms } from "./style.js";

const Checkbox = ({ checkboxtext, checkboxcolor, fonts, register }) => {
  return (
    <CustomCheckbox>
      <HiddenCheckbox type='checkbox' {...register} />
      <Checkmark />
      <Terms fonts={fonts} checkboxcolor={checkboxcolor}>
        {checkboxtext ? checkboxtext : "I accept the terms and privacy"}
      </Terms>
    </CustomCheckbox>
  );
};

export default Checkbox;
