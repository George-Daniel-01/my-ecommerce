import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="text-[#d9d9d9] bg-[#323232] flex-col flex items-center p-[20px_8vw] pt-[80px] " id='footer'>
      <div className=" ">
        <div className="">
            <img src={assets.logo} alt="" />
            <p>Lorem Ipsum is simply dummy text of the pritig and typesetting industry.    When an ukown printer took  a galley of type a galley of type and scrambled it to make a type specimen book.</p>
            <div className="">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div>
         <h2>COMPANY</h2>
         <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
         </ul>
        </div>
        <div>
       <h2>GET IN TOUCH</h2>
       <ul>
        <li>2347060512564</li>
        <li> georgeabiamakadaniel</li>
       </ul>
        </div>
      </div>
      <hr />
      <p className="">
        Copyright 2025  © George Daniel - All rights reserved.
      </p>
    </div>
  )
}

export default Footer
