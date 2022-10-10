import React, {useContext} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Cart from './Cart';
import {ShopCartContext} from '../ShopCartContext' 


const MockItem = {itemsInCart :[{
    name: 'Earth',
    img: '',
    price: '19.99',
    qty: 1,
    itemType: 'poster',
}],
totalCount: 1,
totalPrice: '19.99'}

const MockCart = ()=>{
    let cartItems = MockItem
    let setCartItems = MockSetCartItems
    return(
        <BrowserRouter>
            <ShopCartContext.Provider value={{cartItems, setCartItems }}>
            <Cart />
          </ShopCartContext.Provider>
        
        </BrowserRouter>
        
    )
}
const MockSetCartItems = jest.fn()



describe('checks if cart updates corectly', ()=>{
    it('test if inventory renders correctly', ()=>{
        render(MockCart())
        const divElement  = screen.getByTestId(/cart-item/i)

        expect(divElement).toBeInTheDocument()
    })

    it('test if "+" and "-" buttons render correctly ', async ()=>{
        render(MockCart())
        const plusBtnElement = screen.getByRole('button', {name: /\+/i})
        const minusBtnElement = screen.getByRole('button', {name: /-/i})
        
        userEvent.click(plusBtnElement)
        expect(plusBtnElement).toBeInTheDocument()
        expect(minusBtnElement).toBeInTheDocument()
        
        
        
          
        
    })

    it('test if "+" increments correctly', async ()=>{
        render(MockCart())
        const plusBtnElement = screen.getByRole('button', {name: /\+/i})
        await userEvent.click(plusBtnElement)
        const displayElement = screen.getByTestId("qty")
        expect(displayElement).toBeInTheDocument()
        
        
        
          
        
    })
})