import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Search from "./pages/Search/search";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <div></div>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          {" "}
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          {" "}
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Routes>
          {" "}
          <Route path="/placeorder" element={<PlaceOrder />}></Route>
        </Routes>
        <Routes>
          {" "}
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
