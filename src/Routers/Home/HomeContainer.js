import React from 'react';
//
import HomePresenter from './HomePresenter';
import backendAPI from '../../api';

class HomeContainer extends React.Component {
  state = {};

  async componentDidMount() {
    try {
      const data = await backendAPI.loadData();
      const realData = await backendAPI.toJSON(data);
      console.log(realData);
    } catch (error) {}
  }

  render() {
    return <HomePresenter />;
  }
}

export default HomeContainer;
