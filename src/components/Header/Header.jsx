import React from 'react'
import "./Header.css"
export default function  Header (){
  return (
    <div className="header h-[34vw]  m-[30px_auto] bg-[url('/header_img.png')] bg-no-repeat bg-cover bg-center relative">
      <div className="header-contents  absolute flex flex-col items-start  g-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-[fadeIn_3s_ease-in-out_forwards]">
        <h2 className="header-text text-white font-[500]  text-[max(4.5vw,22px)]">Order your favourite food here</h2>
        <p className="text-white text-[1vw]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. our mission is to satisfy your cravings and elevae your dinning experience, one delicous meal at a time   </p>
        <button className="text-[#747474] font-medium p-[1vw_2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px]"    >View Menu</button>
      </div>
    </div>
  )
}
