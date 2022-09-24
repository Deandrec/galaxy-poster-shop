import { useContext } from 'react'
import { ShopCartContext } from '../ShopCartContext'
import './ShopPage.css'
const inventory = [
    {name: 'Earth', img: require('../images/shop-images/earth.jpg'), itemType: 'Poster', price: 29.99},
    {name: 'Jupiter', img: require('../images/shop-images/jupiter.jpg'), itemType: 'Poster', price: 19.99},
    {name: 'Mars', img: require('../images/shop-images/mars.jpg'), itemType: 'Poster', price: 19.99},
    {name: 'Mercury', img: require('../images/shop-images/mercury.jpg'), itemType: 'Poster', price: 19.99},
    {name: 'Neptune', img: require('../images/shop-images/neptune.jpg'), itemType: 'Poster', price: 19.99},
    {name: 'Saturn', img: require('../images/shop-images/saturn.jpg'), itemType: 'Poster', price: 19.99},
    {name: 'Uranus', img: require('../images/shop-images/uranus.jpg'), itemType: 'Poster', price: 19.99},
    {name: 'Venus', img: require('../images/shop-images/venus.jpg'), itemType: 'Poster', price: 19.99},
    {name: "Earth's Moon", img: require('../images/shop-images/moon.jpg'), itemType: 'Poster', price: 14.99},
    {name: 'Dwarf Planet Pluto', img: require('../images/shop-images/pluto.jpg'), itemType: 'Poster', price: 14.99}]


const ShopPage = ()=>{
    const {cartItems, setCartItems} = useContext(ShopCartContext);
    const updateCart = (e)=>{
        // get current item being added to inventory
        const id = e.target.id
        const item = inventory.find(item => item.name === id)
        // check if item is in cartItems
        let itemInList = cartItems.itemsInCart.find(element => element.name === item.name)

        if(itemInList === undefined){
            let obj = {
                name: item.name,
                img: item.img,
                price: item.price,
                qty: 1,
                itemType: item.itemType,
            }
            
            setCartItems({
                itemsInCart : [...cartItems.itemsInCart, obj],
                totalCount: cartItems.totalCount + 1,
                totalPrice: (Number(cartItems.totalPrice) + obj.price).toFixed(2)
            })
        }else{
            let updatedList = cartItems.itemsInCart.map(element =>{
                if(element.name === itemInList.name){
                    return {...itemInList, qty: itemInList.qty + 1}
                }else{
                    return element;
                }
            } )

            setCartItems({
                itemsInCart : updatedList,
                totalCount: cartItems.totalCount + 1,
                totalPrice: (Number(cartItems.totalPrice) + itemInList.price).toFixed(2)
            })

        }
        showItems()
    }

    const showItems = ()=>{
        console.log(cartItems)
    }
    return(
        <div className="shop-page">
            <div></div>
            <div className="shop-title-contianer">
                <div className="shop-title">The Collection</div>
            </div>
            <div className="shop-inventory">
                {inventory.map((item)=>{
                    return(
                    <div className="card" >
                        <div className="card-image" style={{backgroundImage: `url(${item.img})`}} ></div>
                        <h1 className="card-name" >{item.name}</h1>
                        <span className="card-item">{item.itemType}</span>
                        <p className="card-price" onClick={()=> setCartItems('6660')}>${item.price}</p>
                        <button className='add-btn' id={item.name} onClick={updateCart}>Add to Cart</button>
                    </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default ShopPage;