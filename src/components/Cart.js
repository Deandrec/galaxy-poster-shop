import { useContext } from 'react'
import { ShopCartContext } from '../ShopCartContext'

const Cart = ()=>{
    const {cartItems, setCartItems} = useContext(ShopCartContext);
    return(
        <div className="cart">
            <h1>this is the cart</h1>
            <pre>{JSON.stringify(cartItems, null, 2)}</pre>
        </div>
    )
}

export default Cart;