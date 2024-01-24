import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className="h-screen w-full flex flex-col items-center justify-center">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-3/5 text-white md:flex-row">
        <div>
          <h2 className="text-5xl md:text-6xl justify-center items-center font-bold text-gray-300">
            Shivansh Tomar
          </h2>
          <p className="py-2 md:text-xl text-gray-400 text-justify">
            Hello there! I am a Flutter Developer and a Frontend Developer having a vast amount of experience in building different kinds of web and mobile applications. My journey in the tech world revolves around crafting impactful web apps and websites that seamlessly integrate into our daily lives.
          </p>
          <div>
            <a href="/Shivansh Tomar resume.pdf">
              <button className="text-white w-fit px-4 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 cursor-pointer text-sm">
                Resume
                <span className="text-white pl-2">
                  <FaDownload />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className=" ml-5">
          <img src='https://rajxryan.vercel.app/assets/skills-6cfdc1b4.svg' width={1700} height={1700} alt="" />
        </div>
      </div>
      <div className="justify-center items-center">
        <Link to="expertise"  smooth duration={800} offset={-100} className="cursor-pointer">
          <span>
            <MdKeyboardDoubleArrowDown size={50} color="1e6edd" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
