import { useContext } from "react"
import "./Cart.css"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {
const {cartItems, food_list, removeFromCart, getTotalCarAmount}= useContext(StoreContext); 
const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-tile">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qunatity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index) => {
          if(cartItems[item.id]>0)
          {
            return(
              <> <div key={index} className="cart-item-title cart-items-item">
              <img src={item.image} alt=""/>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item.id]}</p>
              <p>${item.price*cartItems[item.id]}</p>
              <p onClick={()=>removeFromCart(item.id)} className="cross">X</p>
            </div>
            <hr/></>
             
            );
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-toal-details">
              <p>Subtotal</p>
              <p>${getTotalCarAmount()}</p>
            </div>
            <hr/>
            <div className="cart-toal-details">
              <p>Delivery Fee</p>
              <p>${getTotalCarAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-toal-details">
              <b>Total</b>
              <b>${getTotalCarAmount()===0?0:getTotalCarAmount()+2}</b>
            </div>
           
          </div>
          <button onClick={()=>navigate("/placeorder")}>Proceed to checkout</button>

        </div>
         <div className="cart-promo-code">
          <div>
            <p>Enter the promo code here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder="promo code"/>
              <button>Submit</button>
            </div>
          </div>
         </div>

      </div>
    </div>
  )
}
export default Cart
