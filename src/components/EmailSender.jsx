import React, { useState } from "react";

export const EmailSender = () => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isFormComplete = userName && message;

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isFormComplete) return;

    setIsLoading(true);

    const subject = encodeURIComponent(`Contact from Portfolio Website - ${userName}`);
    const body = encodeURIComponent(
      `NAME:\n${userName}\n\n` +
      `MESSAGE:\n${message}\n\n`
    );

    const mailtoLink = `mailto:tomcharpentier@outlook.fr?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsLoading(false);

      setUserName("");
      setMessage("");
    }, 500);
  };

  return (
    <div className="flex flex-row bg-tertiary rounded-xl w-full md:w-1/2 p-8 shadow-lg mb-16">
      <form className="flex flex-col w-full space-y-6" onSubmit={sendEmail}>

        {/* Name */}
        <div className="relative w-full">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder=" "
            className="peer w-full px-3 py-4 bg-transparent text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <label className="absolute left-3 -top-2 text-sm text-secondary bg-tertiary px-1
            peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400
            peer-focus:top-[-10px] peer-focus:text-secondary pointer-events-none transition-all duration-100">
            Your Name
          </label>
        </div>

        {/* Message */}
        <div className="relative w-full">
          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder=" "
            className="peer w-full px-3 py-4 bg-transparent text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <label className="absolute left-3 -top-2 text-sm text-secondary bg-tertiary px-1
            peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400
            peer-focus:top-[-10px] peer-focus:text-secondary pointer-events-none transition-all duration-100">
            Your Message
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isFormComplete || isLoading}
          className={`p-2 mt-4 rounded-md transition-all duration-300 ${
            isFormComplete && !isLoading
              ? "bg-secondary text-primary hover:bg-primary hover:text-white"
              : "bg-accent cursor-not-allowed text-gray-700"
          }`}>
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Opening mail…
            </span>
          ) : (
            "Send"
          )}
        </button>
        <p className="mt-2 text-sm text-gray-400 text-center">
          This will open your email application with a pre-filled message.  
          You may also contact me directly at <b>tom.charpentier@outlook.fr</b>
        </p>
      </form>
    </div>
  );
};

export default EmailSender;
