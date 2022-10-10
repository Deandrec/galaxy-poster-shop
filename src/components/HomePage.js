import { Link } from "react-router-dom";
import './HomePage.css'

const HomePage = ()=>{

    return(
        <div className="homepage" >
            <div className="homepage-container">
                <div className="homepage-words">
                    <h1 id="homepage-title">Milk The Way</h1>
                    <p id="homepage-quote" data-testid='homepage-quote'>"Explore the galaxy beyond the Earth"</p>
                </div>
                
                
                <Link to="/shop"><button className="homepage-to-shop-btn">Shop Now</button></Link>
            </div>
            
            
        </div>
    )
}


export default HomePage;