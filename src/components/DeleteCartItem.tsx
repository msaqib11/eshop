'use client'
import { Trash2 } from 'lucide-react'
import React from 'react'
import { toast } from 'react-toastify'
import {useRouter} from "next/navigation"


interface Props {
    product_id : string,
    user_id : string 
}


const DeleteCartItem = ({product_id,user_id}:Props) => {
const router = useRouter()
    const handleSubmit = async (product_id:string,user_id:string) => {
      const baseUrl = process.env.BASE_URL
        const res = await fetch(`${baseUrl}/api/cart?user_id=${user_id}&product_id=${product_id}`, {
            method: "DELETE",
          })
          const result = await res.json()
          toast.warning(`Product Deleted !`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          router.refresh()
    }
      
  return (
    <>
    <Trash2 color="red" className="cursor-pointer" onClick={()=>handleSubmit(product_id,user_id)} />
    </>
  )
}

export default DeleteCartItem