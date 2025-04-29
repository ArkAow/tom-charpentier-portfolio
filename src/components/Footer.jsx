import React from 'react';
import { redirectLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-secondary py-6 border-t border-gray-700 mt-8">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4">
        
        {/* Liens avec icônes */}
        <ul className="flex flex-row gap-8 justify-center items-center">
          {redirectLinks.map((link) => (
            <li
              key={link.id}
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer flex items-center gap-2 transition duration-300"
            >
              <img
                src={link.image_path}
                alt="logo"
                className="w-6 h-6 object-contain"
              />
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-center text-secondary opacity-75">
          ©2025 Tom Charpentier
        </p>
      </div>
    </footer>
  );
};

export default Footer;
