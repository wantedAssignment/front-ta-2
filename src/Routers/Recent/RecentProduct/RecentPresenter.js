import React from 'react';

const RecentPresenter = ({ data, likedData }) => {
  // data: 기본 배열
  // likedData: sorting된 배열
  console.log('Presenter의 likedData', likedData);
  return (
    <ul>
      {likedData && likedData.length > 0
        ? likedData.map((item, KEY) => (
            <div key={KEY} style={{ margin: 30 }}>
              <li>{item.id}</li>
              <li>{item.title}</li>
              <li>{item.brand}</li>
              <li>{item.price}</li>
              <li>{item.date}</li>
              {/* <li>{String(item.liked)}</li> */}
              <li>{item.name}</li>
              <li>{item.like}</li>
            </div>
          ))
        : data.map((item, KEY) => (
            <div key={KEY} style={{ margin: 30 }}>
              <li>{item.id}</li>
              <li>{item.title}</li>
              <li>{item.brand}</li>
              <li>{item.price}</li>
              <li>{item.date}</li>
              {/* <li>{String(item.liked)}</li> */}

              <li>{item.name}</li>
              <li>{item.like}</li>
            </div>
          ))}
    </ul>
  );
};

export default RecentPresenter;
