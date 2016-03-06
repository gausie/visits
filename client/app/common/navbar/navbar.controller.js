export default class NavbarController {
  constructor(dataService) {
    dataService.getNormalizedData(1).then(data => {
      this.name = data.entities.users[1].name;
    });
  }
}

NavbarController.$inject = ['dataService'];
