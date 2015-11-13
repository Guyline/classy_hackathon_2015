angular.module("raffle")
  .controller("createCtrl", ["$log", "$scope", "$state", "campaignService", "Raffle",
    function($log, $scope, $state, campaignService, Raffle) {

      campaignService.index().then(function(response) {
        $scope.campaigns = response.data.data;
      }, function(error) {
        $log.log(error);
      });

      $scope.raffle = new Raffle();

      $scope.status = {
        startDate: {
          opened: false
        },
        endDate: {
          opened: false
        }
      }

      $scope.openDate = function(which) {
        $scope.status[which].opened = true;
      };      
    }
  ])
