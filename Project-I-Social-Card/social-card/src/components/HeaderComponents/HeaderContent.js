import React from 'react';
import './Header.css';

const STYLE_BASE = 'header-content_';

const HeaderContent = () => {
  return (
    <div className={`${STYLE_BASE}contentContainer`} >
      Let's learn React by building simple interfaces with components. Don't try to
      overthink it, just keep it simple and have fun. Once you feel comfortable using
      components you are well on your way to mastering React!
    </div>
  )
}

export default HeaderContent;