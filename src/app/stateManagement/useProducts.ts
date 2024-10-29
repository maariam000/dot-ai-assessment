"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getSingleProduct,
} from "./products";
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

export const useEditProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
      toast.success("Product edited successfully!");
    },
    onError: () => {
      toast.error("Error editing product");
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product deleted successfully!");
    },
    onError: () => {
      toast.error("Error deleting product");
    },
  });
};
