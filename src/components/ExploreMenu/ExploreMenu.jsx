import React from 'react'
import { menu_list } from '../../assets/assets'


export default function ExploreMenu({category, setCategory}) {
  return (
    <div className="flex flex-col gap-[20px]" id='explore-menu'>
      <h1 className="text-[#262626] font-[500] text-3xl">Explore our menu</h1>
      <p className=" max-w-[60%]  text-[#808080]">Choose from diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at time</p>
      <div className="flex justify-between  items-center gap-[30px] text-center m-[20px_0px] overflow-x-auto whitespace-nowrap scrollbar-hide">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} key={index}>
              <img  className={`w-[7.5vw] min-w-[80x] cursor-pointer rounded-[50%] transition delay-150 duration-300 ease-in-out ${category === item.menu_name? "border-solid border-[4px] border-[#ff6347] p-[2px]":""}` } 
              src={item.menu_image} alt="" />
              <p className="mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr className="m-[10px_0px] h-[2px] bg-[#e2e2e2] border-none"/>
    </div>
  )
}


