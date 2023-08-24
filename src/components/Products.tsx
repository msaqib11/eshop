import Image, { StaticImageData } from "next/image"
import { urlForImage } from "../../sanity/lib/image";
import p1 from "/public/images/p1.png"
import Link from "next/link";
import { IProduct } from "@/lib/type";

const Products: React.FC<IProduct> = ({ _id, price, name, subCategory, images, slug }) => {
  return (
    <Link
     key={_id}
      href={`/product/${slug.current}`}
      className="flex flex-col cursor-pointer overflow-hidden rounded-sm">
      <Image src={urlForImage(images).url()} width={400} height={400} className={`object-cover object-top h-full w-full max-h-[350px] transition-transform duration-300 hover:scale-95 hover:scale-xy-90`} alt="product" />
      <div className="bg-slate-50 p-2">
        <h1 className="text-lg">{name}</h1>
        <p className="text-slate-400 font-bold">{subCategory.name}</p>
        <span className="text-slate-600 font-bold">${price}.00</span>
      </div>
    </Link>
  )
}

export default Products