import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Disable,
  FilterHeader,
  ButtonWrapper,
  Button,
  Wrapper,
  Card,
  Title,
  Brand,
  Price,
  LikeText,
  List,
} from './Recent.style';

const RecentPresenter = ({
  data,
  brands,
  brandUpdateFilter,
  hideUnLikedFilter,
  dateSorting,
  priceSorting,
}) => {
  useEffect(() => {}, []);

  if (!data || data?.length === 0) {
    return (
      <FilterHeader>
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
        <Disable>
          <label>관심 없는 상품 숨기기</label>
          <input type="checkbox" onChange={hideUnLikedFilter} />
        </Disable>
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
      </FilterHeader>
    );
  }

  return (
    <Wrapper>
      <FilterHeader>
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
        <Disable>
          <label>관심 없는 상품 숨기기</label>
          <input type="checkbox" onChange={hideUnLikedFilter} />
        </Disable>
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
      </FilterHeader>
      <List>
        {data.map((item) => {
          return (
            <Card key={item.id} liked={item.liked}>
              <Title>{item.title}</Title>
              <Brand>{item.brand}</Brand>
              <Price>{item.price} 원</Price>
              <LikeText liked={item.liked}>
                {item.liked ? '좋아요' : '싫어요'}
              </LikeText>
              <ButtonWrapper>
                {item.liked && (
                  <Button to={`/product/${item.id}`}>상세보기</Button>
                )}
              </ButtonWrapper>
            </Card>
          );
        })}
      </List>
    </Wrapper>
  );
};

export default RecentPresenter;
