import { ModalProps } from '.';

export const AddMovieModalContent = (props: ModalProps) => {
  return (
    <>
      <div>
        <label htmlFor='title'>Title</label>
        <input id='title' />
        <label htmlFor='release-date'>release date</label>
        <input id='release-date' />
      </div>
      <div>
        <label htmlFor='movie-url'>Movie Url</label>
        <input id='movie-url' />
        <label htmlFor='rating'>Rating</label>
        <input id='rating' />
      </div>
      <div>
        <label htmlFor='genre'>Movie Url</label>
        <input id='genre' />
        <label htmlFor='runtime'>Runtime</label>
        <input id='runtime' />
      </div>
      <label htmlFor='overview'>Over view</label>
      <input id='overview' />
      <div>
        <button>Reset</button>
        <button onClick={() => props.close()}>Submit</button>
      </div>
    </>
  );
};
