import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShopCartContext } from "../ShopCartContext"
import './Navbar.css'



const Navbar = ()=>{
    const {cartItems} = useContext(ShopCartContext);
    return(
        <div className="nav-container">
            <Link id="nav-title" to="/">Milk The Way</Link>
            <nav className="nav">
                <Link id="link" to="/">Home</Link>
                <Link id="link" to="/shop">Shop</Link>
                <Link id="link" to="/cart">Cart({cartItems.totalCount})</Link>
            </nav>
        </div>
    )
}

export default Navbar;