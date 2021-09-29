import React, { useState } from 'react';
import { ReactComponent as Check } from "assets/images/check.svg";
import "./styles.css"



export const AddProductButton: React.FC = () => {
  const [isProductAdded, setIsProductAdded] = useState(false)

  return (
    <div className="button__container">

      <button
        className={isProductAdded ? 'button--added' : 'button'}
        data-testid="button" onClick={() => setIsProductAdded(prev => !prev)}>

        {isProductAdded && <Check />}
        {isProductAdded ? 'ADICIONADO' : 'ADICIONAR'}

      </button>
    </div >
  )
}
