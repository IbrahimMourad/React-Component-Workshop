import React from 'react';
import './styles.css';

export const Hamada = ({ id, title, desc }) => {
  return (
    <div className="item">
      <h2>
        {id} | {title}
      </h2>
      <p>{desc}</p>
    </div>
  );
};
