import React from 'react';
import { FilterBar } from './FilterBar';
import { MoviesDashboard } from './MoviesDashboard';
import './Content.css';

export class Content extends React.Component {
  render() {
    return (
      <main>
        <FilterBar />
        <MoviesDashboard />
      </main>
    );
  }
}
