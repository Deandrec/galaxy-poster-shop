import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { ShopCartContext } from "./ShopCartContext";
const RouteSwitcher = ()=>{
    const [cartItems, setCartItems] = useState({itemsInCart: [], totalCount: 0, totalPrice: 0.00})
    return(
        <div className="route-switcher">
        <BrowserRouter>
            <Navbar/>
            <ShopCartContext.Provider value = {{cartItems, setCartItems}}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                    <Route path="/shop" element={<ShopPage/>}/>
                    <Route path="/cart" element={<Cart/>}/>                
            </Routes>
            </ShopCartContext.Provider>
        </BrowserRouter>
        </div>
        
    )
}

export default RouteSwitcher;