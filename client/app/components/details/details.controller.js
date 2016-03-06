export default class DetailsController {
  constructor(dataService, $stateParams) {
    this.name = 'details';
    this.id = $stateParams.id;

    dataService.getNormalizedData(1).then(data => {
      this.data = data.entities.cards[this.id];
    });
  }
}

DetailsController.$inject = ['dataService', '$stateParams'];
