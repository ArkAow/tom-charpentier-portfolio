import React, { useState } from "react";
import { styles } from "../styles"

export default function NavBar() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <img src="/circular-logo.png" alt="logo" className="w-12 h-12 object-contain"/>
                    <p className="text-white text-[18px] font-bold"> Tom Charpentier </p>
                </div> 
                <div className="flex flex-1 justify-end items-center">
                    <img src={toggle ? "/close.svg" : "/menu.svg"} alt="menu"/>
                </div>
            </div>
        </nav>
    );
}