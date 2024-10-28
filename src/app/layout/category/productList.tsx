import { IProduct } from "@/components/interface";
import Image from "next/image";
import React, { useState } from "react";
import defaultProductImage from "../../../../public/assets/product-default-list.jpeg";
import { TiStarFullOutline } from "react-icons/ti";
import ThemeButton from "@/components/button/themeButton";
import { GoPlusCircle } from "react-icons/go";
import InputField from "@/components/fields/InputField";
import Dropdown from "@/components/fields/dropdown";
import Link from "next/link";
import Cart from "@/components/cart";

const ProductList = ({ products }: { products: IProduct[] }) => {
  const options = [
    { label: "Price", value: "1" },
    { label: "Date", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[18px] font-semibold ">All Products</p>
        <Link href="/layout/category/product/new-product">
          <ThemeButton
            icon={<GoPlusCircle color="white" />}
            text="Add New Product"
            extraStyle="bg-secondaryColor text-[14px]"
          />
        </Link>
      </div>
      <div className="w-full my-5 flex justify-between">
        <div className="flex w-[60%] gap-3">
          <InputField label="Search" extraStyle="w-[60%]" />
          <div className="flex gap-2 w-[25%]">
            <InputField type="number" label="Price Range" extraStyle="w-full" />
            <p className="text-sm flex items-center mt-6">to</p>
            <InputField type="number" extraStyle="w-full mt-6" />
          </div>
        </div>
        <div className="w-[40%]">
          <Dropdown label="Sort By" options={options} extraStyles="w-full" />
        </div>
      </div>
      <div className="w-[45%]">
        <Dropdown label="Order" options={options} extraStyles="w-bg-red-900" />
      </div>
      <div className="my-4 grid grid-cols-3 gap-5 rounded-lg">
        {products.map((product: IProduct) => (
          <Link href={`/layout/category/product/${product.id}`}>
            <div key={product.id} className="bg-white shadow-md rounded-md">
              <div className="w-full">
                <Image
                  src={defaultProductImage}
                  width={50}
                  height={50}
                  alt="product image"
                  className="w-full h-[35%] object-cover rounded-t-md"
                />
              </div>

              <div className="p-5 ">
                <p className="text-[18px] text-secondaryColor font-semibold">
                  {product.name}
                </p>
                <p className="py-2 text-[#6F7782] text-[15px]">
                  {product.brand}
                </p>
                <div className="flex gap-1 items-center text-[14px]">
                  <TiStarFullOutline color="#FACB15" />
                  <p className="font-semibold">{product.rating}</p>
                  <p className="text-[#6F7782]">({product.reviews} reviews)</p>
                </div>
                <p className="py-4 text-secondaryColor text-[18px] font-semibold">
                  ${product.price}
                </p>
                <ThemeButton
                  text="Add to Cart"
                  extraStyle="w-full flex justify-center bg-secondaryColor !text-[18px] text-white"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex mt-9 items-center justify-between">
        <div className="flex gap-2">
          <ThemeButton
            text="Previous"
            extraStyle="text-[14px] bg-secondaryButtonColor"
          />
          <p className="text-[14px] my-auto">Page 1</p>
          <ThemeButton
            text="Next"
            extraStyle="text-[14px] bg-secondaryButtonColor"
          />
        </div>
        {/* <div className="w-[30%]"> */}
        <Dropdown options={options} extraStyles="w-[30%]" />
        {/* </div> */}
      </div>
      <Cart products={products} />
    </div>
  );
};

export default ProductList;
