"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import "../assets/css/not-found.css";
import "../assets/css/main.css";
const notFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="md:h-screen h-[80vh] grid gap-4 place-content-center bg-gradient-to-t from-blueShade to-white">
      <h1 className="font-bold text-transparent bg-gradient-to-tr from-blueDark to-blueDark bg-clip-text px-3 uppercase leading-none text-center md:text-8xl text-6xl block">
        404
      </h1>
      <h5 className="font-normal px-3 leading-none text-center block pt-2 md:pb-6 pb-2">
        The page you have requested doesn't exist.
      </h5>
      <div className="flex justify-center">
        <Link href="/" className="flex gap-1 group relative outline-none">
          <div
            className={` group-focus:!bg-opacity-80 z-10 h-full  whitespace-nowrap transition-all duration-700 ease-in-out 
        2xl:text-lg lg:text-base text-sm px-5 lg:px-8 lg:py-4 py-3  bg-blueLight stroke-white border-1 border-blue group-hover:bg-blue !font-semibold rounded-full group-hover:border-transparent font-semibold tracking-wide leading-snug`}
          >
            <span className={`sg-translate`}>Go To Homepage</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default notFound;
