class NavbarController {
  constructor($window) {
    this.name = 'navbar';
    this.type = this.type || 'default';
    this.$window = $window;
  }
  back() {
    this.$window.history.back();
  }
}

NavbarController.$inject = ['$window'];

export default NavbarController;
