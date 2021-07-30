import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background-color: skyblue;
  width: 300px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px;
`;

const RecentPresenter = ({ data, brands, brandUpdateFilter }) => {
  useEffect(() => {}, []);

  const onhandleClick = () => {
    alert('싫다고 하잖아');
  };

  if (data.length === 0) {
    return (
      <>
        <div>
          {brands.map((item) => (
            <div key={item}>
              <input
                type="checkbox"
                defaultChecked
                onClick={(e) => brandUpdateFilter(e, item)}
              />
              <label>{item}</label>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        {brands.map((item) => (
          <div key={item}>
            <input
              type="checkbox"
              defaultChecked
              onClick={(e) => brandUpdateFilter(e, item)}
            />
            <label>{item}</label>
          </div>
        ))}
      </div>
      {data.map((item) => {
        return (
          <Card key={item.id}>
            <div>{item.title}</div>
            <div>{item.brand}</div>
            <div>{item.price}</div>
            <div>{item.liked ? '좋아요' : '싫어요'}</div>
            <div>
              {item.liked ? (
                <Link to={`/product/${item.id}`}>클릭</Link>
              ) : (
                <div onClick={onhandleClick}>클릭</div>
              )}
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default RecentPresenter;
