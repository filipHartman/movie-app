import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { formatSortCategory } from '../../../../shared/helpers';
import { Genre, SortCategory } from '../../../../shared/interfaces';
import { fetchMovies } from '../../../../store/actions/movies.action';
import './FilterBar.css';

const FilterBar = ({ getMovies }) => {
  const sortCategories = SortCategory;
  const [sortCategory, setSortCategory] = useState<string>(
    SortCategory.RELEASE_DATE
  );
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  useEffect(() => {
    getMovies(selectedGenre, sortCategory);
  }, [selectedGenre, sortCategory, getMovies]);

  return (
    <div className='filterBar'>
      <nav>
        <GenreButtons
          selectedGenre={selectedGenre}
          selectGenre={setSelectedGenre}
        />
      </nav>
      <div className='sortContainer'>
        <label>Sort By</label>
        <select
          value={sortCategory}
          onChange={(e) => setSortCategory(e.target.value)}
        >
          {Object.values(sortCategories).map((category) => (
            <option key={category.toString()} value={category}>
              {formatSortCategory(category)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

interface GenreButtonsProps {
  selectedGenre: string;
  selectGenre: (genre: string) => void;
}

const GenreButtons = ({ selectedGenre, selectGenre }: GenreButtonsProps) => {
  const genres = Genre;
  return (
    <>
      <button
        onClick={() => selectGenre('')}
        className={`genreBtn  ${selectedGenre === '' ? 'active' : ''}`}
      >
        All
      </button>
      {Object.values(genres).map((name) => (
        <button
          onClick={() => selectGenre(name)}
          className={`genreBtn  ${selectedGenre === name ? 'active' : ''}`}
          key={name.toString()}
        >
          {name}
        </button>
      ))}
    </>
  );
};
const mapDispatchToProp = (dispatch) => {
  return {
    getMovies: (genre: Genre, sortBy: string) =>
      dispatch(
        fetchMovies({
          searchBy: 'genres',
          search: genre,
          sortBy,
        })
      ),
  };
};

export default connect((state) => ({}), mapDispatchToProp)(FilterBar);
