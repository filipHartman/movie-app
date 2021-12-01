import { connect } from 'react-redux';
import { Movie } from '../../../../shared/interfaces';
import { RootState } from '../../../../store/store';
import { MovieCard } from './MovieCard';
import './MoviesDashboard.css';
import useFetchMovies from './useFetchMovies';

interface Props {
  movies: Movie[];
  addCurrentMovie: (movie: Movie) => void;
}

const MoviesDashboard = (props: Props) => {
  const movies = useFetchMovies();

  return (
    <div className='moviesDashboardContainer'>
      <span>{movies.length} movies found</span>
      <div className='moviesDashboard'>
        {props.movies.map((movie) => (
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

const mapStateToProps = (state: RootState) => {
  return {
    movies: state.movies.movies,
  };
};

export default connect(mapStateToProps)(MoviesDashboard);
