import { IProduct } from "@/components/interface";
import Image from "next/image";
import React, { useState } from "react";
import defaultProductImage from "../../../../public/assets/product-default-list.jpeg";
import { TiStarFullOutline } from "react-icons/ti";
import ThemeButton from "@/components/button/themeButton";
import { GoPlusCircle } from "react-icons/go";
import InputField from "@/components/fields/InputField";
import Dropdown from "@/components/fields/dropdown";
import Link from "next/link";
import Cart from "@/components/cart";
import { useCart } from "@/app/stateManagement/cartContext";
import { filterAndSortProducts } from "@/components/utils/global";

const ProductList = ({ products }: { products: IProduct[] }) => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [sortBy, setSortBy] = useState<string>("price");
  const [order, setOrder] = useState<string>("ascending");

  const filteredProducts = filterAndSortProducts(products, {
    searchTerm,
    minPrice,
    maxPrice,
    sortBy,
    order,
  });

  const filterOptions = [
    { label: "Price", value: "price" },
    { label: "stock", value: "stock" },
  ];

  const orderOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[18px] font-semibold ">All Products</p>
        <Link href="/layout/category/product/new-product">
          <ThemeButton
            icon={<GoPlusCircle color="white" />}
            text="Add New Product"
            extraStyle="bg-secondaryColor text-[14px]"
          />
        </Link>
      </div>
      <div className="w-full my-5 flex justify-between">
        <div className="flex w-[60%] gap-3">
          <InputField
            label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            extraStyle="w-[60%]"
          />
          <div className="flex gap-2 w-[25%]">
            <InputField
              type="number"
              label="Price Range"
              onChange={(e) => setMinPrice(Number(e.target.value) || "")}
              extraStyle="w-full"
            />
            <p className="text-sm flex items-center mt-6">to</p>
            <InputField
              type="number"
              onChange={(e) => setMaxPrice(Number(e.target.value) || "")}
              extraStyle="w-full mt-6"
            />
          </div>
        </div>
        <div className="w-[40%]">
          <Dropdown
            label="Sort By"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            options={filterOptions}
            extraStyles="w-full"
          />
        </div>
      </div>
      <div className="w-[45%]">
        <Dropdown
          label="Order"
          value={order}
          onChange={setOrder}
          options={orderOptions}
          extraStyles="w-bg-red-900"
        />
      </div>
      <div className="my-4 grid grid-cols-3 gap-5 rounded-lg">
        {filteredProducts.map((product: IProduct) => (
          <div
            key={product.id}
            className="bg-white shadow-md w-full h-auto rounded-md"
          >
            <div className="w-full h-[250px]">
              <Image
                src={defaultProductImage}
                width={50}
                height={50}
                alt="product image"
                className="w-full h-full object-cover rounded-t-md"
              />
            </div>

            <div className="p-5 ">
              <Link href={`/layout/category/product/${product.id}`}>
                <p className="text-[18px] text-secondaryColor font-semibold">
                  {product.name}
                </p>
              </Link>

              <p className="py-2 text-[#6F7782] text-[15px]">{product.brand}</p>
              <div className="flex gap-1 items-center text-[14px]">
                <TiStarFullOutline color="#FACB15" />
                <p className="font-semibold">{product.rating}</p>
                <p className="text-[#6F7782]">({product.reviews} reviews)</p>
              </div>
              <p className="py-4 text-secondaryColor text-[18px] font-semibold">
                ${product.price}
              </p>
              <ThemeButton
                onClick={() => addToCart(product)}
                text="Add to Cart"
                extraStyle="w-full flex justify-center bg-secondaryColor !text-[18px] text-white"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-9 items-center justify-between">
        <div className="flex gap-2">
          <ThemeButton
            text="Previous"
            extraStyle="text-[14px] bg-secondaryButtonColor"
          />
          <p className="text-[14px] my-auto">Page 1</p>
          <ThemeButton
            text="Next"
            extraStyle="text-[14px] bg-secondaryButtonColor"
          />
        </div>
        {/* <div className="w-[30%]"> */}
        <Dropdown options={filterOptions} extraStyles="w-[30%]" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductList;
