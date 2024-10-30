import { ChangeEvent, MouseEventHandler, ReactNode } from "react";

export interface IRoute {
  name: string;
  layout: string;
  path: string;
  subRoutes?: IRouteItem[];
}

export interface IRouteItem {
  name: string;
  layout: string;
  path: string;
}

export interface IRouteSection {
  title: string;
  items: IRoute[];
}

export interface ISidebarLinksProps {
  routes: IRouteSection[];
}

export interface IButtonProps {
  text: string;
  extraStyle?: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export interface InputFieldProps {
  label?: string;
  id?: string;
  extraStyle?: string;
  type?: string;
  placeholder?: string;
  state?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  name?: string;
}

interface IOption {
  label: string | number;
  value: string | number;
}

export interface IDropdownProps {
  label?: string | number;
  options: IOption[];
  id?: string;
  extraStyles?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export interface IProduct {
  id?: number;
  brand: string | undefined;
  category: string | undefined;
  subCategory: string | undefined;
  price: number;
  name: string | undefined;
  stock: number;
  description: string | undefined;
  imageUrl: string | undefined;
  rating?: number;
  reviews?: number;
  specifications?: any;
}

export interface CartContextType {
  cartCount: number;
  addToCart: () => void;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface IFilterSortParams {
  searchTerm: string;
  minPrice: number | "";
  maxPrice: number | "";
  sortBy: string;
  order: string | "";
}
