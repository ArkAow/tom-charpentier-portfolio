import React, { useEffect, useState } from "react";

export default function About() {  
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 500);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-4xl relative"> About
                <span className="relative inline-block ml-2"> Me
                    <span className={`h-1 border-t-4 border-white-100 rounded-xl mt-1 top-full transition-all duration-500 ${animate ? 'w-0 absolute right-0' : 'w-full absolute left-0'}`}></span>
                </span>
            </h1>

            <div className="mt-8 flex flex-col w-5/6 items-left">
                <p className="mb-2">
                    Hi, I am Tom Charpentier.
                    I am a third year computer science student at the <em>"IUT du Limousin"</em>.
                </p>
                <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula ex tortor, sed blandit risus facilisis quis. Nulla fermentum orci eget porta molestie. Aliquam erat volutpat. Curabitur et nibh eget nunc sodales eleifend eget nec lectus. Fusce et diam ac quam eleifend porttitor in a tortor. Ut sit amet lacinia quam. Curabitur et malesuada orci, at dapibus sem. Aliquam fermentum leo enim, sit amet lobortis quam viverra in. Donec sed mauris turpis. Suspendisse gravida odio tempus, tempor magna sed, malesuada diam. Phasellus pretium odio at justo dictum, at rhoncus eros tempor. Ut viverra at felis ut mattis.
                </p>
                <p className="mb-2">
                Vivamus varius auctor nulla, non semper sem pharetra vitae. Sed eu varius arcu. Proin molestie sem sed purus ornare cursus. Aliquam quis tellus et diam pretium varius. Etiam id ipsum tincidunt enim varius ultricies ut vitae erat. Proin ut lobortis mi, vel placerat diam. Nullam ut cursus eros. Fusce dignissim condimentum tincidunt. Suspendisse tincidunt tempor velit ac malesuada. Nunc auctor turpis at gravida interdum.
                </p>    
            </div>
        </div>
    );
}