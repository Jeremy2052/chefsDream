import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [delivery, setDelivery] = useState(true);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} className="text-orange-400"/>
        </div>
        <h1 className="text-gray-500 text-2xl sm:text-3xl lg:text-4xl px-2">
          Chef's <span className="font-bold text-orange-400">Dream</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full p-1 text-[14px] cursor-pointer">
          <p onClick={() => setDelivery(true)} className={delivery ? "bg-orange-400 text-white rounded-full p-1 mr-2" : ""}>Delivery</p>
          <p onClick={() => setDelivery(false)} className={delivery ? "" : "bg-orange-400 text-white rounded-full p-1 "}>Pickup</p>
        </div>
      </div>

      {/* search bar */}
      {/* <div className="bg-transparent border rounded-full text-black flex items-center px-2 w-[200px] sm:w-[400px] lg:[500px]">
        <AiOutlineSearch size={25} color="black" />
        <input
          type="text"
          placeholder="search for a dish"
          className="bg-transparent w-full p-2 focus: outline-none placeholder:text-black"
        />
      </div> */}

      {/* cart */}
      <button className="bg-orange-400 text-white hidden md:flex items-center py-2 border-gray-300 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>

      {/*mobile menu  */}
      {nav ? (
        <div onClick={()=> setNav(!nav)} className="bg-black/80 fixed w-full h-screen z-20 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* sidedraw menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-orange-300 z-20 duration-500"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-orange-300 z-20 ease-in duration-500"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          <span className="font-bold">Chef's Dream</span>
        </h2>
        <nav>
          <ul className="flex flex-col py-4 text-gray-800">
            <li className="w-full text-xl p-4 flex cursor-pointer hover:bg-white/20">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="w-full text-xl p-4 flex cursor-pointer hover:bg-white/20">
              <MdFavorite size={25} className="mr-4" />
              Favirotes
            </li>
            <li className="w-full text-xl p-4 flex cursor-pointer hover:bg-white/20">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="w-full text-xl p-4 flex cursor-pointer hover:bg-white/20">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="w-full text-xl p-4 flex cursor-pointer hover:bg-white/20">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="w-full text-xl p-4 flex cursor-pointer hover:bg-white/20">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className="w-full text-xl p-4 flex cursor-pointer hover:bg-white/20">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
