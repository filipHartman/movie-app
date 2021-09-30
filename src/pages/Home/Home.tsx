import React from 'react';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export class HomePage extends React.Component {
  render() {
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
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}
