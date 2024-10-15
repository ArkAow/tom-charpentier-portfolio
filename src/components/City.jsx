import React, { useEffect } from "react";

export default function City() {
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          
          document.querySelector('.city-2').style.transform = `translateY(${scrollPosition * -0.2}px)`;
          document.querySelector('.city-3').style.transform = `translateY(${scrollPosition * -0.2}px)`;
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <section id="city"
         className="w-full">
            
          <div class="city-parallax-container relative">
            <img src="/parallax/city-1.png" className="parallax-layer city-1" />
            <img src="/parallax/city-2.png" className="parallax-layer city-2" />
            <img src="/parallax/city-3.png" className="parallax-layer city-3 w-[40vw]" />
          </div>
        </section>
    );
}
