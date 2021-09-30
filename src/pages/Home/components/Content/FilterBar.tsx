import { Genre } from '../../../../shared/interfaces';
import './FilterBar.css';

export const FilterBar = () => (
  <div className='filterBar'>
    <nav>
      <GenreButtons />
    </nav>
    <div className='sortContainer'>
      <label>Sort By</label>
      <select>
        <option>Release Date</option>
      </select>
    </div>
  </div>
);

function GenreButtons() {
  const genres = Genre;
  return (
    <>
      <button className='genreBtn'>All</button>
      {Object.values(genres).map((name) => (
        <button className='genreBtn' key={name.toString()}>
          {name}
        </button>
      ))}
    </>
  );
}
