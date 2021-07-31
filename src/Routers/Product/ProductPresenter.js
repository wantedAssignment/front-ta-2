import React from 'react';
import {
  Button,
  Brand,
  Item,
  List,
  Price,
  Title,
  Wrapper,
} from './Product.style';

const ProductPresenter = ({ data, handleAddItem }) => {
  return (
    <Wrapper>
      <List>
        {data.map((item) => (
          <Item key={item.id} o>
            <Title>{item.title}</Title>
            <Brand>{item.brand}</Brand>
            <Price>{item.price}원</Price>
            <Button
              to={`/product/${item.id}`}
              onClick={() => handleAddItem(item)}
            >
              상세보기
            </Button>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default ProductPresenter;
