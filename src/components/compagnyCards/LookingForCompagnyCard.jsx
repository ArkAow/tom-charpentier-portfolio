import React from "react";

export default function LookingForCompanyCards({weekLenght, startingDate, endingDate}) {

    return (
        <>
            {/* En recherche */}
            <div className="min-w-40 w-full sm:w-1/2 group relative h-24 z-10 rounded-lg border-2 border-primary bg-tertiary
                overflow-hidden transition-grow duration-300 hover:border-[rgba(249,249,249,0.7)]">
                <div className="z-10 absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-sm font-bold">
                <p className="text-left pr-5">
                    Currently looking for a new internship opportunity
                    <br/>
                    <span className="font-medium hidden md:flex">{weekLenght} weeks - from {startingDate} to {endingDate}</span>
                </p>
                </div>
            </div >
        </>
    );
}