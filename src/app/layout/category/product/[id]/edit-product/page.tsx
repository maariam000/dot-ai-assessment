"use client";

import { useGetSingleProduct } from "@/app/stateManagement/useProducts";
import ThemeButton from "@/components/button/themeButton";
import InputField from "@/components/fields/InputField";
import { IProduct } from "@/components/interface";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

const EditProduct = () => {
  const { id } = useParams();
  const productId = Number(id);
  const { data: product } = useGetSingleProduct(productId);

  const [formData, setFormData] = useState<IProduct>({
    name: product?.name,
    brand: product?.brand,
    category: product?.category,
    subCategory: product?.subCategory,
    price: Number(product?.price),
    stock: Number(product?.stock),
    description: product?.description,
    imageUrl: product?.imageUrl,
    specifications: {
      specKey: "",
      specValue: "",
    },
  });

  const {
    name,
    brand,
    category,
    subCategory,
    price,
    stock,
    description,
    imageUrl,
    specifications,
  } = formData;
  return (
    <div className="mx-8">
      <p className="text-secondaryColor text-[20px] font-bold">Edit Product</p>
      <div className="bg-white border-borderColor border-[1px] p-6 my-5 shadow-md rounded-md">
        <div className="flex justify-between">
          <p className="text-[17px] text-secondaryColor font-semibold">
            Edit Product
          </p>
          <Link href="/layout/category/product">
            <div className="flex gap-2 text-[15px] text-secondaryColor">
              <IoArrowBack className="my-auto" />
              <p className="font-semibold">Back to Products</p>
            </div>
          </Link>
        </div>
        <form className="my-5">
          <div className="flex w-full gap-5 my-1">
            <InputField
              label="Product Name"
              placeholder="Product name"
              name="name"
              value={name}
              type="text"
              extraStyle="w-1/2"
            />
            <InputField
              label="Brand"
              placeholder="Brand"
              name="brand"
              value={brand}
              type="text"
              extraStyle="w-1/2"
            />
          </div>
          <div className="flex w-full gap-5 my-4">
            <InputField
              label="Category"
              placeholder="Category"
              name="category"
              value={category}
              type="text"
              extraStyle="w-1/2"
            />
            <InputField
              label="Sub Category"
              name="subCategory"
              value={subCategory}
              type="text"
              placeholder="Sub Category"
              extraStyle="w-1/2"
            />
          </div>
          <div className="flex w-full gap-5 my-4">
            <InputField
              label="Price"
              name="price"
              value={price}
              type="number"
              placeholder="Price"
              extraStyle="w-1/2"
            />
            <InputField
              label="Stock"
              placeholder="Stock"
              name="stock"
              value={stock}
              type="number"
              extraStyle="w-1/2"
            />
          </div>
          <label
            htmlFor="description"
            className="my-4 text-secondaryColor text-[14px] block font-semibold"
          >
            Ads Description
          </label>
          <textarea
            name="description"
            id=""
            cols={4}
            value={description}
            rows={5}
            className="mb-3 outline-none p-3 w-full rounded-lg border-[.6px]"
          ></textarea>
          <InputField
            label="Image URL"
            placeholder="Image URL"
            name="imageUrl"
            value={imageUrl}
            type="text"
          />
          <div className="flex justify-between my-4">
            <InputField
              label="Specification"
              // name=""
              value={name}
              type="text"
              placeholder="Key"
              extraStyle="w-[46%]"
            />
            <InputField placeholder="Value" extraStyle="mt-6 w-[46%]" />
            <ThemeButton
              text="Add"
              extraStyle="bg-secondaryColor flex my-auto mt-6 !text-[14px] items-end justify-between"
            />
          </div>
          <div className="flex justify-between !text-[14px] mt-5">
            <ThemeButton
              text="Create product"
              extraStyle="bg-secondaryColor !text-[14px]"
            />
            <Link href="/layout/category/product">
              <ThemeButton
                text="Cancel"
                extraStyle="bg-none !text-[14px] !text-secondaryColor border-borderColor  border-[1px]"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
