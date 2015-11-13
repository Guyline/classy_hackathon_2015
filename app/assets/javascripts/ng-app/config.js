angular.module("raffle")
.config([
  '$locationProvider', '$stateProvider', '$urlRouterProvider',
  function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home',  {
        url: '/',
        templateUrl: 'ng-app/dashboard.html',
        resolve: {
          auth: ["authService",
            function(authService) {
              return authService.getUserDetails();
            }
          ]
        }
      })

      .state('login', {
        url: '/login',
        templateUrl: 'ng-app/login.html'
      });
  }
]);
