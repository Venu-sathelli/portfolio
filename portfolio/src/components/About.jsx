import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
// import { services } from '../constants'
import { styles } from '../style'
 

import { fadeIn, textVariant } from '../utils/motion'
import { backend, mobile, web } from '../assets/assets'
import { SectionWrapper } from '../hoc'
import cra from '../assets/assets/creator.png'
const Servicecard = ({index, title, icon})=>{
  return(
    <>
   
   <Tilt className={` xs:w-[250px] w-full` }>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full rounded-[20px] shadow-card shadow-lg border-0 border-sky-500 p-[1px] bg-gradient-to-b from-[#6dd8f5] to-[#6886f2]'
      style={{backgroundColor:'#161031', opacity:0.6}}
    >
      <div
        options={{ 
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#120d28] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[18px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
    </>
  )
}
const About = () => {

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Wordpress Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: " Frontend Developer ",
      icon: cra,
    },
  ];
  return (
    <> 
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.heroHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={("", "", 0.1, 2)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    I'm a skilled software developer with expertise in JavaScript, and frameworks like React js. I specialize
     in frontend development, responsive web design, and WordPress content management, 
     with a strong foundation in HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS. As a quick learner
      and effective collaborator, I’m committed to developing scalable, user-friendly solutions that address
       real-world challenges. Let’s work together to bring your vision to life!

!
    </motion.p>
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 shadow-lg">
      {
        services.map((service, index)=>{
          return <Servicecard key={service.title} index={index} {...service} />
        })
      }
    </div>
    </>
  
    
  )
}

export default SectionWrapper(About, "about");