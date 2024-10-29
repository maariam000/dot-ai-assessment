"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createProduct, getAllProducts, getSingleProduct } from "./products";
import toast from "react-hot-toast";

export const useGetAllProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: getAllProducts });
};

export const useGetSingleProduct = (id: number) => {
  return useQuery({
    queryKey: ["singleDeal", id],
    queryFn: () => getSingleProduct(id),
  });
};

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast.success("Product created successfully!");
    },
    onError: () => {
      toast.error("Error creating product");
    },
  });
};
