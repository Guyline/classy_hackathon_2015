angular.module("raffle")
  .controller("raffleCtrl", ["$log", "$scope", "$state", "campaignService", "raffleService", "Raffle",
    function($log, $scope, $state, campaignService, raffleService, Raffle) {

      campaignService.index().then(function(response) {
        $scope.campaigns = response.data.data;

        if ($state.params.raffleId) {
          raffleService.get($state.params.raffleId).then(function(response) {
            $scope.raffle = new Raffle(response.data);
            $log.log($scope.raffle);
          }, function(error) {
            $log.log(error);
            alert("This raffle doesn't exist.");
          });
        } else {
          $scope.raffle = new Raffle();
        }
      }, function(error) {
        $log.log(error);
      });

      $scope.status = {
        start_time: {
          opened: false
        },
        end_time: {
          opened: false
        }
      }

      $scope.openTime = function(which) {
        $scope.status[which].opened = true;
      };
    }
  ])
