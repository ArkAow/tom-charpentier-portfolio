import React from "react";

export default function CompanyCards() {
  return (
    <div className="pt-10 flex gap-5 justify-around">
      <button className="w-40 group relative h-24 rounded-lg border-2 border-[#050816] bg-gradient-to-b from-[#3f404e] to-[#050816] 
            overflow-hidden transition-grow duration-300 sm:focus:grow sm:focus:h-60 hover:border-[rgba(249,249,249,0.7)]">
        
        <img
          className="absolute left-9 sm:left-11 top-1/2 -translate-y-1/2 w-16 h-16 z-10 object-contain ease-in-out"
          src="/logos/iut.svg"
          alt="logo"/>

        <img
          className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus:opacity-100 z-0 object-cover"
          src="/res/iut-bg.png"
          alt="background"/>

        <div className="opacity-0 z-10 sm:group-focus:opacity-100 absolute left-36 top-1/2 transform -translate-y-1/2 text-white text-sm font-medium">
            <p className="text-justify w-11/12">
                During my studies, I had worked on various group projects, known as SAEs (Situations d’Apprentissage et d’Évaluation), included by my school curriculum.
                <br/>
                In my third year, I completed a course scheduling project for my IUT, where my main responsibility was to create a detailed course planning system.
                <span className="hidden lg:flex">This experience allowed me to strengthen my project management skills, communicate effectively with clients, and deliver a solution that met the needs of my IUT.</span>
            </p>
        </div>
      </button >

      <button className="w-40 group relative h-24 rounded-lg border-2 border-[#050816] bg-gradient-to-b from-[#3f404e] to-[#050816] 
            overflow-hidden transition-grow duration-300 sm:focus:grow sm:focus:h-60 hover:border-[rgba(249,249,249,0.7)]">
        
        <img
          className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 w-32 h-32 z-10 object-contain ease-in-out"
          src="/logos/biotonix.png"
          alt="logo"/>

        <img
          className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus:opacity-100 z-0 object-cover"
          src="/res/biotonix-bg.png"
          alt="background"/>

        <div className="opacity-0 z-10 sm:group-focus:opacity-100 absolute left-40 top-1/2 transform -translate-y-1/2 text-black text-sm font-medium">
            <p className="text-justify w-11/12">
                During my second year in computer science, I had the opportunity to intern in Canada, thanks to a partnership between my IUT and the CEGEP of Trois-Rivières, near Montreal. 
                I took this chance to work in Quebec as a Junior Full Stack Developer at Biotonix, a company specializing in health technology, where I contributed to their BTX app.
                <br/>
                <span className="hidden lg:flex">In this role, I developed new features and debugged the application using tools like Angular and .NET. Working in a foreign country improved my adaptability and cross-cultural communication skills, making this an valuable professional and personnal experience.</span>
            </p>
        </div>
      </button >
    </div>
  );
}
