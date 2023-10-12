"use client";
import { MenuIcon, X } from 'lucide-react';
import React, { useState } from 'react'

const MobileMenu = () => {
    const [show, setShow] = useState<string>("translate-y-0");
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  return (
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
  )
}

export default MobileMenu