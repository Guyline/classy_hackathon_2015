angular.module("raffle")
  .service("raffleService", ["$log", "$http",
    function($log, $http) {
      return {
        index: function() {
          return $http({
            method: "GET",
            url: "/api/v1/raffles"
          });
        },
        post: function(raffle) {
          return $http({
            method: "POST",
            url: "/api/v1/raffles",
            data: raffle
          })
        },
        get: function(raffleId) {
          return $http({
            method: "GET",
            url: "/api/v1/raffles/" + raffleId
          });
        }
      };
    }
  ])
