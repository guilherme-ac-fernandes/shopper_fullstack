import React, { useState } from 'react';
import { AxiosError } from 'axios';
import { updateProduct } from '../../api_request/productsRequests';
import { IProduct } from '../../interfaces/IProduct';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './DisplayProduct.css';

interface DisplayProductProps {
  product: IProduct;
  toggle: () => void;
  updateProducts: () => void;
}

function DisplayProduct({
  product, toggle, updateProducts,
}: DisplayProductProps) {
  const [newPrice, setNewPrice] = useState<string>('');

  const handleUpdate = async () => {
    try {
      await updateProduct(product.code, newPrice);
      updateProducts();
      toggle();
    } catch (error) {
      const err = error as AxiosError;
      const messageObject = err.response?.data as unknown as {message: string};
      alert(messageObject.message);
      console.log('Atualização com problema, tente novamente!');
    }
  };

  return (
    <div className="display_product">
      <aside className="button_aside">
        <Button
          text="X"
          onClick={toggle}
          dataTestId="close-modal"
          disabled={false}
        />
      </aside>

      <p className="display_product-name">{product.name}</p>
      <p
        className="display_product-cost"
      >
        {`Valor de Custo = R$ ${product.costPrice}`}
      </p>
      <p
        className="display_product-sales"
      >
        {`Valor de Venda = R$ ${product.salesPrice}`}
      </p>

      <form>
        <Input
          id="salesPrice"
          type="number"
          value={newPrice}
          setValue={setNewPrice}
          dataTestId="new-price-input"
          placeholder="Novo valor de venda do produto"
        />
        <Button
          text="VALIDAR"
          onClick={handleUpdate}
          dataTestId="validate-new-price"
          disabled={newPrice.length === 0}
        />
      </form>
    </div>
  );
}

export default DisplayProduct;
