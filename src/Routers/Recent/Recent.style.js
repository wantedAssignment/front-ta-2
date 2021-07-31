import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section``;

export const FilterHeader = styled.div`
  display: flex;
`;
export const Disable = styled.div`
  margin-right: 40px;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.li`
  display: block;
  background-color: ${({ liked }) => (liked ? '#fbccc6' : '#dedede')};
  padding: 20px;
  width: 400px;
  margin-bottom: 20px;
  border-radius: 10px;
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
  margin-bottom: 5px;
`;

export const LikeText = styled.span`
  color: ${({ liked }) => (liked ? '#000' : 'rgba(0,0,0,0.4)')};
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const Button = styled(Link)`
  position: absolute;
  right: 10px;
  bottom: 10px;
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
