import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Earth from './canvas/Earth';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { styles } from '../style';
// ...template_e4sti8z
// ...service_n0shn54
// ...0ZxEq38FRMupbGJub
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs   
      .send(
        'service_n0shn54' ,
        'template_e4sti8z',
        {
          from_name: form.name,
          to_name: "venu",
          from_email: form.email,
          to_email: "venusathelli123@gmail.com",
          message: form.message,
        },
         '0ZxEq38FRMupbGJub'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("venu, something went wrong. Please try again.");
        }
      );
  };

  
  return (
    <>
    
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
      className='flex-[0.95] bg-[#130e2b] p-8 rounded-2xl '>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
<form ref={formRef}
onSubmit={handleSubmit}
className='mt-12 flex flex-col gap-8 '
>
  <label className='flex flex-col'>
    <span className="text-white font-medium mb-4">Your Name</span>
    <input type="text"
    name='name'
    placeholder='Enter Your Name'
    value={form.name}
    onChange={handleChange}
    className='bg-[#080322] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
    />
  </label>
  <label className='flex flex-col'>
    <span className="text-white font-medium mb-4">Your Email</span>
    <input type="email"
    name='email'
    placeholder='Enter Your Email'
    value={form.email}
    onChange={handleChange}
    className='bg-[#080322] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
    />
  </label>
  <label className='flex flex-col '>
    <span className="text-white font-medium mb-4">Your Message</span>
    <textarea  
    rows="7"
    name='message'
    placeholder='Enter Your Message'
    value={form.message}
    onChange={handleChange}
    className='bg-[#080322] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
    />
  </label>
<button className='bg-[#080322] py-3 px-6 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>

  {loading ? 'sending' : 'send'}
</button>
</form>
      </motion.div>
      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className='xl-flex-1 xl:h-auto md:h-[550px] h-[350px] w-[50%]   '>
         
        <Earth/>
      
      </motion.div>
    </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact")