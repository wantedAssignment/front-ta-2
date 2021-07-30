import React from 'react';
import styled from 'styled-components';

const HomePresenter = ({ data, ITEM, readRandom, setDislike }) => {
  return (
    <Wrapper>
      <Container>
        <ButtonWrapper>
          <Button onClick={readRandom}>랜덤조회</Button>
          <Button onClick={setDislike}>관심없음</Button>
        </ButtonWrapper>
        <ItemWrapper>
          {ITEM.map((v, i) =>(
            <ItemSubWrapper key={i}>
              <Item>{v} :</Item>
              {/* <Value>{i === 0 && data?.title}</Value> */}
              {/* <Value>{i === 1 && data?.brand}</Value> */}
              {/* <Value>{i === 2 && `${data?.price} 원`}</Value> */}
            </ItemSubWrapper>
          ))}
        </ItemWrapper>
      </Container>
    </Wrapper>
  );
};

export default HomePresenter;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 10px rgba(0,0,0,0.3);
  width: 800px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 15px;
  background-color: #FADCD9;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
`;
const Button = styled.button`
  border: none;
  color: white;
  background-color: #F8AFA6;
  border-radius: 10px;
  width: 60px;
  height: 30px;
  margin-right: 10px;
  font-size: 11px;
  box-shadow: 3px 3px 2px rgba(0,0,0,0.3);
  cursor: pointer;
`;
const ItemWrapper = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0,0,0,0.1);
  padding-left: 40px;
  padding-top: 30px;
  background-color: #F9F1F0;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  font-size: 20px;
  
  section:first-child {
    font-size: 32px;
  }
`;
const ItemSubWrapper = styled.section`
  margin-bottom: 45px;
  display: flex;
  align-items: center;
`;
const Item = styled.div`
  margin-right: 15px;
  font-weight: bold;
  color: rgba(0,0,0,0.6);
  width: 100px;
  text-align: end;
`;
const Value = styled.span`
  color: rgba(0,0,0,0.8);
  font-size: 18px;
`;
