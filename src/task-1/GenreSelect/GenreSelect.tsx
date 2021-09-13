import { Component } from 'react';
import './GenreSelect.css';

type Genre = 'Crime' | 'Documentary' | 'Horror' | 'Comedy';

const GenreCheckbox = (props: { genre: Genre }) => (
  <div className='checkbox'>
    <input type='checkbox' />
    <label>{props.genre}</label>
  </div>
);

interface State {
  isOpen: boolean;
}

export class GenreSelect extends Component<{}, State> {
  genres: Genre[] = ['Comedy', 'Crime', 'Documentary', 'Horror'];

  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state) => {
      return { ...state, isOpen: !state.isOpen };
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className='genre-select-container'>
        <button type='button' className='select' onClick={this.toggle}>
          Select Genre
          {isOpen ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
        </button>
        {isOpen && (
          <div className='genre-container'>
            {this.genres.map((genre: Genre) => (
              <GenreCheckbox key={genre} genre={genre} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
