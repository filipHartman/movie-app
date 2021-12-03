import { Field, useFormik } from 'formik';
import { ModalProps } from '.';
import { Genre, Movie } from '../interfaces';

const initialValues: Movie = {
  title: '',
  tagline: '',
  vote_average: 0,
  vote_count: 0,
  release_date: '',
  poster_path: '',
  overview: '',
  budget: 0,
  revenue: 0,
  runtime: 0,
  genres: [],
  id: 0,
};

export const AddMovieModalContent = (props: ModalProps) => {
  const genres = Genre;
  const formik = useFormik<Movie>({
    initialValues,
    onSubmit: (value) => {
      console.log('Value ', value);
      props.close();
    },
    onReset: (values) => {
      values = initialValues;
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          name='title'
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <label htmlFor='release-date'>release date</label>
        <input
          id='release-date'
          name='release_date'
          type='date'
          onChange={formik.handleChange}
          value={formik.values.release_date}
        />
      </div>
      <div>
        <label htmlFor='poster_path'>Poster path</label>
        <input
          id='poster_path'
          name='poster_path'
          type='url'
          onChange={formik.handleChange}
          value={formik.values.poster_path}
        />
        <label htmlFor='rating'>Rating</label>
        <input
          id='rating'
          name='rating'
          type='number'
          onChange={formik.handleChange}
          value={formik.values.vote_average}
        />
      </div>
      <div>
        <label htmlFor='genres'>Select genre</label>

        <Field component='select' id='genres' name='genres' multiple={true}>
          {Object.values(genres).map((genre, i) => (
            <option key='i' value={genre}>
              {genre}
            </option>
          ))}
        </Field>

        <label htmlFor='runtime'>Runtime</label>
        <input id='runtime' />
      </div>
      <label htmlFor='overview'>Over view</label>
      <input id='overview' />
      <div>
        <button onClick={formik.handleReset} type='reset'>
          Reset
        </button>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};
