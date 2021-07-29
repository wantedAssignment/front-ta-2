const backendAPI = {
  loadData: () => fetch('http://localhost:3000/data/data.json'),
  toJSON: (res) => res.json(),
};

export default backendAPI;
