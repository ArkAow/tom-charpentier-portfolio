import React from "react";
import { logos } from "../constants";

export default function LogoCarousel() {
  return (
    <div className="overflow-hidden relative w-full py-10">
      <div
        className="slide-track flex w-[calc(150px*40)] animate-scroll group-hover:animate-none whitespace-nowrap"
        style={{ animationDuration: "60s" }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center w-64 h-16">
            <img
              src={logo.url}
              alt={logo.name}
              className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition duration-300 hover:scale-110 hover:animate-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
