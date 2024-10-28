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
  label: string;
  value: string | number;
}

export interface IDropdownProps {
  label?: string;
  options: IOption[];
  id?: string;
  extraStyles?: string;
  onChange?: (value: string | number) => void;
}

interface Specifications {
  processor: string;
  screenSize: string;
  weight: string;
  battery: string;
}

export interface IProduct {
  id: number;
  brand: string;
  category: string;
  subCategory: string;
  price: string;
  name: string;
  stock: number;
  description: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  specifications: Specifications;
}
