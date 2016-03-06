import angular from 'angular';
import _ from 'lodash';

class DataService {
  constructor($http) {
    this.$http = $http;
  }

  getData(id) {
    return this.$http
      .get(`/data/data-${id}.json`)
      .then(results => results.data) // Unwrap...
      .then(x => {

        _.each(x.cards, (c, i) => {
            alert(i);
        })

        return x;

      });
  }
}

DataService.$inject = ['$http'];

export default angular
  .module('dataService', [])
  .service('dataService', DataService);
