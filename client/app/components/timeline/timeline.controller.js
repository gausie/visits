class timelineController {
  constructor(dataService) {
    this.name = 'timeline';

    dataService.getData(1).then(x => {
      this.cards = x.cards;
    });
  }
}

timelineController.$inject = ['dataService']

export default timelineController;
