import CartCount from "@/components/CartCount";
import CartItems from "@/components/CartItems";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanityClient";
import { BaggageClaim } from "lucide-react";
import { cookies } from "next/headers";


//fetching each product details from sanity
async function fetchProductDetails(productId:string) {
  const productDocument = await client.fetch(`*[_type == "product" && _id == "${productId}"]{
    _id,
    name,
    images,
    price,
    subCategory->{
      name
    },
    images[0]
  }`);
  return productDocument[0];
}


const getCartItems = async () => {
  try {
    const uid = cookies().get("user_id")?.value || cookies().get("uid")?.value;
    if (!uid) {
      return [];
    } 
    const res = await fetch(`http://localhost:3000/api/cart?user_id=${uid}`);
    const data = await res.json();
    
    return data;
  } catch (error) {
    // If the user ID does not exist, return an empty array.
    return [];
  }
};




const page = async () => {
 const getData = await getCartItems(); 
  // Fetch the product details for each product in the cart.
  const productDetails = await Promise.all(
    getData.map(async (item:any) => await fetchProductDetails(item.product_id))
  );

  const subTotal = productDetails.reduce((acc,product,index)=>{
    const item = getData[index];
    return acc + item.quantity * product.price;
  },0)
 
//  const tax = () => {
//   const Total = subTotal;
//   const tax = (Total * 2)/100;
//   return tax; 
//  }
  if (getData.length === 0) {
    return (
      <div className="flex flex-col justify-center py-20 lg:px-20 items-center">
        <BaggageClaim className="h-48 w-48" />
        <p className="text-2xl font-bold mt-2 ">Your Shopping Cart is Empty</p>
      </div>
    );
  }
  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl text-left md:text-5xl font-bold mb-5 text-gray-900  mt-16">
          Shopping Cart
        </h1>
        <hr className="mt-16" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col md:col-span-2">
          
          {/* {getData.map((item) => (
            <div key={item.id}>
              <CartItems />
              <hr className="mt-4" />
            </div>
          ))} */}

          {productDetails.map((product,index)=>{
            const item = getData[index]; 
            return(
            <div key={product._id}>
              <CartItems item = {item} product={product} />
              <hr className="mt-4" />
            </div>
            )
          })}


        </div>
        <div className="bg-gray-50 rounded-lg md:ml-10 my-3 md:my-0 md:col-span-1 max-h-80 pb-8">
          <div className="px-4 py-6 sm:px-6">
            <p>Order summary</p>
          </div>
          <div className="flex justify-between px-4">
            <div>
            <p className="my-2 text-sm">quantity:</p>  
            <p className="my-2 text-sm">Subtotal:</p>
          </div>
            <div>
            <p className="my-2 text-sm"> <CartCount/></p>
            <p className="my-2 text-sm"> $ {`${(subTotal.toFixed(2))}`}</p>
            </div>
            
          </div>
         <div className="p-4" >
            <Button className="w-full">Checkout</Button>
         </div>
         
        </div>
      </div>
    </>
  );
};

export default page;