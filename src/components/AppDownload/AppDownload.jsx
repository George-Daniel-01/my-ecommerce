import React from "react";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div
      className="m-[auto_auto] mt-[100px] text-[max(3vw,20px)] text-center font-[500]"
      id="app-download"
    >
      <p>
        For Better Experience <br />
        Tomato App
      </p>
      <div className="flex items-center justify-center gap-[40px] mt-[40px]">
        <img
          className="w-[max(30vw,120px)] max-w-[180px] transition duration-500  cursor-pointer hover:scale-105"
          src={assets.play_store}
          alt=""
        />
        <img
          className="w-[max(30vw,120px)] max-w-[180px] transition duration-500  cursor-pointer hover:scale-105"
          src={assets.app_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;
