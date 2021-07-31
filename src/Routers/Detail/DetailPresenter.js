import React from 'react';
import {
  Value,
  Item,
  ItemSubWrapper,
  ItemWrapper,
  Button,
  ButtonWrapper,
  Container,
  Wrapper,
} from './Detail.style';

const HomePresenter = ({ data, ITEM, readRandom, setDislike }) => {
  return (
    <Wrapper>
      <Container>
        <ButtonWrapper>
          <Button onClick={readRandom}>랜덤조회</Button>
          <Button onClick={setDislike}>관심없음</Button>
        </ButtonWrapper>
        <ItemWrapper>
          {ITEM.map((v, i) => (
            <ItemSubWrapper key={i}>
              <Item>{v} :</Item>
              <Value>{i === 0 && data?.title}</Value>
              <Value>{i === 1 && data?.brand}</Value>
              <Value>{i === 2 && `${data?.price} 원`}</Value>
            </ItemSubWrapper>
          ))}
        </ItemWrapper>
      </Container>
    </Wrapper>
  );
};

export default HomePresenter;
