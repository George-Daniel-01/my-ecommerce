import React, { useState } from 'react'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="logn-popup">
<form  className="login-popup-container">
  <div className="loginpopup-tittle">
<h2>{currState}</h2>
<img onClick={()=>setShowLogin(false)}  src={assets.cross_icon}alt="" />
  </div>
</form>
    </div>
  )
}

export default LoginPopup