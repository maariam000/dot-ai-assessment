"use client";

import ThemeButton from "@/components/button/themeButton";
import InputField from "@/components/fields/InputField";
import { IProduct } from "@/components/interface";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

const NewProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    brand: "",
    category: "",
    subCategory: "",
    price: "" as number | "",
    stock: "" as number | "",
    description: "",
    imageUrl: "",
    specKey: "",
    specValue: "",
    specifications: {} as Record<string, string>,
  });

  const {
    productName,
    brand,
    category,
    subCategory,
    price,
    stock,
    description,
    imageUrl,
    specKey,
    specValue,
    specifications,
  } = product;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct: any) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Add a new specification
  const handleAddSpecification = () => {
    const { specKey, specValue } = product;
    if (specKey && specValue) {
      setProduct((prevProduct: any) => ({
        ...prevProduct,
        specifications: {
          ...prevProduct.specifications,
          [specKey]: specValue,
        },
        specKey: "",
        specValue: "",
      }));
    }
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { specKey, specValue, ...productData } = product;
    console.log("Product to be updated:", productData);
    // Here, make an API call to submit `productData`
  };
  return (
    <div className="mx-8">
      <p className="text-secondaryColor text-[20px] font-bold">
        Create New Product
      </p>
      <div className="bg-white border-borderColor border-[1px] p-6 my-5 shadow-md rounded-md">
        <div className="flex justify-between">
          <p className="text-[17px] text-secondaryColor font-semibold">
            Create New Product
          </p>
          <Link href="/layout/category/product">
            <div className="flex gap-2 text-[15px] text-secondaryColor">
              <IoArrowBack className="my-auto" />
              <p className="font-semibold">Back to Products</p>
            </div>
          </Link>
        </div>
        <form className="my-5" onSubmit={handleSubmit}>
          <div className="flex w-full gap-5 my-1">
            <InputField
              value={productName}
              onChange={handleChange}
              name="productName"
              label="Product Name"
              placeholder="Product name"
              extraStyle="w-1/2"
            />
            <InputField
              value={brand}
              onChange={handleChange}
              label="Brand"
              name="brand"
              placeholder="Brand"
              extraStyle="w-1/2"
            />
          </div>
          <div className="flex w-full gap-5 my-4">
            <InputField
              label="Category"
              name="category"
              value={category}
              onChange={handleChange}
              placeholder="Category"
              extraStyle="w-1/2"
            />
            <InputField
              label="Sub Category"
              value={subCategory}
              name="subCategory"
              onChange={handleChange}
              placeholder="Sub Category"
              extraStyle="w-1/2"
            />
          </div>
          <div className="flex w-full gap-5 my-4">
            <InputField
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              label="Price"
              placeholder="Price"
              extraStyle="w-1/2"
            />
            <InputField
              label="Stock"
              name="stock"
              placeholder="Stock"
              value={stock}
              onChange={handleChange}
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
            id=""
            cols={4}
            rows={5}
            name="description"
            value={description}
            onChange={handleChange}
            className="mb-3 outline-none p-3 w-full rounded-lg border-[.6px]"
          ></textarea>
          <InputField
            label="Image URL"
            name="imageUrl"
            value={imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <div className="flex justify-between my-4">
            <InputField
              label="Specification"
              placeholder="Key"
              name="key"
              extraStyle="w-[46%]"
            />
            <InputField
              placeholder="Value"
              name="value"
              extraStyle="mt-6 w-[46%]"
            />
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

export default NewProduct;
