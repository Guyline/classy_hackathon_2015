angular.module("raffle")
  .controller("prizesCtrl", ["$log", "$scope", "organizationService",
    function($log, $scope, organizationService) {
      organizationService.indexPrizes(34).then(function(response) {
        $scope.prizes = [{
          name: "Coloring book",
          id: 34
        },
        {
          name: "Pencil Pack",
          id: 35
        },
        {
          name: "Dinosaur toy",
          id: 36
        }];
      }, function(error) {
        $log.log(error);
      });
    }
  ]);
