import React from 'react';
import './SuccessDialog.css';

function SuccessDialog({ isOpen, onClose }) {
  return (
    isOpen && (
      <div className="success-dialog">
        <div className="success-dialog-content">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <p>
            Sua solicitação foi enviada com sucesso, em breve um especialista entrará em contato.
          </p>
        </div>
      </div>
    )
  );
}

export default SuccessDialog;
