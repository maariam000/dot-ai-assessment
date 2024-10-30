"use client";

import { useCreateProduct } from "@/app/stateManagement/useProducts";
import ThemeButton from "@/components/button/themeButton";
import InputField from "@/components/fields/InputField";
import { IProduct } from "@/components/interface";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";

const NewProduct = () => {
  const [formData, setFormData] = useState<IProduct>({
    name: "",
    brand: "",
    category: "",
    subCategory: "",
    price: Number(0),
    stock: Number(0),
    description: "",
    imageUrl: "",
  });

  const [specifications, setSpecifications] = useState<{
    [key: string]: string | number | boolean;
  }>({});
  const [specKey, setSpecKey] = useState("");
  const [specVal, setSpecVal] = useState("");

  const handleAddSpecification = () => {
    if (specKey && specVal) {
      setSpecifications((prevSpecs) => ({
        ...prevSpecs,
        [specKey]: specVal,
      }));
      setSpecKey("");
      setSpecVal("");
    }
  };

  const handleRemoveSpecification = (key: string) => {
    // Remove the specification by key
    const updatedSpecs = { ...specifications };
    delete updatedSpecs[key];
    setSpecifications(updatedSpecs);
  };

  const { mutate: createProduct } = useCreateProduct();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevProduct: IProduct) => ({
      ...prevProduct,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createProduct({ ...formData, specifications });
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
        <form className="my-5">
          <div className="flex w-full gap-5 my-1">
            <InputField
              value={formData.name}
              onChange={handleChange}
              name="name"
              label="Product Name"
              placeholder="Product Name"
              extraStyle="w-1/2"
            />
            <InputField
              value={formData.brand}
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
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              extraStyle="w-1/2"
            />
            <InputField
              label="Sub Category"
              value={formData.subCategory}
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
              value={formData.price}
              onChange={handleChange}
              label="Price"
              placeholder="Price"
              extraStyle="w-1/2"
            />
            <InputField
              label="Stock"
              type="number"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
              extraStyle="w-1/2"
            />
          </div>
          <label
            htmlFor="description"
            className="my-4 text-secondaryColor text-[14px] block font-semibold"
          >
            Description
          </label>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="mb-3 outline-none p-3 w-full rounded-lg border-[.6px]"
            rows={5}
          />
          <InputField
            label="Image URL"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
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
          </div>

          {/* Render specifications */}
          {Object.entries(specifications).map(([key, val]) => (
            <div key={key} className="flex justify-between my-2">
              <InputField
                placeholder="Key"
                value={key}
                onChange={(e) => {
                  const newKey = e.target.value;
                  const newVal = specifications[key]; 
                  handleRemoveSpecification(key);
                  setSpecifications((prevSpecs) => ({
                    ...prevSpecs,
                    [newKey]: newVal,
                  }));
                }}
                extraStyle="w-[46%]"
              />
              <InputField
                placeholder="Value"
                value={val}
                onChange={(e) => {
                  const newVal = e.target.value; 
                  setSpecifications((prevSpecs) => ({
                    ...prevSpecs,
                    [key]: newVal,
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

          <div className="flex justify-between !text-[14px] mt-5">
            <ThemeButton
              text="Create product"
              extraStyle="bg-secondaryColor !text-[14px]"
              onClick={handleSubmit}
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

export default NewProduct;
