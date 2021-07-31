import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const List = styled.ul``;

export const Item = styled.li`
  position: relative;
  margin-bottom: 40px;
  display: block;
  background-color: #dedede;
  padding: 20px;
  width: 400px;
  transition: 0.3s;
  border-radius: 10px;

  &:hover {
    background-color: #fbccc6;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Brand = styled.span`
  font-size: 15px;
  display: block;
  color: #6a6a6a;
  margin-bottom: 10px;
`;

export const Price = styled.span`
  font-size: 18px;
  display: block;
`;

export const Button = styled(Link)`
  position: absolute;
  right: 15px;
  bottom: 15px;
  background-color: rgba(255, 255, 255, 0.4);
  display: inline-block;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 12px;
  transition: 0.3s;
  color: #6a6a6a;
  font-weight: 600;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
