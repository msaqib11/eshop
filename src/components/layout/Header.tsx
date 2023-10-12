import Image from "next/image";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import { ShoppingCart} from "lucide-react";

import Logo from "/public/images/Logo.svg";
import Link from "next/link";
import CartCount from "../CartCount";
import MobileMenu from "../MobileMenu";

const Header = () => {
 
  return (
    <div
      className={`w-full h-16 bg-white flex items-center justify-between sticky top-0 transition-transform duration-200 z-20`}
    >
      <Wrapper className="h-12 flex justify-between items-center">
        <Link href="/">
       
      <Image src={Logo} className="w-36 cursor-pointer" alt=""/>
       
        </Link>
        <Menu />
        <div className="flex items-center text-black gap-3">
          {/* shopping cart icon starts here */}
         <Link href={'/cart'}>
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center cursor-pointer relative bg-slate-100 hover:bg-slate-200">
            <ShoppingCart className="text-sm md:text-xl" />
            <div className="cartCount">
             <CartCount/>
            </div>
          </div>
         </Link>
          {/* shopping cart icon ends here */}
          <MobileMenu/>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
