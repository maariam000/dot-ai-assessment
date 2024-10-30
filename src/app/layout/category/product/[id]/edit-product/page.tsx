"use client";

import {
  useEditProduct,
  useGetSingleProduct,
} from "@/app/stateManagement/useProducts";
import ThemeButton from "@/components/button/themeButton";
import InputField from "@/components/fields/InputField";
import { IProduct } from "@/components/interface";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
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
    specifications: product?.specifications,
  });

  const [specKey, setSpecKey] = useState("");
  const [specVal, setSpecVal] = useState("");

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

  const { mutate: editProduct } = useEditProduct();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editProduct({
      id: productId,
      data: { ...formData, specifications },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevProduct: IProduct) => ({
      ...prevProduct,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    }));
  };

  const handleAddSpecification = () => {
    if (specKey && specVal) {
      setFormData((prev) => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [specKey]: specVal,
        },
      }));
      setSpecKey("");
      setSpecVal("");
    }
  };

  const handleRemoveSpecification = (key: string) => {
    const updatedSpecifications = { ...specifications };
    delete updatedSpecifications[key];
    setFormData((prev) => ({
      ...prev,
      specifications: updatedSpecifications,
    }));
  };

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
        <form className="my-5" onSubmit={handleSubmit}>
          <div className="flex w-full gap-5 my-1">
            <InputField
              label="Product Name"
              placeholder="Product name"
              name="name"
              onChange={handleChange}
              value={name}
              type="text"
              extraStyle="w-1/2"
            />
            <InputField
              label="Brand"
              onChange={handleChange}
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
              onChange={handleChange}
              name="category"
              value={category}
              type="text"
              extraStyle="w-1/2"
            />
            <InputField
              label="Sub Category"
              name="subCategory"
              value={subCategory}
              onChange={handleChange}
              type="text"
              placeholder="Sub Category"
              extraStyle="w-1/2"
            />
          </div>
          <div className="flex w-full gap-5 my-4">
            <InputField
              label="Price"
              name="price"
              onChange={handleChange}
              value={price}
              type="number"
              placeholder="Price"
              extraStyle="w-1/2"
            />
            <InputField
              label="Stock"
              placeholder="Stock"
              onChange={handleChange}
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
            onChange={handleChange}
            rows={5}
            className="mb-3 outline-none p-3 w-full rounded-lg border-[.6px]"
          ></textarea>
          <InputField
            label="Image URL"
            placeholder="Image URL"
            name="imageUrl"
            value={imageUrl}
            type="text"
            onChange={handleChange}
          />

          <div className="my-4">
            <p className="text-[14px] font-semibold text-secondaryColor">
              Specifications
            </p>
            <div className="flex justify-between">
              <InputField
                placeholder="Key"
                value={specKey}
                onChange={(e) => setSpecKey(e.target.value)}
                extraStyle="w-[46%]"
              />
              <InputField
                placeholder="Value"
                value={specVal}
                onChange={(e) => setSpecVal(e.target.value)}
                extraStyle="w-[46%]"
              />
              <ThemeButton
                text="Add"
                extraStyle="bg-secondaryColor w-[5%] text-center flex my-auto !text-[14px] justify-between"
                onClick={handleAddSpecification}
              />
            </div>
            {/* Render specifications */}
            <div className="mt-4">
              {Object.entries(specifications).map(([key, val]) => (
                <div key={key} className="flex justify-between my-2">
                  <InputField
                    placeholder="Key"
                    value={key}
                    onChange={(e) => {
                      const newKey = e.target.value;
                      const newVal = specifications[key];
                      handleRemoveSpecification(key);
                      setFormData((prev) => ({
                        ...prev,
                        specifications: {
                          ...prev.specifications,
                          [newKey]: newVal,
                        },
                      }));
                    }}
                    extraStyle="w-[46%]"
                  />
                  <InputField
                    placeholder="Value"
                    value={val}
                    onChange={(e) => {
                      const newVal = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        specifications: {
                          ...prev.specifications,
                          [key]: newVal,
                        },
                      }));
                    }}
                    extraStyle="w-[46%]"
                  />
                  <AiOutlineClose
                    color="red"
                    className="my-auto w-[5%] cursor-pointer"
                    onClick={() => handleRemoveSpecification(key)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between !text-[14px] mt-5">
            <ThemeButton
              onClick={handleSubmit}
              text="Edit product"
              extraStyle="bg-secondaryColor !text-[14px]"
            />
            <Link href="/layout/category/product">
              <ThemeButton
                text="Cancel"
                extraStyle="bg-none !text-[14px] !text-secondaryColor border-borderColor border-[1px]"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
