"use client";

import { useCreateProduct } from "@/app/stateManagement/useProducts";
import ThemeButton from "@/components/button/themeButton";
import InputField from "@/components/fields/InputField";
import { IProduct } from "@/components/interface";
import Link from "next/link";
import React, { useState } from "react";
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
    specifications: {
      specKey: "",
      specValue: "",
    },
  });

  const {
    mutate: createProduct,
    isLoading,
    isError,
    error,
  } = useCreateProduct();

  // const addSpecification = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   e.preventDefault();
  //   if (formData.specKey && formData.specValue) {
  //     setFormData((prevProduct) => ({
  //       ...prevProduct,
  //       specifications: {
  //         ...prevProduct.specifications,
  //         [formData.specKey]: formData.specValue,
  //       },
  //       specKey: "",
  //       specValue: "",
  //     }));
  //   }
  // };

  // const removeSpecification = (key: string) => {
  //   setFormData((prevProduct) => {
  //     const newSpecifications = { ...prevProduct.specifications };
  //     delete newSpecifications[key];
  //     return {
  //       ...prevProduct,
  //       specifications: newSpecifications,
  //     };
  //   });
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevProduct: IProduct) => ({
      ...prevProduct,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    }));
  };

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

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    console.log(formData);
    console.log(typeof formData.price);
    e.preventDefault();
    // const { specKey, specValue, ...productData } = formData;
    createProduct(formData);
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
              value={name}
              onChange={handleChange}
              name="name"
              label="Product Name"
              placeholder="Product Name"
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
              type="number"
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
            Description
          </label>
          <textarea
            id=""
            cols={4}
            rows={5}
            name="description"
            placeholder="Description"
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
              label="Specification Key"
              placeholder="Key"
              name="specKey"
              value="Hell"
              onChange={handleChange}
              extraStyle="w-[46%]"
            />
            <InputField
              label="Specification Value"
              placeholder="Value"
              name="specValue"
              // value={specifications?.specValue}
              onChange={handleChange}
              extraStyle="w-[46%]"
            />
            <ThemeButton
              text="Add"
              extraStyle="bg-secondaryColor flex my-auto mt-[1.75rem] !text-[14px] items-end justify-between"
            />
          </div>

          {/* {Object.entries(formData.specifications).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center my-4">
              <InputField
                label="Specification Key"
                placeholder="Key"
                value={specKey}
                onChange={(e) => {
                  const newKey = e.target.value;
                  const newSpecifications = {
                    ...formData.specifications,
                    [newKey]: formData.specifications[key],
                  };
                  delete newSpecifications[key];
                  setFormData((prevProduct) => ({
                    ...prevProduct,
                    specifications: newSpecifications,
                  }));
                }}
                extraStyle="w-[46%]"
              />
              <InputField
                label="Specification Value"
                placeholder="Value"
                value="Hello"
                onChange={(e) => {
                  const newSpecifications = {
                    ...formData.specifications,
                    [key]: e.target.value,
                  };
                  setFormData((prevProduct) => ({
                    ...prevProduct,
                    specifications: newSpecifications,
                  }));
                }}
                extraStyle="w-[46%]"
              />
              <button
                type="button"
                onClick={() => removeSpecification(key)}
                className="text-red-500 font-bold ml-2"
              >
                Delete
              </button>
            </div>
          ))} */}
          <div className="flex justify-between !text-[14px] mt-5">
            <ThemeButton
              text="Create product"
              extraStyle="bg-secondaryColor !text-[14px]"
              onClick={handleSubmit}
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
