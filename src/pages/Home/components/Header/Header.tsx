import React from 'react';
import { HeaderTop } from './HeaderTop';
import { Search } from './Search';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <HeaderTop />
        <Search />
      </header>
    );
  }
}
