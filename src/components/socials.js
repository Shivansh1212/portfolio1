import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaSquareXTwitter } from "react-icons/fa6";

const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/shivansh-tomar-7342a0225/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Shivansh1212",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:tomarshivansh12@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          X (Twitter)
          <FaSquareXTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/Shivansh12121",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, href, child, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ml-[-100px]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
