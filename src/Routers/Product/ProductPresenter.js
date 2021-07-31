import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductPresenter = ({ data, handleAddItem }) => {
  return (
    <ul>
      {data.map((item) => (
        <li
          key={item.id}
          onClick={() => handleAddItem(item)}
          style={{ margin: 30, cursor: 'pointer' }}
        >
          <Link to={`/product/${item.id}`}>
            <span>{item.id}</span>
            <p>{item.title}</p>
            <span>{item.brand}</span>
            <span>{item.price}</span>
            <span>{item.date}</span>
            <span>{String(item.liked)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductPresenter;
