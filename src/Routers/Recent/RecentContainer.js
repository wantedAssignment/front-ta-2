import React from 'react';
import { connect } from 'react-redux';
//
import RecentPresenter from './RecentPresenter';
import { revokeLiked } from '../../reducer/index';
import Timer from '../../utils/timer';

const LOCALSTORAGE_KEY = 'recordData';

class RecentContainer extends React.Component {
  state = {
    cards: [],
    clock: null,
  };

  componentDidMount() {
    const myTimer = new Timer(
      this.props.data,
      this.clearLocalStorage.bind(this),
      this.props.revokeLiked,
      LOCALSTORAGE_KEY
    );

    localStorage.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify([
        {
          title: '중고 나이키 테아 흰검 245 30000원',
          brand: '나이키',
          id: 'asdnfsaidnf',
          liked: true,
          data: 1651198189191,
          price: 30000,
        },
        {
          title: '거의새것 정품 구찌 보스턴백 토트백',
          brand: '구찌',
          id: 'fhbrejykkytuk',
          liked: true,
          data: 1651198189191,
          price: 30000,
        },
      ])
    );
    const items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    const setTimer = setInterval(() => myTimer.checkClock(), 1000);
    this.setState({ cards: items, clock: setTimer });
  }

  clearLocalStorage() {
    this.setState({ ...this.state, cards: [] });
  }

  componentWillUnmount() {
    clearInterval(this.state.clock);
  }

  render() {
    return <RecentPresenter data={this.state.cards} />;
  }
}

function mapStateToProps(state) {
  return { data: state.data };
}

function mapDispatchToProps(dispatch) {
  return {
    revokeLiked: () => dispatch(revokeLiked()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentContainer);
