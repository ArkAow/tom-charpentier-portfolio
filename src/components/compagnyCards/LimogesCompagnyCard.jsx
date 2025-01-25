import React, { useState, useRef, useEffect } from "react";

export default function LimogesCompanyCards() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [delayedExpanded, setDelayedExpanded] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const buttonRef = useRef(null);

  const handleToggleExpand = () => {
    if (isButtonDisabled) return;
    setIsButtonDisabled(true);
    setIsExpanded((prev) => {
      const newExpandedState = !prev;
      if (newExpandedState) {
        setTimeout(() => setDelayedExpanded(true), 300);
      } else {
        setDelayedExpanded(false);
      }
      return newExpandedState;
    });
    setTimeout(() => setIsButtonDisabled(false), 300);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsExpanded(false);
      setDelayedExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* L'université du Limousin */}
      <button
        ref={buttonRef}
        className={`min-w-40 w-1/2 group relative h-24 rounded-lg border-2 border-primary bg-tertiary
          overflow-hidden transition-grow duration-300 hover:border-[rgba(249,249,249,0.7)]
          ${isExpanded ? "grow sm:h-60" : ""}`}
        onClick={handleToggleExpand}
        disabled={isButtonDisabled}>
        <img
          className="absolute left-9 sm:left-11 top-1/2 -translate-y-1/2 w-16 h-16 z-10 object-contain ease-in-out"
          src="logos/iut.svg"
          alt="logo"/>

        <img
          className={`absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 z-0 object-cover
            ${isExpanded ? "opacity-100" : ""}`}
          src="res/iut-bg.png"
          alt="background"/>

        <div
          className={`absolute opacity-0 z-10 left-36 top-1/2 transform -translate-y-1/2 text-white text-sm font-medium
            ${delayedExpanded ? "duration-500 opacity-100" : "duration-0 absolute opacity-0"}`}>
          <p className="text-justify w-full pr-5">
            During my studies, I worked on various group projects, known as SAEs
            (Situations d'Apprentissage Évaluées), which were an integral part
            of my school curriculum.
            <br />
            Among all the SAEs I participated in, the most significant was a
            development project in my third year. I am currently working on a
            course scheduling project for my IUT, where my primary
            responsibility is to create a detailed course planning desktop
            application. This project leverages web technologies such as React
            and Symfony to deliver a functional and user-friendly solution.
            <span className="hidden lg:flex">
              These experiences have allowed me to strengthen my project
              management skills, effectively communicate with clients, and
              consistently deliver solutions that met the requirements of my
              IUT across all SAEs.
            </span>
          </p>
          <a
            href="https://www.iut.unilim.fr/"
            className="text-red-950 underline inline-block">
            iut.unilim.fr
          </a>
        </div>
        <div
          className={`absolute opacity-0 z-10 left-36 top-1/2 transform -translate-y-1/2 text-white text-sm font-medium
            ${isExpanded ? "opacity-100 sm:opacity-0" : ""}`}>
          <p className="w-full justify-center items-center pr-5">
            Université de Limoges (France)
          </p>
        </div>
      </button>
    </>
  );
}
