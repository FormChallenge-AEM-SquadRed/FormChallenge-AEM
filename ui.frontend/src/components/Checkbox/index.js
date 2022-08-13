import React from "react";
import {
    CustomCheckbox,
    HiddenCheckbox,
    Checkmark,
    Terms,
} from './style.js';

const Checkbox = ({ checkboxtext, checkboxcolor, fonts, onChange, register}) => {
    console.log("checkbox")
    return (
        <CustomCheckbox onChange={onChange} {...register}>
            <HiddenCheckbox/>
            <Checkmark chekboxcolor={checkboxcolor} />
            <Terms   fonts={fonts} >{checkboxtext ? checkboxtext : "I accept the terms and privacy"}</Terms>
        </CustomCheckbox>
    );
};

export default Checkbox;