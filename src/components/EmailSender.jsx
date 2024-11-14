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
      console.log('Tous les champs doivent être remplis');
      return;
    }

    setIsLoading(true); // Début du chargement

    emailjs
      .sendForm('service_0qh8pc7', 'template_qtrvl1a', form.current, {
        publicKey: 'MTCQoTPA3RunQyO2w',
      })
      .then(
        () => {
          setIsLoading(false); // Fin du chargement
          toast.success('Email envoyé avec succès !'); // Toast de succès

          // Réinitialise le formulaire
          setUserName('');
          setUserEmail('');
          setMessage('');
        },
        (error) => {
          setIsLoading(false); // Fin du chargement
          console.error('FAILED...', error.text);
          toast.error('Échec de l\'envoi de l\'email.');
        },
      );
  };

  const isFormComplete = userName && userEmail && message;

  return (
    <div className="flex flex-row bg-tertiary rounded-xl w-full md:w-1/2 p-8 shadow-lg">
      <form className="flex flex-col w-full space-y-4" ref={form} onSubmit={sendEmail}>
        <label className="text-sm font-medium text-gray-700">Your Name</label>
        <input
          type="text"
          name="user_name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"/>

        <label className="text-sm font-medium text-gray-700">Your Email</label>
        <input
          type="email"
          name="user_email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"/>

        <label className="text-sm font-medium text-gray-700">Your Message</label>
        <textarea
          name="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message here"/>

        <button
          type="submit"
          disabled={!isFormComplete || isLoading}
          className={`p-2 mt-4 text-white rounded-md cursor-pointer focus:ring-2 focus:ring-blue-400 focus:outline-none ${
            isFormComplete && !isLoading
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'bg-gray-400 cursor-not-allowed'}`}>
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
          ) : ('Send')}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default EmailSender;
