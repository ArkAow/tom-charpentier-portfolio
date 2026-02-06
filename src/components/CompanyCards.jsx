import LimogesCompanyCards from "./companyCards/LimogesCompanyCard";
import BiotonixCompanyCard from "./companyCards/BiotonixCompanyCard";
import CurrentCompanyCards from "./companyCards/CurrentCompanyCard";
import LookingForCompanyCards from "./companyCards/LookingForCompanyCard";
import WebProCoderCompanyCards from "./companyCards/WebProCoderCompanyCard";

export default function CompanyCards() {
  return (
    <div className="pt-10 flex flex-wrap gap-5 justify-start lg:justify-center w-full">

      <BiotonixCompanyCard />
      <LimogesCompanyCards />
      <WebProCoderCompanyCards />
      
      
      <hr className="w-1/2 border-t-4 border-accent rounded-xl"/>
      {/* <CurrentCompanyCards companyName={"WebProCoder"}/> */}
      <LookingForCompanyCards weekLenght={"10"} startingDate={"13 April 2026"} endingDate={"June 2026"}/>
    </div>
  );
}
