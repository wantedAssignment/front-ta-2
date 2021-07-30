import React from 'react';

const ProductPresenter = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id} style={{ margin: 30, cursor: 'pointer' }}>
          <span>{item.id}</span>
          <p>{item.title}</p>
          <span>{item.brand}</span>
          <span>{item.price}</span>
          <span>{item.date}</span>
          <span>{String(item.liked)}</span>
        </li>
      ))}
    </ul>
  );
};

export default ProductPresenter;
