import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import Card from './card/card';

let commonModule = angular.module('app.common', [
  Navbar.name,
  User.name,
  Card.name
]);

export default commonModule;
