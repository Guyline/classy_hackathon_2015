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

      .state("index.prizes",  {
        url: 'prizes',
        views: {
          "header": {
            templateUrl: "ng-app/header.html"
          },
          "body": {
            templateUrl: "ng-app/prizes.html"
          }
        }
      })

      .state("index.raffles",  {
        url: 'raffles',
        views: {
          "header": {
            templateUrl: "ng-app/header.html"
          },
          "body": {
            templateUrl: "ng-app/raffles.html"
          }
        }
      })

      .state("index.createPrize", {
        url: "prize/new",
        views: {
          "header@index": {
            templateUrl: "ng-app/header.html"
          },
          "body@index": {
            templateUrl: "ng-app/prize.html",
            controller: "prizeCtrl"
          }
        }
      })

      .state("index.createRaffle", {
        url: "raffle/new",
        views: {
          "header@index": {
            templateUrl: "ng-app/header.html"
          },
          "body@index": {
            templateUrl: "ng-app/raffle.html",
            controller: "raffleCtrl"
          }
        }
      })

      .state("index.editRaffle", {
        url: "raffle/:raffleId",
        views: {
          "header@index": {
            templateUrl: "ng-app/header.html",
          },
          "body@index": {
            templateUrl: "ng-app/raffle.html",
            controller: "raffleCtrl"
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
