import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from  'react-router-dom'
import "./Navbar.css"
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {
const [menu, setMenu] = useState("");
const {getTotalCarAmount} = useContext(StoreContext);
  return (
    <div className="navbar">
       <Link to="/"><img src={assets.logo} alt="tomoato" className="logo" /></Link> 
            <ul className="navbar-menu">
              <Link to="/"  onClick={()=> setMenu("home")} className={menu === "home"? "active" : ""}> Home</Link>
              <a href="#explore-menu" onClick={()=> setMenu("menu")} className={menu === "menu"? "active" : ""}>Menu</a>
              <a href="#app-download" onClick={()=> setMenu("app")} className={menu === "app"? "active" : ""}>App</a>
              <a href="#footer" onClick={()=> setMenu("contact-us")} className={menu === "contact-us"? "active" : ""}>Contact us</a>
            </ul>  
        
        <div className="navbar-right">
               <img src={assets.search_icon} alt="search icon" />
               <div className="basket-icon">
                <Link to="/cart"><img src={assets.basket_icon} alt="basket-icon"  />
                </Link>
                <div className={getTotalCarAmount() === 0? "": "dot"}></div> 

               </div>
               
               <button onClick={()=> setShowLogin(true)} className="signin-button">SignIn</button>
        </div>
       

    </div>
  
  )
}

export default Navbar;
