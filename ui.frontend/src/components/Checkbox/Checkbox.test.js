import "@testing-library/jest-dom";
import React from 'react';
import {screen, render} from "@testing-library/react";
import Checkbox from "./index.js";


 describe("Input Testing", () => { 
    it("should start with values", () => {
         render(
            <Checkbox
            buttons = {"next"}
            ></Checkbox>          
        );
        expect(screen.queryByText('I accept the terms and privacy')).toBeInTheDocument();
        })
    })