import React, { useState } from "react";
import Narbar from "./components/Narbar/Narbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/>:null}
      <div className="app">
        <Narbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
