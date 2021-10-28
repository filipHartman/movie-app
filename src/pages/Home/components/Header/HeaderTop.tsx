import { useCallback, useState } from 'react';
import { AddMovieModalContent } from '../../../../shared/components/AddMovieModalContent';
import { ModalButton } from '../../../../shared/components/ModalButton';
import './HeaderTop.css';

interface Props {
  showMovieDetails: boolean;
  resetCurrentMovie: () => void;
}

export const HeaderTop = (props: Props) => {
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);

  const closeModal = useCallback(() => {
    setShowAddMovieModal(false);
  }, []);

  return (
    <div className='headerTopContainer'>
      <h1>
        <span>netflix</span>roulette
      </h1>
      {props.showMovieDetails ? (
        <button className='header-btn' onClick={props.resetCurrentMovie}>
          &#x1f50d;
        </button>
      ) : (
        <ModalButton
          buttonLabel='+ ADD MOVIE'
          className='header-btn addMovieBtn'
          showModal={showAddMovieModal}
          modalTitle='Add Movie'
          openModal={() => setShowAddMovieModal(true)}
          close={closeModal}
          modalContentRender={() => <AddMovieModalContent close={closeModal} />}
        />
      )}
    </div>
  );
};
