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

    useEffect(() => {
      const handleParallax = (e) => {
        const parallax = document.querySelector('.parallax');
        const back1 = document.querySelector('.parallax-back-1-layer');
        const back2 = document.querySelector('.parallax-back-2-layer');
        const front = document.querySelector('.parallax-front-layer');
        const sFront = 1000;
        const sBack1 = 3000;
        const sBack2 = 2000;
        const xOffest = -1.5;

        if (parallax && front && back1 && back2) {
          const x = e.clientX;
          back1.style.transform = `translate(${(x / sBack1) + xOffest}%)`;
          back2.style.transform = `translate(${(x / sBack2) + xOffest}%)`;
          front.style.transform = `translate(${(x / sFront) + xOffest}%)`;
        }
      };
      window.addEventListener('mousemove', handleParallax);
      return () => window.removeEventListener('mousemove', handleParallax);
    }, []);

    return (
        <section id="projects"
         className="w-screen h-fit relative">
            
          <div className="city-parallax-container relative">
            <img src="/parallax/city-moon.png" className="parallax-layer city-moon" />

            <div className="parallax">

              <div className="parallax-bg-layer">
                <img src="/parallax/city-background-1.png" className="parallax-layer city-bg-1" />
                <img src="/parallax/city-background-2.png" className="parallax-layer city-bg-2" />
                <img src="/parallax/city-background-3.png" className="parallax-layer city-bg-3" />
                <img src="/parallax/city-ground.png" className="parallax-layer city-grd" />                
              </div>

              <div className="parallax-back-1-layer">
                <img src="/parallax/city-foreground-1.png" className="parallax-layer city-fg" />
              </div>

              <div className="parallax-back-2-layer">
                <img src="/parallax/city-foreground-2.png" className="parallax-layer city-fg" />
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
