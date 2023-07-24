import React from "react";

interface Props {
  description?: string; // Assuming the description is of type "string"
}

const ProductDescription : React.FC<Props> = ({description}) => {
  return (
    <>
      <div className="w-full md:max-w-7xl md:p-24 mt-6">
        <div className="relative">
          <h1 className="text-xl">Product Information</h1>
          <div className="absolute flex items-center  -top-14 -left-2 -z-10">
            <h1 className="hidden md:block text-gray-200 md:text-9xl">Overview</h1>
          </div>
        </div>
      <div className="mt-10">
        <hr className="h-0.5 my-4 bg-gray-300 border-0 rounded md:my-4 dark:bg-gray-700" />
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <h1 className="uppercase text-slate-500 w-full md:max-w-sm">product details</h1>
          <p className="text-slate-500 mt-3 md:mt-0 text-xs md:text-base   flex-1">{description}</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProductDescription;
