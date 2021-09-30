import React from 'react';
import './Search.css';
import './../../../../styles/button.css';

const SearchInput = (props: { onChange: any }) => (
  <input className='searchInput' onChange={props.onChange} />
);
const SearchButton = (props: { onClick: any }) => (
  <button className='btn btn-lg' onClick={props.onClick}>
    Search
  </button>
);

export class Search extends React.Component<{}, { movie: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { movie: '' };

    this.updateInput = this.updateInput.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }

  updateInput(event: { target: { value: string } }) {
    this.setState({ movie: event.target.value ? event.target.value : '' });
  }

  searchMovie() {
    if (!!this.state.movie) {
      alert(`Poszukiwany film ${this.state.movie}`);
    }
  }

  render() {
    return (
      <div className='searchContainer'>
        <h2>Find your movie</h2>
        <div className='inputContainer'>
          <SearchInput onChange={this.updateInput} />
          <SearchButton onClick={this.searchMovie} />
        </div>
      </div>
    );
  }
}
