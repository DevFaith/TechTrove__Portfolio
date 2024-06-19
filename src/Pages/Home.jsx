import React from 'react';
import Image1 from '../assets/image1.png';

const Home = () => {
  return (
    <div className='w-full h-screen bg-gray-50 flex justify-center items-center'>
      <div className='w-3/4 h-3/4  rounded-sm p-10 flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-start p-5'>
          <h1 className='text-gray-800 text-4xl font-bold pb-4'>Hello, I'm Faith</h1>
          <p className='text-lg'>
            <span className='text-red-500'>As a Junior Software Developer,</span>
            <span className='text-yellow-500'> I am dedicated to learning and contributing</span>
            <span className='text-green-500'> to the creation of dynamic and responsive web applications.</span>
            <span className='text-blue-500'> With foundational knowledge in frontend development,</span>
            <span className='text-indigo-500'> I am eager to apply my skills to build user-friendly interfaces and reliable codebases.</span>
            <span className='text-purple-500'> My goal is to develop seamless user experiences</span>
            <span className='text-pink-500'> that are both intuitive and performant.</span>
            <span className='text-red-500'> Through collaboration with experienced developers and continuous learning,</span>
            <span className='text-yellow-500'> I strive to enhance my coding practices</span>
            <span className='text-green-500'> and contribute effectively to my team’s success.</span>
            <span className='text-blue-500'> I am committed to growing as a professional</span>
            <span className='text-indigo-500'> in this ever-evolving field,</span>
            <span className='text-purple-500'> embracing challenges,</span>
            <span className='text-pink-500'> and leveraging my passion for technology</span>
            <span className='text-red-500'> to make a positive impact in the world of web development.</span>
          </p>
          <p className='text-gray-700 text-lg mt-4'>
            Skilled in various technologies, I enjoy working on projects that make a difference. Let's connect and create something amazing together!
          </p>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center p-5'>
          <img src={Image1} alt="Profile" className='w-3/4 md:w-full rounded-lg shadow-lg' />
        </div>
      </div>
    </div>
  );
};

export default Home;
