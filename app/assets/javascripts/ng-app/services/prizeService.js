angular.module("raffle")
  .service("prizeService", ["$log", "$http",
    function($log, $http) {
      return {
        get: function(prizeId) {
          return $http({
            method: "GET",
            url: "/api/v1/prizes/" + prizeId
          });
        }
      };
    }
  ])
