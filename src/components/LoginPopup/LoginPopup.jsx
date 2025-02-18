import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";
import PropTyes from "prop-types";

const LoginPopup = ({ setShowLogin }) => {
  const [currentstate, setCurrentstate] = useState("signin");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentstate}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentstate === "signin" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter your name" required />
          )}

          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="enter the password" required />
        </div>
        <div>
          <button>
            {currentstate === "signup" ? "Create account" : "Log in"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>

          {currentstate === "signin" ? (
            <p>
              create a new account?{" "}
              <span onClick={() => setCurrentstate("signup")}>Click here</span>{" "}
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrentstate("signin")}>Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

LoginPopup.propTypes = {
  setShowLogin: PropTyes.bool.isRequired,
};
export default LoginPopup;
