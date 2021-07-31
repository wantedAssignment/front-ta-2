import React from 'react';
import {
  Brand,
  InfoWrapper,
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
          <Item key={item.id} onClick={() => handleAddItem(item)}>
            <InfoWrapper to={`/product/${item.id}`}>
              <Title>{item.title}</Title>
              <Brand>{item.brand}</Brand>
              <Price>{item.price}원</Price>
            </InfoWrapper>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default ProductPresenter;
