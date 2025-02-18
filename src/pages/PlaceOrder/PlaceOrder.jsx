import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCarAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>
        <input type="email" placeholder="email address" />
        <input type="text" placeholder="street" />
        <div className="multi-field">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="zip-code" />
          <input type="text" placeholder="country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart total</h2>
            <div>
              <div className="cart-toal-details">
                <p>Subtotal</p>
                <p>${getTotalCarAmount()}</p>
              </div>
              <hr />
              <div className="cart-toal-details">
                <p>Delivery Fee</p>
                <p>${getTotalCarAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-toal-details">
                <b>Total</b>
                <b>
                  ${getTotalCarAmount() === 0 ? 0 : getTotalCarAmount() + 2}
                </b>
              </div>
            </div>
            <button>Proceed to Payment</button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default PlaceOrder;
