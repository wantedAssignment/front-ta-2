export class LocalStorage {
  constructor() {
    this.arr = this._getAll() || [];
  }

  add(item) {
    const data = this._getAll();
    if (!data) {
      this.arr.push(item);
      this._save(this.arr);
    }
    // 데이터가 1개이고, 같은 것을 누른 경우 종료
    else if (data.length === 1 && item.id === data[0].id) {
      return;
      // 데이터가 2개 이상일 때
    } else {
      const isClikedSame = data.some((v) => v.id === item.id);
      // localstorage에 이미 있는지 확인, 있다면 삭제후 갱신
      if (isClikedSame) {
        data.forEach((v, index) => {
          if (v.id === item.id) {
            data.splice(index, 1, { ...item, date: new Date().getTime() });
            this.arr = data;
            this._clear(); // 모두 지우고
            this._save(this.arr); // 새로운 데이터 다시 저장
          }
        });
        // localstorage에 없는 경우 그냥 추가
      } else {
        this.arr.push(item);
        this._save(this.arr);
      }
    }
  }
  _getAll() {
    return JSON.parse(localStorage.getItem('recordData'));
  }
  _save(data) {
    localStorage.setItem('recordData', JSON.stringify(data));
  }
  _clear() {
    const data = this._getAll();
    if (!data) return;
    localStorage.removeItem('recordData');
  }
}
