import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EmailSender = () => {
  const form = useRef();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!userName || !userEmail || !message) {
      console.log('All fields must be filled');
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm('service_8v6xfdi', 'template_baopfjp', form.current, {
        publicKey: 'eCIuF73wUimEoKFPw',
      })
      .then(
        () => {
          setIsLoading(false);
          toast.success('Email sent');

          setUserName('');
          setUserEmail('');
          setMessage('');
        },
        (error) => {
          setIsLoading(false);
          console.error('FAILED...', error);
          toast.error('Failed to send email');
        },
      );
  };

  const isFormComplete = userName && userEmail && message;

  return (
    <div className="flex flex-row bg-tertiary rounded-xl w-full md:w-1/2 p-8 shadow-lg">
      <form className="flex flex-col w-full space-y-6" ref={form} onSubmit={sendEmail}>
        {/* Name */}
        <div className="relative w-full">
          <input
            type="text"
            name="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder=" "
            className="peer w-full px-3 pt-6 pb-2 bg-transparent text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"/>
          <label
            htmlFor="user_name"
            className="absolute left-3 -top-2 text-sm text-secondary bg-tertiary px-1 transition-all duration-200 transform scale-90 origin-left
              peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
              peer-focus:top-[-10px] peer-focus:scale-90 peer-focus:text-secondary">
            Your Name
          </label>
        </div>

        {/* Email */}
        <div className="relative w-full">
          <input
            type="email"
            name="user_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder=" "
            className="peer w-full px-3 pt-6 pb-2 bg-transparent text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"/>
          <label
            htmlFor="user_email"
            className="absolute left-3 -top-2 text-sm text-secondary bg-tertiary px-1 transition-all duration-200 transform scale-90 origin-left
              peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
              peer-focus:top-[-10px] peer-focus:scale-90 peer-focus:text-secondary">
            Your Email
          </label>
        </div>

        {/* Message */}
        <div className="relative w-full">
          <textarea
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder=" "
            className="peer w-full px-3 pt-6 pb-2 bg-transparent text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"/>
          <label
            htmlFor="message"
            className="absolute left-3 -top-2 text-sm text-secondary bg-tertiary px-1 transition-all duration-200 transform scale-90 origin-left
              peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
              peer-focus:top-[-10px] peer-focus:scale-90 peer-focus:text-secondary">
            Your Message
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isFormComplete || isLoading}
          className={`p-2 mt-4 rounded-md focus:ring-2 focus:ring-secondary focus:outline-none ${
            isFormComplete && !isLoading
              ? 'bg-primary hover:bg-white cursor-pointer text-white hover:text-primary'
              : 'bg-accent cursor-not-allowed text-gray-700'
          }`}>
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4">
                </circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z">
                </path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send'
          )}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default EmailSender;
