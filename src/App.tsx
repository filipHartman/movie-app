import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { HomePage } from './pages/Home/Home';
import ErrorBoundary from './shared/Error/ErrorBoundary';
import { fetchMovies } from './store/actions/movies.action';

function App({ startFetchingMovies }) {
  useEffect(() => {
    startFetchingMovies();
  }, [startFetchingMovies]);
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    startFetchingMovies: () => dispatch(fetchMovies()),
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(App);
