import { RiAdvertisementLine } from "react-icons/ri";
import { MdHome } from "react-icons/md";
import {
  AiOutlineUsergroupDelete,
  AiOutlineTransaction,
  AiOutlineAccountBook,
} from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IRoute } from "../interface";

const routes: IRoute[] = [
  {
    name: "All",
    layout: "/layout",
    path: "all",
  },
  {
    name: "Electronics",
    layout: "/layout",
    path: "electronics",
    subRoutes: [
      {
        name: "Smartphones",
        layout: "/layout",
        path: "#",
      },
      { name: "Laptops", layout: "/layout", path: "electronics/laptops" },
      {
        name: "Accessories",
        layout: "/layout",
        path: "#",
      },
    ],
  },
  {
    name: "Clothing",
    layout: "/layout",
    path: "#",
    subRoutes: [
      { name: "Men", layout: "/layout", path: "#" },
      { name: "Women", layout: "/layout", path: "#" },
      { name: "Kids", layout: "/layout", path: "#" },
    ],
  },
  {
    name: "Home & Garden",
    layout: "/layout",
    path: "#",
    subRoutes: [
      { name: "Furniture", layout: "/layout", path: "#" },
      { name: "Decor", layout: "/layout", path: "#" },
      { name: "Kitchen", layout: "/layout", path: "#" },
    ],
  },
  {
    name: "Category",
    layout: "/layout",
    path: "#",
    subRoutes: [
      {
        name: "Sub Category",
        layout: "/layout",
        path: "category/product",
      },
    ],
  },
];

export default routes;
