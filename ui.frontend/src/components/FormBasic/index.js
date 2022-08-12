import React from "react";
import Button from "../Buttons";

const FormBasic = ({ basicButton }) => {
  return (
    <>
      {basicButton &&
        basicButton.map((item, index) => (
          <Button
            key={index}
            text={item.buttonlabel}
            buttons={item.buttons}
            bgcolor={item.buttonbckgcolor}
            colortext={item.buttonlabelcolor}
          />
        ))}
    </>
  );
};

export default FormBasic;
