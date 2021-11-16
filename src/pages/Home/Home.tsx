import { useState } from 'react';
import { Movie } from '../../shared/interfaces';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const HomePage = () => {
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  const resetCurrentMovie = () => setCurrentMovie(null);

  const addCurrentMovie = (movie: Movie) => setCurrentMovie(movie);

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
