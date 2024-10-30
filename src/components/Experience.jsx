import React from "react";
import LogoCarousel from "./LogoCaroussel";

export default function Experience() {
    return (
        <div id="experience"
          className="w-screen flex flex-col items-left justify-left mt-16 p-10">
            <h1 className="text-4xl relative font-bold pb-12">My Experience</h1>
            <p className="text-justify">
                Throughout my studies, I have gained extensive experience in various programming languages and development tools. 
                My academic journey has allowed me to acquire strong foundational skills in software development, with a focus on 
                three key areas: software development, mobile application development, and web development.
                <br/><br/>
                This versatile skill set enables me to adapt to diverse project requirements and to collaborate effectively within 
                multidisciplinary teams. I am committed to continuous learning and staying updated with the latest advancements in 
                technology to provide innovative solutions and deliver high-quality work.
                <br/>
                Here are some technologies I have worked with:
            </p>
            <LogoCarousel/>
            <p>compagnies i've worked for -- animated cards</p>
        </div>
    );
}