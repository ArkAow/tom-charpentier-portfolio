import React from "react";
import EmailSender from "./EmailSender";

export default function Contact() {
    return (
        <div id="contact"
          className="w-full flex flex-col items-center justify-center pt-24 p-10">
            <h1 className="text-4xl relative font-bold pb-12">Get in touch!</h1>
            <p className="m-2">
                Feel free to reach out by email if you're interested in my work.
            </p>
            <EmailSender />
        </div>
    );
}