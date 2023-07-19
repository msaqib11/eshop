// 'use client'
import { client } from "@/lib/sanityClient"
import Link from "next/link";
// import { usePathname } from 'next/navigation';
import { useRouter } from "next/router";
export interface ICategory {
  name: string;
  _id : string
}

const getCatList = async () => {
  const res = await client.fetch(`*[_type=="category"] {
    name,
    _id
  }`)
  return res
}

const Menu = async () => {
    const catList : ICategory[]  = await getCatList()  
  return (
    <ul className="hidden md:flex items-center gap-12 font-light text-sm text-black cursor-pointer">
       {catList.map((cat)=> (
        <li className="" key={cat._id}><Link href={`/category/${cat.name}`}>{cat.name}
        </Link>
        </li>
       ) )} 
        <li>All products</li>
    </ul>
  )
} 

export default Menu