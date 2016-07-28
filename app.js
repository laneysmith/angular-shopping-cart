angular
  .module('shoppingCartApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeController',
        templateUrl: 'views/home.html'
      })
      .state('checkout', {
        url: '/checkout',
        controller: 'CheckoutController',
        templateUrl: 'views/checkout.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      });
    $locationProvider.html5Mode(true);
  }]);
