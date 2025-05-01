import React from "react";
import LimogesCompanyCards from "./compagnyCards/LimogesCompagnyCard";
import BiotonixCompanyCard from "./compagnyCards/BiotonixCompagnyCard";
import CurrentCompanyCards from "./compagnyCards/CurrentCompagnyCard";

export default function CompanyCards() {
  return (
    <div className="pt-10 flex flex-wrap gap-5 justify-start lg:justify-center w-full">

      <LimogesCompanyCards />
      <BiotonixCompanyCard />

      <hr className="w-1/2 border-t-4 border-accent rounded-xl"/>
      
      <CurrentCompanyCards compagnyName={"WebProCoder"}/>
    </div>
  );
}
