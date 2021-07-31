import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const List = styled.ul``;

export const Item = styled.li`
  margin-bottom: 40px;
  cursor: pointer;
`;

export const InfoWrapper = styled(Link)`
  display: inline-block;
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
