import React from "react";
import { logos } from "../constants";

export default function LogoCarousel() {
  return (
    <div className="overflow-hidden relative w-full py-10">
      <div
        className="slide-track flex w-[calc(150px*40)] animate-scroll whitespace-nowrap"
        style={{ animationDuration: "30s" }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="group relative flex items-center justify-center w-64 h-16">
            <span className=" font-bold absolute -top-6 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {logo.name}
            </span>
            <img
              src={logo.url}
              alt={logo.name}
              className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}