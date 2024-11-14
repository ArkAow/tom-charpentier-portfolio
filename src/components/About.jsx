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
        <div id="about"
          className="relative w-full flex flex-col items-center mt-16 px-10">

            <div className="absolute inset-0  top-3 -left-24 -rotate-[6deg] transform bg-[url('res/dot.svg')] bg-repeat bg-[length:20px_20px] opacity-40 -z-10" 
                style={{ width: "150%", height: "60%" }} />

            <h1 className="font-bold text-4xl relative"> About
                <span className="relative inline-block ml-2"> Me
                    <span className={`h-1 border-t-4 border-white-100 rounded-xl mt-1 top-full transition-all duration-500 ${animate ? 'w-0 absolute right-0' : 'w-full absolute left-0'}`}></span>
                </span>
            </h1>

            <div className="flex flox-row w-screen pr-[15%] lg:pr-0 px-[20%]  text-justify">
                <div className="mt-8 flex flex-col w-full md:w-3/4 items-left relative">
                    <div className="relative z-10">
                        <p className="mb-2">
                            Hi, I am Tom Charpentier.
                            I am a third year computer science student at the <em>IUT du Limousin</em>.
                        </p>
                        <p className="mb-2">
                        I'm passionate about my studies in computer science and love exploring new technologies. In my free time, I enjoy playing the piano, which fuels my creativity. I'm also an avid cook who loves experimenting with new recipes and flavors in the kitchen—though always in an amateur way 😅. I also enjoy listening to music, which is a constant source of inspiration.
                        <br/><br/>
                        Like many CS students, I spend a good amount of time gaming. I especially enjoy games that let your imagination run wild, but I also appreciate a good challenge from time to time. In general, I'm a patient person and love learning new things, which makes me adaptable and versatile. I consider myself to be quite creative and resourceful.
                        </p>                        
                    </div>
                    <img 
                        src="icons/computer.svg"
                        className={`stroke-slate-300 w-16 absolute right-20 top-20 transition-all duration-[1000ms] z-0 ${animate ? '-rotate-6' : 'rotate-6'}`}/>
                    <img 
                        src="icons/keyboard.svg"
                        className={`stroke-slate-300 w-16 absolute right-20 top-40 transition-all duration-[1000ms] z-0 ${animate ? 'rotate-6' : '-rotate-6'}`}/>

                    <div className="relative z-10">
                        <p className="mb-2 relative">
                        My diverse interests and passion for creativity drive me to stay curious and adaptable, and I'm always excited to take on new challenges, both in tech and beyond.
                        </p>
                    </div>

                    <img 
                        src="icons/gaming.svg"
                        className={`stroke-slate-300 w-16 absolute -rotate-12 transition-all duration-[500ms] z-0 ${animate ? 'bottom-10' : 'bottom-16'}`}/>
                    <img 
                        src="icons/piano.svg"
                        className={`stroke-slate-300 w-16 absolute -rotate-6 left-20 transition-all duration-[1000ms] z-0 ${animate ? 'bottom-10' : 'bottom-20'}`}/>
                    <img 
                        src="icons/cooking.svg"
                        className={`stroke-slate-300 w-16 absolute rotate-6 left-40 transition-all duration-[1000ms] z-0 ${animate ? 'bottom-10' : 'bottom-20'}`}/>
                    <img 
                        src="icons/pen.svg"
                        className={`stroke-slate-300 w-16 absolute rotate-12 left-60 transition-all duration-[500ms] z-0 ${animate ? 'bottom-10' : 'bottom-16'}`}/>   
                </div> 
                <div className="items-end justify-end relative ml-[5%]">
                    <img 
                        src="res/about-photo.png" 
                        className="absolute top-5 left-10 hidden lg:flex w-[15vw] max-w-[200px] transition-transform duration-300 hover:scale-125 z-10"
                        alt="photo of me :)"/>
                    <img 
                        src="res/about-photo-back-image.png" 
                        className="hidden lg:flex w-[40vw] max-w-[300px]"/>
                </div>
            </div>
            
        </div>
    );
}