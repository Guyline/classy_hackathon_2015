angular.module("raffle")
  .service("authService", ["$log", "$q", "$timeout",
    function($log, $q, $timeout) {
      return {
        getUserDetails: function(valid) {
          var deferred = $q.defer();

          $timeout(function() {
            if (valid) {
              deferred.resolve({
                username: "ML"
              });
            } else {
              deferred.reject("Not logged in");
            }
          }, 1000);

          return deferred.promise;

        },
        login: function(data) {
          var deferred = $q.defer();

          $timeout(function() {
            deferred.resolve(data);
          }, 1000);

          return deferred.promise;
        }
      }
    }
  ]);
