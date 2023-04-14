import React from 'react';
import './ModalCard.scss';
import { useAppSelector } from '@/hooks/redux';

const ModalCard = () => {
  const { character } = useAppSelector((state) => state.modalSlice);
  const { image, name, id, species, gender, status, location } = character;
  return (
    <div className="modal__content">
      <img className="modal__image" alt="character_image" src={image} />
      <div className="modal__info">
        <h3 className="modal__title">{name}</h3>
        <ul className="modal__list">
          <li className="modal__list-item">Id: {id}</li>
          <li className="modal__list-item active">Species: {species}</li>
          <li className="modal__list-item">Gender: {gender}</li>
          <li className="modal__list-item active">Status: {status}</li>
          <li className="modal__list-item">Location: {location?.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default ModalCard;
