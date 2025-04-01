import React from 'react'
import Navbar from './Components/home/Navbar'
import Home from './Components/home/Home'
import MovieCard from './Components/home/MVC'
import fire from './assets/fire.png'
import Trending from './Components/home/trending'
import List from './Components/home/popularmovies'
import End from './Components/home/empty'









const App = () => {
  return (
    <div className='max-w-5xl mx-auto bg-black text-white flex flex-col overflow-hidden w-full border-double p-0 border-t-0 '>
      <div className=''>
         <div className='absolute bg-gradient-to-l from-red-500 w-200 h-165  ml-55.5 opacity-13 rounded-tr-4xl'></div>

        <Navbar/>
       
        <Home />
      </div>
       <br/><br /><br />

      <div className='flex mt-[30px] justify-between '>
              <img src={fire} alt=""  className='w-7'/>
              <h1 className='font-bold text-2xl '>Trending</h1>
              <hr className='border-b-1 w-200 opacity-25 mt-[20px]'/>
              <p className='mt-2'>See More</p>
      </div><br /><br />



     
      
      <div className='flex space-x-6'>
        <MovieCard/>
      </div>

      <div>
        <Trending/>
        
      </div>


      <div className='mt-[25px]'>
        <List/>
      </div>

      <div>
        <End/>
      </div>
     
      
    </div>
  )
}

export default App

