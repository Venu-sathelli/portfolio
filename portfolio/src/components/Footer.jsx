import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { styles } from '../style';
import { logo1 } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#080322] text-center text-lg-start text-gray-300 flex flex-col m-auto mt-12 ">
        <section className={` p-6 0 border-b border-gray-500   `}>
            <div className=" flex justify-center lg:justify-between max-w-6xl mx-auto relative z-0 m-auto" > 
          <div className="hidden lg:block mr-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="flex space-x-4">
      <a href="#" className="text-gray-400 hover:text-gray-400">
        <FaFacebookF />
      </a>
      <a href="#" className="text-ray-400 hover:text-gray-400">
        <FaTwitter />
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-400">
        <FaGoogle />
      </a>
      <a href="https://www.instagram.com/venulucky82/" className="text-gray-400 hover:text-gray-400">
        <FaInstagram />
      </a>
      <a href="www.linkedin.com/in/sathelli-venu-6676a3269" className="text-gray-400 hover:text-gray-400">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Venu-sathelli/" className="text-gray-400 hover:text-gray-400">
        <FaGithub />
      </a>
    </div>
    </div>

        </section>

        <section className={`mt-5 max-w-7xl mx-auto grid pb-5 ${styles.paddingX}`}>
  <div className="w-full text-center md:text-left">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-3 justify-between">
      
      {/* Brand and Description Section */}
      <div className="mb-4">
        <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
          <img src={logo1} alt='logo' className='w-9 h-9 object-contain' /> 
          <p className='text-white text-xl font-semibold ml-2'>Venu | <span>Sathelli</span></p>
        </h6>
        <p className="text-gray-400 text-center md:text-left">
          Crafting seamless digital experiences with expertise in React js, JavaScript, Tailwind CSS, and WordPress. I bring creative solutions to life through web development and design.
        </p>
      </div>

      {/* Products Section */}
      <div className="flex flex-col gap-2 text-center md:text-left">
        <h6 className="uppercase font-semibold mb-4 text-white">Products</h6>
        <p><a href="#!" className="text-gray-400">Omnifood</a></p>
        <p><a href="#!" className="text-gray-400">Star Advertising Agency</a></p>
        <p><a href="#!" className="text-gray-400">Luxury Product</a></p>
        <p><a href="#!" className="text-gray-400">Elite Infra</a></p>
      </div>

      {/* Useful Links Section */}
      <div className="flex flex-col gap-2 text-center md:text-left">
        <h6 className="uppercase font-semibold mb-4 text-white">Useful links</h6>
        <p><a href="#!" className="text-gray-400">Hero</a></p>
        <p><a href="#!" className="text-gray-400">About</a></p>
        <p><a href="#!" className="text-gray-400">Work Experience</a></p>
        <p><a href="#!" className="text-gray-400">Projects</a></p>
        <p><a href="#!" className="text-gray-400">Testimonials</a></p>
        <p><a href="#!" className="text-gray-400">Contact</a></p>
      </div>

      {/* Contact Section */}
      <div className="mb-4 flex flex-col gap-2">
        <h6 className="uppercase font-semibold mb-4 text-white text-center md:text-left">Contact</h6>
        <p className="flex items-center justify-center md:justify-start text-gray-400">
          <FaHome className="mr-3" />Veerannapet, Siddipet, Telangana
        </p>
        <p className="flex items-center justify-center md:justify-start text-gray-400">
          <FaEnvelope className="mr-3" /> venusathelli123@gmail.com
        </p>
        <p className="flex items-center justify-center md:justify-start text-gray-400">
          <FaPhone className="mr-3" /> +91 6302349046
        </p>
        
      </div>

    </div>
  </div>
</section>


        <div className="text-center p-4 bg-gray-300 text-gray-500">
          © 2025 Copyright : 
           <a className="text-gray-800 font-semibold pl-[6px]" href="/"> 
             Venu Sathelli
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
