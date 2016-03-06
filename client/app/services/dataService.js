import angular from 'angular';

class DataService {
  constructor($http) {
    this.$http = $http;
  }

  getData(id) {
    return this.$http
      .get(`/data/data-${id}.json`)
      .then(results => results.data); // Unwrap...
  }
}

DataService.$inject = ['$http'];

export default angular
  .module('dataService', [])
  .service('dataService', DataService);
