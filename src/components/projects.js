import React from 'react';
import bmi from '../assets/bmi.png';
import clima from '../assets/clima.png';
import grocery from '../assets/grocery.png';
import grouple from '../assets/grouple.png';
import flick1 from '../assets/flick1.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectItem = ({ id, src, code, demo, name }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            className='shadow-lg rounded-md shadow-gray-800 overflow-hidden'
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: id * 0.1 }}
        >
            <img src={src} alt={name} className='w-full h-48 object-cover duration-300 hover:scale-105' />
            <div className='pt-4 pl-4 pr-4'>
                <h3 className='font-semibold text-gray-400 mb-2'>{name}</h3>
                <div className='flex justify-center space-x-4'>
                    <button onClick={() => window.open(demo, '_blank')} className='w-1/2 px-6 m-4 duration-300 hover:scale-110'>Demo</button>
                    <button onClick={() => window.open(code, '_blank')} className='w-1/2 px-6 m-4 duration-300 hover:scale-110'>Code</button>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: grouple,
            demo: "https://drive.google.com/file/d/1yb8VtM8xTBX__4_CZxM_47ZTWfC-GLUp/view?usp=drive_link",
            code: "https://github.com/Shivansh1212/Grouple",
            name: "Grouple: A group chat app",
        },
        {
            id: 2,
            src: flick1,
            demo: "http://flick-picks-flame.vercel.app",
            code: "https://github.com/Shivansh1212/FlickPicks",
            name: "FlickPicks: Movie review web app",

        },
        {
            id: 3,
            src: bmi,
            demo: "https://drive.google.com/file/d/1xj2bPQb-WyX9kf_JP4f4duWhpCTWEvPr/view?usp=drive_link",
            code: "https://github.com/Shivansh1212/BMI_calculator/tree/master",
            name: "BMI calculator",
        },
        {
            id: 4,
            src: clima,
            demo: "https://drive.google.com/file/d/1LcAgF7DyTc_BFG0oykk7XGtBjRhDHgi1/view?usp=drive_link",
            code: "https://github.com/Shivansh1212/clima-app/tree/master",
            name: "Clima: Weather determining app",
        },
        {
            id: 5,
            src: grocery,
            demo: "",
            code: "https://github.com/Shivansh1212/Bloc_groceries",
            name: "Grocery shop app",
        },
    ]
    
    return (
        <div name="projects" className='text-white w-full'>
            <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full'>
                <div className='pb-8'>
                    <h2 className="text-5xl md:text-6xl text-center font-thin leading-tight pb-4">Projects</h2>
                    <p className='md:text-lg text-center text-gray-400 py-4'>Browse through some of my recent work and projects below.</p>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8'>
                    {projects.map((project) => (
                        <ProjectItem key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects
