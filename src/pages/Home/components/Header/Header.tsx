import { HeaderTop } from './HeaderTop';
import { Search } from './Search';
import './Header.css';
import { Movie } from '../../../../shared/interfaces';
import { MovieDetail } from './MovieDetail';

interface Props {
  currentMovie: Movie | null;
  resetCurrentMovie: () => void;
}

export const Header = (props: Props) => {
  return (
    <header>
      <HeaderTop
        showMovieDetails={!!props.currentMovie}
        resetCurrentMovie={props.resetCurrentMovie}
      />
      {!!props.currentMovie ? (
        <MovieDetail movie={props.currentMovie} />
      ) : (
        <Search />
      )}
    </header>
  );
};
