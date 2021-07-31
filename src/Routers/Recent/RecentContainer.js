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
    this.hideUnLikedFilter = this.hideUnLikedFilter.bind(this);
    this.dateSorting = this.dateSorting.bind(this);
    this.priceSorting = this.priceSorting.bind(this);
  }

  componentDidMount() {
    const myTimer = new Timer(
      this.clearLocalStorage.bind(this),
      this.props.revokeLiked,
      LOCALSTORAGE_KEY
    );

    // 로컬 스토리지에서 아이템 아이디, 브랜드 목록 추출
    const items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (!items) {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify([]));
    }

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

  // 브랜드 필터 함수
  brandUpdateFilter(e, data) {
    console.log(e.target.checked, data);
    if (e.target.checked) {
      const items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
        .filter((item) => item.brand === data)
        .map((item) => item.id);

      console.log(items);
      const storeItem = this.props.data.filter((item) =>
        items.includes(item.id)
      );

      console.log(storeItem);
      const newData = [...this.state.cards, ...storeItem];

      this.setState({ ...this.state, cards: newData });
    } else {
      const items = this.state.cards.filter((item) => item.brand !== data);

      this.setState({ ...this.state, cards: items });
    }
  }

  // 관심없음 필터 함수
  hideUnLikedFilter(e) {
    if (e.target.checked) {
      const newData = this.state.cards.filter(
        (item) => item.liked === e.target.checked
      );

      this.setState({ ...this.state, cards: newData });
    } else {
      const items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).map(
        (item) => item.id
      );
      const cardsId = this.state.cards.map((item) => item.id);
      const newData = items.filter((item) => !cardsId.includes(item));
      const updateData = this.props.data.filter((item) =>
        newData.includes(item.id)
      );

      this.setState({
        ...this.state,
        cards: this.state.cards.concat(updateData),
      });
    }
  }

  // 날짜 정렬 함수
  dateSorting(e) {
    switch (e.target.value) {
      case 'recent':
        break;
      default:
        break;
    }
  }

  // 가격 정렬 함수
  priceSorting(e) {
    switch (e.target.value) {
      case 'priceUp':
        const ascData = [...this.state.cards].sort((a, b) => a.price - b.price);
        this.setState({ ...this.state, cards: ascData });
        break;
      case 'priceDown':
        const desData = [...this.state.cards].sort((a, b) => b.price - a.price);
        this.setState({ ...this.state, cards: desData });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <RecentPresenter
        data={this.state.cards}
        brands={this.state.brands}
        brandUpdateFilter={this.brandUpdateFilter}
        hideUnLikedFilter={this.hideUnLikedFilter}
        dateSorting={this.dateSorting}
        priceSorting={this.priceSorting}
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
