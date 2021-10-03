import { useState } from 'react';
import { AddMovieModalContent } from '../../../../shared/components/AddMovieModalContent';
import { ModalButton } from '../../../../shared/components/ModalButton';
import './HeaderTop.css';

export const HeaderTop = () => {
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);

  return (
    <div className='headerTopContainer'>
      <h1>
        <span>netflix</span>roulette
      </h1>
      <ModalButton
        buttonLabel='+ ADD MOVIE'
        className='addMovieBtn'
        showModal={showAddMovieModal}
        modalTitle='Add Movie'
        openModal={() => setShowAddMovieModal(true)}
        close={() => setShowAddMovieModal(false)}
        modalContentRender={() => (
          <AddMovieModalContent close={() => setShowAddMovieModal(false)} />
        )}
      />
    </div>
  );
};
