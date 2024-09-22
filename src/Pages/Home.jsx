import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Port from '../assets/port.webp';
import Portfolio from '../assets/portfolio.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full">
      <div className="w-full h-1/6 flex justify-center">
        <img
          src={Portfolio}
          alt="Portfolio"
          className="w-3/4 h-full mb-8 transition-transform transform hover:scale-105"
          title="Portfolio"
        />
      </div>

      <div className="w-full rounded-sm p-10 flex flex-col md:flex-row items-center">
        <div className="w-full rounded-sm p-10 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-5">
            <h1 className="text-gray-800 text-4xl font-bold pb-4">Hello, I'm Faith Waithera</h1>
            <p className="text-lg">
              <span>As a Junior Software Developer,</span>
              <span > I am dedicated to learning and contributing</span>
              <span > to the creation of dynamic and responsive web applications.</span>
              <span > With foundational knowledge in frontend development,</span>
              <span > I am eager to apply my skills to build user-friendly interfaces and reliable codebases.</span>
              <span  >My goal is to develop seamless user experiences</span>
              <span > that are both intuitive and performant.</span>
              <span > Through collaboration with experienced developers and continuous learning,</span>
              <span > I strive to enhance my coding practices</span>
              <span > and contribute effectively to my team’s success.</span>
              <span > I am committed to growing as a professional</span>
              <span > in this ever-evolving field,</span>
              <span > embracing challenges,</span>
              <span > and leveraging my passion for technology</span>
              <span > to make a positive impact in the world of web development.</span>
            </p>
            <p className="text-gray-700 text-lg mt-4">
              Skilled in various technologies, I enjoy working on projects that make a difference. Let's connect and create something amazing together!
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center p-10">
            <img src={Port} alt="Profile" className="w-3/4 md:w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
