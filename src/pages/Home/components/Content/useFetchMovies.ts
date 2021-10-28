import { MovieData } from './../../../../shared/interfaces';
import { useEffect, useState } from 'react';

const useFetchMovies = (): MovieData[] => {
  const [movies, setMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    fetch('movies.json')
      .then((resp) => resp.json())
      .then((data: MovieData[]) => setMovies(data));
  }, []);

  return movies;
};

export default useFetchMovies;
