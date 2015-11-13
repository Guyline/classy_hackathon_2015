angular.module("raffle")
  .factory("Raffle", ["$log", "raffleService",
    function($log, raffleService) {
      function Raffle() {

      }

      Raffle.prototype.create = function() {
        raffleService.post(this).then(function(response) {
          $log.log(response);
        }, function(error) {
          $log.log(error);
        })
      };

      return Raffle;
    }
  ])
