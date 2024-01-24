import React from "react";
import { RiFlutterFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { CiDesktop } from "react-icons/ci";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillCard = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-black text-white h-auto w-full md:w-1/2 p-4 my-4 md:mx-4 border-4 border-x border-y-2 shadow-md shadow-gray-600">
      <div className="flex flex-col items-start mb-4">
        {icon}
        <h1 className="text-2xl md:text-xl font-semibold ml-4">{title}</h1>
      </div>
      <p className="text-lg text-gray-400 p-4">{description}</p>
    </motion.div>
  );
};

const Expertise = () => {
  return (
    <div name="expertise" className="text-white md:h-auto mx-12">
      <div className="text-5xl md:text-6xl text-center leading-tight h-24 font-thin">
        My Expertise
      </div>
      <div className="flex flex-col md:flex-row">
        <SkillCard
          icon={<RiFlutterFill size={40} color="#59c7f8" />}
          title="Flutter Dev"
          description="Skilled in developing various cross-platform mobile apps along with maintaining their backend."
        />
        <SkillCard
          icon={<FaReact size={40} color="#1082a7" />}
          title="FrontEnd Dev"
          description="Passionate about implementing different types of designs in web apps."
        />
      </div>

      <div className="md:mr-16">
        <SkillCard
          icon={<CiDesktop size={40} />}
          title="Software Dev"
          description="Experienced in OOP, Data Structures and algorithms concepts with a focus on intuitive problem-solving."
        />
      </div>
    </div>
  );
};

export default Expertise;
