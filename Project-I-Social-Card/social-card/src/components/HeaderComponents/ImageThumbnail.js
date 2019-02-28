import React from 'react';
import './Header.css';

const STYLE_BASE = 'image-thumbnail_';

const ImageThumbnail = () => {
  return (
    <div className={`${STYLE_BASE}imageContainer`} >
      <img src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt="logo" />
    </div>
  )
}

export default ImageThumbnail;