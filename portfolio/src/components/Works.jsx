import { motion } from 'framer-motion'
import React from 'react'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../style'
import { Tilt } from 'react-tilt'
import { github, Handwritten, eliteinfra, omnifood, skillcraft, luxuryproduct, realestate, ecoomerce, emax } from '../assets/assets'

const ProjectCard = ({index, name, description, tags, image, source_code_link})=>{
  return(
    <> 
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75 )}>
    <Tilt options={{
      max:45,
      scale:1,
      speed:450,
    }}
    className="bg-[#1d1836] p-5 rounded-2xl max-w-[360px] w-full"

    >
 <div className="relative w-full h-[230px]">
  <img src={image} alt={name} className='w-full h-full object-cover object-top rounded-2xl' />
 
 <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
  <div onClick={()=>window.open(source_code_link)} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
    <img src={github} alt="github" className='w-1/2 h1/2 object-contain' />

  </div>
  </div>
 </div>
 <h3 className="mt-5 text-white text-[24px] font-semibold">{name}</h3>
 <p className="mt-2 text-[#D3D3D3] text-[14px]">{description}</p>
 <div className="mt-4 flex flex-wrap gap-2 ">
  {tags.map((tag)=>(
    <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
  ))}
 </div>
    </Tilt>

  </motion.div>
  </>
  )

}
 
const Works = () => {
   
  const projects = [
    {
      name: "Omni Food",
      description:
        "A web-based platform that enables users to discover, reserve, and manage dining experiences from a variety of restaurants, offering a seamless solution for dining needs.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: omnifood,
      source_code_link: "https://hyd-oomnifood.netlify.app/",
    },
    {
      name: "Luxury Prod",
      description:
        "A web application offering tailored IT solutions, enabling businesses to enhance efficiency and drive growth with advanced software services.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: luxuryproduct,
      source_code_link: "https://luxury-prod.eu/",
    },
    {
      name: "Ecommerce",
      description:
        "An eCommerce platform offering premium skincare essentials like Ubtan and advanced Hair Growth Serum, curated to enhance beauty and wellness naturally.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Woocommerce",
          color: "green-text-gradient",
        },
        {
          name: "custom css",
          color: "pink-text-gradient",
        },
      ],
      image: ecoomerce,
      source_code_link: "https://luxedizaine.com/home/",
    },
    {
      name: "Skill Craft",
      description:
        "A comprehensive training platform offering courses in IT, empowering learners with hands-on skills, certifications, and expert guidance to excel in tech careers.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Wordpress",
          color: "green-text-gradient",
        },
        {
          name: "Custom css",
          color: "pink-text-gradient",
        },
      ],
      image: skillcraft,
      source_code_link: "https://skillscraft.in/",
    },
    {
      name: "RealEstate",
      description:
        "A web application that allows users to search for properties, explore estimated property values, and find available listings based on their current location.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Router",
          color: "green-text-gradient",
        },
        {
          name: "SWiper",
          color: "pink-text-gradient",
        },
      ],
      image: realestate,
      source_code_link: "https://github.com/Venu-sathelli/real-state-react2.0",
    },
    {
      name: "Emax Technologies",
      description:
        "A web application that helps users find SAP training programs, explore course details, and locate nearby training centers, providing a streamlined path to SAP expertise",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Dipictor",
          color: "green-text-gradient",
        },
        {
          name: "Elementors",
          color: "pink-text-gradient",
        },
      ],
      image: emax,
      source_code_link: "https://github.com/Venu-sathelli/real-state-react2.0",
    },
    {
      name: "Elite Infra",
      description:
        "A web application that allows users to search for properties, explore estimated property values, and find available listings based on their current location.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Custom Css",
          color: "green-text-gradient",
        },
        {
          name: "Elementors",
          color: "pink-text-gradient",
        },
      ],
      image: eliteinfra,
      source_code_link: "https://eliteinfraa.in/",
    },
    {
      name: "Hand Written to Text Recogniztion ",
      description:
        "A hand-written text recognition application that enables users to convert handwritten notes into editable digital text efficiently ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Deep Learning Alg ",
          color: "green-text-gradient",
        },
        {
          name: "tkinter",
          color: "pink-text-gradient",
        },
      ],
      image: Handwritten,
      source_code_link: "/",
    },
  ];
  return (
     <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects.
        </h2>
      </motion.div>
      <div className="w-full flex"> 
      <motion.p variants={("", "", 0.1, 2)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
         
    </motion.p>
    </div>
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
    {projects.map((project, index)=>{
      return(
      
        <ProjectCard key={`project-${index}`} index={index} {...project} /> 
        
      )
    })}
    </div>

     </>
  )
}

export default SectionWrapper(Works, " ")