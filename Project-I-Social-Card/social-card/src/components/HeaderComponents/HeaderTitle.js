import React from 'react';
import './Header.css';

const STYLE_BASE = 'header-title_';

const today = new Date();
const fullDate = today.toDateString();

const HeaderTitle = () => {
  return (
    <div className={`${STYLE_BASE}titleDiv`} >
      Lambda School <span className={`${STYLE_BASE}lambdaLink`} ><a href='https://lambdaschool.com/'>@LambdaSchool</a> {fullDate}</span>
    </div>
  )
};

export default HeaderTitle;