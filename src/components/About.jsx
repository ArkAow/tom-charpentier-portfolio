import React, { useEffect, useState } from "react";

export default function About() {  
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 500);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-4xl"> About
                <span className="relative inline-block ml-2"> Me
                    <span className={`h-1 border-t-4 border-white-100 rounded-xl mt-1 top-full transition-all duration-500 ${animate ? 'w-0 absolute right-0' : 'w-full absolute left-0'}`}></span>
                </span>
            </h1>
        </div>
    );
}