import React from 'react'
import log_img from '/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='navbar' className='navbar h-25 p-4 flex justify-between content-center w-255.5 z-100'>
      <div className=''>
        <Link to="/">
          <img 
            src={log_img} 
            alt="Logo" 
            className='h-17 mt-4'
          />
        </Link>
      </div>
      <ul className='flex space-x-6 mt-9'>
        <li className='text-white opacity-70 hover: cursor-pointer transition-colors'>
          <Link to="/">Home</Link>
        </li>
        <li className='text-white opacity-70 hover:text-rose-500 cursor-pointer transition-colors'>
          <Link to="../../Components/MovieCard">Explore</Link>
        </li>
        <li className='text-white opacity-70 hover:text-blue-500 cursor-pointer transition-colors'>
          <Link to="/genre">Genre</Link>
        </li>
        <li className='text-white opacity-70 hover:text-blue-500 cursor-pointer transition-colors'>
          <Link to="/new">New</Link>
        </li>
        <li className='text-white opacity-70 hover:text-blue-500 cursor-pointer transition-colors'>
          <Link to="/movies">Movies</Link>
        </li>
        <li className='text-white opacity-70 hover:text-blue-500 cursor-pointer transition-colors'>
          <Link to="/tvshows">TV Shows</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar