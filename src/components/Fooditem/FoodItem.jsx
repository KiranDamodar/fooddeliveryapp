import { useContext } from "react"
import { assets } from "../../assets/frontend_assets/assets"
import "./FoodItem.css"
import { StoreContext } from "../../context/StoreContext"
import PropTypes from 'prop-types';

const FoodItem = ({id,name,price,description,image}) => {
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-img" src={image} alt="{name}"/>
        <div>
        {!cartItems[id]?<img onClick={()=> addToCart(id)} className="white-add-button" src={assets.add_icon_white} alt="add"/> :
        <div className="itemcount-list"><img  onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="remove"/>
        <p>{cartItems[id]}</p>
        <img  onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add"/></div>
          
        }
        </div>
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p> {name}</p>
          <img src={assets.rating_starts}/> 
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

FoodItem.propTypes = {
  id: PropTypes.string.isRequired, // assuming id is a string (adjust if it's a number)
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default FoodItem
