import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

const STYLE_BASE = 'header-container_'

const HeaderContainer = () => {
  return (
    <div className={`${STYLE_BASE}headerMainContainer`} >
      <div className={`${STYLE_BASE}headerTitle`} >
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  )
}

export default HeaderContainer;