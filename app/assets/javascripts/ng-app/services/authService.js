angular.module("raffle")
  .service("authService", ["$log", "$q", "$timeout",
    function($log, $q, $timeout) {
      return {
        getUserDetails: function(valid) {
          var deferred = $q.defer();

          if (valid) {
            deferred.resolve({
              username: "mlingner",
              password: "classydev!"
            });
          } else {
            deferred.reject("Not logged in");
          }

          return deferred.promise;

        },
        login: function(data) {
          var deferred = $q.defer();

          deferred.resolve(data);

          return deferred.promise;
        },
        logout: function(data) {
          var deferred = $q.defer();

          deferred.resolve(data);

          return deferred.promise;
        }
      }
    }
  ]);
