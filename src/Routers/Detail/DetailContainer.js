import React from 'react';
// import backendAPI from '../../api';
import DetailPresenter from './DetailPresenter';

const ITEM = ['제목', 'Brand', '가격'];

class DetailContainer extends React.Component {
  state = {
    dataArr: [],
    data: {},
    id: Number(this.props.location.pathname.split('/').slice(-1)),
  };

  readRandom = () => {
    // const MAX = 50;
    // let newID = Math.floor(Math.random() * MAX) + 1;
    // while ( newID === this.state.id) {
    //   newID = Math.floor(Math.random() * MAX) + 1;
    // };
    // this.setState({
    //   id: newID,
    // });
  };
  
  setDislike = () => {
    // this.readRandom();
  }

  read = async () => {
    // try {
    //   const result = await backendAPI.loadData();
    //   this.setState({
    //     dataArr: result,
    //   });
    //   const data = result.filter(v => v.id === this.state.id);
    //   this.setState({
    //     data: data[0],
    //   });
    // } catch (error) {
    //   alert('오류 발생');
    // };
  };

  componentDidMount() {
    // this.read();
  };

  componentDidUpdate(_, prev) {
    // if (this.state.id !== prev.id) {
    //   this.read();
    // };
  };

  render() {
    return (
      <DetailPresenter
        data={this.state.data}
        ITEM={ITEM}
        readRandom={this.readRandom}
        setDislike={this.setDislike}
      />
    );
  };
};

export default DetailContainer;
