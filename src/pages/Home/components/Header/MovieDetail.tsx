import { Movie } from '../../../../shared/interfaces';
import './MovieDetail.css';

interface Props {
  movie: Movie;
}

export const MovieDetail = (props: Props) => {
  const movie = props.movie;
  return (
    <section className='detailContainer'>
      <div className='movieInfoContainer'>
        <div className='titleContainer'>
          <h2>{movie.title}</h2>
        </div>
        <div className='timeInfo'>
          <span className='length'>{movie.runtime} min</span>
        </div>
        <p>{movie.overview}</p>
      </div>
    </section>
  );
};
