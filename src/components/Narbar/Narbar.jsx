import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Narbar.css"
import { Link } from "react-router-dom";


const Narbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar flex justify-between items-center p-[20px_0px]">
      <img src={assets.logo} alt="" className="logo w-[150px] " />

  <ul className="narbar-menu flex gap-[20px] text-[#49557e] text-[18px] ">
        <Link to='/' onClick={() => setMenu("home")}
          className={`cursor-pointer ${
            menu === "home"
              ? "active pb-[2px] border-b-2      border-[#49557e]"
              : ""
          }`}
        >
          home 
        </Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")}
          className={`cursor-pointer ${
            menu === "menu"
              ? "active Pb-[2px] border-b-2     border-[#49557e]"
              : ""
          }`}
        >
          menu
        </a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")}
          className={`cursor-pointer ${
            menu === "mobile-app"
              ? "active Pb-[2px] border-b-2     border-[#49557e]"
              : ""
          }`}
        >
          mobile-app
        </a>
        <a href="#footer" onClick={() => setMenu("contact-us")}
          className={`cursor-pointer ${
            menu === "contact-us"
              ? "active Pb-[2px] border-b-2     border-[#49557e]"
              : ""
          }`}
        >
          contact us
        </a>
      </ul>

      <div className="navbar-right flex items-center gap-[40px]  ">
        <img src={assets.search_icon} alt="" className="" />
        <div className="narbar-search-icon  relative">
          <img src={assets.basket_icon} alt="" className="" />
          <div className="dot  absolute min-w-[10px]  min-h-[10px] bg-[#FF6347]  rounded-[5px] top-[-8px] right-[-8px]"></div>
        </div>
        <button onClick={()=> setShowLogin(true)} className="signup  bg-transparent text-[16px] border-2 border-[#FF6347] text-[#49557e] p-[10px_30px] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition delay-[0.2] ">
      Sign in
        </button>
      </div>
    </div>
  );
};

export default Narbar;
