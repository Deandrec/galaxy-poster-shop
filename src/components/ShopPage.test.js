import React, {useContext} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { getByTestId, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ShopPage from './ShopPage'
import {ShopCartContext} from '../ShopCartContext'

describe('shop page component', ()=>{
    it('test if inventory renders correctly', ()=>{
        render(
            <ShopCartContext.Provider value={React.useState}>
            <ShopPage />
          </ShopCartContext.Provider>, {wraper: BrowserRouter})
        expect(screen.getAllByText(/earth/i)[0].textContent).toMatch("Earth");
        expect(screen.getByTestId('shop-title').textContent).toMatch(/the collection/i)
    })
})