angular.module("raffle")
  .controller("dashCtrl", ["$log", "$scope", "raffleService", "user",
    function($log, $scope, raffleService, user) {
      $scope.user = user;

      raffleService.index().then(function(response) {
        $scope.raffles = response.data.data;
      }, function(error) {
        $log.error(error);
      });
    }
  ]);
