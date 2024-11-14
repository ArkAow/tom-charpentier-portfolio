import React from "react";
import { Link } from "react-router-dom";

export default function CompanyCards() {
  return (
    <div className="pt-10 flex flex-wrap gap-5 justify-start lg:justify-center w-full">

      {/* L'université du Limousin*/}
      <button className="w-1/2 group relative h-24 rounded-lg border-2 border-primary bg-tertiary
            overflow-hidden transition-grow duration-300 sm:focus:grow sm:focus:h-60 hover:border-[rgba(249,249,249,0.7)]">
        
        <img
          className="absolute left-9 sm:left-11 top-1/2 -translate-y-1/2 w-16 h-16 z-10 object-contain ease-in-out"
          src="logos/iut.svg"
          alt="logo"/>

        <img
          className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus:opacity-100 z-0 object-cover"
          src="res/iut-bg.png"
          alt="background"/>

        <div className="opacity-0 z-10 sm:group-focus:opacity-100 absolute left-36 top-1/2 transform -translate-y-1/2 text-white text-sm font-medium">
            <p className="text-justify w-full pr-5">
                During my studies, I worked on various group projects, known as SAEs (Situations d’Apprentissage et d’Évaluation), included by my school curriculum.
                <br/>
                In my third year, I completed a course scheduling project for my IUT, where my main responsibility was to create a detailed course planning system.
                <span className="hidden lg:flex">This experience allowed me to strengthen my project management skills, communicate effectively with clients, and deliver a solution that met the needs of my IUT.</span>
            </p>
            <a 
              href="https://www.iut.unilim.fr/"
              className="text-red-950 underline inline-block">
                iut.unilim.fr
            </a >
        </div>
      </button >

      {/* Biotonix */}
      <button className="min-w-40 w-1/2 group relative h-24 rounded-lg border-2 border-primary bg-tertiary
            overflow-hidden transition-grow duration-300 sm:focus:grow sm:focus:h-60 hover:border-[rgba(249,249,249,0.7)]">
        
        <img
          className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 w-32 h-32 z-10 object-contain ease-in-out"
          src="logos/biotonix.png"
          alt="logo"/>

        <img
          className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus:opacity-100 object-cover"
          src="res/biotonix-bg.png"
          alt="background"/>

        <div className="opacity-0 z-10 sm:group-focus:opacity-100 absolute left-40 top-1/2 transform -translate-y-1/2 text-black text-sm font-medium">
            <p className="text-justify w-full pr-5">
                During my second year in computer science, I had the opportunity to intern in Canada, thanks to a partnership between my IUT and the CEGEP of Trois-Rivières, near Montreal.
                <br/>
                I took this chance to work in Quebec as a Junior Full Stack Developer at Biotonix, a company specializing in health technology, where I contributed to their BTX app.
                <br/>
                <span className="hidden lg:flex">In this role, I developed new features and debugged the application using tools like Angular and .NET.<br/>Working in a foreign country improved my adaptability and cross-cultural communication skills, making this an valuable professional and personnal experience.</span>
            </p>
            <a 
              href="https://biotonix.com/"
              className="text-blue-600 underline inline-block">
                biotonix.com
              </a >
        </div>
      </button >

      <hr className="w-1/2 border-t-4 border-accent rounded-xl"/>
      
      {/* En recherche */}
      <div className=" min-w-40 w-1/2 group relative h-24 z-10 rounded-lg border-2 border-primary bg-tertiary
            overflow-hidden transition-grow duration-300 hover:border-[rgba(249,249,249,0.7)]">
        
        <div className="z-10 absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-sm font-bold">
          <p className="text-left pr-5">
              Currently looking for a new internship opportunity
              <br/>
              <span className="font-medium hidden md:flex">16 weeks - from February 24 to June 14, 2025</span>
          </p>
        </div>
      </div >
    </div>
  );
}
