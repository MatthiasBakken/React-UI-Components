import React from 'react';
import './Card.css';

const STYLE_BASE = 'card-content_';

const CardContent = () => {
  return (
    <div
      style={{
        width: 614, display: 'flex',
        flexDirection: 'column',
        border: '1px solid #989898',
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem'
      }}>
      <h2 style={{ fontSize: '1.7rem', textDecoration: 'none', color: 'black', marginLeft: 10 }}><strong>Get Started with React</strong></h2>
      <div style={{ fontSize: '1.7rem', textDecoration: 'none', color: 'black', marginLeft: 10 }}>React makes it painless to create interactive UIs. Design simple views for each state in your application.</div>
      <a href="https://www.reactjs.org" style={{ fontSize: '1.7rem', textDecoration: 'none', color: 'gray', marginLeft: 10, marginBottom: 10 }}>reactjs.org</a>
    </div>
  )
};

export default CardContent;