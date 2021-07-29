class Timer {
  constructor(func1, func2, name) {
    this.localStorageKey = name;
    this.updateCard = func1;
    this.updateState = func2;
    this.isTime = false;
  }

  // 채크 함수, 시분초가 0이되면 로컬 스토리지 비우고, 싫음 목록 제거
  //   const currentTime = new Date('July 20, 69 00:00:00');
  checkClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    if (hours === 0 && minutes === 0 && seconds === 0) {
      this.isTime = true;
    }

    if (this.isTime) {
      this.clearRecordData();
      this.clearToLikedDefault();
    }
  }

  clearRecordData() {
    window.localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    this.updateCard();
  }

  clearToLikedDefault() {
    this.updateState();
  }
}

export default Timer;
