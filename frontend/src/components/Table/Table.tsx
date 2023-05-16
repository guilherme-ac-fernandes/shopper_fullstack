import React from 'react';
import { IProduct } from '../../interfaces/IProduct';
import './Table.css';

interface TableProps {
  products: IProduct[] | [];
  loading: boolean;
  clickModal: (product: IProduct) => void;
}

export default function Table({ products, loading, clickModal }: TableProps) {
  return (
    <section className="tableContainer">
      {!loading && products.length === 0 ? (
        <span>Empty Table</span>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Produto</th>
                <th>Preço de Custo</th>
                <th>Valor de Venda</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={`table-${product.code}`}>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{`R$ ${product.costPrice}`}</td>
                  <td>{`R$ ${product.salesPrice}`}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => clickModal(product)}
                    >
                      Atualizar valor
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
