import React from 'react'
import { FaDev } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='w-100 h[250px] bg-gray-200 p-10 flex justify-between items-center'>
        <h1 className='text-3xl font-bold text-blue-500'>Dev-Faith</h1>
        
          <p>Copyright ❤️ © 2024 - All right reserved</p>
          <a href="https://dev.to/faith_2024"><FaDev className='text-3xl'/> </a>
          <a href="https://github.com/DevFaith"><FaGithubSquare className='text-3xl' /></a>
          <a href="https://www.linkedin.com/in/faith-waithera-0a4b3329b/"><FaLinkedin className='text-3xl' /> </a>
          <FaGitlab  className='text-3xl'/>
        
      </div>
    </>
  )
}

export default Footer
