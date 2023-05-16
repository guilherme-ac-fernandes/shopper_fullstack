// Construção de um Componente Modal proveniente do
// blog da Ashish's Talk (autora: Ashish maurya)
// source: https://blog.theashishmaurya.me/creating-
// a-react-modal-with-react-custom-hooks-and-typescript
import React from 'react';
import { IProduct } from '../../interfaces/IProduct';
import DisplayProduct from '../DisplayProduct/DisplayProduct';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  toggle: () => void;
  product: IProduct;
  updateProducts: () => void;
}

export default function Modal({
  isOpen,
  toggle,
  product,
  updateProducts,
}: ModalProps) {
  return (
    <section>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <DisplayProduct
              product={product}
              toggle={toggle}
              updateProducts={updateProducts}
            />
          </div>
        </div>
      )}
    </section>
  );
}
