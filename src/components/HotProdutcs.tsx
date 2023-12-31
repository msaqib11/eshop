"use client";
import Products from "@/components/Products";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { client } from "@/lib/sanityClient";
import { IProduct } from "@/lib/type";
const getProductList = async () => {
  const res = client.fetch(`*[_type=="product"]{
    _id,
    name,
    images,
    price,
    subCategory->{
      name
    },
    slug,
    images[0]
  }`);
  return res;
};

const HotProdutcs = async () => {
  const data: IProduct[] = await getProductList();
  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center items-center gap-4  w-full mx-auto">
        <div className="uppercase text-sm font-extrabold tracking-wide text-blue-600">
          products
        </div>
        <h1 className="scroll-m-20 text-3xl font-extrabold">
          Check What We Have
        </h1>
      </div>
      <div className="flex items-center justify-evenly mt-16 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
              // spaceBetween: 50,
            },
          }}
        >
          {data.map((product) => (
            <SwiperSlide
            key={product._id}
            >
              <Products
                _id={product._id}
                name={product.name}
                price={product.price}
                subCategory={product.subCategory}
                images={product.images}
                slug={product.slug}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/*  */}
      </div>
    </div>
  );
};

export default HotProdutcs;
