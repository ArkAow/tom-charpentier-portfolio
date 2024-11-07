import React from "react";
import LogoCarousel from "./LogoCaroussel";
import CompagnyCards from "./CompagnyCards";

export default function Experience() {
    return (
        <div id="experience" className="relative w-screen flex flex-col items-left justify-left mt-16 p-10">

            <div className="absolute inset-0  top-[30rem] -left-24 rotate-[20deg] transform bg-[url('/res/dot.svg')] bg-repeat bg-[length:20px_20px] opacity-20 -z-10" 
                style={{ width: "150%", height: "19%" }} />

            <div className="relative">
                <h1 className="text-4xl font-bold pb-12 pl-10 md:pl-[19rem]">My Experience</h1>
                <div className="flex flex-row gap-[5%] pl-10">
                    <img
                       src="/icons/building.svg"
                       className="hidden md:flex size-1/3 max-w-[200px]"
                       alt="photo of me :)"/>
                    <p className="text-justify md:pr-20 w-full md:w-2/3">
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

                <LogoCarousel/>
                <p className="text-justify md:pr-20">
                    In the meantime, I have had the opportunities to work with several companies, where I gained valuable hands-on experience in a professional environment. 
                    Through these roles, I was able to apply my technical skills, collaborate with cross-functional teams, and gain insights into industry practices and workflows.
                    <br/><br/>
                    Here are some companies I have worked for :
                    <CompagnyCards />
                </p>
            </div>
        </div>
    );
}
