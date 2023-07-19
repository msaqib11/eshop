"use client";
import Image from "next/image";
import Wrapper from "./Wrapper";
import { useState } from "react";
import Menu from "./Menu";
import { ShoppingCart, X, Menu as MenuIcon } from "lucide-react";

import Logo from "/public/images/Logo.svg";
import Link from "next/link";

const Header = () => {
  const [show, setShow] = useState<string>("translate-y-0");
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  return (
    <div
      className={`w-full h-16 bg-white flex items-center justify-between sticky top-0 transition-transform duration-200 z-20 ${show}`}
    >
      <Wrapper className="h-12 flex justify-between items-center">
        <Link href="/">
       
      <Image src={Logo} className="w-36 cursor-pointer" alt=""/>
       
        </Link>
        <Menu />
        <div className="flex items-center text-black gap-3">
          {/* shopping cart icon starts here */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center cursor-pointer relative bg-slate-100 hover:bg-slate-200">
            <ShoppingCart className="text-sm md:text-xl" />
            <div className="cartCount">
              0  
            </div>
          </div>
          {/* shopping cart icon ends here */}
          <div className="md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center cursor-pointer relative bg-slate-100 hover:bg-slate-200 -mr-2">
            {mobileMenu ? (
              <X className="text-[16px]" onClick={() => setMobileMenu(false)} />
            ) : (
              <MenuIcon
                className="text-[16px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
