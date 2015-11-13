angular.module("raffle")
  .controller("dashCtrl", ["$log", "$scope", "raffleService", "user", "User",
    function($log, $scope, raffleService, user, User) {
      $scope.user = new User(user.username, user.password);

      raffleService.index().then(function(response) {
        $scope.raffles = response.data.data;
      }, function(error) {
        $log.error(error);
      });
    }
  ]);
