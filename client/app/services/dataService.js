import angular from 'angular';

class DataService {
  constructor($http) {
    this.$http = $http;
  }

  getData(id) {
    return this.$http
      .get('/data/data-' + id + '.json')
      .then(x => x.data); //Unwrap...
  }
}

DataService.$inject = ['$http'];

let module = angular
  .module('dataService', [])
  .service('dataService', DataService);

export default module;
