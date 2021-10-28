import { useState } from 'react';
import { MovieData } from '../../../../shared/interfaces';
import { CardOptions } from './CardOptions';

export const MovieCard = (props: {
  movie: MovieData;
  addCurrentMovie: (movie: MovieData) => void;
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
      <div className='cardImage'>{props.movie.imageUrl}</div>
      <div className='cardFooter'>
        <div className='titleContainer'>
          <span>{props.movie.title}</span>
          <span className='date'>{props.movie.releaseDate}</span>
        </div>
        <span className='description'>{props.movie.description}</span>
      </div>
    </div>
  );
};
