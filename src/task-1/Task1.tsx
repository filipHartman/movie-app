import React from 'react';
import { Counter } from './Counter/Counter';
import { GenreSelect } from './GenreSelect/GenreSelect';
import { Search } from './Search/Search';

const helloWorld = React.createElement('h1', null, 'Witam Szanownego Pana');

export class Task1 extends React.Component {
  render() {
    return (
      <div>
        {helloWorld}
        <h2>Counter</h2>
        <Counter />
        <h2>Search</h2>
        <Search />
        <h2>Genre Select</h2>
        <GenreSelect />
      </div>
    );
  }
}
