import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '../assets/about.jpg';
import Junior1 from '../assets/junior1.jpeg';
import Safespace from '../assets/safespace.jpg';
import Official2 from '../assets/official2.webp';
import Image3 from '../assets/image3.jpg';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='w-full bg-gray-50 p-8 sm:p-16 md:p-20 rounded-sm'>
      <img src={About} alt="About" className='w-full mb-8 transition-transform transform hover:scale-105' />

      <div className='space-y-16'>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8'>
          <div data-aos="fade-up" className='flex justify-center items-center w-full md:w-1/2'>
            <img
              src={Junior1}
              alt="Junior Fullstack Developer"
              title='Junior Fullstack Developer'
              className='w-3/4 transition-transform transform hover:scale-105'
            />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='text-gray-800 text-2xl pb-2'>1. Junior Fullstack JavaScript Developer</h2>
            <h4 className='text-gray-700 pb-2 text-justify'>
              As a Junior Fullstack JavaScript Developer, I am honing my skills in both frontend and backend development. I work with technologies like React.js and Node.js to build components and handle server-side logic. My role involves understanding the full web development process and contributing to different parts of an application. I collaborate with senior developers to learn best practices and gradually take on more complex tasks.
            </h4>
          </div>
        </div>

        <div className='flex flex-col md:flex-row-reverse justify-center items-center space-y-8 md:space-y-0 md:space-x-8'>
          <div data-aos="fade-up" className='flex justify-center items-center w-full md:w-1/2'>
            <img
              src={Safespace}
              alt="Junior Frontend Developer"
              title='Junior Frontend Developer'
              className='w-3/4 transition-transform transform hover:scale-105'
            />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='text-gray-800 text-2xl pb-2'>2. Junior Frontend Developer</h2>
            <h4 className='text-gray-700 pb-2 text-justify'>
              In my role as a Junior Frontend Developer, I focus on the basics of web design and interactivity using HTML, CSS, and JavaScript. I assist in creating responsive layouts and implementing design mockups. My goal is to develop a strong foundation in user interface development and to understand how users interact with web applications.
            </h4>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8'>
          <div data-aos="fade-up" className='flex justify-center items-center w-full md:w-1/2'>
            <img
              src={Image3}
              alt="Junior Web Designer"
              className='w-3/4 transition-transform transform hover:scale-105'
            />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='text-gray-800 text-2xl pb-2'>3. Junior Web Designer</h2>
            <h4 className='text-gray-700 pb-2 text-justify'>
              As a Junior Web Designer, I am learning to create visually appealing designs that offer a great user experience. I work with design software to craft layouts and experiment with color schemes and typography. My responsibilities include assisting in the design process from concept to prototype, ensuring that websites are both attractive and functional.
            </h4>
          </div>
        </div>

        <div className='flex flex-col md:flex-row-reverse justify-center items-center space-y-8 md:space-y-0 md:space-x-8'>
          <div data-aos="fade-up" className='flex justify-center items-center w-full md:w-1/2'>
            <img
              src={Official2}
              alt="Junior Web Developer"
              title='Junior Web Developer'VV
              className='w-3/4 transition-transform transform hover:scale-105'
            />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='text-gray-800 text-2xl pb-2'>4. Junior Web Developer</h2>
            <h4 className='text-gray-700 pb-2 text-justify'>
              As a Junior Web Developer, I am building foundational skills in coding and website maintenance. I work with HTML5, CSS3, and JavaScript to develop web pages while adhering to coding standards. My role includes debugging simple issues and making updates under supervision, providing a solid base for future development work.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
