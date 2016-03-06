function dayDiff(first, second) {
  return Math.round((second-first)/(1000*60*60*24));
}

export default class PinController {
  constructor() {
    this.name = 'pin';

    if (this.data.nextDate) {
      this.bullets = Math.abs(dayDiff(new Date(this.data.date), new Date(this.data.nextDate))) / 7;
    }
    else {
      this.bullets = 5;
    }

    this.bulletArr = [];
    for (var i = 0; i < this.bullets; i++)
      this.bulletArr.push(i);
  }
}
