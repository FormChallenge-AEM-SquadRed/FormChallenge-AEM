import React from "react";
import {
    CustomCheckbox,
    HiddenCheckbox,
    Checkmark,
    Terms,
} from './style.js';

const Checkbox = ({ checkboxtext, checkboxcolor, fonts, onChange, register}) => {
    return (
        <CustomCheckbox>
            <HiddenCheckbox
                checkboxtext={checkboxtext}
                chekboxcolor={checkboxcolor}
                fonts={fonts}
                onChange={onChange}
                {...register}
            />
            <Checkmark />
            <Terms>I accept the terms and privacy</Terms>
        </CustomCheckbox>
    );
};

export default Checkbox;