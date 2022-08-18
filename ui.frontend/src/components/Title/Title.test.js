import "@testing-library/jest-dom";
import React from 'react';
import {screen, render} from "@testing-library/react";
import Title from "./index.js";


 describe("Input Testing", () => { 
    it("should start with values", () => {
         render(
            <Title>Titulo</Title>
        );
        expect(screen.queryByText('Titulo')).toBeInTheDocument();
        })
    })