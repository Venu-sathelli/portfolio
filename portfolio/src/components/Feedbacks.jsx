import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import faisal from '../assets/assets/faisal.jpeg'
import santhosh from '../assets/assets/santhosh.jpeg'
import nagendra from '../assets/assets/nagendra.jpeg'
const TestimonialCard = ({name,designation,company,image,index,testimonialtext})=>{
return(
  <>
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}
  className='bg-[#080322] p-10 rounded-3xl  xs:w-[320px] w-full'>
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-1">
    <p>{testimonialtext}</p>
    <div className="mt-7 flex justify-between items-center gap-1">
      <div className="flex-1 flex flex-col">
        <p className='text-white font-medium text-[16px]'>
          <span className='blue-text-gradient'> @ </span> {name}
        </p>
        <p className="mt-1 text-[#a1a1b8] text-[12px]">{designation} of {company}</p>
      </div>
      <img src={image} alt={`feedback ${name}`} className='w-12 h-12 rounded-full object-cover'/>
    </div>
    </div>
     
  </motion.div>
  </>
)
}
const Feedbacks = () => {
  const testimonials = [
    {
      testimonialtext:
        "I thought it was impossible to make a website as beautiful as our product, but Venu proved me wrong.",
      name: "Faisal",
      designation: "Web Designer TL",
      company: "star advertising agency",
      image: faisal,
    },
    {
      testimonialtext:
        "I've never met a web developer who truly cares about their clients' success like Venu does.",
      name: "Nagendra Nandu",
      designation: "Digital Marketing Tl",
      company: "3zen ",
      image: nagendra,
    },
    {
      testimonialtext:
        "After Venu optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Santhosh",
      designation: "Senior Web developer",
      company: "3zen",
      image: santhosh,
    },
  ];
  return (
     <>
     <div className="mt-12  bg-[#130e2b] rounded-[20px]">
      <div className={`${styles.padding} bg-[#161031] rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What Other Says</p>
          <h2 className={`${styles.heroHeadText}`}>Tesimonials.</h2>

        </motion.div>

      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7`}>
        {testimonials.map((testimonial, index)=>{
          return(
          
            <TestimonialCard key={testimonial.name} index={index} {...testimonial} />
          
          )
        })}

      </div>

      </div>
      </>
  )
}

export default SectionWrapper(Feedbacks, "")