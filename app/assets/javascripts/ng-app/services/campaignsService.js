angular.module("raffle")
  .service("campaignService", ["$log", "$q", "$http", "$timeout",
    function($log, $q, $http, $timeout) {
      return {
        index: function() {
          var deferred = $q.defer();

          $timeout(function() {
            deferred.resolve({
              "data": {
                "data": [
                  {
                    id: 1,
                    organization_id: 34,
                    name: "Pierre's Campaign"
                  },
                  {
                    id: 2,
                    organization_id: 34,
                    name: "Matt's Crowdfunding Campaign"
                  },
                  {
                    id: 3,
                    organization_id: 34,
                    name: "Dan's Campaign"
                  }
                ]
              }
            });
          }, 1000);

          return deferred.promise;
        },
        postRaffle: function(raffle) {
          return $http({
            method: "POST",
            url: "/api/v1/campaigns/" + raffle.campaign_id + "/raffles",
            data: raffle
          })
        },
      };
    }
  ])
