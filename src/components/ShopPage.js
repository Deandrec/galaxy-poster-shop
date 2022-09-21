import './ShopPage.css'
const inventory = [
    {name: 'Earth', img: require('../images/shop-images/earth.jpg'), itemType: 'poster', price: '$29.99'},
    {name: 'Jupiter', img: require('../images/shop-images/jupiter.jpg'), itemType: 'poster', price: '$19.99'},
    {name: 'Mars', img: require('../images/shop-images/mars.jpg'), itemType: 'poster', price: '$19.99'},
    {name: 'Mercury', img: require('../images/shop-images/mercury.jpg'), itemType: 'poster', price: '$19.99'},
    {name: 'Neptune', img: require('../images/shop-images/neptune.jpg'), itemType: 'poster', price: '$19.99'},
    {name: 'Saturn', img: require('../images/shop-images/saturn.jpg'), itemType: 'poster', price: '$19.99'},
    {name: 'Uranus', img: require('../images/shop-images/uranus.jpg'), itemType: 'poster', price: '$19.99'},
    {name: 'Venus', img: require('../images/shop-images/venus.jpg'), itemType: 'poster', price: '$19.99'},
    {name: "Earth's Moon", img: require('../images/shop-images/moon.jpg'), itemType: 'poster', price: '$14.99'},
    {name: 'Dwarf Planet Pluto', img: require('../images/shop-images/pluto.jpg'), itemType: 'poster', price: '$14.99'}]


const ShopPage = ()=>{

    const clickdd = ()=>{
        console.log(inventory[0].img)
    }
    return(
        <div className="shop-page">
            <div className="shop-inventory">
                {inventory.map((item)=>{
                    return(
                    <div className="card">
                        <div className="card-image" style={{backgroundImage: `url(${item.img})`}}></div>
                        <h1 className="card-name" onClick={clickdd}>{item.name}</h1>
                        <span className="card-item">{item.itemType}</span>
                        <p className="card-price">{item.price}</p>
                    </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default ShopPage;