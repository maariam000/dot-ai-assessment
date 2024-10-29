"use client";
import { useGetAllProducts } from "@/app/stateManagement/useProducts";
import ThemeButton from "@/components/button/themeButton";
import InputField from "@/components/fields/InputField";
import Dropdown from "@/components/fields/dropdown";
import ErrorPage from "@/components/utils/ErrorPage";
import LoadingPage from "@/components/utils/LoadingPage";
import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { IoChevronDown } from "react-icons/io5";
import ProductList from "../productList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const page = () => {
  const { data: products, isLoading, isSuccess } = useGetAllProducts();
  
  return isLoading ? (
    <LoadingPage />
  ) : products ? (
    <div className="flex w-full h-full flex-col px-[1.5rem]">
      <div>
        <ProductList products={products} />
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
};

export default page;
