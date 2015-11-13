angular.module("raffle")
  .controller("createCtrl", ["$log", "$scope", "$state", "campaignService",
    function($log, $scope, $state, campaignService) {

      campaignService.index().then(function(response) {
        $scope.campaigns = response.data.data;
      }, function(error) {
        $log.log(error);
      });

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
      }
    }
  ])
