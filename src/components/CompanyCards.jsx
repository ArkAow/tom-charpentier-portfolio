import React from "react";
import LimogesCompanyCards from "./companyCards/LimogesCompanyCard";
import BiotonixCompanyCard from "./companyCards/BiotonixCompanyCard";
import CurrentCompanyCards from "./companyCards/CurrentCompanyCard";

export default function CompanyCards() {
  return (
    <div className="pt-10 flex flex-wrap gap-5 justify-start lg:justify-center w-full">

      <LimogesCompanyCards />
      <BiotonixCompanyCard />

      <hr className="w-1/2 border-t-4 border-accent rounded-xl"/>
      
      <CurrentCompanyCards companyName={"WebProCoder"}/>
    </div>
  );
}
