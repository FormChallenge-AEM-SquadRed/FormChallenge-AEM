import "@testing-library/jest-dom";
import React from 'react';
import {screen, render} from "@testing-library/react";
import Button from "./index.js";


 describe("Input Testing", () => { 
    it("should start with values", () => {
         render(
            <>
            <Button
            buttons = {"next"}
            ></Button>
            <Button
            buttons = {"more"}
            ></Button>
            <Button
            buttons = {"finish"}
            ></Button>
            <Button
            buttons = {"certificates"}
            ></Button>
            <Button
            buttons = {"return"}
            ></Button>
            </>
           
        );
        expect(screen.queryByText('Next')).toBeInTheDocument();
        expect(screen.queryByText('More')).toBeInTheDocument();
        expect(screen.queryByText('Finish')).toBeInTheDocument();
        expect(screen.queryByText('Certificates')).toBeInTheDocument();
        expect(screen.queryByText('Return')).toBeInTheDocument();
        })
    })