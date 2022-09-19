import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import Cart from "./components/Cart";
const RouteSwitcher = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/shop" element={<ShopPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        
        
        </BrowserRouter>
    )
}

export default RouteSwitcher;