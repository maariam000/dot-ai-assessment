import React from "react";
import { BiTime } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
import defaultProductImage from "../../../public/assets/product-default-list.jpeg";
import Image from "next/image";
import ThemeButton from "../button/themeButton";
import { ICartItem, IProduct } from "../interface";
import { useCart } from "@/app/stateManagement/cartContext";

const Cart = ({ products, onClose }) => {
  const { cartItems, removeFromCart, addToCart, updateCartItem } = useCart();
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      updateCartItem(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <div className="bg-white h-screen p-5 overflow-scroll">
      <div className="flex justify-between">
        <p className="text-secondaryColor text-[18px] font-semibold">
          Shopping Cart
        </p>
        <TiTimes
          size={17}
          color="#6F7782"
          className="hover:cursor-pointer"
          onClick={onClose}
        />
      </div>
      <p className="my-3 text-[#6F7782]">
        You have {cartItemCount} items in your cart
      </p>
      {cartItems.map((item: ICartItem) => (
        <div className="flex justify-between border-b-[1px] py-2 items-center my-2">
          <div className="h-[50px] w-[50px] rounded-md">
            <Image
              src={defaultProductImage}
              width={20}
              height={20}
              alt="product image"
              className="w-full h-full  rounded-md"
            />
          </div>
          <div className="w-[40%]">
            <p className="text-[15x] text-secondaryColor font-semibold">
              {item.name}
            </p>
            <p className=" text-[12px] text-[#6F7782]">${item.price} each</p>
          </div>

          <div className="flex gap-1 my-auto items-center ">
            <p
              className="border-[1.5px] hover: cursor-pointer px-[.75rem] shadow rounded-md flex text-[18px]"
              onClick={() => decrementQuantity(item)}
            >
              -
            </p>
            <p className="px-2 flex text-[px]">{item.quantity}</p>
            <p
              className="border-[1.5px] hover:cursor-pointer px-[.75rem] shadow rounded-md flex text-[18px]"
              onClick={() => addToCart(item)}
            >
              +
            </p>
          </div>
          <TiTimes
            size={17}
            color="#6F7782"
            className="my-auto hover:cursor-pointer"
            onClick={() => removeFromCart(item.id)}
          />
        </div>
      ))}
      <div className="flex justify-between my-8 text-[18px] font-semibold">
        <p className="">Total:</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
      <ThemeButton
        text="Proceed to Checkout"
        extraStyle="bg-secondaryColor w-full !text-[14px] flext justify-center"
      />
    </div>
  );
};

export default Cart;
