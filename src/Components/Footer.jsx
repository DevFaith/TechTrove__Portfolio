import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDev, FaGithubSquare, FaLinkedin, FaGitlab } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='w-full h-auto bg-gray-200 p-5 md:p-10 flex flex-col md:flex-row justify-between items-center'>
      <h1 className='text-2xl md:text-3xl font-bold text-blue-500 mb-4 md:mb-0 transition-transform transform hover:scale-105'>Dev-Faith</h1>
      <p className='text-center mb-4 md:mb-0'>Copyright ❤️ © 2024 - All right reserved</p>
      <div className='flex space-x-4'>
        <a href="https://dev.to/faith_2024" className='text-2xl md:text-4xl transition-transform transform hover:scale-105'><FaDev /></a>
        <a href="https://github.com/DevFaith" className='text-2xl md:text-4xl transition-transform transform hover:scale-105'><FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/faith-waithera-0a4b3329b/" className='text-2xl md:text-4xl transition-transform transform hover:scale-105'><FaLinkedin /></a>
        <a href="https://gitlab.com/DevFaith" className='text-2xl md:text-4xl transition-transform transform hover:scale-105'><FaGitlab /></a>
      </div>
    </div>
  );
}

export default Footer;
