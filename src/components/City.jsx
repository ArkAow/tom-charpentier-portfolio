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

        useEffect(() => {
          const handleParallax = (e) => {
            const parallax = document.querySelector('.parallax');
            const back = document.querySelector('.parallax-back-layer');
            const front = document.querySelector('.parallax-front-layer');
            const sFront = 300;
            const sBack = 400;
            const xOffest = -800
      
            if (parallax && front && back) {
              const x = e.clientX + xOffest;
              const y = e.clientY;
      
              back.style.transform = `translate(${x / sBack}%, ${y / sBack}%)`;
              front.style.transform = `translate(${x / sFront}%, ${y / sFront}%)`;
            }
          };
      
          window.addEventListener('mousemove', handleParallax);
      
          return () => window.removeEventListener('mousemove', handleParallax);
        }, []);

    return (
        <section id="city"
         className="w-full">
            
          <div className="city-parallax-container relative">
            <img src="/parallax/city-moon.png" className="parallax-layer city-moon w-[40vw]" />

            <div className="parallax">

              <div className="parallax-back-layer">
                <img src="/parallax/city-foreground.png" className="parallax-layer city-fg" />
              </div>           

              <div className="parallax-front-layer">
                <img src="/parallax/city-left-building.png" className="parallax-layer city-bld" />
                <img src="/parallax/city-right-building.png" className="parallax-layer city-bld" />
              </div>
            </div>

            <img src="/parallax/city-ground.png" className="parallax-layer city-grd" />
            <img src="/parallax/city-background.png" className="parallax-layer city-bg" />
            
          </div>
        </section>
    );
}
