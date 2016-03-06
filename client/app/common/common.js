import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import Card from './card/card';
import Pin from './pin/pin';

let commonModule = angular.module('app.common', [
  Navbar.name,
  User.name,
  Card.name,
  Pin.name
]);

export default commonModule;
