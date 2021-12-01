import { useState } from 'react';
import { Movie } from '../../../../shared/interfaces';
import { CardOptions } from './CardOptions';

export const MovieCard = (props: {
  movie: Movie;
  addCurrentMovie: (movie: Movie) => void;
}) => {
  const [hover, setHover] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      className='card'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setShowOptions(false);
      }}
      onClick={() => props.addCurrentMovie(props.movie)}
    >
      {hover ? (
        showOptions ? (
          <CardOptions />
        ) : (
          <button
            className='hoverBtn'
            onClick={() => setShowOptions(true)}
          ></button>
        )
      ) : null}
      <img
        className='cardImage'
        src={props.movie.poster_path}
        alt={props.movie.title}
      />
      <div className='cardFooter'>
        <div className='titleContainer'>
          <span>{props.movie.title}</span>
          <span className='date'>{props.movie.release_date}</span>
        </div>
        <span className='description'>{props.movie.overview}</span>
      </div>
    </div>
  );
};
