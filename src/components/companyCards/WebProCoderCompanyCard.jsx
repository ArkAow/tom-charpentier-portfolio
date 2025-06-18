import React, { useState, useRef, useEffect } from "react";

export default function WebProCoderCompanyCards() {
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
      {/* WebProcoder */}
      <button
        ref={buttonRef}
        className={`min-w-40 w-1/2 group relative h-24 rounded-lg border-2 border-primary bg-tertiary
          overflow-hidden transition-grow duration-300 hover:border-[rgba(249,249,249,0.7)]
          ${isExpanded ? "grow sm:h-60" : ""}`}
        onClick={handleToggleExpand}
        disabled={isButtonDisabled}>
        <img
          className="absolute left-9 sm:left-11 top-1/2 -translate-y-1/2 w-16 h-16 z-10 object-contain ease-in-out"
          src="logos/WebProCoder-logo.png"
          alt="logo"/>

        <img
          className={`absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 z-0 object-cover
            ${isExpanded ? "opacity-100" : ""}`}
          src="res/biotonix-bg.png"
          alt="background"/>

        <div
          className={`absolute opacity-0 z-10 left-36 top-1/2 transform -translate-y-1/2 text-[#043b5a] text-sm font-medium mx-5
            ${delayedExpanded ? "duration-500 sm:opacity-100" : "duration-0 absolute opacity-0"}`}>
            <p className="text-justify w-[85%]">
              During my third year of computer science studies at IUT of Limoges, I completed a 16-week internship at <strong>WebProCoder</strong>, 
              a freelance web development company specialized in WordPress and Shopify.  
              <br />
              My main mission involved the full migration of a large e-commerce website to Shopify, including the automation of product imports, 
              metadata generation, and SEO optimization using tools like Python and the GraphQL API. I also participated in multiple smaller projects 
              such as debugging, plugin development, and UI redesigns using technologies like WordPress, WooCommerce, Elementor, and Figma.  
              <span className="hidden lg:flex">
                This experience allowed me to deepen my technical skills in web development, scripting, and client-oriented project management. 
                It also sparked my interest in freelance work and confirmed my passion for building efficient and user-focused web solutions.
              </span>
            </p>
          <a
            href="https://webprocoder.com/"
            className="text-[#c1cd25] underline inline-block">
            webprocoder.com
          </a>
        </div>
        <div
          className={`absolute opacity-0 z-10 left-36 top-1/2 transform -translate-y-1/2 text-[#043b5a] text-sm font-medium
            ${delayedExpanded ? "duration-500 opacity-100 sm:opacity-0" : "duration-0"}`}>
          <p className="w-full justify-center items-center pr-5">
            WebProCoder (France)
          </p>
        </div>
      </button>
    </>
  );
}
