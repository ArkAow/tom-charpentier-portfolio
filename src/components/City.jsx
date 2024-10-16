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
        const sFront = 1000;
        const sBack = 2500;
        const xOffest = -2;

        if (parallax && front && back) {
          const x = e.clientX;

          back.style.transform = `translateX(${(x / sBack) + xOffest}%)`;
          front.style.transform = `translateX(${(x / sFront) + xOffest}%)`;
        }
      };
      window.addEventListener('mousemove', handleParallax);
      return () => window.removeEventListener('mousemove', handleParallax);
    }, []);

    return (
        <section id="city"
         className="w-[100%] h-fit relative">
            
          <div className="city-parallax-container w-screen relative">
            <img src="/parallax/city-moon.png" className="parallax-layer city-moon" />

            <div className="parallax">

              <div className="parallax-bg-layer">
                <img src="/parallax/city-background.png" className="parallax-layer city-bg" />
                <img src="/parallax/city-ground.png" className="parallax-layer city-grd" />                
              </div>

              <div className="parallax-back-layer">
                <img src="/parallax/city-foreground.png" className="parallax-layer city-fg" />
              </div>           

              <div className="parallax-front-layer">
                <img src="/parallax/city-left-building.png" className="parallax-layer city-buildings" />
                <img src="/parallax/city-right-building.png" className="parallax-layer city-buildings" />
              </div>
            </div>           
          </div>
        </section>
    );
}
