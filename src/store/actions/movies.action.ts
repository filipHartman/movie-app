import { prepareSearchOptions } from './../../shared/helpers';
import { Movie } from './../../shared/interfaces';
import { SearchOptions } from '../../shared/interfaces';
import axios from 'axios';

const MOVIES_API_URL = 'http://localhost:4000';

export const SET_MOVIES = 'movies/setAllMovies';
export const setAllMovies = (movies: Movie[]) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const fetchMovies = (searchOptions: Partial<SearchOptions> = {}) => {
  return async (dispatch) => {
    axios
      .get(`${MOVIES_API_URL}/movies`, {
        params: prepareSearchOptions(searchOptions),
      })
      .then((response) => {
        dispatch(setAllMovies(response.data.data));
      });
  };
};
