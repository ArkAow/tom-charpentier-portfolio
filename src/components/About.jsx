import React from "react";
import { styles } from "../styles"

export default function About() {
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-4xl"> About
                <span className="relative inline-block ml-2"> Me
                    <span className="absolute left-0 w-full border-t-4 border-white-100 rounded-xl mt-1 top-full"></span>
                </span>
            </h1>
        </div>
    );
}