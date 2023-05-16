import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api_request/productsRequests';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Table/Table';
import useModal from '../../hooks/useModal';
import { IProduct } from '../../interfaces/IProduct';
import './Products.css';

function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<IProduct>();

  const { isOpen, toggle } = useModal();

  const updateProducts = () => {
    setLoading(true);
    getAllProducts().then((allProducts) => setProducts(allProducts));
    setLoading(false);
  };

  useEffect(() => {
    updateProducts();
  }, []);

  const clickModal = ({ code: codeProduct }: IProduct) => {
    setProduct(products.find(({ code }) => code === codeProduct));
    toggle();
  };

  return (
    <section>
      <Header />
      <Table
        loading={loading}
        products={products}
        clickModal={clickModal}
      />
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        product={product as IProduct}
        updateProducts={updateProducts}
      />
    </section>
  );
}

export default Products;
