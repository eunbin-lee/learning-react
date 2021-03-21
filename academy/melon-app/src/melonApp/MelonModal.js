import React from 'react';
import './MelonModal.css';
import { AiFillCloseCircle } from 'react-icons/ai';

const MelonModal = ({ findData, onClose }) => {
  const { key, title, singer } = findData;
  return (
    <div className="Modal">
      <div className="bg" onClick={onClose}></div>
      <div className="popup">
        <h2>
          [MV] {singer} - {title}
        </h2>
        <iframe
          src={`https://www.youtube.com/embed/${key}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <span className="close" onClick={onClose}>
          <AiFillCloseCircle />
        </span>
      </div>
    </div>
  );
};

export default MelonModal;
