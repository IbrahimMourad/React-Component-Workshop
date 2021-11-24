import React from 'react';
import { Hamada } from './CategoryCard';
import { data } from '../data';
import './styles.css';
const Container = () => {
  return (
    <div>
      <h1>Container</h1>
      <div className="container">
        {data.map((el) => (
          <Hamada id={el.id} title={el.title} desc={el.desc} />
        ))}
      </div>
    </div>
  );
};

export default Container;
