class NavbarController {
  constructor($window, dataService) {
    this.name = 'navbar';
    this.type = this.type || 'default';
    this.$window = $window;
    dataService.getNormalizedData(1).then(data => {
      this.name = data.entities.users[1].name;
    });
  }
  back() {
    this.$window.history.back();
  }
}

NavbarController.$inject = ['$window', 'dataService'];

export default NavbarController;