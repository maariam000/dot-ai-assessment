import React from "react";
import { BiTime } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
import defaultProductImage from "../../../public/assets/product-default-list.jpeg";
import Image from "next/image";
import ThemeButton from "../button/themeButton";
import { IProduct } from "../interface";

const Cart = ({ products, onClose }) => {
  return (
    <div className="bg-white h-screen p-5">
      <div className="flex justify-between">
        <p className="text-secondaryColor text-[18px] font-semibold">
          Shopping Cart
        </p>
        <TiTimes
          size={17}
          color="#6F7782"
          className="hover:cursor-pointer"
          onClick={onClose}
        />
      </div>
      <p className="my-3 text-[#6F7782]">You have 5 items in your cart</p>
      {products.map((product: IProduct) => (
        <div className="flex justify-between border-b-[1px] py-3 items-center my-2">
          <div className="h-[50px] w-[50px] rounded-md">
            <Image
              src={defaultProductImage}
              width={20}
              height={20}
              alt="product image"
              className="w-full h-full  rounded-md"
            />
          </div>
          <p className="w-[40%] text-[15x] text-secondaryColor font-semibold">
            {product.name}
          </p>
          <div className="flex gap-1 my-auto items-center ">
            <p className="border-[1.5px] px-[.75rem] shadow rounded-md flex text-[18px]">
              -
            </p>
            <p className="px-2 flex text-[px]">0</p>
            <p className="border-[1.5px] px-[.75rem] shadow rounded-md flex text-[18px]">
              +
            </p>
          </div>
          <TiTimes size={17} color="#6F7782" className="my-auto" />
        </div>
      ))}
      <div className="flex justify-between my-8 text-[18px] font-semibold">
        <p className="">Total:</p>
        <p>$1290.0</p>
      </div>
      <ThemeButton
        text="Proceed to Checkout"
        extraStyle="bg-secondaryColor w-full !text-[14px] flext justify-center"
      />
    </div>
  );
};

export default Cart;
