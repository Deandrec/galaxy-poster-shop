import { useContext } from 'react'
import { ShopCartContext } from '../ShopCartContext'
import './Cart.css'

const Cart = ()=>{
    const {cartItems, setCartItems} = useContext(ShopCartContext);
    return(
        <div className="cart">
            <div className='cart-container'>
                <h1 className='cart-title'>Your Cart</h1>
                {cartItems.itemsInCart.map((item) =>{
                    return(
                        <div className='cart-item'>
                            <img src={item.img} alt='planet poster'/>
                            <div className='info'>
                                <div className='upper-wrapper'>
                                    <div className='name-container'>
                                        <h1>{item.name}</h1>
                                        <span>{item.itemType}</span>
                                    </div>
                                    <p id='cart-item-price'>${item.price}</p>
                                </div>
                                <div className='qty-wrapper'>
                                    <button id='cart-item-btn'>-</button>
                                    <div id='qty'>{item.qty}</div>
                                    <button id='cart-item-btn'>+</button>

                                </div>
                            </div>
                        </div>
                    )
                })}
                <p className='cart-total'>Total: ${cartItems.totalPrice}</p>
            </div>
        </div>
    )
}

export default Cart;