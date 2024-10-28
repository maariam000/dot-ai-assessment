"use client";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getSingleProduct } from "./products";

export const useGetAllProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: getAllProducts });
};

export const useGetSingleProduct = (id: number) => {
  return useQuery({
    queryKey: ["singleDeal", id],
    queryFn: () => getSingleProduct(id),
  });
};
