import { Image as IImage } from "sanity";


export interface IProductDetail {
    name: string;
    price: number;
    description : string
    subCategory: { name: string };
    slug: { current: string; _type: string };
    images: IImage[];
}

export interface IProduct {
    name: string;
    price: number;
    subCategory: { name: string };
    slug: { current: string; _type: string };
    images: IImage;
  }