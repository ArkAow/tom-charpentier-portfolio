import React, { useEffect, useState } from "react";

export default function Hero() {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      document.querySelector('.stars-1').style.transform = `translateY(${scrollPosition * -2}px)`;
      document.querySelector('.stars-2').style.transform = `translateY(${scrollPosition * -1}px)`;
      document.querySelector('.stars-3').style.transform = `translateY(${scrollPosition * -0.5}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="w-full pt-16 relative">
      {showMessage && (
        <div className="flex sm:hidden w-fit justify-center items-center bg-red-800 text-red-200 p-4 rounded-lg relative mx-6 mt-4">
          <button 
            onClick={() => setShowMessage(false)}
            className="absolute top-2 left-2 text-red-200 font-bold">
            ✖
          </button>
          <p className="text-center px-10">
            This website is meant to be fully experienced on a computer screen!
          </p>
        </div>)}
      
      <div className="star-parallax-container relative overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center font-bold mt-16 p-6">
          <h1 className="text-4xl">Tom Charpentier</h1>
          <p className="text-lg text-secondary">Third year student in Computer Science</p>
        </div>

        <img src="/parallax/stars-1.gif" className="parallax-layer stars-1 w-full" />
        <img src="/parallax/stars-2.png" className="parallax-layer stars-2 w-full" />
        <img src="/parallax/stars-3.gif" className="parallax-layer stars-3 w-full" />
      </div>
    </section>
  );
}
