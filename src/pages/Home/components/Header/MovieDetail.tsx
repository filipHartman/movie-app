import { MovieData } from '../../../../shared/interfaces';
import './MovieDetail.css';

interface Props {
  movie: MovieData;
}

export const MovieDetail = (props: Props) => {
  const movie = props.movie;
  return (
    <section className='detailContainer'>
      <div className='image'>{movie.imageUrl}</div>
      <div className='movieInfoContainer'>
        <div className='titleContainer'>
          <h2>{movie.title}</h2>
          <span>{movie.rating}</span>
        </div>
        <div className='timeInfo'>
          <span>{movie.releaseDate}</span>
          <span className='length'>{movie.length} min</span>
        </div>
        <p>{movie.description}</p>
      </div>
    </section>
  );
};
