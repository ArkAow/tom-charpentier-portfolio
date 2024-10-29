import React, { useState, useEffect } from "react";
import { styles } from "../styles"
import { redirectLinks } from "../constants";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleClickScroll = () => {
            const element = document.getElementById(active);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth'});
            }
          };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const YScroll = window.scrollY;

            if (YScroll > 70) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-500 ease-in-out ${scrolled ? "bg-primary" : "bg-transparent"}`}>
            <div className="flex items-center justify-start flex-1">
                <Link to='/'
                    className='flex items-center gap-2'
                    onClick={() => {setActive(""); window.scrollTo(0, 0);}}>
                    <img src="/logos/circular-logo.png" 
                        alt="logo" 
                        className="w-12 h-12 object-contain"/>
                    <p className="lg:flex hidden text-white text-[18px] font-bold">
                        Welcome <span className="font-normal ml-1">to my portfolio</span>
                    </p>
                </Link>              
            </div> 

            <ul className='list-none hidden sm:flex flex-row gap-10 px-12 justify-center'>
                {navLinks.map((nav) => (
                    <li key={nav.id}
                     className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                     onClick={() => {setActive(nav.title); handleClickScroll}}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className="flex justify-end items-center flex-1">
                <img src={toggle ? "/icons/close.svg" : "/icons/menu.svg"} 
                    alt="menu" 
                    className="w-[28px] h-[28px] object-container cursor-pointer" 
                    onClick={() => setToggle(!toggle)}/>
                    
                <div className={`${!toggle ? "hidden" : "flex"} p-6 absolute top-20 right-0 mx-4  min-w-[20%] z-10 bg-black bg-opacity-80 rounded-xl`}>

                    <ul className="list-none flex flex-col gap-10">
                        <div className='sm:hidden flex flex-col gap-10'>
                            {navLinks.map((nav) => (
                                <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                    active === nav.title ? "text-white" : "text-secondary"
                                }`}
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive(nav.title);
                                    handleClickScroll;}}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}

                        <hr className="w-1/2"/>
                        </div>

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