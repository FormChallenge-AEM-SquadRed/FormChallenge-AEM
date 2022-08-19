import "@testing-library/jest-dom";
import React from 'react';
import {screen, render} from "@testing-library/react";
import Input from "./index.js";


 describe("Input Testing", () => { 
    it("should start with values", () => {
         render(
            <Input
            fonts={"Nunito"}
            textcolor={"#000000"}
            type={"text"}
            ></Input>
        );
        expect(screen.queryByText('Label')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Placeholder')).toBeInTheDocument();
        })
    })