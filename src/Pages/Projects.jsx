import React, { useEffect } from 'react';
import { FaLink } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project1 from '../assets/project1.webp';
import Weather from '../assets/weather.png';
import Task from '../assets/task.png';
import Safespace1 from '../assets/safespace1.png';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='pt-20 px-5'>
      <div className='w-3/4 mb-8' data-aos="fade-up">
        <img src={Project1} alt="Projects" className='w-full transition-transform mb-8 h-96 transform hover:scale-105 flex justify-center items-center' />
      </div>
      <div className='space-y-16'>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8'>
          <div data-aos="fade-up" className='flex justify-center items-center w-full md:w-1/2'>
            <img
              src={Weather}
              alt="Interactive Weather Map Project"
              className='w-3/4 transition-transform transform hover:scale-105'
            />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='text-2xl text-gray-800 pb-2'>1. Interactive Weather Map Project</h2>
            <p className='text-gray-700 pb-2'>
              I developed an Interactive Weather Map to visualize real-time weather data. Leveraging HTML, CSS, JavaScript, React.js, and Node.js, I crafted a dynamic interface with API integrations for live weather updates and geolocation features. Users can view current conditions, forecasts, and historical patterns through an intuitive map that responds to searches or location detection.
              Challenges included managing asynchronous data and ensuring cross-platform responsiveness. The application’s performance is optimized for both desktop and mobile devices, offering a consistent and engaging user experience.
              This project not only showcases my full-stack development skills but also my ability to solve complex problems and deliver user-centric solutions. It has been praised for its accuracy and ease of use, reflecting my commitment to creating impactful web applications.
            </p>
            <p>Here is the Link: <a href="https://weather-app-w.web.app/" className="text-blue-600 flex items-center"><FaLink className='mr-2' />My Weather App</a></p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row-reverse justify-center items-center space-y-8 md:space-y-0 md:space-x-8'>
          <div data-aos="fade-up" className='flex justify-center items-center w-full md:w-1/2'>
            <img
              src={Safespace1}
              alt="SafeSpace for Kids"
              className='w-3/4 transition-transform transform hover:scale-105'
            />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='text-2xl text-gray-800 pb-2'>2. SafeSpace for Kids Platform</h2>
            <p className='text-gray-700 pb-2'>
              “SafeSpace for Kids” is an innovative platform dedicated to fostering a nurturing environment where children can learn and express themselves without fear. The project was conceived with the vision of creating a safe digital haven that encourages creativity, learning, and open communication among young users.
              Developed using React.js and Node.js, the platform features interactive learning modules, creative tools, and forums moderated to ensure a positive experience. It emphasizes user-friendly design and accessibility, making it easy for children to navigate and explore various educational content and self-expression avenues.
              The backend, built with Node.js, ensures data privacy and security, crucial for a child-oriented site. “SafeSpace for Kids” has been instrumental in providing a supportive online community that empowers children to be curious, creative, and confident voices of their generation.
            </p>
            <p>Here is the Link: <a href="https://safespace-gold.vercel.app/" className="text-blue-600 flex items-center"><FaLink className='mr-2' />SafeSpace for Kids</a></p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8'>
          <div data-aos="fade-up" className='flex justify-center items-center w-full md:w-1/2'>
            <img
              src={Task}
              alt="TaskList App"
              className='w-3/4 transition-transform transform hover:scale-105'
            />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='text-2xl text-gray-800 pb-2'>3. TaskList App</h2>
            <p className='text-gray-700 pb-2'>
              TaskList App is a streamlined task list manager designed to simplify personal organization and productivity. Built with React.js for the frontend and Node.js for the backend, this app offers an intuitive interface where users can effortlessly manage their daily tasks.
              Key features include task categorization, priority setting, all aimed at enhancing user efficiency. The app also supports real-time synchronization across devices, ensuring users can access their task lists anytime, anywhere.
              With a focus on user experience, TaskList App incorporates responsive design principles to provide a seamless experience on both desktop and mobile platforms. Its lightweight architecture and fast performance make it an essential tool for anyone looking to organize their life with ease.
            </p>
            <p>Here is the Link: <a href="https://task-liist.web.app/" className="text-blue-600 flex items-center"><FaLink className='mr-2' />My TaskList App</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
