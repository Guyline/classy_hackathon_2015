angular.module("raffle")
  .service("campaignService", ["$log", "$q", "$http", "$timeout",
    function($log, $q, $http, $timeout) {
      return {
        index: function() {
          // return $http({
          //   method: "GET",
          //   url: "/api/v1/campaigns"
          // });

          var deferred = $q.defer();

          $timeout(function() {
            deferred.resolve({
              "data": {
                "data": [
                  {
                    id: 1,
                    organization_id: 34,
                    name: "Matt's Crowdfunding Campaign"
                  },
                  {
                    id: 2,
                    organization_id: 34,
                    name: "Matt's Crowdfunding Campaign"
                  },
                  {
                    id: 3,
                    organization_id: 34,
                    name: "Matt's Crowdfunding Campaign"
                  }
                ]
              }
            });
          }, 1000);

          return deferred.promise;
        }
      };
    }
  ])
