import { MovieData } from '../../../../shared/interfaces';
import { MovieCard } from './MovieCard';
import './MoviesDashboard.css';
import useFetchMovies from './useFetchMovies';

interface Props {
  addCurrentMovie: (movie: MovieData) => void;
}

export const MoviesDashboard = (props: Props) => {
  const movies = useFetchMovies();
  return (
    <div className='moviesDashboardContainer'>
      <span>{movies.length} movies found</span>
      <div className='moviesDashboard'>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addCurrentMovie={props.addCurrentMovie}
          />
        ))}
      </div>
    </div>
  );
};
