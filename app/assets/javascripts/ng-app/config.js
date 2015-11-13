angular.module("raffle")
.config([
  "$locationProvider", "$stateProvider", "$urlRouterProvider",
  function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state("index", {
        abstract: true,
        url: "/",
        templateUrl: "ng-app/views.html",
        controller: "dashCtrl",
        resolve: {
          user: ["authService",
            function(authService) {
              return authService.getUserDetails(true);
            }
          ]
        }
      })
      .state("index.dashboard",  {
        url: '',
        views: {
          "header": {
            templateUrl: "ng-app/header.html"
          },
          "body": {
            templateUrl: "ng-app/dashboard.html"
          }
        }
      })

      .state("index.create", {
        url: "create",
        views: {
          "header@index": {
            templateUrl: "ng-app/header.html"
          },
          "body@index": {
            templateUrl: "ng-app/create.html",
            controller: "createCtrl"
          }
        }
      })

      .state("login", {
        url: "/login",
        templateUrl: "ng-app/login.html",
        controller: "loginCtrl"
      });
  }
]);
