import React from 'react';

import './Modal.scss';

export function Modal({ children }) {
  return (
    <div className="modal active">
      <div className="modal__content active">
        {children}
      </div>
    </div>
  );
}
