import React, { useState } from 'react';
import { ReactComponent as Heart } from "assets/images/Heart.svg";
import { ReactComponent as PinkHeart } from "assets/images/PinkHeart.svg";
import './styles.css'

export const WishlistButton: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <button data-testid='wishlist-button'
      className={isFavorite ? "wishlist-button__container--bookmarked" : "wishlist-button__container"}
      onClick={() => setIsFavorite(prev => !prev)}
    >
      <Heart className="wishlist__heart-icon" data-testid='heart-icon' />
    </button>
  )
}
