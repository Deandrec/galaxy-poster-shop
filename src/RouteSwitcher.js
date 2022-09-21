import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
const RouteSwitcher = ()=>{
    return(
        <div className="route-switcher">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/shop" element={<ShopPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
        </div>
        
    )
}

export default RouteSwitcher;