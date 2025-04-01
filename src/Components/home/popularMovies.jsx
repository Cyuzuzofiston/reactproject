import React from "react";
import love from '../../assets/richinlove.jpeg'
import grax from '../../assets/guardians.jpeg'
import spider from '../../assets/spider.jpg'
import endgame from '../../assets/endgame.jpeg'
import titanic from '../../assets/titanic.jpeg'
import dungeons from '../../assets/dungeons.jpeg'
import johnwick from '../../assets/johnwick.jpg'
import medellin from '../../assets/medellin.jpeg'
import shazam from '../../assets/shazam.jpg'
import demon from '../../assets/blackdemon.jpeg'
import blank from '../../assets/blankpanel.jpeg'
import cube from '../../assets/cube.jpeg'


const NewCard = ({ movie }) => {
  return (
    <div className=''>


      <div>
      
      <div className="w-[130px] ">
        <img src={movie.image} alt="" className='w-[210px] h-[200px] ' />
        <div className='flex flex-col gap-[-30px]'>
          <div><h2 className='w-[140px] font-bold'>{movie.name}</h2></div>
          <hr className='opacity-20' />
          <div className='flex justify-between'>
          <div className=''>{movie.year}</div>
          <h1><strong className='text-red-500'>.</strong>{movie.min}m</h1>
          
          </div>
        </div>
       
      </div>
      </div>
    </div>
  );
};

const List = () => {

  const movies = [
    {
     name: 'Rich In Love',
     year: 2018,
     image: love,
     min: 135
    },
    {
           name: 'Blank Panel',
              year: 2023,
              image: blank,
              min: 145
    },
    {
          name: 'Guardians of the Galaxy Vol. 2',
              year: 2017,
              image: grax,
              min: 135
    },
    {
         name: 'Cube',
              year: 2012,
              image: cube,
              min: 152
    },
    {
          name: 'Black Demon',
              year: 2019,
              image: demon,
              min: 152
    },
    {
          name: 'Shazam',
              year: 2019,
              image: shazam,
              min: 152
    },
    { 
           name: 'Medellín',
              year: 2019,
              image: medellin,
              min: 152
    },
    {
         name: 'John Wick',
              year: 2014,
              image: johnwick,
              min: 152
    },
    {
         name: 'Dungeons',
              year: 2012,
              image: dungeons,
              min: 152
    },
    {
         name: 'Titanic',
              year: 1997,
              image: titanic,
              min: 152
    },
    {
         name: 'Guardians of the Galaxy',
              year: 2014,
              image: grax,
              min: 152
    },
    {
          name: 'Avengers: Endgame',
              year: 2019,
              image: endgame,
              min: 152
    },
   
  ];


  return (
    <div className="flex flex-wrap gap-12">
      {movies.map((movie, index) => (
        <NewCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default List;
