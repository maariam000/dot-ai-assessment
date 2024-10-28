import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingPage = () => {
  return (
    <div className="grid grid-cols-3 h-screen gap-4 my-4">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="p-4">
            <Skeleton height={200} className="rounded-md" />
            <Skeleton height={20} width="80%" className="mt-2" />
            <Skeleton height={20} width="60%" className="mt-2" />
          </div>
        ))}
    </div>
  );
};

export default LoadingPage;
