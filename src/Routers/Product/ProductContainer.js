import React from 'react';
import { connect } from 'react-redux';
//
import ProductPresenter from './ProductPresenter';
import { loadData } from '../../reducer/index';
import backendAPI from '../../api';
import { LocalStorage } from '../../utils/localStorage';

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.storage = new LocalStorage();
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  async componentDidMount() {
    try {
      const data = await backendAPI.loadData();
      this.props.loadData(data);
    } catch (error) {}
  }

  handleAddItem(item) {
    this.storage.add(item);
  }

  render() {
    return (
      <ProductPresenter
        data={this.props.data}
        handleAddItem={this.handleAddItem}
      />
    );
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
