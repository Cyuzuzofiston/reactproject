import React, { useState, useEffect } from 'react';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjNhZjQyZjU4NjNjNzc3ZWU1MzkzOWI3NWZkYjcxYiIsIm5iZiI6MTc0MzY5ODM1Ni4xMTgsInN1YiI6IjY3ZWViOWI0Y2YwNjE5MGNiYWUxYzA0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j9W1bEu8Hh0Ip7m4uFUwC2gBDS0o7LxY-AAVpD0huu4';

const favouriteMovieIds = [299536, 157336, 24428, 118340, 424, 13, 27205, 120, 19995, 297761, 99861, 10195, 122917];

const MovieCard = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoKey, setVideoKey] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen && !videoKey && movie.id) {
      fetchVideoKey(movie.id);
    }
  };

  const fetchVideoKey = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const trailer = data.results.find((video) => video.type === 'Trailer');
        if (trailer) {
          setVideoKey(trailer.key);
        } else {
          setVideoKey(data.results[0].key);
        }
      }
    } catch (error) {
      console.error('Error fetching video key:', error);
    }
  };

  return (
    <>
      <div className="cursor-pointer" onClick={toggleModal}>
        <div className="w-[130px] ">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-[210px] h-[200px] object-cover hover:opacity-80 transition-opacity"
          />
          <div className="flex flex-col mt-2">
            <h2 className="w-[140px] font-bold text-white truncate">{movie.title}</h2>
            <hr className="opacity-20 my-1" />
            <div className="flex justify-between text-gray-400 text-sm">
              <div>{movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</div>
              <div>
                <strong className="text-red-500"></strong>
                {movie.runtime ? `${movie.runtime}m` : 'N/A'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 bg-gradient-to-l from-red-500/20 "
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
                ×
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {movie.title} <span className="text-gray-400">({movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'})</span>
                  </h2>

                  <div className="mb-6 flex flex-row justify-between mt-5">
                    <h3 className="text-xl font-semibold text-white mr-20">Overview:</h3>
                    <p className="text-gray-300 mr-25">{movie.overview || 'No overview available.'}</p>
                    <div className="md:w-1/3 p-4">
                      <div className="mt-4 text-white absolute mt-[-19px]">
                        <p>
                          <span className="font-semibold">Year:</span> {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}
                        </p>
                        <p>
                          <span className="font-semibold">Duration:</span> {movie.runtime ? `${movie.runtime} minutes` : 'N/A'}
                        </p>
                        <p>
                          <span className="font-semibold">Rating:</span> {movie.vote_average ? `${movie.vote_average.toFixed(1)}` : 'N/A'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="aspect-w-16 aspect-h-8 justify-center ml-30 mt-20">
                    {videoKey && (
                      <iframe
                        width="80%"
                        height="300"
                        src={`https://www.youtube.com/embed/${videoKey}`}
                        title={`${movie.title} Trailer`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                      ></iframe>
                    )}
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

const List = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviePromises = favouriteMovieIds.map(async (movieId) => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
            {
              headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
              },
            }
          );
          return await response.json();
        } catch (error) {
          console.error(`Error fetching movie with ID ${movieId}:`, error);
          return null;
        }
      });

      const movieResults = await Promise.all(moviePromises);
      setMovies(movieResults.filter(movie => movie !== null));
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-wrap gap-12 ">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default List;