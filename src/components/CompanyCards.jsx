import LimogesCompanyCards from "./companyCards/LimogesCompanyCard";
import BiotonixCompanyCard from "./companyCards/BiotonixCompanyCard";
import CurrentCompanyCards from "./companyCards/CurrentCompanyCard";
import WebProCoderCompanyCards from "./companyCards/WebProCoderCompanyCard";

export default function CompanyCards() {
  return (
    <div className="pt-10 flex flex-wrap gap-5 justify-start lg:justify-center w-full">

      <LimogesCompanyCards />
      <BiotonixCompanyCard />
      <WebProCoderCompanyCards />
      
      {/*
      <hr className="w-1/2 border-t-4 border-accent rounded-xl"/>
      <CurrentCompanyCards companyName={"WebProCoder"}/>
      */}
    </div>
  );
}
