import React from "react";
import LimogesCompanyCards from "./compagnyCards/LimogesCompagnyCard";
import BiotonixCompanyCard from "./compagnyCards/BiotonixCompagnyCard";

export default function CompanyCards() {
  return (
    <div className="pt-10 flex flex-wrap gap-5 justify-start lg:justify-center w-full">

      <LimogesCompanyCards />
      <BiotonixCompanyCard />

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
