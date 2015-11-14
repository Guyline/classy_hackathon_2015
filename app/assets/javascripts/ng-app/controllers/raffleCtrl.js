angular.module("raffle")
  .controller("raffleCtrl", ["$log", "$scope", "$state",
  "campaignService", "raffleService", "organizationService", "Raffle",
    function($log, $scope, $state,
      campaignService, raffleService, organizationService, Raffle) {

      campaignService.index().then(function(response) {
        $scope.campaigns = response.data.data;

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

      $scope.dateStatus = {
        start_time: {
          opened: false
        },
        end_time: {
          opened: false
        }
      };

      $scope.statusOptions = {
        "pending": "Pending",
        "in_progress": "In progress",
        "completed": "Completed",
        "finalized": "Finalized"
      };

      $scope.openTime = function(which) {
        $scope.status[which].opened = true;
      };
    }
  ])
