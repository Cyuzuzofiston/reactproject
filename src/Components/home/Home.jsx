import React from 'react'
import Play_vd from '../../assets/play.png'
import spider from '../../assets/spider.jpg'
import grax from '../../assets/guardians.jpeg'

const Home = () => {
  return (
    <div className='flex flex-row justify-center items-center w-full h-full mt-[150px]'>
      <div className=' w-full h-full justify-center items-center mb-2 w-[10px] mt-[50px]'>
        <div className='text-4xl'>
            <h1 className=' font-semibold tracking-tight '>
            FIND MOVIES</h1> <hr class="absolute border-indigo-600 w-33 mt-[-30px] ml-[380px] opacity-25 "></hr>
           

            <div class="bg-black text-white text-5xl font-bold tracking-tight">
                <span class="bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent">TV SHOWS</span>
                <span class="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> AND MORE</span>
            </div>
          </div>
        <h4 className='mr-20 mt-5  '>
            Lorem Ipsum has been the industry's standard dummy text <br />
            ever since the 1500s, when unknown printer took a galley <br />
            of the type scrambled it to make a type spacimen book.
        </h4><br /><br />
        <a href="#">
            <li className='flex flex-row h-10 border-1 border-white-600 rounded-lg w-40 h-10 justify-center items-center gap-3 bg-black mr-90'>
             <img src={Play_vd} alt="play" className='w-6 bg-white rounded-full' />
             <strong>Watch Trailer</strong>
            </li>
        </a>
      </div>
      <div class="absolute h-90 border-1 border-indigo-600 mt-[154px] mr-[-0px] opacity-25 "></div>
   
    
      
      <div className="flex justify-center items-center w-full h-full relative p-1 mr-1">
        
  <img 
    src={grax} 
    alt="guardians" 
    className="absolute w-65 h-[200px] mb-30 left-30  z-0 shadow-[0px -30px 0px 10px rgba(255, 0, 0, 0.438)] ml-16 "
  /> 
  
  <img 
    src={spider} 
    alt="spider" 
    className="group-hover:hidden w-75 h-110 bottom-1 relative z-10 mt-10 mr-45 blur-[1.5px] " 
  />
  
   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
     <img 
       src={Play_vd} 
       alt="click" 
       className="w-13 bg-white rounded-full shadow-lg mr-60 mt-27" 
      />
     </div>
    </div>
    <div class="absolute w-115 border-1 border-b-blue-500 mt-[513px] mr-[-459px] opacity-25 "></div>

    </div>

    


  )
}

export default Home
