import React from "react";
import { Link } from "react-router-dom";

const LayoutAuthentication = (props) => {
  const { children, heading } = props;
  return (
    <div className="bg-lite w-full min-h-screen p-6 lg:p-10 relative isolate">
      <img
        src="/ellipse.png"
        alt="bg"
        className="absolute bottom-0 left-0 right-0 z-[-1]"
      />
      <Link className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="logo" />
      </Link>
      <div className="bg-white w-full max-w-[556px] px-5 py-8 lg:px-[60px] lg:py-[50px] rounded-lg mx-auto ">
        <h1 className="font-semibold text-lg lg:text-xl text-center text-text1 mb-1 lg:mb-3">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default LayoutAuthentication;
