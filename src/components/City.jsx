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

    return (
        <section id="projects"
         className="w-screen h-fit relative">
            
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
          </div>
        </section>
    );
}
