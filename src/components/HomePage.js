import { Link } from "react-router-dom";
import './HomePage.css'

const HomePage = ()=>{

    return(
        <div className="homepage" >
            <h1 id="homepage-title">Milk The Way</h1>
            <p id="homepage-quote">Explore the galaxy beyond the earth</p>
            
            <Link to="/shop">shop now</Link>
            
        </div>
    )
}


export default HomePage;