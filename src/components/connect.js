import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaSquareXTwitter } from "react-icons/fa6";

const Connect = () => {
  const links = [
    {
      id: 1,
      child: (
        <FaLinkedin size={30} />
      ),
      href: "https://www.linkedin.com/in/shivansh-tomar-7342a0225/",
    },
    {
      id: 2,
      child: (
        <FaGithub size={30} />
      ),
      href: "https://github.com/Shivansh1212",
    },
    {
      id: 3,
      child: (
        <HiOutlineMail size={30} />
      ),
      href: "mailto:tomarshivansh12@gmail.com",
    },
    {
      id: 4,
      child: (
        <FaSquareXTwitter size={30} />
      ),
      href: "https://twitter.com/Shivansh12121",
    },
  ];

  return (
    <div name="socials">
      <div className='text-white flex justify-center items-center'>
        <ul className='flex gap-4'>
          {links.map(({ id, href, child }) => (
            <li key={id} className=' py-2 px-2 mx-2 mt-2 mb-10 hover:scale-125 duration-300'>
              <a href={href}>
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col items-center justify-center mx-6 text-sm md:text-lg font-semibold text-gray-400 py-6 text-center'>
        <p>
          Have an exciting project to work on?
        </p>
        <p> Feel free to send me an email or reach out via instant message!</p>
      </div>
    </div>
  )
}

export default Connect