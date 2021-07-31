// import shortid from 'shortid';

const backendAPI = {
  loadData: () => {
    return fetch('https://camelcommerce.netlify.app/data/data.json')
      .then((res) => res.json())
      .then((arr) => {
        return arr.map((item, index) => {
          item.id = String(index + 1);
          // 페이지 볼 때마다 초기화 되는 문제가 있는데, 데이터 요청을 버튼으로 해야하나 문제 고민
          item.liked = true;
          item.date = new Date().getTime();
          return item;
        });
      });
  },
};

export default backendAPI;
