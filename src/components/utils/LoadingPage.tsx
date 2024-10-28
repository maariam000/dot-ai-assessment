import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-primaryColor"></div>
    </div>
  );
};

export default LoadingPage;
