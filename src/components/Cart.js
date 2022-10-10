import { useContext } from 'react'
import { Link } from "react-router-dom"
import { ShopCartContext } from '../ShopCartContext'
import './Cart.css'

const Cart = ()=>{
    const {cartItems, setCartItems} = useContext(ShopCartContext);

    const inrement = (e)=>{
        const id = e.target.id;
        let updatedList = cartItems.itemsInCart.map(element =>{
            if(element.name === id){
                return {...element, qty: element.qty + 1}
            }else{
                return element;
            }
        } )
        let itemPrice = cartItems.itemsInCart.find(element => element.name === id ).price

        setCartItems({
            itemsInCart : updatedList,
            totalCount: cartItems.totalCount + 1,
            totalPrice: (Number(cartItems.totalPrice) + Number(itemPrice)).toFixed(2)
        })
    }

    const decrement = (e)=>{
        const id = e.target.id;
        let updatedList = cartItems.itemsInCart.map(element =>{
            if(element.name === id){
                return {...element, qty: element.qty - 1}
            }else{
                return element;
            }
        } )
        let item= cartItems.itemsInCart.find(element => element.name === id )
        // check if decrement will equal to 0, if so remove item from cart eles update state
        if(item.qty -1 === 0){
            removeItem(e)
        }else{
            setCartItems({
                itemsInCart : updatedList,
                totalCount: cartItems.totalCount - 1,
                totalPrice: (Number(cartItems.totalPrice) - item.price).toFixed(2)
            })
        }
        
    }

    const removeItem = (e)=>{
        const id = e.target.id
        // find element
        const element = cartItems.itemsInCart.find(item => item.name === id)
        // find index of element
        const index = cartItems.itemsInCart.indexOf(element)
        // get total of price of item
        const itemTotalPrice = element.qty * element.price
         let updateCart = cartItems.itemsInCart;
         updateCart.splice(index, 1)
        setCartItems({
            itemsInCart: updateCart,
            totalCount: cartItems.totalCount - element.qty,
            totalPrice: (Number(cartItems.totalPrice) - itemTotalPrice).toFixed(2)
        })
        console.log(itemTotalPrice)
    }
    const checkout = ()=>{
        alert('Thank you for shopping with us!')
    }
    return(
        <div className="cart">
            <div className='cart-container'>
                <h1 className='cart-title'>Your Cart</h1>
                {cartItems.itemsInCart.map((item) =>{
                    return(
                        <div className='cart-item' data-testid='cart-item'>
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
                                    <button className='cart-item-btn' id={item.name} onClick={decrement}>-</button>
                                    <div id='qty' data-testid='qty'>{item.qty}</div>
                                    <button className='cart-item-btn' id={item.name} onClick={inrement}>+</button>

                                </div>
                                <p onClick={removeItem} id={item.name} className='remove-btn'>Remove Item</p>
                            </div>
                        </div>
                    )
                })}
                <p className='cart-total' data-testid='cart-total'>Total: ${cartItems.totalPrice}</p>
                <button className='checkout-btn' onClick={checkout}>Proceed to Checkout</button>
                <Link to='/shop'><button className='btn-to-shop'>Back to Shop</button></Link>
            </div>
        </div>
    )
}

export default Cart;