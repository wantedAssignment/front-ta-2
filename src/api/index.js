import shortid from 'shortid';

const backendAPI = {
  loadData: () => {
    return fetch('http://localhost:3000/data/data.json')
      .then((res) => res.json())
      .then((arr) => {
        return arr.map((item) => {
          item.id = shortid.generate();
          item.liked = true;
          item.date = new Date().getTime();
          return item;
        });
      });
  },
};

export default backendAPI;
