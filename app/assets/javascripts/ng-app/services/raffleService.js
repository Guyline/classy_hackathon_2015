angular.module("raffle")
  .service("raffleService", ["$log", "$http",
    function($log, $http) {
      return {
        index: function() {
          return $http({
            method: "GET",
            url: "/api/v1/raffles"
          });
        }
      };
    }
  ])
