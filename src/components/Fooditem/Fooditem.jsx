import React, { useContext} from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Fooditem = ({ id, name, price, description, image }) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className="w-[100%] m-auto rounded-[15px] shadow-[0px_0px_10px_#0000015] animate-[fadein_1s_ease-in-out]">
      <div className="relative">
        <img
          className=" w-[100]  rounded-[15px_15px_0px_0px]"
          src={image}
          alt=""
        />

        {!cartItems[id] ? (
          <img
            className="w-[35px] absolute bottom-[15px] right-[15px]  cursor-pointer rounded-[15%]"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white">
            <img className="w-[30px]"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green} 
              alt=""
            />
          </div>
        )}
      </div>

      <div className="p-[20px]">
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-[500]">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767]">{description}</p>
        <p className="text-[tomato]  font-[500] m-[10px_0px] text-2xl">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default Fooditem;
