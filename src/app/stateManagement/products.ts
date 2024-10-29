import axios from "axios";
import { endpointUrl } from "./constant";
import { IProduct } from "@/components/interface";

export const getAllProducts = async () => {
  try {
    console.log(endpointUrl);
    const response = await axios.get(`${endpointUrl}/products`);

    return response.data.products as IProduct[];
  } catch (error) {
    throw error;
  }
};

export const getSingleProduct = async (id: number) => {
  try {
    const response = await axios.get(`${endpointUrl}/products/${id}`);

    return response.data as IProduct;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createProduct = async (data: IProduct) => {
  try {
    const response = await axios.post(`${endpointUrl}/products`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
