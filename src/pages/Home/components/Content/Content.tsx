import FilterBar from './FilterBar';
import MoviesDashboard from './MoviesDashboard';
import './Content.css';
import { Movie } from '../../../../shared/interfaces';

interface Props {
  addCurrentMovie: (movie: Movie) => void;
}

export const Content = (props: Props) => {
  return (
    <main>
      <FilterBar />
      <MoviesDashboard addCurrentMovie={props.addCurrentMovie} />
    </main>
  );
};
