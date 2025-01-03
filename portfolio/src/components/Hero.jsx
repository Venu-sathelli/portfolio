import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import ErrorBoundary from './ErrorBoundary'
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <>
    <section className='relative w-full  h-screen  mx-auto'>
      <div className= {`${styles.paddingX} absolute inset-0 top-[120px] max-1-7xl max-auto flex flex-row items-start gap-5`}>
<div className="flex flex-col justify-center items-center  mt-5">
  <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
  <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
</div>
<div>
  <h1 className={`${styles.heroHeadText} text-white`} >Hi, I'm <span className='text-[#915eff]'>Venu</span></h1>
<p className={`${styles.heroSubText} mt-2 text-white-100`}>I Developed 3D Visuals, user<br className='sm:block hidden'/>interfaces and web  Applications</p>
</div>
      </div>
      < ComputersCanvas/>
      <div className="absolute bottom-4 left-[50%] flex justify-center items-center">
  <a href="#about">
    <div className="w-[32px] h-[60px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2 ">
      {/* <motion.div
        animate={{
          y: [0, 24, 0], // The bounce animation from 0px to 24px
        }}
        transition={{
          duration: 1.5, // Time for one complete bounce
          repeat: Infinity, // Infinite looping
          repeatType: "loop", // Smooth looping
        }}
        className="w-3 h-3 rounded-full bg-secondary mb-1"
      ></motion.div> */}
      <div className="w-3 h-3 rounded-full bg-[#fff]" ></div>
    </div>
  </a>
</div>

    </section>
    <div 
  className="bg-green-600 rounded-lg fixed bottom-4 right-2 p-3 shadow-lg hover:bg-green-500 transition-colors duration-300 cursor-pointer z-10"
  onClick={() => window.location.href = 'https://wa.me/6302349046'}
>
  <a href="https://wa.me/6302349046" target="_blank" rel="noopener noreferrer">
  <FaWhatsapp className="w-8 h-8 " />
  </a>
</div>
    </> 
  )
}

export default Hero