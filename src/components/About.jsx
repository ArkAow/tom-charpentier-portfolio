import React, { useEffect, useState } from "react";

export default function About() {  
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="about"
          className="relative w-full flex flex-col items-center pt-24 px-10">

            <div className="absolute inset-0  top-3 -left-24 -rotate-[6deg] transform bg-[url('res/dot.svg')] bg-repeat bg-[length:20px_20px] opacity-40 -z-10" 
                style={{ width: "150%", height: "60%" }} />

            <h1 className="font-bold text-4xl relative"> About
                <span className="relative inline-block ml-2"> Me
                    <span className={`h-1 border-t-4 border-white-100 rounded-xl mt-1 top-full transition-all duration-500 ${animate ? 'w-0 absolute right-0' : 'w-full absolute left-0'}`}></span>
                </span>
            </h1>

            <div className="flex flox-row w-screen lg:pr-0 px-[28%] text-justify">
                <div className="mt-8 flex flex-col w-full md:w-3/4 items-left relative">
                    <div className="relative z-10">
                        <p className="mb-2">
                            Hi, I am Tom Charpentier.<br />
                            I am a third year computer science student at <em>Poitiers University</em>.
                        </p>
                        <p className="mb-2">
                        I'm passionate about computer science and love exploring new technologies. In my free time, I enjoy playing the piano and guitar, 
                        which fuels my creativity. I also like cooking and experimenting with new recipes and flavors in the kitchen. 
                        I really enjoy listening to music and watching movies.
                        <br /><br />
                        Like many CS students, I spend a good amount of time gaming. I especially enjoy games that let your imagination run wild, 
                        but I also appreciate a good challenge from time to time. In general, I'm a patient person and love learning new things. 
                        I consider myself to be quite creative and resourceful.
                        </p>
                    </div>
                    <img 
                        src="icons/computer.svg"
                        className={`stroke-slate-300 w-16 absolute -right-20 top-20 transition-all duration-[1000ms] z-0 rotate-12 hover:-rotate-[360deg]`}/>
                    <img 
                        src="icons/keyboard.svg"
                        className={`stroke-slate-300 w-16 absolute -right-20 top-40 transition-all duration-[1000ms] z-0 rotate-12 hover:-rotate-12`}/>

                    <div className="relative z-10">
                        <p className="mb-2 relative">
                        My diverse interests and passion for creativity drive me to stay curious and adaptable, 
                        and I'm always excited to take on new challenges, both in tech and beyond.
                        </p>
                    </div>

                    <img 
                        src="icons/gaming.svg"
                        className={`stroke-slate-300 w-16 absolute -rotate-12 -left-20 transition-all duration-[500ms] z-10 hover:-bottom-16 ${animate ? '-bottom-16' : '-bottom-20'}`}/>
                    <img 
                        src="icons/piano.svg"
                        className={`stroke-slate-300 w-16 absolute -rotate-6 -left-40 transition-all duration-[1000ms] z-10 hover:-bottom-16 ${animate ? '-bottom-16' : '-bottom-24'}`}/>
                    <img 
                        src="icons/cooking.svg"
                        className={`stroke-slate-300 w-16 absolute rotate-6 -left-60 transition-all duration-[1000ms] z-10 hover:-bottom-16 ${animate ? '-bottom-16' : '-bottom-24'}`}/>
                    <img 
                        src="icons/pen.svg"
                        className={`stroke-slate-300 w-16 absolute rotate-12 -left-80 transition-all duration-[500ms] z-10 hover:-bottom-16 hover:-rotate-[360deg] ${animate ? '-bottom-16' : '-bottom-20'}`}/>   
                </div> 
            </div>
            
        </div>
    );
}