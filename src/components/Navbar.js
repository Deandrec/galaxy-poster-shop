import { Link } from "react-router-dom"



const Navbar = ()=>{
    return(
        <div className="nav-container">
            <Link to="/"><h1>milk the way</h1></Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </div>
    )
}

export default Navbar;