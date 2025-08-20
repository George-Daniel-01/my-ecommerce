import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      className="text-[#d9d9d9] bg-[#323232] flex-col flex items-center p-[20px_8vw] pt-[80px] mt-[100px]"
      id="footer"
    >
      <div className=" w-[100%] grid grid-cols-[2fr_1fr_1fr] gap-[80px]  ">
        <div className="flex flex-col  items-center   items-start">
          <img src={assets.logo} alt="" />
          <p className="mb-3">
            Lorem Ipsum is simply dummy text of the pritig and typesetting
            industry. When an ukown printer took a galley of type a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <div className="flex gap-5">
            <img className="rounded" src={assets.facebook_icon} alt="" />
            <img className="rounded" src={assets.twitter_icon} alt="" />
            <img className="rounded" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="mt-[10px]">
          <h2 className="text-2xl font-[900] mb-[10px]  text-[white]">
            COMPANY
          </h2>
          <ul>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy policy</li>
          </ul>
        </div>
        <div className="mt-[10px]">
          <h2 className="text-2xl font-[900] mb-[10px]  text-[white]">
            GET IN TOUCH
          </h2>
          <ul>
            <li>2347060512564</li>
            <li> georgeabiamakadaniel</li>
          </ul>
        </div>
      </div>
      <hr className="w-[100%] h-[2px] m-[20px_0] bg-[gray] border-none" />
      <p className="">Copyright 2025 © George Daniel - All rights reserved.</p>
    </div>
  );
};

export default Footer;
