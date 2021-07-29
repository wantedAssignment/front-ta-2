import React from 'react';

const HomePresenter = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <div key={item.id} style={{ margin: 30 }}>
          <li>{item.id}</li>
          <li>{item.title}</li>
          <li>{item.brand}</li>
          <li>{item.price}</li>
          <li>{item.date}</li>
          <li>{String(item.liked)}</li>
        </div>
      ))}
    </ul>
  );
};

export default HomePresenter;
