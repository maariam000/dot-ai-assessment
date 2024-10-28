"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import defaultProductImage from "../../../../../../public/assets/product-default-list.jpeg";
import { BiChevronRight } from "react-icons/bi";
import { useParams } from "next/navigation";
import { useGetSingleProduct } from "@/app/stateManagement/useProducts";
import LoadingPage from "@/components/utils/LoadingPage";
import ErrorPage from "@/components/utils/ErrorPage";
import ThemeButton from "@/components/button/themeButton";
import Cart from "@/components/cart";

const page = () => {
  const { id } = useParams();
  const productId = Number(id);
  const { data: product, isLoading } = useGetSingleProduct(productId);
  return (
    <div className="mx-10">
      <p className="text-secondaryColor text-[20px] font-bold">
        Product Details
      </p>
      <div className="bg-white border-borderColor border-[2px]  pt-6 my-5 shadow-md rounded-md">
        <Link href="/layout/category/product">
          <div className="flex gap-2 px-6 py-3 font-medium text-[15px] text-secondaryColor">
            <IoArrowBack className="my-auto" />
            <p className="font-semibold">Back to Products</p>
          </div>
        </Link>
        <div>
          {isLoading ? (
            <LoadingPage />
          ) : product ? (
            <div className="mt-5 w-full border-t-[1px] flex gap-6">
              <div className="w-[40%] h-auto">
                <Image
                  src={defaultProductImage}
                  width={50}
                  height={50}
                  alt="product image"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col py-6 ">
                <div className="uppercase flex text-[#6465F1] font-semibold">
                  <Link href={"/"}>Clothing</Link>
                  <BiChevronRight
                    size={20}
                    className="my-auto"
                    color="#6465F1"
                  />
                  <Link href="/">Men</Link>
                </div>
                <div>
                  <p className="text-[20px] text-secondaryColor font-semibold py-3">
                    {product.name}
                  </p>
                  <p className="py-2 text-[#6F7782] text-[15px]">
                    {product.description}
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="py-4 text-secondaryColor text-[25px] font-semibold">
                      ${product.price}
                    </p>
                    <p className="text-[#6F7782] items-end text-[12px]">
                      In stock: {product.stock}
                    </p>
                  </div>
                  <div className="">
                    <p className=" text-secondaryColor font-semibold py-3">
                      Specifications
                    </p>
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <p
                          key={key}
                          className="text-[14px] py-1 text-secondaryColor font-medium"
                        >
                          {`${key.charAt(0).toUpperCase() + key.slice(1)}:`}{" "}
                          <span className="text-[#6F7782]">
                            {String(value)}
                          </span>
                        </p>
                      )
                    )}
                  </div>
                  <div className="flex gap-5 mt-7">
                    <ThemeButton
                      extraStyle="flex justify-center bg-secondaryColor !text-[14px] text-white"
                      text="Add to Cart"
                    />
                    <Link
                      href={`/layout/category/product/${productId}/edit-product`}
                    >
                      <ThemeButton
                        extraStyle="flex justify-center bg-secondaryColor !text-[14px] text-white"
                        text="Edit Product"
                      />
                    </Link>

                    <ThemeButton
                      extraStyle="flex justify-center bg-[#EF4444] !text-[14px] text-white"
                      text="Delete Product"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <ErrorPage />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
