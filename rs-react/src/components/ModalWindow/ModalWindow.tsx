import React, { ReactNode } from 'react';
import './ModalWindow.scss';

type ModalWindow = {
  content: ReactNode;
  modalWindowVisible: boolean;
  setModalWindowVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalWindow = ({ content, modalWindowVisible, setModalWindowVisible }: ModalWindow) => {
  const modalStyles = modalWindowVisible ? 'modal__active' : '';
  return (
    <div
      className={`modal ${modalStyles}`}
      onClick={(ev) => {
        ev.stopPropagation();
        setModalWindowVisible(false);
      }}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div
          onClick={() => {
            setModalWindowVisible(false);
          }}
        >
          <i className="bx bx-error bx-md modal__close"></i>
        </div>
        {content}
      </div>
    </div>
  );
};

export default ModalWindow;
