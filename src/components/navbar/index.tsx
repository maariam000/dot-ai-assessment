import { useEffect, useState } from "react";
// import Dropdown from "../dropdown";
import { FiAlignJustify } from "react-icons/fi";
import Link from "next/link";
// import navbarimage from "assets/img/layout/Navbar.png";
import { BsArrowBarUp } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import Image from "next/image";

const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props;

  return (
    <nav className="mx-7 mt-1">
      <div className="flex items-center justify-between">
        <p className="text-[25px] capitalize ">
          <Link href="/" className="font-bold text-black capitalize">
            Test App
          </Link>
        </p>
        <div className="relative w-[25px] h-[25px]">
          <LuShoppingCart size={25} color="#0F172A" />
          <p className="bg-secondaryColor rounded-full w-4 h-4 flex items-center justify-center text-white text-[10px] font-bold absolute -top-1 -right-1">
            2
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
