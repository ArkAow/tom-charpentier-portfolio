import React, { useEffect } from "react";

export default function City() {
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        
        document.querySelector('.city-moon').style.transform = `translateY(${scrollPosition * -0.3}px)`;
        document.querySelector('.city-bg-1').style.transform = `translateY(${scrollPosition * -0.3}px)`;
        document.querySelector('.city-bg-2').style.transform = `translateY(${scrollPosition * -0.2}px)`;
        document.querySelector('.city-bg-3').style.transform = `translateY(${scrollPosition * -0.1}px)`;
      };
      window.addEventListener('scroll', handleScroll);     
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToAbout = () => {
      const section = document.querySelector("#about");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
        <section id="projects"
         className="w-screen h-fit relative hidden sm:block">
            
          <div className="city-parallax-container relative">
            <img src="parallax/city-moon.png" className="parallax-layer city-moon" />

            <div className="parallax">

              <div className="parallax-bg-layer">
                <img src="parallax/city-background-12.png" className="parallax-layer city-bg-1" />
                <img src="parallax/city-background-22.png" className="parallax-layer city-bg-2" />
                <img src="parallax/city-background-32.png" className="parallax-layer city-bg-3" />
                <img src="parallax/city-ground.png" className="parallax-layer city-grd translate-y-5" />                
              </div>
            </div>

            <button onClick={scrollToAbout}
              className=" absolute top-10 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center 
              text-white ring-2 ring-white bg-transparent transition-all duration-300 ease-out 
              hover:scale-110 hover:ring-4 hover:ring-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] animate-[pulse_2.5s_ease-in-out_infinite]">
              <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
        </section>
    );
}
