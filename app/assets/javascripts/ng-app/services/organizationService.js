angular.module("raffle")
  .service("organizationService", ["$log", "$http",
    function($log, $http) {
      return {
        index: function(organizationId) {
          return $http({
            method: "GET",
            url: "/api/v1/organizations/" + organizationId + "/prizes"
          });
        },
        postPrize: function(organizationId, prize) {
          return $http({
            method: "POST",
            url: "/api/v1/organizations/" + organizationId + "/prizes",
            data: prize
          })
        }
      };
    }
  ])
