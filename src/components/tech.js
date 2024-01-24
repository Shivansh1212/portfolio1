import React from 'react';
import { TbBrandVscode } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Techcard = ({ id, devicon, title, style }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: id * 0.1 }}
        >
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <div className=' w-20 mx-auto'>
                    {devicon}
                </div>
                <p className='mt-4'>{title}</p>
            </div>
        </motion.div>
    );
}

const Tech = () => {
    const techs = [
        {
            id: 1,
            devicon: <FaHtml5 size={70} color='e04e29' />,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            devicon: <FaCss3Alt size={70} color='234ddb' />,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            devicon: <IoLogoJavascript size={70} color='ffca28' />,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            devicon: <FaReact size={70} color='00d8ff' />,
            title: 'ReactJs',
            style: 'shadow-blue-400'
        },
        {
            id: 5,
            devicon: <SiTailwindcss size={70} color='4db6ac' />,
            title: 'Tailwind CSS',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            devicon: <SiFlutter size={70} color='59c7f8' />,
            title: 'Flutter',
            style: 'shadow-blue-400'
        },
        {
            id: 7,
            devicon: <SiFirebase size={70} color='ffa917' />,
            title: 'Firebase',
            style: 'shadow-orange-400'
        },
        {
            id: 8,
            devicon: <FaNodeJs size={70} color='68a063' />,
            title: 'NodeJs',
            style: 'shadow-teal-600'
        },
        {
            id: 9,
            devicon: <FaGitAlt size={70} color='f05639' />,
            title: 'Git',
            style: 'shadow-orange-600'
        },
        {
            id: 10,
            devicon: <FaSquareGithub size={70} />,
            title: 'Github',
            style: 'shadow-gray-400'
        },
        {
            id: 11,
            devicon: <TbBrandVscode size={70} color='219de2' />,
            title: 'Vscode',
            style: 'shadow-blue-500'
        },
        {
            id: 12,
            devicon: <TbBrandCpp size={70} color='grey' />,
            title: 'C++',
            style: 'shadow-gray-500'
        },
    ]
    return (
        <div name='tech stack' className='w-full mt-12 text-white'>
            <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <h2 className="text-5xl md:text-6xl text-center leading-tight pb-4 font-thin">
                        Tech Stack
                    </h2>
                    <p className='md:text-lg text-center text-gray-400 py-4'>
                        These are the the technologies I have worked with
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map((tech) => (
                        <Techcard key={tech.id} {...tech} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tech