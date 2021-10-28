import React from 'react';
import { FilterBar } from './FilterBar';
import { MoviesDashboard } from './MoviesDashboard';
import './Content.css';
import { MovieData } from '../../../../shared/interfaces';

interface Props {
  addCurrentMovie: (movie: MovieData) => void;
}

export const Content = (props: Props) => {
  return (
    <main>
      <FilterBar />
      <MoviesDashboard addCurrentMovie={props.addCurrentMovie} />
    </main>
  );
};
