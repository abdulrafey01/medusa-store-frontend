import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo-1.png";
import LogoBlack from "@/assets/logo-1-dark.png";
import CartSvg from "@/assets/Svgs/CartSvg";
import AccountSvg from "@/assets/Svgs/AccountSvg";
type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="max-lg:bg-white w-full p-6 flex fixed top-0 z-20">
      <div className="hidden lg:absolute top-0 left-0 z-10 w-full h-full bg-black opacity-30"></div>

      {/* First Container */}
      <div className=" flex-1 flex justify-start items-center gap-6 z-20 text-white">
        <Image
          src={Logo}
          alt="Logo"
          className="hidden lg:block w-32 h-auto cursor-pointer"
        />
        <Image
          src={LogoBlack}
          alt="Logo"
          className="block lg:hidden w-32 h-auto cursor-pointer"
        />
        <div className="hidden lg:flex gap-4 text-xs font-bold">
          <p className="cursor-pointer">EVERYTHING</p>
          <p className="cursor-pointer">WOMEN</p>
          <p className="cursor-pointer">MEN</p>
          <p className="cursor-pointer">ACCESSORIES</p>
        </div>
      </div>
      {/* Second Container */}
      <div className=" hidden lg:flex flex-1 justify-end items-center text-xs gap-6 font-medium z-20 text-white">
        <p className="cursor-pointer">ABOUT</p>
        <p className="cursor-pointer">CONTACT US</p>
      </div>
      {/* Not hidden container */}
      <div className="flex justify-center items-center mx-6 gap-6 z-20 text-black lg:text-white text-sm font-medium">
        <p className="cursor-pointer">$1100.98</p>
        {/* Cart Icon */}
        <div className=" flex justify-center items-center  relative">
          <div className="absolute w-4 -top-2 -right-3 h-auto rounded-full bg-black text-white lg:bg-white lg:text-black text-[10px] flex justify-center items-center">
            8
          </div>
          <CartSvg className="w-4 h-auto fill-black lg:fill-white cursor-pointer" />
        </div>
      </div>

      {/* Account Icon */}
      <div className="hidden lg:flex justify-center items-center z-20">
        <AccountSvg className="w-4 h-auto fill-white cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
