angular.module("raffle")
  .controller("loginCtrl", ["$log", "$scope", "$state", "User",
    function($log, $scope, $state, User) {
      $scope.user = new User();
    }
  ])
