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
  const [sortBy, setSortBy] = useState<string>("");
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

  const pageOption = [
    { label: "2 per page", value: 2 },
    { label: "10 per page", value: 10 },
    { label: "20  per page", value: 20 },
    { label: "30 per page", value: 30 },
    { label: "40 per page", value: 40 },
    { label: "50 per page", value: 50 },
  ];

  const orderOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(2);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="flex flex-col">
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
        <div className="w-[30%]">
          <Dropdown
            label="Sort By"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            options={filterOptions}
            extraStyles="w-full"
          />
        </div>
      </div>
      <div className="w-[36%]">
        <Dropdown
          label="Order"
          value={order}
          onChange={setOrder}
          options={orderOptions}
          extraStyles="w-full"
        />
      </div>
      <div className="my-6 grid grid-cols-3 gap-5 rounded-lg">
        {currentProducts.map((product: IProduct) => (
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
      <div className="flex mt-9 justify-between">
        <div className="flex gap-2">
          <ThemeButton
            text="Previous"
            extraStyle="text-[14px] text-center bg-secondaryButtonColor"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          />
          <p className="text-[14px] my-auto">Page {currentPage}</p>
          <ThemeButton
            text="Next"
            extraStyle="text-[14px] bg-secondaryButtonColor"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          />
        </div>
        <div className="w-[20%]">
          <Dropdown
            options={pageOption}
            onChange={(value) => setItemsPerPage(Number(value))} // Update items per page
            value={String(itemsPerPage)}
            extraStyles="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
