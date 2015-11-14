angular.module("raffle")
  .controller("prizeCtrl", ["$log", "$scope", "$state", "Prize", "prizeService",
    function($log, $scope, $state, Prize, prizeService) {
      if ($state.params.prizeId) {
        prizeService.get($state.params.prizeId).then(function(response) {
          $scope.prize = new Prize(response.data);
          $log.log($scope.prize);
        }, function(error) {
          $log.log(error);
          alert("This prize doesn't exist.");
        });
      } else {
        $scope.prize = new Prize();
      }
    }
  ]);
