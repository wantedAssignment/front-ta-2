import React from 'react';
//
import HomePresenter from './HomePresenter';
import backendAPI from '../../api';

class HomeContainer extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    try {
      const data = await backendAPI.loadData();
      this.setState({ data });
      console.log(data);
    } catch (error) {}
  }

  render() {
    return <HomePresenter data={this.state.data} />;
  }
}

export default HomeContainer;
