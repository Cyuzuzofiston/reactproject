import React, { useEffect } from 'react';
import log_img from '/logo.png';

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add('bg-black ', 'shadow-lg');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('bg-black', 'shadow-lg');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      id='navbar' 
      className='navbar h-25 p-4 flex justify-between items-baseline fixed w-255.5 z-50 bg-transparent transition-all duration-300'
    >
      <div className='flex items-baseline space-x-4'>
        <img 
          src={log_img} 
          alt="Logo" 
          className='h-10 w-20 object-contain align-bottom'
        />
        <h1 className='flex text-3xl font-bold text-white'>
          Movies Bazer <span className='text-blue-500'>.</span>
        </h1>
      </div>
      <ul className='flex space-x-6 mt-1'>
        <li className='text-white opacity-70 hover:text-white cursor-pointer transition-colors'>Home</li>
        <li className='text-white opacity-70 hover:text-blue-500 cursor-pointer transition-colors'>Explore</li>
        <li className='text-white opacity-70 hover:text-blue-500 cursor-pointer transition-colors'>Genre</li>
        <li className='text-white opacity-70 hover:text-blue-500 cursor-pointer transition-colors'>New</li>
        <li className='text-white opacity-70 hover:text-blue-500 cursor-pointer transition-colors'>Movies</li>
        <li className='text-white opacity-70 hover:text-blue-500 cursor-pointer transition-colors'>TVShows</li>
      </ul>
    </div>
  );
};

export default Navbar;