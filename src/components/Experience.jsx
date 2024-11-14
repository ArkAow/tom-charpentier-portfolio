import React from "react";
import LogoCarousel from "./LogoCaroussel";
import CompagnyCards from "./CompagnyCards";

export default function Experience() {
    return (
        <div id="experience" className="relative w-screen flex flex-col items-left justify-left mt-16 p-10">
            <div className="absolute inset-0 top-[30rem] -left-44 rotate-[20deg] transform bg-[url('res/dot.svg')] bg-repeat bg-[length:20px_20px] opacity-40 -z-10" 
                style={{ width: "150%", height: "19%" }} />
            <div className="relative">
                {/* Section avant LogoCarousel */}
                <div className="flex flex-row gap-[5%] lg:px-[20%] md:pl-10 items-start">
                    <img
                       src="icons/building.svg"
                       className="absolute opacity-30 md:relative md:opacity-100 max-w-[200px] pt-[5vh] top-14"
                       alt="image of a building"/>
                    <div>
                        <h1 className="text-4xl font-bold pb-12">My Experience</h1>
                        <p className="text-justify w-full">
                            Throughout my studies, I have gained extensive experience in various programming languages and development tools. 
                            My academic journey has allowed me to acquire strong foundational skills in software development, with a focus on 
                            three key areas: software development, mobile application development, and web development.
                            <br/><br/>
                            This versatile skill set enables me to adapt to diverse project requirements and to collaborate effectively within 
                            multidisciplinary teams. I am committed to continuous learning and staying updated with the latest advancements in 
                            technology to provide innovative solutions and deliver high-quality work.
                            <br/><br/>
                            Here are some technologies I have worked with :
                        </p>
                    </div>  
                </div>
                
                <LogoCarousel />

                {/* Section après LogoCarousel */}
                <div className="lg:px-[20%]">
                    <p className="relative text-justify">
                        In the meantime, I have had the opportunities to work with several companies, where I gained valuable hands-on experience in a professional environment. 
                        Through these roles, I was able to apply my technical skills, collaborate with cross-functional teams, and gain insights into industry practices and workflows.
                        <br/><br/>
                    </p>
                    <div className="hidden md:inline">
                        Here are some companies I have worked for :
                    </div>
                </div>
                    <CompagnyCards />
            </div>
        </div>
    );
}
