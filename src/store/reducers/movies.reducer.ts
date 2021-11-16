import { SET_MOVIES } from './../actions/movies.action';
import { Movie } from './../../shared/interfaces';

const movies = (
  state: { movies: Movie[] } = { movies: [] },
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: [...action.payload] };
    default:
      return state;
  }
};

export default movies;
