import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Card from './card/card';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  Card.name
]);

export default commonModule;
