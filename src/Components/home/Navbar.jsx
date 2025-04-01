
import React from 'react'
import log_img from '/logo.png'







const Navbar = () => {
  return (
    <div id='navbar' className='navbar h-25 p-4 flex justify-between content-center w-255.5 z-100'>
      <div className=''>
        <img 
          src={log_img} 
          alt="Logo" 
          className='h-17 mt-4'
        />
       
      </div>
      <ul className='flex space-x-6 mt-9  '>
        <li className='text-white opacity-70 hover: cursor-pointer transition-colors'>Home</li>
        <li className='text-white opacity-70 hover:text-rose-500 cursor-pointer transition-colors'>Explore</li>
        <li className='text-white opacity-70 hover:text-blue-500 cursor-pointer transition-colors'>Genre</li>
        <li className='text-white opacity-70 hover:text-blue-500 cursor-pointer transition-colors'>New</li>
        <li className='text-white opacity-70 hover:text-blue-500 cursor-pointer transition-colors'>Movies</li>
        <li className='text-white opacity-70 hover:text-blue-500 cursor-pointer transition-colors'>TVShows</li>
      </ul>
    </div>
  )
}

export default Navbar