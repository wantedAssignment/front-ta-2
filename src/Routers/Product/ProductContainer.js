import React from 'react';
import { connect } from 'react-redux';
//
import ProductPresenter from './ProductPresenter';
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
    return <ProductPresenter data={this.props.data} />;
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
