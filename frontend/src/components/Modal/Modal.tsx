// Construção de um Componente Modal proveniente do
// blog da Ashish's Talk (autora: Ashish maurya)
// source: https://blog.theashishmaurya.me/creating-
// a-react-modal-with-react-custom-hooks-and-typescript
import React from 'react';
import { IProduct } from '../../interfaces/IProduct';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  toggle: () => void;
  product: IProduct;
}

export default function Modal({
  isOpen,
  toggle,
  product,
}: ModalProps) {
  return (
    <section>
      {isOpen && (
        <div className="modal-overlay" onClick={toggle}>
          <div className="modal-box">
            {JSON.stringify(product)}
          </div>
        </div>
      )}
    </section>
  );
}
