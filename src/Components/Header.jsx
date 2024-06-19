import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className='w-full h-16 bg-gray-100 shadow-sm px-5 flex justify-between items-center fixed top-0 left-0 z-50'>
        <div className='flex justify-start gap-20 items-center'>
          <h1 className='text-xl font-bold text-gray-950'>Dev_Faith</h1>
        </div>
        <div className='hidden md:flex justify-center items-center'>
          <ul className='flex gap-8 text-gray-800 text-md'>
            <li>
              <Link to='/' className="hover:text-gray-950 hover:font-bold px-4 py-2 rounded-lg transition-all duration-300">Home</Link>
            </li>
            <li>
              <Link to='/aboutme' className="hover:text-gray-950 hover:font-bold px-4 py-2 rounded-lg transition-all duration-300">About Me</Link>
            </li>
            <li>
              <Link to='/projects' className="hover:text-gray-950 hover:font-bold px-4 py-2 rounded-lg transition-all duration-300">Projects</Link>
            </li>
            <li>
              <Link to='/contacts' className="hover:text-gray-950 hover:font-bold px-4 py-2 rounded-lg transition-all duration-300">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className='md:hidden flex items-center'>
          {dropdown ? (
            <IoMdClose
              className='text-white text-3xl cursor-pointer'
              onClick={() => setDropdown(false)}
            />
          ) : (
            <FaBars
              className='text-white text-3xl cursor-pointer'
              onClick={() => setDropdown(true)}
            />
          )}
        </div>
      </div>
      {dropdown && (
        <div className='w-full bg-red-400 flex flex-col items-center md:hidden mt-16'>
          <ul className='flex flex-col gap-4 text-white text-2xl'>
            <li>
              <Link to='/' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>Home</Link>
            </li>
            <li>
              <Link to='/aboutme' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>About Me</Link>
            </li>
            <li>
              <Link to='/projects' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>Projects</Link>
            </li>
            <li>
              <Link to='/contacts' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>Contacts</Link>
            </li>
          </ul>
        </div>
      )}
      <div className='mt-16'> {/* This div ensures the main content is pushed down */}
        {/* Main content goes here */}
      </div>
    </>
  );
};

export default Header;
