import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = withRouter(({ location: { pathname } }) => {
  return (
    <Header>
      <Link to="/product">Product</Link>
      <Link to="/recentList">RecentList</Link>
    </Header>
  );
});

export default Navigation;

const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #ececec;
  margin-bottom: 30px;

  > a {
    display: inline-block;
    padding: 0 20px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #000;
      opacity: 0;
      transition: 0.3s;
    }

    &:hover {
      &:before {
        opacity: 1;
      }
    }
  }
`;
