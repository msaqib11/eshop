import Hero from '@/components/Hero'
import HotProdutcs from '@/components/HotProdutcs'
import NewsLetter from '@/components/NewsLetter'
import Promotion from '@/components/Promotion'
import QuickLinks from '@/components/QuickLinks'
import { client } from '@/lib/sanityClient'
import Image from 'next/image'


const getAlldata = async () => {
  const res = await client.fetch(`*[__type==product]`);
  return res
}

export default async function Home() {
  const data = await getAlldata()
  return (
    <>
      <Hero/>
      <Promotion/>
      <HotProdutcs/>
      <NewsLetter/>
      <QuickLinks/>
    </>
  )
}
