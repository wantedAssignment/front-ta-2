import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 10px rgba(37, 13, 13, 0.15);
  width: 700px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  background-color: #fadcd9;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
`;

export const Button = styled.button`
  border: none;
  color: white;
  background-color: #f8afa6;
  border-radius: 15px;
  padding: 10px 20px;
  margin-right: 10px;
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
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 40px;
  padding-top: 30px;
  background-color: #f9f1f0;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  font-size: 20px;

  /* section:first-child {
    font-size: 32px;
  } */
`;

export const ItemSubWrapper = styled.section`
  margin-bottom: 45px;
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  margin-right: 15px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
  text-align: end;
  font-size: 24px;
`;

export const Value = styled.span`
  color: rgba(0, 0, 0, 0.8);
  font-size: 18px;
`;
