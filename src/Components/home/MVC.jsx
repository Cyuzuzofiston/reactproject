import React, { useState } from 'react';
import grax from '../../assets/guardians.jpeg';
import spider from '../../assets/spider.jpg';
import endgame from '../../assets/endgame.jpeg';
import titanic from '../../assets/titanic.jpeg';
import dungeons from '../../assets/dungeons.jpeg';
import johnwick from '../../assets/johnwick.jpg';
import medellin from '../../assets/medellin.jpeg';
import shazam from '../../assets/shazam.jpg';
import demon from '../../assets/blackdemon.jpeg';
import blank from '../../assets/blankpanel.jpeg';
import cube from '../../assets/cube.jpeg';
import love from '../../assets/richinlove.jpeg';

const MovieCard = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // YouTube trailer IDs for each movie (replace with actual IDs)
  const trailerIds = {
    'Blank': 'VAgbxAV-5eE',
    'Guardians of the Galaxy Vol. 2': 'dW1BIid8Osg',
    'Cube': 'brvUDZZm5IE',
    'Black Demon': 'z1xJAyVKAPY',
    'Shazam': 'AIc671o9yCI',
    'Medellín': '6P5Y8nMj0TM',
    'John Wick': 'yjRHZEUamCc',
    'Dungeons': 'IiMinixSXII',
    'Titanic': 'CHekzSiZjrY',
    'Guardians of the Galaxy': 'dW1BIid8Osg',
    'Avengers: Endgame': '8gcRTMr-rlg',
    'Spider Man': 'shW9i6k8cB0'
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="cursor-pointer" onClick={toggleModal}>
        <div className="w-[130px] ">
          <img 
            src={movie.image} 
            alt={movie.name} 
            className="w-[210px] h-[200px] object-cover hover:opacity-80 transition-opacity"
          />
          <div className="flex flex-col mt-2">
            <h2 className="w-[140px] font-bold text-white truncate">{movie.name}</h2>
            <hr className="opacity-20 my-1" />
            <div className="flex justify-between text-gray-400 text-sm">
              <div>{movie.year}</div>
              <div><strong className="text-red-500">.</strong>{movie.min}m</div>
            </div>
          </div>
        </div>
      </div>

  
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 bg-gradient-to-l from-red-500/20  "
          onClick={toggleModal}
        >
          <div 
            className="bg-black rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-red-500 p-1 "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                onClick={toggleModal}
                className="absolute right-4 top-4 text-white hover:text-red-500 text-2xl z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
              >
                &times;
              </button>
              
              <div className="flex flex-col md:flex-row">
                {/* Movie Poster */}
                
                
                {/* Movie Details and Trailer */}
                <div className=" p-4">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {movie.name} <span className="text-gray-400">({movie.year})</span>
                  </h2>
                  
                  <div className="mb-6 flex flex-row justify-between mt-5">
                    <h3 className="text-xl font-semibold text-white mr-20">Overview:</h3>
                    <p className="text-gray-300 mr-25">
                      {movie.description || 
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.'}
                    </p>
                    <div className="md:w-1/3 p-4">
                
                  <div className="mt-4 text-white absolute mt-[-19px]">
                    <p><span className="font-semibold">Year:</span> {movie.year}</p>
                    <p><span className="font-semibold">Duration:</span> {movie.min} minutes</p>
                    <p><span className="font-semibold">Rating:</span> {movie.rating || 'PG-13'}</p>
                  </div>
                </div>
                  </div>
                  
                  <div className="aspect-w-16 aspect-h-8 justify-center ml-30 mt-20">
                    <iframe 
                      width="80%"
                      height="300"
                      src={`https://www.youtube.com/embed/${trailerIds[movie.name] || 'AIzaSyA9n_mWxg5o_WnhHh3y43-QqKWJhZtegTc'}?autoplay=0`}
                      title={`${movie.name} Trailer`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const MovieList = () => {
  const movies = [
    {
      name: 'Blank',
      year: 2023,
      image: blank,
      min: 145,
      description: 'Blank is a 2022 British science fiction thriller film directed by Natalie Kennedy and written by Stephen Herman. It stars Rachel Shelley, Heida Reed, Wayne Brady, Annie Cusselle, Rebecca-Clare Evans, and Bhasker Patel. ',
      rating: 'R'
    },
    {
      name: 'Guardians of the Galaxy Vol. 2',
      year: 2017,
      image: grax,
      min: 135,
      description: 'The Guardians struggle to keep together as a team while dealing with their personal family issues.',
      rating: 'PG-13'
    },
    {
      name: 'Cube',
      year: 2012,
      image: cube,
      min: 152,
      description: 'A group of strangers find themselves trapped in a maze of deadly cubes.',
      rating: 'R'
    },
    {
      name: 'Black Demon',
      year: 2019,
      image: demon,
      min: 152,
      description: 'A family vacation turns into a nightmare when they encounter a legendary shark.',
      rating: 'PG-13'
    },
    {
      name: 'Shazam',
      year: 2019,
      image: shazam,
      min: 152,
      description: 'A boy is given the ability to turn into an adult superhero by shouting one word.',
      rating: 'PG-13'
    },
    {
      name: 'Medellín',
      year: 2019,
      image: medellin,
      min: 152,
      description: 'A gripping story about the rise and fall of a notorious drug cartel.',
      rating: 'R'
    },
    {
      name: 'John Wick',
      year: 2014,
      image: johnwick,
      min: 152,
      description: 'An ex-hitman comes out of retirement to track down the gangsters who killed his dog.',
      rating: 'R'
    },
    {
      name: 'Dungeons',
      year: 2012,
      image: dungeons,
      min: 152,
      description: 'A group of adventurers explore dangerous dungeons filled with treasures and monsters.',
      rating: 'PG-13'
    },
    {
      name: 'Titanic',
      year: 1997,
      image: titanic,
      min: 152,
      description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious Titanic.',
      rating: 'PG-13'
    },
    {
      name: 'Guardians of the Galaxy',
      year: 2014,
      image: grax,
      min: 152,
      description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior.',
      rating: 'PG-13'
    },
    {
      name: 'Avengers: Endgame',
      year: 2019,
      image: endgame,
      min: 152,
      description: 'After the devastating events of Infinity War, the Avengers assemble once more.',
      rating: 'PG-13'
    },
    {
      name: 'Spider Man',
      year: 2018,
      image: spider,
      min: 152,
      description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward.",
      rating: 'PG-13'
    }
  ];

  return (
    <div className="flex flex-wrap gap-12 ">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;