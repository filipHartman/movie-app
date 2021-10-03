import React, { useState } from 'react';
import { AddMovieModalContent } from '../../../../shared/components/AddMovieModalContent';
import { DeleteModalContent } from '../../../../shared/components/DeleteModalContent';
import { ModalButton } from '../../../../shared/components/ModalButton';
import { MovieData } from '../../../../shared/interfaces';
import './MoviesDashboard.css';

const CardOptions = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <div className='optionsContainer'>
      <ModalButton
        buttonLabel='Edit'
        className='option'
        showModal={showEditModal}
        modalTitle='Edit movie'
        openModal={() => setShowEditModal(true)}
        close={() => setShowEditModal(false)}
        modalContentRender={() => (
          <AddMovieModalContent close={() => setShowEditModal(false)} />
        )}
      />
      <ModalButton
        buttonLabel='Delete'
        className='option'
        showModal={showDeleteModal}
        modalTitle='Delete movie'
        openModal={() => setShowDeleteModal(true)}
        close={() => setShowDeleteModal(false)}
        modalContentRender={() => (
          <DeleteModalContent close={() => setShowDeleteModal(false)} />
        )}
      />
    </div>
  );
};

export const MovieCard = (props: { movie: MovieData }) => {
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

export class MoviesDashboard extends React.Component {
  movies: MovieData[] = [
    {
      id: 'movie-1',
      title: 'Pulp Fiction',
      imageUrl: 'Pulp Fiction',
      releaseDate: 1992,
      description: 'Action & Adventure',
    },
    {
      id: 'movie-2',
      title: 'Bohemian Rhapsody',
      imageUrl: 'Bohemian Rhapsody',
      releaseDate: 1992,
      description: 'Drama, Biography, Music',
    },
    {
      id: 'movie-3',
      title: 'Avengers: Infinity War',
      imageUrl: 'Avengers: Infinity War',
      releaseDate: 1992,
      description: 'Action & Adventure',
    },
    {
      id: 'movie-4',
      title: 'Pulp Fiction',
      imageUrl: 'Pulp Fiction',
      releaseDate: 1992,
      description: 'Action & Adventure',
    },
    {
      id: 'movie-5',
      title: 'Bohemian Rhapsody',
      imageUrl: 'Bohemian Rhapsody',
      releaseDate: 1992,
      description: 'Drama, Biography, Music',
    },
    {
      id: 'movie-6',
      title: 'Avengers: Infinity War',
      imageUrl: 'Avengers: Infinity War',
      releaseDate: 1992,
      description: 'Action & Adventure',
    },
  ];
  render() {
    return (
      <div className='moviesDashboardContainer'>
        <span>{this.movies.length} movies found</span>
        <div className='moviesDashboard'>
          {this.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}
