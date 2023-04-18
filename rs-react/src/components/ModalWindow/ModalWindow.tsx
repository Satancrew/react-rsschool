import React, { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setIsModalActive } from '@/store/slices/modalSlice';
import './ModalWindow.scss';

type ModalWindow = {
  children: ReactNode;
};

const ModalWindow = ({ children }: ModalWindow) => {
  const { isModalActive } = useAppSelector((state) => state.modalSlice);
  const dispatch = useAppDispatch();
  const modalStyles = isModalActive ? 'modal__active' : '';

  const onCloseModal = () => {
    dispatch(setIsModalActive(false));
  };

  return (
    <div
      className={`modal ${modalStyles}`}
      onClick={(ev) => {
        ev.stopPropagation();
        onCloseModal();
      }}
    >
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <i
          className="bx bx-error bx-md modal__close"
          onClick={() => {
            onCloseModal();
          }}
        ></i>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
