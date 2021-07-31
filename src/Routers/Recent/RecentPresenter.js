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

const RecentPresenter = ({
  data,
  brands,
  brandUpdateFilter,
  hideUnLikedFilter,
  dateSorting,
  priceSorting,
}) => {
  useEffect(() => {}, []);

  const onhandleClick = () => {
    alert('싫다고 하잖아');
  };

  if (!data || data?.length === 0) {
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
        <div>
          <label>관심 없는 상품 숨기기</label>
          <input type="checkbox" onChange={hideUnLikedFilter} />
        </div>
        <div>
          <select onChange={dateSorting}>
            <option value="">--날짜 순--</option>
            <option value="recent">최근 순</option>
          </select>
        </div>
        <div>
          <select onChange={priceSorting}>
            <option value="">--가격 순--</option>
            <option value="priceUp">가격 오름차순</option>
            <option value="priceDown">가격 내림차순</option>
          </select>
        </div>
        <div>데이터 없음</div>
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
      <div>
        <label>관심 없는 상품 숨기기</label>
        <input type="checkbox" onChange={hideUnLikedFilter} />
      </div>
      <div>
        <select onChange={dateSorting}>
          <option value="">--날짜 순--</option>
          <option value="recent">최근 순</option>
        </select>
      </div>
      <div>
        <select onChange={priceSorting}>
          <option value="">--가격 순--</option>
          <option value="priceUp">가격 오름차순</option>
          <option value="priceDown">가격 내림차순</option>
        </select>
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
