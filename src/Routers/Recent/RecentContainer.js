import React from 'react';
import { connect } from 'react-redux';
//
import RecentPresenter from './RecentPresenter';
import { revokeLiked } from '../../reducer/index';
import Timer from '../../utils/timer';

const LOCALSTORAGE_KEY = 'recordData';

class RecentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      clock: null,
      brands: [],
    };
    this.brandUpdateFilter = this.brandUpdateFilter.bind(this);
  }

  componentDidMount() {
    const myTimer = new Timer(
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
          liked: false,
          data: 1651198189191,
          price: 30000,
        },
      ])
    );
    const items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    const brands = new Set(items.map((item) => item.brand));
    const setTimer = setInterval(() => myTimer.checkClock(), 1000);

    this.setState({
      cards: items,
      clock: setTimer,
      brands: Array.from(brands, (item) => item),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.clock);
  }

  clearLocalStorage() {
    this.setState({ ...this.state, cards: [] });
  }

  brandUpdateFilter(e, data) {
    console.log(e.target.checked);
    console.log(data);

    if (e.target.checked) {
      const items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).filter(
        (item) => item.brand === data
      );
      console.log(items);
      const newData = [...this.state.cards, ...items];
      this.setState({ ...this.state, cards: newData });
    } else {
      const items = this.state.cards.filter((item) => item.brand !== data);
      this.setState({ ...this.state, cards: items });
    }
  }

  render() {
    return (
      <RecentPresenter
        data={this.state.cards}
        brands={this.state.brands}
        brandUpdateFilter={this.brandUpdateFilter}
      />
    );
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
