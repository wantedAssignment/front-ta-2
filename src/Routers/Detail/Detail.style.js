import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  margin-top: 40px;
  padding: 20px;
  min-width: 700px;
  background-color: #fadcd9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  border: none;
  color: white;
  background-color: #f8afa6;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 13px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #f39f94;
  }
  &:last-of-type {
    background-color: #c6c6c6;
    &:hover {
      background-color: #b0b0b0;
    }
  }
`;
export const ItemWrapper = styled.div`
  font-size: 20px;
  padding: 40px 0;
`;

export const ItemSubWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Item = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-weight: 600;
`;

export const Value = styled.span``;
