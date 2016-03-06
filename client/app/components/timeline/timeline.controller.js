export default class TimelineController {
  constructor(dataService) {
    this.name = 'timeline';

    dataService.getData(1).then(user => {
      this.cards = user.cards;
    });
  }
}

TimelineController.$inject = ['dataService'];
