import React, { useState } from 'react';
import { ProductDetails } from './ProductDetails';

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button
          className="modal-close-button"
          onClick={onClose}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};
//eslint-disable-next-line
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <h2>Product Details</h2>
        <ProductDetails></ProductDetails>
      </Modal>
    </div>
  );
};
