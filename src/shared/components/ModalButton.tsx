import Modal from './Modal';

interface Props {
  buttonLabel: string;
  className: string;
  showModal: boolean;
  modalTitle: string;
  openModal: () => void;
  close: () => void;
  modalContentRender: () => JSX.Element;
  submit?: () => void;
}

export const ModalButton = (props: Props) => {
  return (
    <>
      <button className={props.className} onClick={props.openModal}>
        {props.buttonLabel}
      </button>
      {props.showModal ? (
        <Modal
          title={props.modalTitle}
          close={() => props.close()}
          render={() => props.modalContentRender()}
        />
      ) : null}
    </>
  );
};
