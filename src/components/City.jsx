import React, { useEffect } from "react";

export default function City() {
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          
          document.querySelector('.city-2').style.transform = `translateY(${scrollPosition * -0.8}px)`;
          document.querySelector('.city-3').style.transform = `translateY(${scrollPosition * -0.8}px)`;
        };
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <section id="city"
         className="w-full">
            
          <div className="city-parallax-container relative">
            <img src="/parallax/city-ground.png" className="parallax-layer city-grd" />
            <img src="/parallax/city-foreground.png" className="parallax-layer city-fg" />
            <img src="/parallax/city-background.png" className="parallax-layer city-bg" />
            <img src="/parallax/city-moon.png" className="parallax-layer city-moon w-[40vw]" />
          </div>
        </section>
    );
}
