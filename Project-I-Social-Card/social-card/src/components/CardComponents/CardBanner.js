import React from 'react';
import './Card.css';

const STYLE_BASE = 'card-banner_'

const CardBanner = () => {
  return (
    <div className={`${STYLE_BASE}imageContainer`} >
      <img src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" alt="card banner" />
    </div>
  )
};

export default CardBanner;