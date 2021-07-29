import React from 'react';
import { connect } from 'react-redux';
//
import HomePresenter from './HomePresenter';
import { loadData } from '../../reducer/index';
import backendAPI from '../../api';

class HomeContainer extends React.Component {
  state = {};

  async componentDidMount() {
    try {
      const data = await backendAPI.loadData();
      this.props.loadData(data);
    } catch (error) {}
  }

  render() {
    return <HomePresenter data={this.props.data} />;
  }
}

function mapStateToProps(state) {
  return { data: state.data };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: (state) => dispatch(loadData(state)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
