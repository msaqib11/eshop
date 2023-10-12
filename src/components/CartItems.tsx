import Image from "next/image"
import item1 from "/public/images/event3.webp"
import { Check, Trash2, X } from "lucide-react"
import Quantity from "@/components/Quantity"
import { Image as IImage } from "sanity"
import React from "react"
import { urlForImage } from "../../sanity/lib/image";
interface ICartItem {
    id: string
    product_id: string
    quantity: number
}

interface IProduct {
    _id: string
    name: string
    price: number
    subCategory: {
        name: string;
    };
    images: IImage;
}

const CartItems: React.FC<{ item: ICartItem, product: IProduct }> = ({ item, product }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-4">
            <Image src={urlForImage(product.images).url()} width={120} height={120} className="border border-slate-100 p-2 rounded-lg  " alt="cart_image" />
            <div className="flex flex-col  gap-2 relative mt-2 md:mr-auto">
                <p className="text-xl">{product.name}</p>
                <p className="text-sm text-slate-500">{product.subCategory.name} | XL</p>
                <span className="text-sm text-slate-900 md:absolute md:bottom-3">$ {(product.price * item.quantity).toFixed(2)}</span>
                {/* <div className="flex md:absolute md:bottom-3 items-center gap-2">
                        <span className=""><Check color="green" className="w-4 h-4" /></span>
                        <p>In stock</p>
                    </div> */}
            </div>
            <div className="flex md:mr-auto">
                <Quantity qty={item.quantity} />
            </div>
            <div className="flex items-center">
                <Trash2 color="red" className="cursor-pointer" />
            </div>
        </div>
    )
}

export default CartItems