import React, { ReactNode } from 'react';
import './ModalWindow.scss';

type ModalWindow = {
  children: ReactNode;
  modalWindowVisible: boolean;
  setModalWindowVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalWindow = ({ children, modalWindowVisible, setModalWindowVisible }: ModalWindow) => {
  const modalStyles = modalWindowVisible ? 'modal__active' : '';
  return (
    <div
      className={`modal ${modalStyles}`}
      onClick={(ev) => {
        ev.stopPropagation();
        setModalWindowVisible(false);
      }}
    >
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <i
          className="bx bx-error bx-md modal__close"
          onClick={() => {
            setModalWindowVisible(false);
          }}
        ></i>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
