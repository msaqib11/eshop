import { Image as IImage } from "sanity";


export interface IProductDetail {
    _id :number
    name: string;
    price: number;
    description : string
    subCategory: { name: string };
    slug: { current: string; _type: string };
    images: IImage[];
}

export interface IProduct {
    _id :string
    name: string;
    price: number;
    subCategory: { name: string };
    slug: { current: string; _type: string };
    images: IImage;
  }