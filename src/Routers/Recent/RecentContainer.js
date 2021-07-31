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
      brands: [],
      clock: null,
    };
    this.brandUpdateFilter = this.brandUpdateFilter.bind(this);
  }

  componentDidMount() {
    const myTimer = new Timer(
      this.clearLocalStorage.bind(this),
      this.props.revokeLiked,
      LOCALSTORAGE_KEY
    );

    // 로컬 스토리지에서 아이템 아이디, 브랜드 목록 추출
    const items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    const ids = items ? items.map((item) => item?.id) : [];
    const brands = items ? new Set(items.map((item) => item.brand)) : [];

    // 추출된 아이디로 리덕스 데이터 가져와서 갱신
    const storeItems = this.props.data.filter((item) => ids.includes(item?.id));

    // 1초마다 시간 감지
    const setTimer = setInterval(() => myTimer.checkClock(), 1000);

    this.setState({
      cards: storeItems,
      clock: setTimer,
      brands: Array.from(brands, (item) => item),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.clock);
  }

  // 시간되면 상태 비우는 함수
  clearLocalStorage() {
    this.setState({ ...this.state, cards: [] });
  }

  // 필터 함수
  brandUpdateFilter(e, data) {
    if (e.target.checked) {
      const items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
        .filter((item) => item.brand === data)
        .map((item) => item.id);

      const storeItem = this.props.data.filter((item) =>
        items.includes(item?.id)
      );

      const newData = [...this.state.cards, ...storeItem];
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
