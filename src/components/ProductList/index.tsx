import { ProductCard } from 'components';
import { Product } from 'types';
import React from 'react';
import './styles.css'

type Props = {
  products: Product[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="product-list" data-testid="product-list">
      {products.map((product: Product, index) => {
        return <ProductCard key={index} {...product} />
      })}
    </div>
  )
}
