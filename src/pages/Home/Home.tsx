import { useState } from 'react';
import { MovieData } from '../../shared/interfaces';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const HomePage = () => {
  const [currentMovie, setCurrentMovie] = useState<MovieData | null>(null);

  const resetCurrentMovie = () => setCurrentMovie(null);

  const addCurrentMovie = (movie: MovieData) => setCurrentMovie(movie);

  return (
    // header
    //    header top
    //    search
    // content
    //    filter nav
    //        genre nav
    //        sort
    //    movies container
    //        movie card
    // footer
    <>
      <Header
        currentMovie={currentMovie}
        resetCurrentMovie={resetCurrentMovie}
      />
      <Content addCurrentMovie={addCurrentMovie} />
      <Footer />
    </>
  );
};
