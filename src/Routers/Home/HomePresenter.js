import React from 'react';

const HomePresenter = (props) => {
  const { data, handleAddItem } = props;

  return (
    <ul>
      {data.map((item) => (
        <li
          key={item.id}
          style={{ margin: 40, cursor: 'pointer' }}
          onClick={() => handleAddItem(item)}
        >
          <span>{item.id}</span>
          <h2>{item.title}</h2>
          <span>{item.brand}</span>
          <span>{item.price}</span>
          <span>{item.date}</span>
          <span>{String(item.liked)}</span>
        </li>
      ))}
    </ul>
  );
};

export default HomePresenter;
