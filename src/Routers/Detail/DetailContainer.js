import React from 'react';
import DetailPresenter from './DetailPresenter';
import { connect } from 'react-redux';
import { setDislike } from '../../reducer'

const ITEM = ['제목', 'Brand', '가격'];

class DetailContainer extends React.Component {
  state = {
    dataArr: [],
    data: {},
    id: this.props.location.pathname.split('/').slice(-1)[0],
  };

  readRandom = () => {
    const MAX = this.state.dataArr.length;
    let newID = String(Math.floor(Math.random() * MAX) + 1);
    while ( newID === this.state.id
      || this.props.result[Number(newID) - 1].liked === false
    ) {
      newID = String(Math.floor(Math.random() * MAX) + 1);
    };
    this.setState({
      id: newID,
    });
  };
  
  setDislike = () => {
    const newDataArr = [...this.props.result];
    newDataArr[Number(this.state.id) - 1] = {
      ...this.props.result[Number(this.state.id) - 1],
      liked: false,
    };
    this.props.setDislike(newDataArr)
    this.readRandom();
  };

  componentDidMount() {
    this.setState({
      dataArr: this.props.result,
      data: this.props.result[Number(this.state.id) - 1],
    });
  };

  componentDidUpdate(_, prev) {
    if (this.state.id !== prev.id) {
      this.setState({
        data: this.props.result[Number(this.state.id) - 1],
      });
    };
  };

  render() {
    console.log(this.state.id)
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

const mapStateToProps = state => ({
  result: state.data,
});

const mapDispatchToProps = dispatch => ({
  setDislike: (state) => dispatch(setDislike(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
