import angular from 'angular';
import { normalize, Schema, arrayOf } from 'normalizr';

const userSchema = new Schema('users');
const cardSchema = new Schema('cards');

userSchema.define({
  cards: arrayOf(cardSchema),
});

class DataService {
  constructor($http) {
    this.$http = $http;
  }

  getData(id) {
    return this.$http
      .get(`/data/user-${id}.json`)
      .then(results => results.data);
  }

  getNormalizedData(id) {
    return this.getData(id)
      .then(data => this.normalize(data));
  }

  normalize(data) {
    return normalize(data, userSchema);
  }
}

DataService.$inject = ['$http'];

export default angular
  .module('dataService', [])
  .service('dataService', DataService);
