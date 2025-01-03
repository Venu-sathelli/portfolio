import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { meta} from "../assets/assets";

 
// import { experiences } from "../constants";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../style";
import zen from '../assets/assets/3zen1.png'
import star from '../assets/assets/web-logo.png'
import bharat from '../assets/assets/bharat.png'
import trk from '../assets/assets/trk.png'
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Star Advertising Agency",
      icon: star,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js html, css javascript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: " Web Developer",
      company_name: "3zen",
      icon: zen,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - June 2024",
      points: [
        "Building and maintaining web applications utilizing React.js, JavaScript, WordPress, Figma, and associated technologies",
        "Working closely with cross-functional teams—designers, product managers, and developers—to deliver high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Bharat Intern",
      icon: bharat,
      iconBg: "#383E56",
      date: "August 2023 - September 2023",
      points: [
        "Developing and maintaining web applications using html javascript , javascript frame works and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

    {
      title: "Footwear Design & Production Engineer ",
      company_name: "Track Shoes PVt Ltd",
      icon: trk,
      iconBg: "#E6DEDD",
      date: "March 2021 - June 2021",
      points: [
        "Assisted in engineering design processes, gaining hands-on experience in production workflows.",
        "Collaborated with production managers to optimize design and manufacturing efficiencies, contributing to streamlined operations and improved outcomes.",
        "Focused on production and quality, specializing in footwear CAD design and manual design techniques.",
        "Supported the development of accurate and effective designs, ensuring alignment with quality standards and operational goals.",
      ],
    },
     
 
 
 
  ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} `}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");