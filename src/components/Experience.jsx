import React from "react";
import LogoCarousel from "./LogoCaroussel";

export default function Experience() {
    return (
        <div id="experience"
          className="w-screen flex flex-col items-left justify-left mt-16 p-10">
            <h1 className="text-4xl relative font-bold">My Experience</h1>
            <p>some text</p>
            <LogoCarousel/>
            <p>compagnies i've worked for animated cards</p>
        </div>
    );
}