import React from "react";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import BannerImage from "public/images/header.webp";
import featuredImg1 from "public/images/Featured1.webp";
import featuredImg2 from "public/images/Featured2.webp";
import featuredImg3 from "public/images/Featured3.webp";
import featuredImg4 from "public/images/Featured4.webp";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 mt-6 md:mt-12">
      {/* left section */}
      <div className="flex flex-col justify-center items-start gap-10">
        <Badge className="bg-blue-100 text-blue-800 px-6 h-10 rounded-lg text-sm ">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20  text-5xl md:text-6xl font-extrabold  ">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button>
          <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
        </Button>
        <div className="flex items-center gap-6 mt-4">
          <Image src={featuredImg1} alt="" />
          <Image src={featuredImg2} alt="" />
          <Image src={featuredImg3} alt="" />
          <Image src={featuredImg4} alt="" />
        </div>
      </div>
      {/* Right section */}
      <div className="hidden lg:block relative">
        <Image src={BannerImage} alt="bannerImage" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-orange-100 w-[500px] h-[500px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
