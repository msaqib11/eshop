import Products from "@/components/Products";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
export interface IProduct {
  name: string;
  price: number;
  subCategory: { name: string };
  images: IImage;
}

const category = async (param: string) => {
  const res =
    await client.fetch(`*[_type == "product" && category->name == "${param}"]{
    name,
    images,
    price,
    subCategory->{
      name
    },
    images[0]
  }`);
  return res;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const getCategory: IProduct[] = await category(params.slug);
  return (
    <div>
      <div>
        <h1 className="text-center text-6xl md:mb-8 mt-4 uppercase">{params.slug}</h1>
      </div>
      {getCategory.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {getCategory.map((product) => (
            <Products
              name={product.name}
              price={product.price}
              subCategory={product.subCategory}
              images={product.images}
            />
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-center text-2xl md:text-4xl mt-4 whitespace-nowrap">No products available</h1>
        </div>
      )}
    </div>
  );
  
}