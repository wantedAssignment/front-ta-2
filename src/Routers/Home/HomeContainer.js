import React from 'react';
import HomePresenter from './HomePresenter';
import backendAPI from '../../api';
import { LocalStorage } from '../../localStorage';

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.storage = new LocalStorage();
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  state = {
    data: [],
  };

  _fetchData = async () => {
    const data = await backendAPI.loadData();
    this.setState({ data });
  };

  componentDidMount() {
    this._fetchData();
  }

  handleAddItem(item) {
    this.storage.add(item);
  }

  render() {
    return (
      <HomePresenter
        data={this.state.data}
        handleAddItem={this.handleAddItem}
      />
    );
  }
}

export default HomeContainer;
