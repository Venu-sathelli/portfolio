import React, { useState, useEffect } from 'react';
import { logo1, menu, close } from '../assets/assets';
import { styles } from '../style';
import { Link } from 'react-router-dom';

const navlinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to the desired scroll position
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80 backdrop-blur-lg' : 'bg-transparent'}`}
    >
      <div className="w-full flex justify-between items-center  mx-auto">
        <Link to="/" className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo1} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-xl font-semibold'>Venu | <span>Sathelli</span></p>
        </Link>
        
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navlinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[17px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 max-w-[140px] my-2 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navlinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-red text-[17px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`} className='hover:text-red'>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
