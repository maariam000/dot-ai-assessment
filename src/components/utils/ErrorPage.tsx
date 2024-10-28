import React from "react";
import Error from "../../../public/assets/errorImage.png";
import Image from "next/image";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="h-[400px] w-[400px]">
        <Image src={Error} alt="4040-image" />
      </div>
      <h1 className="mt-[1rem] text-[24px] font-medium text-[#7F7F7F]">
        An error occured. Please try again
      </h1>
      <Link
        href="/"
        className=" mt-[1rem] text-[18px] text-[#7F7F7F] hover:text-themeBlue"
      >
        Reload
      </Link>
    </div>
  );
};

export default ErrorPage;
