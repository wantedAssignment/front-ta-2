import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navigation = withRouter(({ location: { pathname } }) => {
  return (
    <>
      <Link to="/product">Product</Link>
      <Link to="/recentList">RecentList</Link>
    </>
  );
});

export default Navigation;
