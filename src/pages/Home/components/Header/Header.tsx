import { HeaderTop } from './HeaderTop';
import { Search } from './Search';
import './Header.css';
import { MovieData } from '../../../../shared/interfaces';
import { MovieDetail } from './MovieDetail';

interface Props {
  currentMovie: MovieData | null;
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
