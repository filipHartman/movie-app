import { useState } from 'react';
import { AddMovieModalContent } from '../../../../shared/components/AddMovieModalContent';
import { DeleteModalContent } from '../../../../shared/components/DeleteModalContent';
import { ModalButton } from '../../../../shared/components/ModalButton';

export const CardOptions = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <div className='optionsContainer'>
      <ModalButton
        buttonLabel='Edit'
        className='option'
        showModal={showEditModal}
        modalTitle='Edit movie'
        openModal={() => setShowEditModal(true)}
        close={() => setShowEditModal(false)}
        modalContentRender={() => (
          <AddMovieModalContent close={() => setShowEditModal(false)} />
        )}
      />
      <ModalButton
        buttonLabel='Delete'
        className='option'
        showModal={showDeleteModal}
        modalTitle='Delete movie'
        openModal={() => setShowDeleteModal(true)}
        close={() => setShowDeleteModal(false)}
        modalContentRender={() => (
          <DeleteModalContent close={() => setShowDeleteModal(false)} />
        )}
      />
    </div>
  );
};
