var app = angular.module('StarterApp', ['ngclipboard', 'ngMaterial', 'ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('index', {
      url: "/",
      templateUrl: 'flow.html'
  });
  $stateProvider.state('advertising', {
      url: "advertising",
      templateUrl: 'advertising.html'
  });
});

app.controller('MenuCtrl', function ($scope, $mdSidenav, $log) {

  $scope.toggleLeft = buildToggler('left');
  $scope.isOpenLeft = function(){
    return $mdSidenav('left').isOpen();
  };
  function buildToggler(navID) {
    return function() {
      $mdSidenav(navID)
        .toggle()
        .then(function () {
        });
    };
  }
});
app.controller('LeftCtrl', function ($scope, $mdSidenav, $log) {
  $scope.close = function () {
    $mdSidenav('left').close()
      .then(function () {
      });
  };
});

app.srefAndCloseSideNav = function(stateName,$state,$mdSidenav){
    $state.go(stateName);
    $mdSidenav('left').close();
}
