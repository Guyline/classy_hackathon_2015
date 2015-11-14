angular.module("raffle")
  .controller("prizesCtrl", ["$log", "$scope", "organizationService",
    function($log, $scope, organizationService) {
      organizationService.indexPrizes(34).then(function(response) {
        $scope.prizes = response.data.data;
      }, function(error) {
        $log.log(error);
      });
    }
  ]);
