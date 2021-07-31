import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../../reducer';
import RecentPresenter from './RecentPresenter';
class RecentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: '중고 나이키',
          name: '나이키22',
          price: 50000,
          id: '1',
          liked: true,
          date: '1627635063984',
        },
        {
          title: '테아 흰검 245 30000원',
          name: '나이키33',
          price: 302000,
          id: '2',
          liked: false,
          date: '1627635063984',
        },
        {
          title: 'dfsdfdsfsdfdsfds',
          name: '44나이키33',
          price: 102000,
          id: '3',
          liked: true,
          date: '1627635063984',
        },
      ],
      likedData: [],
      selected: '',
      check: false,
      // 더미
      t: ['2011.01.02', '2014.08.12', '2011.09.23'],
    };

    this.sortData = this.sortData.bind(this);
    this.sortBySelected = this.sortBySelected.bind(this);
    this.filterLiked = this.filterLiked.bind(this);
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
  }

  // filterLike(arr, isLike) {
  //   if (isLike) {
  //     // 체크상태일때
  //     return arr.filter((item) => item.like === true);
  //   } else {
  //     return arr.filter((item) => item.like === false);
  //   }
  // }

  onChangeCheckBox(e) {
    this.setState({ check: e.target.checked }, this.filterLiked);
  }

  onFilterChange(e) {
    this.setState({ selected: e.target.value }, this.sortData);
  }

  sortBySelected(selected) {
    //ex) dataName --> 그냥 데이터 혹은 liked데이터 : this.state.data
    // data에 따라서 sort 가 필요함
    if (selected === 'default') {
      this.setState({ data: this.state.data }); // data sort // liked data sort
    }

    if (selected === 'decrease') {
      const result = [...this.state.data].sort((a, b) => {
        return b.price - a.price;
      });
      this.setState({ data: result });
    }

    if (selected === 'latestLookup') {
      const result = [...this.state.data].sort((a, b) => {
        const day1 = new Date(a);
        const day2 = new Date(b);
        return day2 - day1;
      });
      this.setState({ data: result });
    }

    if (selected === 'increase') {
      const result = [...this.state.data].sort((a, b) => {
        return a.price - b.price;
      });
      this.setState({ data: result });
    }
  }

  // sortByAddChecked(selected) {
  //   //ex) dataName --> 그냥 데이터 혹은 liked데이터 : this.state.data
  //   // data에 따라서 sort 가 필요함
  //   if (selected === "default") {
  //     this.setState({ likedData: this.props.data });
  //   }

  //   if (selected === "decrease") {
  //     const result = [...this.state.data].sort((a, b) => {
  //       return b.price - a.price;
  //     });
  //     this.setState({ likedData: result });
  //   }

  //   if (selected === "latestLookup") {
  //     const result = [...this.state.data].sort((a, b) => {
  //       const day1 = new Date(a);
  //       const day2 = new Date(b);
  //       return day2 - day1;
  //     });
  //     this.setState({ likedData: result });
  //   }

  //   if (selected === "increase") {
  //     const result = [...this.state.data].sort((a, b) => {
  //       return a.price - b.price;
  //     });
  //     this.setState({ likedData: result });
  //   }
  // }

  //
  sortData() {
    this.sortBySelected(this.state.selected);
  }

  // checked: true 이면 싫어하는 상품을 가린다.
  filterLiked() {
    console.log(this.state.check);
    if (this.state.check) {
      console.log('data -->>>>', this.state.data);
      const result = this.state.data.filter((item) => item.liked === true);
      console.log(result);
      this.setState({ likedData: result }); // ok
      console.log('isChecked가 true -->>>>>>>', this.state.likedData);
    } else {
      this.setState({ likedData: null });
      console.log('isChecked가 false -->>>>>>>', this.state.likedData); // 갱신?
    }
  }

  async componentDidMount() {
    // 초기데이터
    // try {
    //   const data = await backendAPI.loadData();
    //   this.props.loadData(data);
    //   this.setState({ data: data });
    // } catch (error) {}
  }

  render() {
    return (
      <div>
        <div style={{ height: '200px' }}>
          <select
            className="menu"
            value={this.state.selected}
            onChange={this.onFilterChange.bind(this)}
          >
            <option value="default">전체보기</option>
            <option value="decrease"> 높은가격순 </option>
            <option value="latestLookup"> 최근조회순 </option>
            <option value="increase"> 낮은가격순 </option>
          </select>
          <div>
            <input type="checkbox" onChange={this.onChangeCheckBox} />
            관심없는상품 가리기{' '}
          </div>
        </div>
        <RecentPresenter
          data={this.state.data}
          checked={this.state.check}
          likedData={this.state.likedData}
        />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecentContainer);
