import { AddProductButton } from 'components';
import React from 'react';
import { Product } from 'types';
import { formatCurrency } from 'utils/formatCurrency';
import './styles.css'

export const ProductCard: React.FC<Product> = ({ productImageUrl, productTitle, productOldPriceCents, productOnSalePriceCents, availableInstallmentsWithoutInterest, installmentsWithoutInterestPriceCents }) => {
  return (
    <div className="product-card">

      {/* TODO: Container with favorite button */}

      <img className="product-card__image" src={productImageUrl} alt={productTitle} />

      <div className="product-card__title-container">
        <p className="product-card__title">{productTitle}</p>
      </div>

      <div className="product-card__prices-container">
        <p className="product-card__old-price">{formatCurrency(productOldPriceCents / 100)}</p>
        <p className="product-card__sale-price">{formatCurrency(productOnSalePriceCents / 100)}</p>

        <p className="product-card__payment">em até <b>{availableInstallmentsWithoutInterest}x de R$ {formatCurrency(installmentsWithoutInterestPriceCents / 100)}</b> sem juros</p>
      </div>

      <AddProductButton />
    </div>
  )
}
