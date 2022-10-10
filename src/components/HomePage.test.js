import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import HomePage from './HomePage';

describe('HomePage Componet', ()=>{
    it('renders correct heading', ()=>{
        const { getByRole, } = render(<HomePage/>, {wrapper: BrowserRouter});
        expect(screen.getByRole("heading").textContent).toMatch(/milk the way/i);
    });
    it('renders correct quote', ()=>{
        const { getByRole, getByTestId } = render(<HomePage/>, {wrapper: BrowserRouter});
        expect(screen.getByTestId("homepage-quote").textContent).toMatch(/Explore the galaxy beyond the Earth/i);
    });
});
