import React, { useState } from "react";
import { styles } from "../styles"
import { redirectLinks } from "../constants";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`${styles.paddingX} w-screen flex items-center py-5 top-0 z-20`}>
            <div className="flex items-center gap-2">
            <Link to='/'
                className='flex items-center gap-2'
                onClick={() => {setActive(""); window.scrollTo(0, 0);}}>
                <img src="/circular-logo.png" 
                    alt="logo" 
                    className="w-12 h-12 object-contain"/>
                <p className="text-white text-[18px] font-bold"> Tom Charpentier </p>     
            </Link>              
            </div> 

            <div className="flex flex-1 justify-end items-center">
                <img src={toggle ? "/close.svg" : "/menu.svg"} 
                    alt="menu" 
                    className="w-[28px] w-[28px] object-container cursor-pointer" 
                    onClick={() => setToggle(!toggle)}/>
                    
                <div className={`${!toggle ? "hidden" : "flex"} p-6 absolute top-20 right-0 mx-4 min-w-[140px] min-w-[20%] z-10 bg-black bg-opacity-50 rounded-xl`}>
                    <ul className="list-none hidden sm:flex flex-col gap-10">
                        {navLinks.map((nav) => (
                            <li
                            key={nav.id}
                            className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                active === nav.title ? "text-white" : "text-secondary"
                            }`}
                            onClick={() => {
                                setToggle(!toggle);
                                setActive(nav.title);
                            }}
                            >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}

                        <hr className="w-1/2"/>

                        {redirectLinks.map((link) => (
                            <li key={link.id}
                             className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer flex items-center gap-2">
                                <img src={`${link.image_path}`}
                                 alt="logo" 
                                 className="w-6 h-6 object-contain"/>
                                <a href={`${link.link}`}
                                 target="_blank">{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}