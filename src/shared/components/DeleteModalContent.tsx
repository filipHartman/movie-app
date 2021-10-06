import { ModalProps } from '.';

export const DeleteModalContent = (props: ModalProps) => {
  return (
    <>
      <p>Are you sure you want to delete this movie?</p>
      <button onClick={props.close}>Confirm</button>
    </>
  );
};
