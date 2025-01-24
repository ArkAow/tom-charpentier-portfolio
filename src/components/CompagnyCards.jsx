import React from "react";
import LimogesCompanyCards from "./compagnyCards/LimogesCompagnyCards";

export default function CompanyCards() {
  return (
    <div className="pt-10 flex flex-wrap gap-5 justify-start lg:justify-center w-full">

      <LimogesCompanyCards />

      {/* Biotonix */}
      <button className="min-w-40 w-1/2 group relative h-24 rounded-lg border-2 border-primary bg-tertiary
            overflow-hidden transition-grow duration-300 focus:grow sm:focus:h-60 hover:border-[rgba(249,249,249,0.7)]">
        
        <img
          className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 w-32 h-32 z-10 object-contain ease-in-out"
          src="logos/biotonix.png"
          alt="logo"/>

        <img
          className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus:opacity-100 object-cover"
          src="res/biotonix-bg.png"
          alt="background"/>

        <div className="absolute opacity-0 z-10 sm:group-focus:opacity-100 left-40 top-1/2 transform -translate-y-1/2 text-black text-sm font-medium">
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
        <div className="absolute opacity-0 z-10 group-focus:opacity-100 sm:group-focus:opacity-0 left-36 top-1/2 transform -translate-y-1/2 text-blue-600 text-sm font-medium">
            <p className="w-full justify-center items-center pr-5">
                Biotonix (Canada)
            </p>
        </div>
      </button >

      <hr className="w-1/2 border-t-4 border-accent rounded-xl"/>
      
      {/* En recherche */}
      <div className="min-w-40 w-full sm:w-1/2 group relative h-24 z-10 rounded-lg border-2 border-primary bg-tertiary
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
