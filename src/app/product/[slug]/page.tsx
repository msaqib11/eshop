"use client";
import { client } from "@/lib/sanityClient";
import { IProductDetail } from "@/lib/type";
import Image from "next/image";
import p1 from "/public/images/p1.png";
import { Button } from "@/components/ui/button";
import { Link, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import ProductDescription from "@/components/ProductDescription";
const category = async (param: string) => {
  const res =
    await client.fetch(`*[_type == "product" && slug.current == "${param}"]{
    name,
    images,
    price,
    slug,
    description,
    subCategory->{
      name
    },
    images
  }`);
  return res;
};

export default function Page({ params }: { params: { slug: string } }) {
  const sizes: string[] = ["XS", "S", "ML", "L", "XL"];
  const [firstImage, setFirstImage] = useState<IImage | null>(null);
  const [product, setProduct] = useState<IProductDetail | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  // Inside the "Page" component
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleClick = (image: IImage) => {
    setFirstImage(image);
  };

  const handleQuanity = (operator: string) => {
    if (operator == "+") {
      setQuantity(quantity + 1);
    } else if (operator == "-" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };
  const fetchProduct = async (param: string) => {
    const getProduct: IProductDetail[] = await category(param);
    setFirstImage(getProduct[0].images[0]);
    setProduct(getProduct[0]);
  };

  const getTotalPrice = () => {
    if (product) {
      return product.price * quantity;
    }
    return 0;
  };

  useEffect(() => {
    if (params?.slug) {
      fetchProduct(params.slug);
    }
  }, [params?.slug]);
  return (
    <>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
        {/* right section */}
        <div className="flex flex-col  md:flex-row gap-3">
          <div className="flex flex-row md:flex-col gap-3 order-2 md:order-1 md:w-24 md:h-24 w-16 h-16">
              {product?.images?.map((image, index) => (
                <Image
                  src={urlForImage(image).url()}
                  alt="product"
                  width={100}
                  height={100}
                  onClick={() => handleClick(image)}
                  key={index}
                />
              ))}
            
            {/* <Image src={p1} alt="product" />
          <Image src={p1} alt="product" />
          <Image src={p1} alt="product" /> */}
          </div>
          <div className="order-1 md:order-2">
            {firstImage && (
              <Image
                src={urlForImage(firstImage).url()}
                width={400}
                height={400}
                alt="product"
                className="md:w-[490px] w-[350px]"
              />
            )}
          </div>
        </div>
        {/* left section */}
        <div className="flex flex-col justify-center md:ml-5 mt-5 md:mt-0">
          <h1 className="text-2xl md:text-3xl whitespace-nowrap">
            {product?.name}
          </h1>
          <p className="text-xl text-slate-400">{product?.subCategory.name}</p>
          <div className="mt-5">
            <h3>Select Size</h3>
          </div>
          <ul className="flex gap-x-4 mt-8">
            {sizes.map((size, index) => (
              <li
                className={`flex items-center justify-center  w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 hover:cursor-pointer
                ${selectedSize === size ? "border-2 border-black" : ""}`}
                onClick={() => handleSizeSelection(size)}
                key={index}
              >
                {size}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-x-4">
            <button
              className="w-8 h-8 bg-slate-50 border border-black rounded-full"
              onClick={() => handleQuanity("-")}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="w-8 h-8 bg-slate-50 border border-black rounded-full"
              onClick={() => handleQuanity("+")}
            >
             
              +
            </button>
          </div>
          <div className="flex flex-col md:flex-row mt-8 gap-3">
            <Button className="order-2 md:order-1">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add To Cart
            </Button>
            <p className="text-2xl order-1 md:order-2 ">
              $ {getTotalPrice().toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <ProductDescription description={product?.description} />
    </>
  );
}
