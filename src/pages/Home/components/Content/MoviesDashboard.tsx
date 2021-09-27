import React from 'react';
import { MovieData } from '../../../../shared/interfaces';
import './MoviesDashboard.css';

export const MovieCard = (props: { movie: MovieData }) => (
  <div className='card'>
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
