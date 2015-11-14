angular.module("raffle")
  .controller("raffleCtrl", ["$log", "$scope", "$state",
  "campaignService", "raffleService", "organizationService", "Raffle",
    function($log, $scope, $state,
      campaignService, raffleService, organizationService, Raffle) {

      campaignService.index(34).then(function(response) {
        $scope.campaigns = response.data.data;

        organizationService.indexPrizes(34).then(function(response) {
          $scope.prizes = response.data.data;
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
        $scope.dateStatus[which].opened = true;
      };

      $scope.addPrize = function() {
        $scope.raffle.prizes.push($scope.newPrize);
        $scope.newPrize = {};
      };

      $scope.getPrizeName = function(prizeId) {
        return $scope.prizes.filter(function(prize) {
          return prizeId == prize.id;
        })[0].name;
      };

      $scope.getPrizeAmount = function(prizeId) {
        return $scope.raffle.prizes.filter(function(prize) {
          return prizeId == prize.prize_id;
        })[0].amount;
      };

      $scope.removePrize = function(prizeId) {
        var prizeIndex = $scope.raffle.prizes.filter(function(prize) {
          return prizeId == prize.prize_id;
        })[0];

        $scope.raffle.prizes.splice(prizeIndex, 1);
      }
    }
  ])
