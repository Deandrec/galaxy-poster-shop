import React from "react";
import RouteSwitcher from "./RouteSwitcher";
import {screen, render, cleanup} from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";



beforeEach(()=>{
    render(<RouteSwitcher/>)
})
afterEach(() => {
    cleanup();
   });
describe('Adding a item to the cart', ()=>{
    it('checks if *click* of add button updates shoping cart', async ()=>{

        // got to shop page, get shop item btn and click
        userEvent.click(await screen.findByText(/shop now/i))
        const addBtnElements = screen.getAllByRole('button', {name: /add/i});
        const earthPosterBtn = addBtnElements[0]
        userEvent.click(earthPosterBtn)

        // go to cart page and check if poster (earth) has been added
        userEvent.click(await screen.findByText(/^cart/i))

        const divElement = screen.getByTestId(/cart-item/i)
        expect(divElement).toBeInTheDocument()

        const plusBtnElement = screen.getByRole('button', {name: /\+/i})
         expect(plusBtnElement).toBeInTheDocument()
        
    })
})

    

// after first terst, nolonger on homepage
describe('<cart />', ()=>{
    it('checks if increment (+) and decrement(-) btns update quantity display correctly', async ()=>{
         // got to shop page, get shop item btn and click
         await userEvent.click(screen.getByText(/^shop/i))
         const addBtnElements = screen.getAllByRole('button', {name: /add/i});
         const earthPosterBtn = addBtnElements[0]
         userEvent.click(earthPosterBtn)

         // go to cart page and check if poster (earth) has been added
         await userEvent.click(screen.getByText(/^cart/i))
        
         // get +, -, and display elements 
         const plusBtnElement = screen.getByRole('button', {name: /\+/i})
         const minusBtnElement = screen.getByRole('button', {name: /-/i})
         const displayElement = screen.getByTestId("qty")
         expect(displayElement).toBeInTheDocument()

         // increment
         userEvent.click(plusBtnElement)
         userEvent.click(plusBtnElement)
         // daplay === 3
         expect(displayElement).toHaveTextContent('3')

         // decrement
         userEvent.click(minusBtnElement)

          // daplay === 2
          expect(displayElement).toHaveTextContent('2')
    })

    it('checks if total updates correctly', async ()=>{
        // got to shop page, get shop item btn and click
        await userEvent.click(screen.getByText(/^shop/i))
        const addBtnElements = screen.getAllByRole('button', {name: /add/i});
        const earthPosterBtn = addBtnElements[0]
        userEvent.click(earthPosterBtn)

        // go to cart page and check if poster (earth) has been added
        await userEvent.click(screen.getByText(/^cart/i))
       
        // get +, -, and display elements 
        const plusBtnElement = screen.getByRole('button', {name: /\+/i})
        const totalElement = screen.getByTestId("cart-total")

        // increment
        userEvent.click(plusBtnElement)
        userEvent.click(plusBtnElement)
        // total == 89.97, earth poster == $29.99
        expect(totalElement).toHaveTextContent('89.97')
    })

})
